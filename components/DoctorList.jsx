"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DoctorsList({ dataX }) {
  const router = useRouter();
  const handleDoctorShow = (id) => {
    router.push(`/doctorList/${id}`);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-10 text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Find Your Specialist Doctor
          </h1>

          <p className="mt-4 text-slate-500 text-lg">
            Book appointments with trusted and verified medical experts
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataX.map((doctor) => (
            <div
              key={doctor._id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold">
                   {doctor.rating}
                </div>

                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  {doctor.specialty}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl text-gray-400 font-bold">{doctor.name}</h2>

                <p className="text-sm text-slate-500 mt-1">
                  {doctor.experience} experience
                </p>

                <p className="text-slate-600 text-sm mt-3 line-clamp-2">
                  {doctor.description}
                </p>

                <button
                  onClick={() => handleDoctorShow(doctor.id)}
                  className="mt-6 cursor-pointer w-full bg-slate-900 text-white py-3 rounded-2xl hover:bg-blue-600 transition"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
