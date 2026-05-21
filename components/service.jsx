"use client";

import {
  FiActivity,
  FiHeart,
  FiShield,
  FiUser,
  FiEye,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    title: "General Medicine",
    desc: "Complete diagnosis and treatment for common diseases.",
    icon: FiActivity,
  },
  {
    title: "Cardiology",
    desc: "Advanced heart care and monitoring with expert doctors.",
    icon: FiHeart,
  },
  {
    title: "Emergency Care",
    desc: "24/7 emergency medical support for critical situations.",
    icon: FiShield,
  },
  {
    title: "Pediatrics",
    desc: "Special healthcare for infants, children and teens.",
    icon: FiUser,
  },
  {
    title: "Eye Care",
    desc: "Vision testing and ophthalmology treatment services.",
    icon: FiEye,
  },
];

export default function Services() {
  return (
    <section className=" bg-[#FDFAF7] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

       
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900">
            Enjoy Specialized Medical Services
          </h2>
        </div>

       
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">

          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  px-6
                  py-6
                  border-b
                  border-slate-200
                  last:border-b-0
                  hover:bg-slate-50
                  transition-all
                  duration-300
                "
              >
            
                <div className="flex items-center gap-5">

                 
                  <div className="
                    w-10 h-10 rounded-full
                    bg-slate-100 text-slate-600
                    flex items-center justify-center
                    group-hover:bg-blue-600
                    group-hover:text-white
                    transition-all duration-300
                  ">
                    <Icon size={18} />
                  </div>

           
                  <div>
                    <h3 className="
                      text-base font-semibold text-slate-900
                      group-hover:text-blue-600
                      transition-all duration-300
                    ">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1 max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>

              
                <div className="
                  w-9 h-9 rounded-full
                  flex items-center justify-center
                  bg-slate-100 text-slate-500
                  group-hover:bg-blue-600
                  group-hover:text-white
                  group-hover:rotate-45
                  transition-all duration-300
                ">
                  <FiArrowUpRight />
                </div>
              </div>
            );
          })}
        </div>

     
        <div className="text-center mt-10">
          {/* <button className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-7 py-3
            rounded-full
            text-sm font-semibold
            transition-all duration-300
            hover:-translate-y-1
          ">
            View All Services
          </button> */}
        </div>
      </div>
    </section>
  );
}