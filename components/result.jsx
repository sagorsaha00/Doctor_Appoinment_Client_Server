export default function ResultSection() {
  const results = [
    {
      number: "15K+",
      title: "Successful Treatments",
      desc: "Advanced medical care with proven recovery results.",
    },
    {
      number: "98%",
      title: "Patient Satisfaction",
      desc: "Patients trust our doctors and healthcare services.",
    },
    {
      number: "250+",
      title: "Expert Doctors",
      desc: "Highly qualified specialists for every treatment.",
    },
    {
      number: "24/7",
      title: "Emergency Support",
      desc: "Instant medical support anytime you need help.",
    },
  ];

  return (
    <section className=" bg-[#f7f5f2] py-20 px-6">
      <div className="max-w-7xl mx-auto">
      
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Medical Results
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We provide world-class healthcare services with modern treatment
            systems and expert doctors.
          </p>
        </div>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((item, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500"
            >
       
              <div className="text-5xl font-extrabold text-sky-600 mb-4 group-hover:scale-110 transition">
                {item.number}
              </div>

            
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

          
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>

            
              <div className="mt-6 h-1 w-16 bg-sky-500 rounded-full group-hover:w-28 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
