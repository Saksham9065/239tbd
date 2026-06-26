"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, Variants } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- MOUSE TRACKING FOR AMBIENT GLOW ---
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
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // --- ANIMATION VARIANTS ---
  const maskReveal: Variants = {
    hidden: { y: "120%" },
    visible: { 
      y: "0%", 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1], 
        delay: 0.4 
      } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-white flex flex-col items-center justify-center cursor-default"
    >
      {/* Ambient Green Glow */}
      <motion.div
        style={{
          left: smoothMouseX,
          top: smoothMouseY,
        }}
        className="fixed w-150 h-150 rounded-full bg-[#0c6a22]/10 blur-[120px] pointer-events-none z-0"
      />

      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      {/* BACKGROUND KINETIC TYPOGRAPHY */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">
        <motion.div 
          style={{ x: bgTextX }}
          className="whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[16rem] font-black uppercase tracking-tighter opacity-[0.03]"
        >
          <span style={{ WebkitTextStroke: "2px #0c6a22", color: "transparent" }}>
            MARKETPLACES
          </span>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div 
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="overflow-hidden pb-4">
            <motion.h1 
              variants={maskReveal}
              className="text-[6rem] sm:text-[10rem] md:text-[14rem] font-black text-black tracking-tighter leading-none"
            >
              239
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <motion.h2 
              variants={maskReveal}
              className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#0c6a22] tracking-tight"
            >
              Marketplaces.
            </motion.h2>
          </div>

          <motion.p 
            variants={fadeUp}
            className="mt-6 text-xl md:text-3xl text-gray-600 font-medium max-w-3xl leading-relaxed"
          >
            We blend technology, strategy, and insight to convert fleeting attention into <span className="text-black font-bold">lasting E-commerce growth.</span>
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12">
            <a
              href="/inquiry"
              className="group relative inline-flex items-center justify-center bg-black text-white px-10 py-5 text-lg md:text-xl font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(12,106,34,0.3)]"
            >
              <div className="absolute inset-0 w-full h-full bg-[#0c6a22] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
              
              <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
                Grow with us
                <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}