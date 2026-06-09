"use client";

import { motion } from "framer-motion";

export default function AmazonCaseStudy() {
  const stats = [
    { label: "MONTHLY REVENUE", value: "₹50L" },
    { label: "CATEGORY RANK", value: "Top 1%" },
    { label: "CONVERSION RATE", value: "+45%" },
    { label: "AD SPEND EFFICIENCY", value: "2.2x" }
  ];

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
            Amazon Marketplace <br />
            <span className="text-[#F97316]">Scaling.</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
            A deep dive into how we optimized product listings, advertising spend, 
            and inventory flow to scale a niche brand into a dominant Amazon category leader.
          </p>
        </motion.div>

        {/* Separator Line */}
        <div className="w-full border-b border-white/10 mb-12"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-[#F97316] text-3xl md:text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs font-bold tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* The Strategy Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">The Strategy</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            We implemented a three-phase approach focusing on algorithmic search optimization, 
            strategic Sponsored Product bidding, and automated inventory replenishment.
          </p>
        </div>
      </div>
    </main>
  );
}