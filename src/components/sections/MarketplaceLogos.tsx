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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0c6a22 1px, transparent 0)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-black leading-[1.05]"
          >
            Trusted <span className="text-[#0c6a22] relative">
              Marketplace
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-[#0c6a22]/30"
              />
            </span> <br />
            Partners.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-xl text-gray-600 font-light leading-relaxed max-w-2xl border-l-2 border-[#0c6a22] pl-6"
          >
            Helping brands dominate leading marketplaces and build sustainable 
            E-commerce growth across every digital channel.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {platforms.map((platform) => (
            <motion.a 
              key={platform.name}
              href={platform.url}
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="block"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.08, 
                  backgroundColor: "rgba(12, 106, 34, 0.02)",
                  boxShadow: "0 10px 30px rgba(12, 106, 34, 0.15)",
                }}
                 whileTap={{ scale: 0.95 }}
                 className="
                   flex items-center justify-center 
                   border border-gray-200 
                   rounded-3xl p-6 h-32
                   transition-all duration-500 
                   hover:border-[#0c6a22]/50
                   cursor-pointer
                   relative
                   overflow-hidden
                 "
                 style={{ backgroundColor: "#f9fafb" }}
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(12, 106, 34, 0.1) 0%, transparent 70%)' }} />
                </div>
                
                <motion.div
                  initial={{ opacity: 0.7, filter: "grayscale(1)" }}
                  whileInView={{ opacity: 0.7, filter: "grayscale(1)" }}
                  whileHover={{ opacity: 1, filter: "grayscale(0)" }}
                  transition={{ duration: 0.5 }}
                  className="z-10"
                >
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={160}
                    height={80}
                    className="max-h-12 w-auto object-contain" 
                  />
                </motion.div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}