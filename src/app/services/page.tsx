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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
  },
};

export default function Services() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#0c6a22] uppercase tracking-[0.2em] text-xs font-bold block mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#0c6a22] before:rounded-full"
          >
            Our Services
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none">
            Complete Growth Solutions
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-xl md:text-2xl text-gray-600 font-light max-w-2xl"
          >
            Designed to scale your brand across the digital landscape.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="h-full block">
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(12, 106, 34, 0.15)",
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gray-50 border border-gray-200 rounded-4xl p-8 transition-all duration-500 h-full overflow-hidden"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.08 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
                  style={{ background: 'radial-gradient(circle, #0c6a22, transparent)' }}
                />

                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl font-black text-gray-200 group-hover:text-[#0c6a22]/20 transition-colors duration-500"
                >
                  {service.number}
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-black leading-tight group-hover:text-[#0c6a22] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="mt-6 text-[#0c6a22] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-sm uppercase tracking-widest">
                  Learn More →
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Our Process Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24"
        >
          <h2 className="text-4xl font-black text-black tracking-tighter mb-12 text-center">
            How We Work
          </h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { step: "01", title: "Discovery", text: "We analyze your current brand performance and market position." },
              { step: "02", title: "Strategy", text: "Custom growth roadmap tailored to your specific goals." },
              { step: "03", title: "Execution", text: "Hands-on management and optimization to drive results." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="text-[#0c6a22] font-black text-6xl opacity-20 mb-4">{item.step}</span>
                <h4 className="text-xl font-bold text-black mb-4">{item.title}</h4>
                <p className="text-gray-600 font-light text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}