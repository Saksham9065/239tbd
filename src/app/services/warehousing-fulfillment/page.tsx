"use client";

import { motion, Variants } from "framer-motion";

export default function WarehousingFulfillment() {
  const points = [
    "Global Warehousing Network",
    "Real-time Inventory Tracking",
    "Same-Day Order Processing",
    "Seamless Return Management"
  ];

  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
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
            Warehousing & <br />
            <span className="text-[#0c6a22]">Fulfillment.</span>
          </h1>
          <p className="text-gray-600 text-xl font-light max-w-2xl">
            We handle the heavy lifting. Our logistics infrastructure ensures your products 
            reach customers faster and more efficiently than ever before.
          </p>
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="bg-gray-50 p-10 rounded-4xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-8 text-[#0c6a22]">Logistics Excellence</h3>
            <ul className="space-y-6">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-center text-lg text-black"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0c6a22]/10 flex items-center justify-center mr-4 text-[#0c6a22]">✓</div>
                  {p}
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
            <h2 className="text-3xl font-bold mb-6 text-black">Scale your operations without the overhead.</h2>
            <p className="text-gray-600 mb-8">Reduce shipping times and improve customer satisfaction with our integrated fulfillment services.</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/inquiry"
              className="bg-[#0c6a22] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#0a581c] transition-all inline-block"
            >
              Talk to a Logistics Expert
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}