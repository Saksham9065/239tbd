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

export default function CaseStudies() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* Background Noise Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-black leading-[1.05]"
          >
            Growth Stories <br /> 
            <span className="text-[#0c6a22]">That Matter.</span>
          </motion.h2>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={`/case-studies/${project.slug}`} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="
                  group
                  flex flex-col
                  h-full
                  bg-gray-50
                  border border-gray-200
                  hover:border-[#0c6a22]/30
                  p-10
                  rounded-4xl
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:shadow-xl
                "
              >
                {/* Business Impact Number */}
                <div className="text-[#0c6a22] font-black text-5xl md:text-6xl tracking-tighter">
                  {project.result}
                </div>
                <div className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em] mt-1 mb-6">
                  {project.label}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-black leading-tight mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed mt-auto mb-8">
                  {project.description}
                </p>

                {/* Decorative Arrow */}
                <div className="text-[#0c6a22] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-sm uppercase tracking-widest">
                  View Case Study →
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}