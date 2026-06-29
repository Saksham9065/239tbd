"use client";

import { motion, Variants } from "framer-motion";

export default function AnalyticsStrategy() {
  const pillars = [
    { title: "Data Visualization", desc: "Turn complex metrics into actionable insights." },
    { title: "Consumer Behavior", desc: "Understand why your customers buy and what makes them stay." },
    { title: "Growth Forecasting", desc: "Predict future trends to stay ahead of the competition." }
  ];

  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-black">
            Analytics & <br />
            <span className="text-[#0c6a22]">Strategy.</span>
          </h1>
          <p className="text-gray-600 text-xl font-light max-w-2xl leading-relaxed">
            Data is the backbone of e-commerce. We translate raw numbers into strategic 
            roadmaps that drive predictable growth and long-term profitability.
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {pillars.map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(12, 106, 34, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#0c6a22]/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 p-12 rounded-4xl border border-gray-200 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Make data-backed decisions.</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">Stop guessing. Let&apos;s analyze your current metrics and build a growth roadmap.</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/inquiry"
            className="bg-[#0c6a22] text-white font-bold py-4 px-10 rounded-lg hover:bg-[#0a581c] transition-all inline-block"
          >
            Get Started with Analytics
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}