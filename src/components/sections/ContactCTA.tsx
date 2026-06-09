"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="bg-[#050505] py-32 relative overflow-hidden">
      {/* Background Noise Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        {/* Label */}
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#F97316] uppercase tracking-[0.3em] text-sm font-bold"
        >
          Get Started
        </motion.span>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-6 text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter"
        >
          Ready To Scale <br /> Your Brand?
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Let&apos;s build your next growth story together and unlock new opportunities across marketplaces, performance marketing, and D2C channels.
        </motion.p>

        {/* Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Link href="/inquiry">
            <div className="
              group
              relative
              inline-flex 
              items-center 
              justify-center
              bg-white
              text-black
              px-12
              py-5
              text-lg 
              font-bold 
              rounded-full
              overflow-hidden
              transition-all 
              duration-500
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]
            ">
              <div className="absolute inset-0 w-full h-full bg-[#F97316] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
              
              <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
                Start Your Project →
              </span>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}