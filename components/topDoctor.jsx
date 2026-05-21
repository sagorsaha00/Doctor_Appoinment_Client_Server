"use client";

import Image from "next/image";
import { FiStar, FiCalendar, FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getData } from "../utils/fetch";

export default function TopDoctors() {
  const [doctors, setDoctors] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function fetchDoctors() {
      try {
        const res = await getData();
        const allDoctors = res.data;

       
        const sorted = [...allDoctors].sort((a, b) => b.rating - a.rating);

       
        setDoctors(sorted.slice(0, 3));
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    }

    fetchDoctors();
  }, []); 

  const handleRoute = (id) => {
    router.push(`/doctorList/${id}`);
  }

  return (
    <section className="py-24 bg-[#FDFAF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
  
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Top Rated Doctors
          </h2>
          <p className="text-slate-500 mt-3">
            Highest rated specialists from our platform
          </p>
        </div>

     
        <div className="grid md:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc._id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                   {doc.rating}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {doc.name}
                </h3>

                <p className="text-sm text-blue-600 font-medium mt-1">
                  {doc.specialty}
                </p>

                <div className="flex items-center justify-between mt-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <FiStar className="text-amber-400 fill-amber-400" />
                    <span>{doc.rating}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FiCalendar />
                    <span>{doc.experience}</span>
                  </div>
                </div>

                <button     className="mt-6 cursor-pointer w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-300">
                  Book Appointment
                  <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
