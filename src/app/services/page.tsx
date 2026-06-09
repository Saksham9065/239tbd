"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Marketplace Management", desc: "End-to-end optimization for Amazon, Flipkart, and more." },
  { title: "Performance Marketing", desc: "Data-backed ad strategies that drive ROI." },
  { title: "D2C Scaling", desc: "Building independent brands that stand out." },
  { title: "Operations & Logistics", desc: "Streamlining your supply chain for efficiency." }
];

export default function Services() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-[#050505] relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay noise-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
            Services
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
            Complete e-commerce growth solutions designed to scale your brand across the digital landscape.
          </p>
        </motion.div>

        {/* Core Services Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/3 border border-white/5 p-10 rounded-4xl hover:border-[#F97316]/30 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Process Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-black text-white tracking-tighter mb-16 text-center">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Discovery", text: "We analyze your current brand performance and market position." },
              { step: "02", title: "Strategy", text: "Custom growth roadmap tailored to your specific goals." },
              { step: "03", title: "Execution", text: "Hands-on management and optimization to drive results." }
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <span className="text-[#F97316] font-black text-6xl opacity-30 mb-4">{item.step}</span>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 font-light text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}