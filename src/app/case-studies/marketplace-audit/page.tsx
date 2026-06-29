"use client";

import { motion, Variants } from "framer-motion";

export default function MarketplaceAuditCaseStudy() {
  const stats = [
    { label: "COST REDUCTION", value: "40%" },
    { label: "ACOS IMPROVEMENT", value: "Significant" },
    { label: "EFFICIENCY", value: "Streamlined" },
    { label: "STRATEGY", value: "Targeted" }
  ];

  const statVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 + i * 0.1 },
    }),
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-black">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-black">
            Marketplace <br />
            <span className="text-[#0c6a22]">Audit.</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-2xl">
            Optimized advertising spend and reduced ACOS by streamlining 
            campaign structures and targeting for maximum profitability.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-y border-gray-200 py-12"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} custom={i} variants={statVariants} initial="hidden" animate="visible">
              <div className="text-[#0c6a22] text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-500 text-xs font-bold tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-black">The Process</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our comprehensive audit identified key leaks in ad spend. We restructured 
            campaigns to focus on high-intent keywords, significantly lowering ACOS 
            while maintaining reach and conversion velocity.
          </p>
        </motion.div>
      </div>
    </main>
  );
}