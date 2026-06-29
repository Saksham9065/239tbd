"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Fashion Brand Growth",
    result: "+250%",
    label: "Revenue Growth",
    description: "Accelerated marketplace performance through catalog optimization, sponsored advertising, and strategic growth execution.",
    slug: "fashion-brand-growth"
  },
  {
    title: "Amazon Marketplace Scaling",
    result: "₹50L",
    label: "Monthly Revenue",
    description: "Enhanced visibility, conversion rates, and operational efficiency to drive sustainable revenue growth.",
    slug: "amazon-marketplace-scaling"
  },
  {
    title: "D2C Brand Launch",
    result: "10K+",
    label: "Total Orders",
    description: "Successfully launched and scaled a direct-to-consumer brand across multiple digital sales channels.",
    slug: "d2c-brand-launch"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  },
};

export default function CaseStudies() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />
      
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0c6a22 1px, transparent 0)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-black leading-[1.05]"
          >
            Growth Stories <br /> 
            <span className="text-[#0c6a22] relative inline-block">
              That Matter.
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-[#0c6a22]/30"
              />
            </span>
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <Link href={`/case-studies/${project.slug}`} key={project.title} className="h-full block">
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -12,
                  boxShadow: "0 25px 50px rgba(12, 106, 34, 0.15)" as const,
                }}
                transition={{ duration: 0.4 }}
                className="
                  group
                  flex flex-col
                  h-full
                  bg-gray-50
                  border border-gray-200
                  rounded-4xl
                  p-10
                  transition-all
                  duration-500
                  overflow-hidden
                  relative
                "
              >

                <div className="text-[#0c6a22] font-black text-5xl md:text-6xl tracking-tighter mb-4">
                  {project.result}
                </div>
                <div className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em] mb-6 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#0c6a22] before:rounded-full">
                  {project.label}
                </div>

                <h3 className="text-2xl font-bold text-black leading-tight mb-4 group-hover:text-[#0c6a22] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed mt-auto mb-8">
                  {project.description}
                </p>

                <div className="text-[#0c6a22] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-sm uppercase tracking-widest">
                  View Case Study →
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}