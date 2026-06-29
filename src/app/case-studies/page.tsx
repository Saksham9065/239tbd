"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const projects = [
  { title: "Fashion Brand Growth", result: "+250%", label: "Revenue Growth", description: "Accelerated marketplace performance through catalog optimization and strategic growth execution.", slug: "fashion-brand-growth" },
  { title: "Amazon Marketplace Scaling", result: "₹50L", label: "Monthly Revenue", description: "Enhanced visibility, conversion rates, and operational efficiency to drive sustainable revenue.", slug: "amazon-marketplace-scaling" },
  { title: "D2C Brand Launch", result: "10K+", label: "Total Orders", description: "Successfully launched and scaled a direct-to-consumer brand across multiple digital sales channels.", slug: "d2c-brand-launch" },
  { title: "Marketplace Audit", result: "40%", label: "Cost Reduction", description: "Optimized advertising spend and reduced ACOS by streamlining campaign structures and targeting.", slug: "marketplace-audit" },
  { title: "Brand Awareness", result: "1M+", label: "Impressions", description: "Executed a massive visibility campaign that increased organic search volume and brand recall.", slug: "brand-awareness" },
  { title: "Conversion Uplift", result: "3.5x", label: "Conversion Rate", description: "Redesigned product listing content and A+ pages to maximize consumer engagement and trust.", slug: "conversion-uplift" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
  },
};

export default function CaseStudies() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
      />
      
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0c6a22 1px, transparent 0)', backgroundSize: '50px 50px' }} />
      </div>

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
            Our Work
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none">
            Case Studies
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block h-1 bg-[#0c6a22]/30 mt-2"
            />
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-xl md:text-2xl text-gray-600 font-light max-w-2xl"
          >
            Real results for real businesses. See how we drive e-commerce growth.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <Link href={`/case-studies/${project.slug}`} key={project.slug} className="h-full block">
              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(12, 106, 34, 0.15)" as const
                }}
                transition={{ duration: 0.3 }}
                className="group relative bg-gray-50 border border-gray-200 p-8 rounded-4xl hover:border-[#0c6a22]/30 transition-all duration-500 h-full flex flex-col overflow-hidden"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-20 -right-20 h-full w-40 rounded-full"
                  style={{ background: 'radial-gradient(circle, #0c6a22, transparent)' }}
                />

                <div className="text-[#0c6a22] font-black text-5xl tracking-tighter mb-2">
                  {project.result}
                </div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-6 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#0c6a22] before:rounded-full">
                  {project.label}
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#0c6a22] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed mb-6 grow">
                  {project.description}
                </p>
                
                <div className="text-[#0c6a22] font-bold text-sm uppercase tracking-widest group-hover:underline flex items-center gap-2">
                  View Details →
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}