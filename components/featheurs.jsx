import { FiCalendar, FiShield, FiHeart } from "react-icons/fi";

const features = [
  {
    icon: <FiCalendar />,
    title: "Easy Booking",
    desc: "Book appointments online instantly.",
  },
  {
    icon: <FiShield />,
    title: "Trusted Doctors",
    desc: "Board-certified specialists available.",
  },
  {
    icon: <FiHeart />,
    title: "Ongoing Care",
    desc: "Continuous support after treatment.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#FDFAF7]  border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
                {feature.icon}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-500 mt-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
