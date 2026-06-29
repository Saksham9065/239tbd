"use client";

import { motion, Variants } from "framer-motion";

export default function ServicePage() {
  const title = "SEO Optimization";
  const subtitle = "Dominate search results and drive organic traffic that converts.";
  const benefits = [
    "Keyword Research & Strategy",
    "On-Page Technical Audit",
    "Content Gap Analysis",
    "Performance Monitoring"
  ];

  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
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
            {title.split(" ")[0]} <br />
            <span className="text-[#0c6a22]">{title.split(" ")[1]}</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-600 text-xl font-light max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="bg-gray-50 p-10 rounded-4xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-[#0c6a22]">Core Focus Areas</h3>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  variants={cardVariants}
                  className="flex items-center text-gray-700"
                >
                  <span className="mr-3 text-[#0c6a22]">✦</span> {b}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-black">Ready to rank #1?</h2>
            <p className="text-gray-600 mb-8">We combine technical precision with creative content to build your authority.</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/inquiry"
              className="bg-[#0c6a22] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#0a581c] transition-all inline-block"
            >
              Request SEO Audit
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}