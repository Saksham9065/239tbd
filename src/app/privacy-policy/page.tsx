"use client";

import { motion, Variants } from "framer-motion";

export default function PrivacyPolicy() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15 },
    }),
  };

  return (
    <main className="min-h-screen pt-40 pb-24 bg-white relative overflow-hidden">
      {/* Background Noise Overlay adjusted for white background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-black tracking-tighter">
            Privacy Policy
          </h1>
          
          <div className="text-gray-600 space-y-8 font-light leading-relaxed">
            {[
              { num: "1", title: "Introduction", text: "At 239 The Business Developers LLP, we value your privacy. This policy outlines how we collect, use, and protect your information when you interact with our website." },
              { num: "2", title: "Data Collection", text: "We collect information you voluntarily provide, such as your name, email, and project details submitted through our inquiry forms. This data is used solely to provide our e-commerce consulting services." },
              { num: "3", title: "Data Security", text: "We implement industry-standard security measures to ensure your data remains confidential and secure. We do not sell or share your personal information with third parties." },
              { num: "4", title: "Contact Us", text: "If you have any questions regarding your data, please reach out to us at hello@239tbd.com." }
            ].map((section, i) => (
              <motion.section
                key={section.num}
                custom={i}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-2xl font-bold text-[#0c6a22] mb-4">{section.num}. {section.title}</h2>
                <p>{section.text}</p>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}