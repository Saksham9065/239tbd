"use client";

import { motion } from "framer-motion";

export default function ConversionUpliftCaseStudy() {
  const stats = [
    { label: "CONVERSION RATE", value: "3.5x" },
    { label: "ENGAGEMENT", value: "High" },
    { label: "USER TRUST", value: "Enhanced" },
    { label: "CONTENT ROI", value: "Maximized" }
  ];

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
            Conversion <br />
            <span className="text-[#F97316]">Uplift.</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
            Redesigned product listing content and A+ pages to maximize consumer 
            engagement, build brand trust, and drive higher conversion rates.
          </p>
        </motion.div>

        <div className="w-full border-b border-white/10 mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-[#F97316] text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-500 text-xs font-bold tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">The Process</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            By conducting extensive A/B testing on product imagery and copy, we eliminated 
            friction points in the purchase journey. The updated content effectively 
            communicated value propositions, resulting in a measurable 3.5x lift in 
            conversion performance.
          </p>
        </div>
      </div>
    </main>
  );
}