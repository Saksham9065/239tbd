"use client";

import { motion, Variants } from "framer-motion";

export default function AboutPreview() {
  const points = [
    "We are a new-age E-commerce growth agency that employs data-driven marketplace strategies with advanced technology solutions to deliver explosive brand scalability.",
    "We bring operations, advertising, and innovation together to drive a measurable impact. Our partners don’t just collaborate with us—they grow with us."
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02 },
    },
  };

  const child: Variants = {
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  };

  return (
    <section className="relative z-10 bg-white pt-16 lg:pt-24 pb-32 overflow-hidden flex flex-col gap-20">
      {/* Background Noise Overlay adjusted for white background */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      {/* CLEAN MARQUEE */}
      <div className="w-full py-5 md:py-8 overflow-hidden flex whitespace-nowrap">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...Array(6)].map((_, i) => (
            <span 
              key={i} 
              className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest px-4 text-transparent"
              style={{ WebkitTextStroke: "1px #0c6a22" }}
            >
              WE BUILD AND SCALE THE BEST OF E-COMMERCE BRANDS •
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          <div className="lg:col-span-5">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#0c6a22] uppercase tracking-[0.2em] text-sm font-bold block mb-6">
              About Us
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black leading-[1.05]">
              Real Strategy. <br />
              <span className="text-[#0c6a22]">Real Growth.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 w-full flex flex-col gap-8">
            {points.map((pointText, pointIndex) => (
              <div key={pointIndex} className="flex items-start gap-4">
                <span className="text-[#0c6a22] font-bold mt-1 text-2xl lg:text-3xl shrink-0">→</span>
                
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="text-xl md:text-2xl lg:text-3xl font-light leading-[1.3] tracking-tight w-full text-gray-900"
                >
                  {pointText.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block">
                      <motion.span 
                        variants={child} 
                        whileHover={{ 
                          scale: 1.15, 
                          color: "#0c6a22",
                          transition: { duration: 0.2 }
                        }}
                        className="inline-block cursor-default"
                      >
                        {word}
                      </motion.span>
                      {wordIndex < pointText.split(" ").length - 1 && <span className="inline-block">&nbsp;</span>}
                    </span>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}