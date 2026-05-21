"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getData } from "../utils/fetch"; // adjust path

export default function DoctorsSection() {
  const router = useRouter();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getData();
        const data = response.data;
        setDoctors(data.slice(0, 3));
        console.log("doctorData", data);
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }
    }

    fetchData();
  }, []);

  const handleRouter = () => {
    router.push("/allDoctor");
  };

  return (
    <section className="py-24 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center lg:text-left mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-[3px]">
            Our Specialists
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3">
            Meet Our Doctors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor._id} className="group">
              <div className="overflow-hidden rounded-[24px] bg-white">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={500}
                  height={600}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                  {doctor.name}
                </h3>

                <p className="text-slate-500 mt-2 text-lg">
                  {doctor.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-end mt-14">
          <button
            onClick={handleRouter}
            className="inline-flex  cursor-pointer items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-7 py-4 rounded-full font-medium transition-all duration-300 hover:gap-3"
          >
            See More Doctor List
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
