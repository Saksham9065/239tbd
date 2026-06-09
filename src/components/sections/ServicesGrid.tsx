"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface Service {
  number: string;
  title: string;
  description: string;
  slug: string;
}

const services: Service[] = [
  { number: "01", title: "Marketplace Management", description: "End-to-end account management across Amazon, Flipkart, Myntra, Ajio and leading marketplaces.", slug: "marketplace-management" },
  { number: "02", title: "Marketplace Advertising", description: "Performance marketing and sponsored ads focused on increasing sales and maximizing ROAS.", slug: "marketplace-advertising" },
  { number: "03", title: "SEO & Listing Optimization", description: "Optimized product listings, keyword strategies and content enhancements for better visibility.", slug: "seo-optimization" },
  { number: "04", title: "Warehousing & Fulfillment", description: "Inventory management, fulfillment operations and logistics support for growing brands.", slug: "warehousing-fulfillment" },
  { number: "05", title: "E-Commerce Development", description: "Modern Shopify and custom commerce solutions designed for performance and scalability.", slug: "ecommerce-development" },
  { number: "06", title: "Analytics & Growth Strategy", description: "Data-driven reporting, insights and strategic planning to accelerate sustainable growth.", slug: "analytics-strategy" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay noise-overlay" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#F97316] uppercase tracking-[0.2em] text-sm font-bold block mb-4"
          >
            Complete Growth Solutions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-[1.05]"
          >
            Everything <span className="text-[#F97316]">Under One Roof.</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="h-full">
              <motion.div
                variants={itemVariants}
                className="group relative bg-white/5 border border-white/5 hover:border-[#F97316]/30 p-10 rounded-4xl transition-all duration-500 hover:bg-white/10 h-full"
              >
                <div className="text-4xl font-black text-white/5 group-hover:text-[#F97316]/20 transition-colors duration-500">
                  {service.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white leading-tight">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="mt-8 text-[#F97316] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-sm uppercase tracking-widest">
                  Learn More →
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}