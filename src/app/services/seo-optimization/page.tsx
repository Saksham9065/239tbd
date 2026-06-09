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
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-24">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
            {title.split(" ")[0]} <br />
            <span className="text-[#F97316]">{title.split(" ")[1]}</span>
          </h1>
          <p className="text-gray-400 text-xl font-light max-w-2xl">{subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-[#0F1218] p-10 rounded-[2rem] border border-white/5">
            <h3 className="text-2xl font-bold mb-6 text-[#F97316]">Core Focus Areas</h3>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <span className="mr-3 text-[#F97316]">✦</span> {b}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Ready to rank #1?</h2>
            <p className="text-gray-400 mb-8">We combine technical precision with creative content to build your authority.</p>
            <a href="/inquiry" className="bg-[#F97316] text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-600">
              Request SEO Audit
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}