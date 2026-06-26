"use client";

import { motion } from "framer-motion";

export default function CaseStudy() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-black">
            Fashion Brand <span className="text-[#0c6a22]">Growth.</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed mb-12">
            How we helped a leading fashion retailer scale their digital presence 
            and achieve a 250% increase in monthly revenue through targeted marketplace strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-y border-gray-200 py-12">
          {[
            { label: "Revenue Increase", value: "+250%" },
            { label: "ROAS", value: "8.5x" },
            { label: "New Customers", value: "50k+" },
            { label: "Market Reach", value: "National" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-[#0c6a22] text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-black text-3xl font-bold mb-6">The Challenge</h2>
          <p className="mb-8">The client was struggling with low brand visibility and high advertising costs that weren&apos;t translating into sales...</p>
          <h2 className="text-black text-3xl font-bold mb-6">Our Approach</h2>
          <p>By restructuring their ad campaigns and optimizing their product catalog, we...</p>
        </div>
      </div>
    </main>
  );
}