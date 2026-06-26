"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  { title: "Fashion Brand Growth", result: "+250%", label: "Revenue Growth", description: "Accelerated marketplace performance through catalog optimization and strategic growth execution.", slug: "fashion-brand-growth" },
  { title: "Amazon Marketplace Scaling", result: "₹50L", label: "Monthly Revenue", description: "Enhanced visibility, conversion rates, and operational efficiency to drive sustainable revenue.", slug: "amazon-marketplace-scaling" },
  { title: "D2C Brand Launch", result: "10K+", label: "Total Orders", description: "Successfully launched and scaled a direct-to-consumer brand across multiple digital sales channels.", slug: "d2c-brand-launch" },
  { title: "Marketplace Audit", result: "40%", label: "Cost Reduction", description: "Optimized advertising spend and reduced ACOS by streamlining campaign structures and targeting.", slug: "marketplace-audit" },
  { title: "Brand Awareness", result: "1M+", label: "Impressions", description: "Executed a massive visibility campaign that increased organic search volume and brand recall.", slug: "brand-awareness" },
  { title: "Conversion Uplift", result: "3.5x", label: "Conversion Rate", description: "Redesigned product listing content and A+ pages to maximize consumer engagement and trust.", slug: "conversion-uplift" }
];

export default function CaseStudies() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-white relative overflow-hidden">
      {/* Background Noise Overlay adjusted for white background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter">
            Case Studies
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 font-light max-w-2xl">
            Real results for real businesses. See how we drive e-commerce growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={`/case-studies/${project.slug}`} key={project.slug}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 border border-gray-200 p-10 rounded-4xl hover:border-[#0c6a22]/30 transition-all duration-500 hover:bg-gray-100 h-full flex flex-col"
              >
                <div className="text-[#0c6a22] font-black text-5xl tracking-tighter mb-2">
                  {project.result}
                </div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  {project.label}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{project.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8 grow">
                  {project.description}
                </p>
                <div className="text-[#0c6a22] font-bold text-sm uppercase tracking-widest group-hover:underline">
                  View Details →
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}