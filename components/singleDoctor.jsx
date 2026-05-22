"use client";

import Image from "next/image";
import {
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiCalendar,
  FiPhone,
  FiAward,
  FiStar,
} from "react-icons/fi";
import Loader from "./loading";

function InfoCard({ icon, label, value }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex gap-3">
      <div className="text-blue-600 mt-1">{icon}</div>
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

export default function SingleDoctor({ doctor }) {
  const handleAppoinment = () => {
    window.location.href = `/appoitment`;
  };

  if (!doctor) {
    return <Loader></Loader>;
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">
         
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-8 lg:p-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={700}
                  height={700}
                  className="w-full h-[520px] object-cover"
                />
              </div>

              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg px-5 py-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <FiAward size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Experience</p>
                  <p className="font-bold text-slate-900">
                    {doctor.experience}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
                <FiStar size={14} />
                {doctor.specialty}
              </span>

              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-5">
                {doctor.name}
              </h1>

              <p className="text-slate-600 mt-5">{doctor.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <InfoCard
                  icon={<FiMapPin />}
                  label="Hospital"
                  value={doctor.hospital}
                />
                <InfoCard
                  icon={<FiPhone />}
                  label="Location"
                  value={doctor.location}
                />
                <InfoCard
                  icon={<FiDollarSign />}
                  label="Fee"
                  value={`৳ ${doctor.fee}`}
                />
                <InfoCard
                  icon={<FiClock />}
                  label="Schedule"
                  value="Available Daily"
                />
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Available Time
                </h3>

                <div className="flex flex-wrap gap-3">
                  {doctor.availability?.map((time, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-sm"
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button
                  onClick={handleAppoinment}
                  className="flex-1 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-2xl font-semibold"
                >
                  <FiCalendar className="inline mr-2" />
                  Book Appointment
                </button>

                <button className="flex-1 cursor-pointer border border-slate-300 text-slate-600 hover:text-blue-600 hover:border-blue-600 text-center py-4 rounded-2xl font-semibold">
                  Contact Hospital
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
