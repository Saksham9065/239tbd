"use client";

import { motion } from "framer-motion";

export default function MarketplaceManagement() {
  const features = [
    { title: "Inventory Sync", desc: "Keep stock levels accurate across all channels." },
    { title: "Order Fulfillment", desc: "Streamlined logistics to reduce shipping times." },
    { title: "Account Health", desc: "Proactive monitoring to prevent suspensions." }
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-black">
            Marketplace <br />
            <span className="text-[#0c6a22]">Management.</span>
          </h1>
          <p className="text-gray-600 text-xl font-light max-w-2xl leading-relaxed">
            From inventory synchronization to account health, we handle the day-to-day 
            operations so you can focus on building your brand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-gray-50 border border-gray-200 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4 text-black">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-100 p-12 rounded-4xl border border-gray-200 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Streamline your operations today.</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">Let our experts manage your store infrastructure for maximum efficiency.</p>
          <a href="/inquiry" className="bg-[#0c6a22] text-white font-bold py-4 px-10 rounded-lg hover:bg-[#0a581c] transition-all">
            Start Your Management Audit
          </a>
        </div>
      </div>
    </main>
  );
}