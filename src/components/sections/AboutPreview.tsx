"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const split = SplitText.create(rootRef.current.querySelector('p'), {
      type: 'chars',
      charsClass: 'inline-block will-change-transform'
    });

    split.chars.forEach(el => {
      const c = el as HTMLElement;
      gsap.set(c, { attr: { 'data-content': c.innerHTML } });
    });

    const handleMove = (e: PointerEvent) => {
      split.chars.forEach(el => {
        const c = el as HTMLElement;
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || '',
              chars: scrambleChars,
              speed
            },
            ease: 'none'
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);

    return () => {
      el.removeEventListener('pointermove', handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div
      ref={rootRef}
      className={`font-mono ${className}`}
      style={style}
    >
      <p>{children}</p>
    </div>
  );
};

export default function AboutPreview() {
  const points = [
    "We are a new-age E-commerce growth agency that employs data-driven marketplace strategies with advanced technology solutions to deliver explosive brand scalability.",
    "We bring operations, advertising, and innovation together to drive a measurable impact. Our partners don't just collaborate with us—they grow with us."
  ];

  return (
    <section className="relative z-10 bg-white pt-12 lg:pt-20 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0c6a22 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="w-full py-6 md:py-10 overflow-hidden flex whitespace-nowrap border-y border-gray-100">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 60, repeat: Infinity }}
        >
          {[...Array(12)].map((_, i) => (
            <span 
              key={i} 
              className="font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider px-4 text-transparent"
              style={{ WebkitTextStroke: "1px #0c6a22" }}
            >
              WE BUILD AND SCALE THE BEST OF E-COMMERCE BRANDS
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mt-16 lg:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <span className="text-[#0c6a22] uppercase tracking-[0.3em] text-xs font-bold block mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#0c6a22] before:rounded-full">
                About Us
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black leading-[1.05] mb-8">
                Real Strategy. <br />
                <span className="text-[#0c6a22] relative inline-block">
                  Real Growth.
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute bottom-0 left-0 h-1 bg-[#0c6a22]/20"
                  />
                </span>
              </h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-24 h-1 bg-linear-to-r from-[#0c6a22] to-transparent rounded-full"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7 w-full flex flex-col gap-10">
            {points.map((pointText, pointIndex) => (
              <motion.div
                key={pointIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: pointIndex * 0.2 }}
                className="relative pl-8 border-l-2 border-gray-100 hover:border-[#0c6a22]/50 transition-colors duration-500"
              >
                <motion.span 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: pointIndex * 0.2 + 0.3 }}
                  className="absolute -left-3 top-0 w-6 h-6 bg-[#0c6a22] rounded-full flex items-center justify-center text-white font-bold text-sm"
                >
                  →
                </motion.span>
                
<ScrambledText 
                   className="text-xl md:text-2xl lg:text-3xl font-light leading-[1.4] tracking-tight w-full text-gray-900"
                   radius={80}
                   duration={0.8}
                   speed={0.4}
                   scrambleChars=".:"
                 >
                  {pointText}
                </ScrambledText>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}