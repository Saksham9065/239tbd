"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    },
  };

  const sections = [
    {
      title: "Research-Led Decision Making",
      content: "We don't believe in selling services. We believe in solving business problems through research, analysis, and strategic planning."
    },
    {
      title: "10+ Years of Market Understanding",
      content: "Having observed multiple shifts in consumer behavior, e-commerce growth, digital advertising trends, and retail dynamics over the last decade, we help businesses adapt quickly and make informed decisions."
    },
    {
      title: "Product Research & Sourcing Support",
      content: "We help businesses identify the right products to sell through detailed market research, demand analysis, competitor evaluation, and profitability assessment."
    },
    {
      title: "Complete Growth Ecosystem",
      content: "Businesses can access all essential growth services through a single partner, eliminating the need to coordinate with multiple agencies and vendors."
    },
    {
      title: "Long-Term Partnership Approach",
      content: "We focus on sustainable business growth rather than short-term campaigns. Our objective is to build scalable systems that continue generating results over time."
    },
    {
      title: "Data-Driven Execution",
      content: "Every strategy we build is measured, tracked, and optimized for maximum ROI and long-term business impact."
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden text-gray-700">
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />
      
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0c6a22 1px, transparent 0)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#0c6a22] uppercase tracking-[0.2em] text-xs font-bold block mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#0c6a22] before:rounded-full"
          >
            About 239
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none">
            Building Growth For <br />
            <span className="text-[#0c6a22] relative inline-block">
              Modern Brands
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-[#0c6a22]/30"
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-xl md:text-2xl text-gray-600 max-w-3xl font-light leading-relaxed"
          >
            239 The Business Developers helps brands launch, scale, and dominate marketplaces through a fusion of strategy, technology, and operational excellence.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-4"
        >
          {sections.map((section) => (
            <motion.div
              key={section.title}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(12, 106, 34, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="group relative bg-gray-50 border border-gray-200 p-6 rounded-4xl hover:border-[#0c6a22]/30 transition-all duration-500 overflow-hidden"
            >
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: "100%", opacity: 0.05 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-20 -right-20 h-full w-40 rounded-full"
                style={{ background: 'radial-gradient(circle, #0c6a22, transparent)' }}
              />
              <h3 className="text-2xl font-bold text-black mb-6 group-hover:text-[#0c6a22] transition-colors duration-300">
                {section.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}