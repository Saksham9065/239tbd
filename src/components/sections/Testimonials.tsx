"use client";

import { motion, Variants } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      review: "239 TBD transformed our online presence completely. Sales increased by 250% in just 6 months!",
    },
    {
      name: "Priya Sharma",
      review: "Outstanding service! Their e-commerce solutions helped us scale from local to national market.",
    },
    {
      name: "Amit Patel",
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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const 
      } 
    }
  };

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-black">
            Client Success <span className="text-[#0c6a22]">Stories</span>
          </h2>
          <p className="text-lg text-gray-600">
            Real results for real businesses. See how we drive e-commerce growth.
          </p>
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
              className="
                group
                relative
                bg-gray-50
                border border-gray-200
                rounded-4xl
                p-8
                hover:bg-white
                hover:border-[#0c6a22]/30
                hover:shadow-xl
                transition-all
                duration-500
              "
            >
              <div className="flex gap-1 text-[#0c6a22] text-lg mb-6">
                ★★★★★
              </div>

              <p className="text-gray-700 leading-relaxed text-[17px] italic mb-8 relative z-10">
                &quot;{item.review}&quot;
              </p>

              <div className="border-t border-gray-200 pt-6 mt-auto">
                <h4 className="text-lg font-bold text-black">
                  {item.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}