"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MarketplaceLogos() {
  const platforms = [
    { name: "Amazon", logo: "/marketplaces/amazon.webp", url: "https://sellercentral.amazon.in/" },
    { name: "Flipkart", logo: "/marketplaces/flipkart.png", url: "https://seller.flipkart.com/" },
    { name: "Myntra", logo: "/marketplaces/myntra.png", url: "https://partners.myntrainfo.com/" },
    { name: "Ajio", logo: "/marketplaces/ajio.png", url: "https://seller.ajio.com/" },
    { name: "JioMart", logo: "/marketplaces/jiomart.png", url: "https://seller.jiomart.com/" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-left mb-20">
          <motion.h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black leading-[1.05]">
            Trusted <span className="text-[#0c6a22]">Marketplace</span> <br />
            Partners.
          </motion.h2>
          
          <motion.p className="mt-8 text-xl text-gray-600 font-light leading-relaxed max-w-2xl border-l-2 border-[#0c6a22] pl-6">
            Helping brands dominate leading marketplaces and build sustainable 
            E-commerce growth across every digital channel.
          </motion.p>
        </div>

        {/* Logos Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {platforms.map((platform) => (
            <a 
              key={platform.name}
              href={platform.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.03)" }}
                className="
                  flex items-center justify-center 
                  bg-gray-50 border border-gray-200 
                  rounded-2xl p-6 h-32
                  transition-all duration-500 
                  hover:border-[#0c6a22]/30
                  opacity-70 hover:opacity-100
                  cursor-pointer
                "
              >
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  width={160}
                  height={80}
                  className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}