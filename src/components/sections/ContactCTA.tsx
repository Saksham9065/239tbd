"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-4xl border border-gray-200"
        >
          <p className="text-[#0c6a22] font-bold uppercase tracking-[0.2em] text-xs mb-3">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Ready To Scale<br />
            Your Brand?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s build your next growth story together and unlock new opportunities across marketplaces, performance marketing, and D2C channels.
          </p>
          <a 
            href="/contact" 
            className="bg-[#0c6a22] text-white px-10 py-5 rounded-full font-bold hover:bg-[#0a581c] transition-all duration-300 inline-block"
          >
            Start Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}