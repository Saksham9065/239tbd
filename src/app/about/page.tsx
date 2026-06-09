"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-[#050505] relative overflow-hidden">
      {/* Background Noise Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mt-6 text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
            Building Growth For <br /> 
            <span className="text-[#F97316]">Modern Brands.</span>
          </h1>

          <p className="mt-12 text-xl md:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed">
            239 The Business Developers helps brands launch, scale, and dominate marketplaces through a fusion of strategy, technology, and operational excellence.
          </p>
        </motion.div>

        {/* Filled Content Cards */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Our Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/3 border border-white/5 p-10 rounded-4xl hover:border-[#F97316]/30 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              We strive to bridge the gap between ambitious e-commerce brands and the complex digital ecosystems of today. Our goal is to simplify operations so our partners can focus on what they do best: creating great products.
            </p>
          </motion.div>

          {/* Card 2: Our Approach */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/3 border border-white/5 p-10 rounded-4xl hover:border-[#F97316]/30 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Approach</h3>
            <p className="text-gray-400 leading-relaxed">
              Data-driven and partner-first. We analyze performance trends, optimize every touchpoint in the customer journey, and execute growth strategies that are both measurable and sustainable for the long term.
            </p>
          </motion.div>

        </div>
      </div>
    </main>
  );
}