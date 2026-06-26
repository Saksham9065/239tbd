"use client";

import { motion } from "framer-motion";

export default function MarketplaceAdvertising() {
  const strategies = [
    { title: "Sponsored Products", desc: "Target high-intent shoppers to boost visibility." },
    { title: "Brand Awareness", desc: "Build authority with display and video ads." },
    { title: "Profit Optimization", desc: "Lower your ACOS and maximize ROAS." }
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {strategies.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#0c6a22]/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-black">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            <p className="text-gray-700 mb-8">Let’s audit your current marketplace advertising performance.</p>
            <a href="/inquiry" className="inline-block bg-[#0c6a22] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#0a581c] transition-all">
              Request a Performance Audit
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}