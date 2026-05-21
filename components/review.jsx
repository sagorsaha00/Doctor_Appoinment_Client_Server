"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FiStar } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Dental Patient",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    review:
      "The doctors were incredibly professional and caring. I received excellent treatment and support throughout my visit.",
  },
  {
    name: "Michael Brown",
    role: "Heart Specialist Patient",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    review:
      "Amazing healthcare experience with modern facilities and friendly staff. Highly recommended for families.",
  },
  {
    name: "Emily Davis",
    role: "Neurology Patient",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    review:
      "Very satisfied with the consultation process. Everything felt smooth, professional, and comfortable.",
  },
  {
    name: "Daniel Wilson",
    role: "Orthopedic Patient",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    review:
      "Excellent doctors with outstanding patient care. The entire staff was supportive and attentive during my recovery.",
  },
  {
    name: "Sophia Martinez",
    role: "Skin Care Patient",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    review:
      "Clean environment, experienced doctors, and quick appointments. I truly appreciated the professionalism here.",
  },
  {
    name: "James Anderson",
    role: "General Checkup",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    review:
      "Booking appointments was very easy and the consultation process was smooth from start to finish.",
  },
  {
    name: "Olivia Taylor",
    role: "Cardiology Patient",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop",
    review:
      "Highly professional healthcare service with compassionate doctors and excellent medical support.",
  },
  {
    name: "William Harris",
    role: "Dental Surgery Patient",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    review:
      "The treatment was painless and comfortable. I felt safe and cared for throughout the entire procedure.",
  },
  {
    name: "Emma White",
    role: "Pediatric Patient",
    image:
      "https://images.unsplash.com/photo-1542204625-de293a2f8ff0?q=80&w=400&auto=format&fit=crop",
    review:
      "Wonderful experience for my family. The doctors explained everything clearly and treated us with kindness.",
  },
];

export default function ClientReviews() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
      
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-600 uppercase tracking-[3px] text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4">
            What Our Patients Say
          </h2>

          <p className="text-slate-500 mt-5 text-lg">
            Trusted by thousands of patients for quality healthcare and
            exceptional medical support.
          </p>
        </div>

         
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="bg-[#f8fafc] border border-slate-100 rounded-[28px] p-8 h-full hover:shadow-2xl transition-all duration-500">
               
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-amber-400 fill-amber-400"
                      size={18}
                    />
                  ))}
                </div>

            
                <p className="text-slate-600 leading-relaxed text-lg">
                  {item.review}
                </p>

           
                <div className="flex items-center gap-4 mt-8">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {item.name}
                    </h3>

                    <p className="text-slate-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
