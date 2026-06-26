"use client";

import { motion } from "framer-motion";

export default function MarketplaceAuditCaseStudy() {
  const stats = [
    { label: "COST REDUCTION", value: "40%" },
    { label: "ACOS IMPROVEMENT", value: "Significant" },
    { label: "EFFICIENCY", value: "Streamlined" },
    { label: "STRATEGY", value: "Targeted" }
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-black">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-black">
            Marketplace <br />
            <span className="text-[#0c6a22]">Audit.</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-2xl">
            Optimized advertising spend and reduced ACOS by streamlining 
            campaign structures and targeting for maximum profitability.
          </p>
        </motion.div>

        <div className="w-full border-b border-gray-200 mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-[#0c6a22] text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-500 text-xs font-bold tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-black">The Process</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our comprehensive audit identified key leaks in ad spend. We restructured 
            campaigns to focus on high-intent keywords, significantly lowering ACOS 
            while maintaining reach and conversion velocity.
          </p>
        </div>
      </div>
    </main>
  );
}