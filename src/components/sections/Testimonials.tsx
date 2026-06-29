"use client";

import { motion, Variants } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Founder, TechStart",
      source: "Google",
      review: "239 TBD transformed our online presence completely. Sales increased by 250% in just 6 months!",
    },
    {
      name: "Priya Sharma",
      role: "CEO, GrowthCo",
      source: "LinkedIn",
      review: "Outstanding service! Their e-commerce solutions helped us scale from local to national market.",
    },
    {
      name: "Amit Patel",
      role: "Marketing Director",
      source: "StartUp India",
      review: "Professional, reliable, and result-oriented. Highly recommend their digital marketing services.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const
      } 
    }
  };

  return (
    <section className="py-20 bg-white text-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-black"
          >
            Client Success <span className="text-[#0c6a22] relative">
              Stories
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-[#0c6a22]/30"
              />
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Real results for real businesses. See how we drive E-commerce growth.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(12, 106, 34, 0.15)",
              }}
              className="
                group
                relative
                bg-gray-50
                border border-gray-200
                rounded-4xl
                p-8
                hover:bg-white
                hover:border-[#0c6a22]/30
                transition-all
                duration-500
                overflow-hidden
              "
            >
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: "100%", opacity: 0.05 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 h-full bg-linear-to-b from-[#0c6a22] to-transparent rounded-4xl"
              />
              
              <div className="flex justify-between items-center text-[#0c6a22] text-lg mb-6">
                <div className="flex gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{item.source}</span>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="text-gray-700 leading-relaxed text-[17px] italic mb-8 relative z-10"
              >
                &quot;{item.review}&quot;
              </motion.p>

              <div className="border-t border-gray-200 pt-6 mt-auto">
                <h4 className="text-lg font-bold text-black group-hover:text-[#0c6a22] transition-colors duration-300">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-[#0c6a22]/70 transition-colors duration-300">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}