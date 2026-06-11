"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-[#050505] relative overflow-hidden text-gray-200">
      {/* Background Noise Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
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

        {/* Content Grid */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          {/* Card 1: Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-[#F97316]/30 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
            <p className="leading-relaxed">
              Founded with a clear vision to empower businesses, 239 TBD has evolved from a small team of entrepreneurs into a full-service digital powerhouse. With over 9+ years of combined experience, we have helped over 500 businesses transform their digital operations and establish brands that resonate globally.
            </p>
          </motion.div>

          {/* Card 2: Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-[#F97316]/30 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
            <p className="leading-relaxed">
              To be the leading digital transformation partner for businesses worldwide. We aim to be recognized for delivering innovative solutions that create lasting value, driving measurable growth, and setting new standards for digital excellence.
            </p>
          </motion.div>

          {/* Card 3: Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-[#F97316]/30 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
            <p className="leading-relaxed">
              To empower businesses with cutting-edge digital solutions, strategic insights, and exceptional service. We bridge the gap between ambitious brands and complex digital ecosystems, simplifying operations so you can focus on building your legacy.
            </p>
          </motion.div>

          {/* Card 4: Our Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-[#F97316]/30 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Approach</h3>
            <p className="leading-relaxed">
              Data-driven and partner-first. We analyze performance trends, optimize every touchpoint in the customer journey, and execute growth strategies that are both measurable and sustainable. We don&apos;t just provide services; we build long-term partnerships.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}