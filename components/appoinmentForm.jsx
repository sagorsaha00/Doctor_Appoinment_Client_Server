"use client";

import { useEffect, useState } from "react";

export default function AppointmentForm({ token }) {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const [form, setForm] = useState({
    userEmail: "",
    patientName: "",
    gender: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
  });

 
  useEffect(() => {
    async function loadDoctors() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/allDoctorList`,
        );

        const data = await res.json();

        setDoctors(data?.data || []);
      } catch (error) {
        console.log(error);
      }
    }

    loadDoctors();
  }, []);

  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userEmail: form.userEmail,
      doctorName: selectedDoctor,
      patientName: form.patientName,
      gender: form.gender,
      phone: form.phone,
      appointmentDate: form.appointmentDate,
      appointmentTime: form.appointmentTime,
    };

    console.log("payload", payload);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/CreateAppoinmentUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && {
              Authorization: `Bearer ${token}`,
            }),
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      console.log(data);

      alert("Appointment booked successfully!");

      // reset
      setForm({
        userEmail: "",
        patientName: "",
        gender: "",
        phone: "",
        appointmentDate: "",
        appointmentTime: "",
      });

      setSelectedDoctor("");
    } catch (error) {
      console.log(error);

      alert("Something went wrong!");
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10 text-gray-500">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
        
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full border p-3 rounded-lg bg-slate-50 text-gray-500"
            required
          >
            <option value="">Select Doctor</option>

            {doctors.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name} ({doc.specialty})
              </option>
            ))}
          </select>

         
          <input
            type="email"
            name="userEmail"
            placeholder="Your Email"
            value={form.userEmail}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg text-gray-500 placeholder:text-gray-400"
            required
          />

          
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={form.patientName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg text-gray-500 placeholder:text-gray-400"
            required
          />

         
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg text-gray-500"
            required
          >
            <option value="">Select Gender</option>

            <option value="Male">Male</option>

            <option value="Female">Female</option>
          </select>

          
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg text-gray-500 placeholder:text-gray-400"
            required
          />

          
          <input
            type="date"
            name="appointmentDate"
            value={form.appointmentDate}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg text-gray-500"
            required
          />

          
          <input
            type="time"
            name="appointmentTime"
            value={form.appointmentTime}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg text-gray-500"
            required
          />

         
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
