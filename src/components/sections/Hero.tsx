"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Antigravity from "../Antigravity";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- MOUSE TRACKING ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // --- SCROLL ANIMATIONS ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden bg-white flex flex-col items-center justify-center cursor-default"
    >
      {/* Antigravity Particles */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Antigravity 
          count={300}
          color="#0c6a22"
          autoAnimate={false}
          rotationSpeed={0.02}
        />
      </div>

      {/* Ambient Glow */}
      <motion.div
        style={{ left: smoothMouseX, top: smoothMouseY }}
        className="fixed w-150 h-150 rounded-full bg-[#0c6a22]/10 blur-[120px] pointer-events-none z-0"
      />

      {/* CONTENT */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }} 
        className="relative z-10 text-center px-6"
      >
        <motion.h1 className="text-[5rem] sm:text-[8rem] md:text-[14rem] font-black tracking-tighter leading-none" style={{ WebkitTextStroke: "2px #0c6a22", color: "transparent" }}>239</motion.h1>
        <motion.h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black mb-4">Marketplaces</motion.h2>
        <motion.p className="mt-6 text-lg sm:text-xl md:text-3xl text-gray-600 max-w-3xl mx-auto mb-12">
          We blend technology, strategy, and insight to convert fleeting attention into lasting E-commerce growth.
        </motion.p>
        <div className="flex justify-center w-full">
          <Link href="/inquiry">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-base sm:text-lg md:px-10 md:py-4 md:text-xl font-bold text-white bg-black border-2 border-black rounded-full hover:bg-[#0c6a22] hover:border-[#0c6a22] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            >
              Grow with us
              <span className="text-2xl">→</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}