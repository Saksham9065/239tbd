"use client";

import { motion } from "framer-motion";

export default function ServicePage() {
  // Simply change these details for any new service page
  const title = "SEO Optimization";
  const subtitle = "Dominate search results and drive organic traffic that converts.";
  const benefits = [
    "Keyword Research & Strategy",
    "On-Page Technical Audit",
    "Content Gap Analysis",
    "Performance Monitoring"
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-24">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-black">
            {title.split(" ")[0]} <br />
            <span className="text-[#0c6a22]">{title.split(" ")[1]}</span>
          </h1>
          <p className="text-gray-600 text-xl font-light max-w-2xl">{subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-50 p-10 rounded-4xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-[#0c6a22]">Core Focus Areas</h3>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="mr-3 text-[#0c6a22]">✦</span> {b}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-black">Ready to rank #1?</h2>
            <p className="text-gray-600 mb-8">We combine technical precision with creative content to build your authority.</p>
            <a href="/inquiry" className="bg-[#0c6a22] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#0a581c] transition-all">
              Request SEO Audit
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}