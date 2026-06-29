"use client";

import { motion, Variants } from "framer-motion";

export default function MarketplaceAdvertising() {
  const strategies = [
    { title: "Sponsored Products", desc: "Target high-intent shoppers to boost visibility." },
    { title: "Brand Awareness", desc: "Build authority with display and video ads." },
    { title: "Profit Optimization", desc: "Lower your ACOS and maximize ROAS." }
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
        
        {/* Hero Section */}
        <motion.div 
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-black">
            Marketplace <br />
            <span className="text-[#0c6a22]">Advertising.</span>
          </h1>
          <p className="text-gray-600 text-xl font-light max-w-2xl leading-relaxed">
            Stop guessing with your ad spend. We leverage data-driven insights to 
            dominate search rankings and turn your budget into sustainable revenue.
          </p>
        </motion.div>

        {/* Strategy Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {strategies.map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(12, 106, 34, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#0c6a22]/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-black">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Deep Dive Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black">Why Partner With Us?</h2>
            <ul className="space-y-4 text-gray-600">
              <li>• Precision keyword targeting to reduce waste.</li>
              <li>• Real-time ACOS monitoring and adjustment.</li>
              <li>• Competitive analysis against category leaders.</li>
              <li>• Conversion-focused landing page optimization.</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-10 rounded-4xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-[#0c6a22]">Ready to scale?</h3>
            <p className="text-gray-700 mb-8">Let&apos;s audit your current marketplace advertising performance.</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/inquiry"
              className="inline-block bg-[#0c6a22] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#0a581c] transition-all"
            >
              Request a Performance Audit
            </motion.a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}