import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiStar, FiArrowRight } from "react-icons/fi";

const stats = [
  { value: "98%", label: "Patient Satisfaction" },
  { value: "120+", label: "Specialists" },
  { value: "15k+", label: "Patients Served" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f2]">
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
         
          <div className="text-center lg:text-left">
        
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Trusted Healthcare Platform
            </div>

           
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
              Healthcare
              <span className="block text-blue-600">made simple</span>
            </h1>

            
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Book appointments, connect with expert doctors, and receive modern
              healthcare support anytime from anywhere.
            </p>

           
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Link
                href="allDoctor"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-200"
              >
                Make Appointment
                <FiArrowRight />
              </Link>

             
            </div>
 

           
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                <FiPhone size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-400 uppercase tracking-wider">
                  Emergency Support
                </p>

                <h4 className="text-2xl font-bold text-slate-900">
                  +880 1888 999 222
                </h4>
              </div>
            </div>
          </div>

          
          <div className="relative">
            
            <div className="relative bg-white p-4 rounded-[32px] shadow-2xl">
              <Image
                src="/w.webp"
                alt="doctor"
                width={700}
                height={700}
                className="w-full h-[350px] sm:h-[550px] object-cover rounded-[26px]"
              />
            </div>

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl px-5 py-4 border border-white">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Specialists
              </p>

              <h3 className="text-3xl font-bold text-slate-900 mt-1">120+</h3>

              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
            </div>

           
            <div className="absolute -top-6 -right-4 bg-blue-600 text-white rounded-2xl px-6 py-5 shadow-2xl hidden sm:block">
              <h3 className="text-3xl font-bold">15+</h3>

              <p className="text-sm text-blue-100 mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
