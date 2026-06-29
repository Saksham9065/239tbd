"use client";

import { motion, Variants } from "framer-motion";

export default function TermsOfService() {
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
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-black tracking-tighter">
            Terms of Service
          </h1>
          
          <div className="text-gray-600 space-y-8 font-light leading-relaxed">
            {[
              { num: "1", title: "Agreement to Terms", text: "By accessing the website of 239 The Business Developers LLP, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our services." },
              { num: "2", title: "Intellectual Property", text: "The content, branding, and proprietary strategies displayed on this website are the property of 239 The Business Developers LLP and are protected by applicable copyright and trademark law." },
              { num: "3", title: "Limitation of Liability", text: "Our services are provided as is. We do not guarantee specific results from our consulting services and are not liable for any indirect or consequential damages arising from the use of our website or services." },
              { num: "4", title: "Governing Law", text: "These terms are governed by the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan." }
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