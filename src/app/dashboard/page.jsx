"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { authClient, useSession } from "../../../utils/auth-client";
import ProfileSection from "../../../components/update-profile";
import { Loader } from "../../../components/loading";

export default function DashboardProfile() {
  const { data: session } = useSession();
  const useremail = session?.user?.email;

  const [tab, setTab] = useState("appointments");
  const [appointments, setAppointments] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  console.log("seelct", selectedAppointment);
  const id = selectedAppointment?._id;
  const [formData, setFormData] = useState({
    patientName: "",
    appointmentDate: "",
    appointmentTime: "",
    gender: "",
  });

  useEffect(() => {
    if (!session?.user) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/getPatientAppoinment?email=${useremail}`,
        );

        const data = await response.json();
        console.log("data", data);
        setAppointments(data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [session, useremail]);

  if (!session?.user) {
    return <Loader />;
  }

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  const openModal = (item) => {
    setSelectedAppointment(item);
    setFormData({
      patientName: item.patientName,
      appointmentDate: item.appointmentDate,
      appointmentTime: item.appointmentTime,
      gender: item.gender,
    });
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:3001/updateAppointment/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          doctorName: selectedAppointment.doctorName,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setAppointments((prev) =>
          prev.map((a) =>
            a._id === selectedAppointment._id ? { ...a, ...formData } : a,
          ),
        );
        setIsModalOpen(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (item) => {
    try {
      const itemId = item._id;
      const res = await fetch(`http://localhost:3001/deleteAppointment/${itemId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setAppointments((prev) => prev.filter((a) => a._id !== item._id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold text-slate-800 mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-white border rounded-2xl p-6 h-fit">
            <div className="flex flex-col items-center text-center">
              <Image
                src={session.user.image || "/default-user.png"}
                alt="user"
                width={90}
                height={90}
                className="rounded-full border"
              />

              <h2 className="mt-3 font-medium text-slate-800">
                {session.user.name}
              </h2>

              <p className="text-sm text-slate-500">{session.user.email}</p>
            </div>

            <div className="mt-6 space-y-2">
              <button
                onClick={() => setTab("appointments")}
                className={`w-full text-sm py-2 rounded-lg border ${
                  tab === "appointments"
                    ? "bg-slate-900 text-white"
                    : "text-slate-700"
                }`}
              >
                My Appointments
              </button>

              <button
                onClick={() => setTab("profile")}
                className={`w-full text-sm py-2 rounded-lg border ${
                  tab === "profile"
                    ? "bg-slate-900 text-white"
                    : "text-slate-700"
                }`}
              >
                Profile
              </button>
            </div>

            <button
              onClick={handleLogout}
              className="w-full mt-4 text-sm py-2 border rounded-lg text-gray-500 hover:bg-red-50"
            >
              Log Out
            </button>
          </div>

          <div className="lg:col-span-3">
            {tab === "profile" && <ProfileSection />}

            {tab === "appointments" && (
              <div>
                <h2 className="text-lg font-medium text-slate-800 mb-4">
                  My Appointments
                </h2>

                {appointments.length === 0 ? (
                  <p className="text-gray-500">No appointments found</p>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {appointments.map((item) => (
                      <div
                        key={item._id}
                        className="border rounded-2xl p-5 hover:shadow-sm transition"
                      >
                        <h3 className="font-medium text-slate-800">
                          {item.patientName}
                        </h3>

                        <p className="text-sm text-slate-500">
                          Doctor: {item.doctorName || "Not assigned"}
                        </p>

                        <div className="mt-3 text-sm space-y-1 text-slate-600">
                          <p>{item.appointmentDate}</p>
                          <p>{item.appointmentTime}</p>
                        </div>

                        <span className="inline-block mt-3 text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
                          {item.gender}
                        </span>

                        <div className="flex justify-between mt-4">
                          <button
                            onClick={() => openModal(item)}
                            className="bg-blue-300 hover:bg-blue-400 text-white py-2 px-4 rounded-lg"
                          >
                            Update
                          </button>

                          <button
                            onClick={() => handleDelete(item)}
                            className="bg-red-300 hover:bg-red-400 text-white py-2 px-4 rounded-lg"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && selectedAppointment && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h2 className="text-lg text-black font-semibold mb-4">
              Update Appointment
            </h2>

            <input
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full border text-gray-500 p-2 rounded mb-2"
              placeholder="Patient Name"
            />

            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="w-full border text-gray-500 p-2 rounded mb-2"
            />

            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              className="w-full border text-gray-500 p-2 rounded mb-2"
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border text-gray-500 p-2 rounded mb-2"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <input
              value={selectedAppointment.doctorName || "Not assigned"}
              disabled
              className="w-full border  text-gray-500 p-2 rounded mb-4 bg-gray-100"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 cursor-pointer text-red-400 bg-gray-200 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
