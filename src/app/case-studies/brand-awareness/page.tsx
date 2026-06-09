"use client";

import { motion } from "framer-motion";

export default function BrandAwarenessCaseStudy() {
  const stats = [
    { label: "IMPRESSIONS", value: "1M+" },
    { label: "ORGANIC REACH", value: "+85%" },
    { label: "BRAND RECALL", value: "High" },
    { label: "SOCIAL ENGAGEMENT", value: "3x" }
  ];

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
            Brand <br />
            <span className="text-[#F97316]">Awareness.</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
            Executed a massive visibility campaign that increased organic search volume, 
            social sentiment, and long-term brand recall across competitive markets.
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
          <h2 className="text-2xl font-bold">The Methodology</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            We combined high-frequency content distribution with targeted influencer 
            partnerships and SEO-driven PR. This multi-channel approach ensured that 
            wherever our target audience looked, they encountered our client’s brand.
          </p>
        </div>
      </div>
    </main>
  );
}