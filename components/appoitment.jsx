"use client";
import { useState } from "react";
import { getToken } from "../utils/getToken";
import { headers } from "next/headers";

export default function AppointmentForm({ doctor }) {
  const [form, setForm] = useState({
    userEmail: "",
    patientName: "",
    gender: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
  });
   const token = getToken(headers());
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userEmail: form.userEmail,
      doctorName: doctor?.name,
      patientName: form.patientName,
      gender: form.gender,
      phone: form.phone,
      appointmentDate: form.appointmentDate,
      appointmentTime: form.appointmentTime,
    };
    console.log("payload", payload);
    try {
      const headerStore = await headers();
      const tokenSession = await getToken(headerStore);
      const token = tokenSession?.token || tokenSession;

      console.log("Token in AppointmentForm:", token);

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/CreateAppoinmentUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         Authorization: `Bearer ${token}` ,
        },
        body: JSON.stringify(payload),
      });

      alert("Appointment booked successfully!");

      setForm({
        userEmail: "",
        patientName: "",
        gender: "",
        phone: "",
        appointmentDate: "",
        appointmentTime: "",
      });
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-amber-300">
      <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Book Appointment
          </h2>
          <p className="text-slate-500 mt-1">
            with{" "}
            <span className="text-blue-600 font-medium">{doctor?.name}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              name="userEmail"
              placeholder="Your email"
              value={form.userEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="patientName"
              placeholder="Patient name"
              value={form.patientName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              name="appointmentDate"
              value={form.appointmentDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="time"
              name="appointmentTime"
              value={form.appointmentTime}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
