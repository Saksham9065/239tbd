"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-white relative overflow-hidden">
      {/* Background Noise Overlay adjusted for white background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-black tracking-tighter">
            Privacy Policy
          </h1>
          
          <div className="text-gray-600 space-y-8 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[#0c6a22] mb-4">1. Introduction</h2>
              <p>At 239 The Business Developers LLP, we value your privacy. This policy outlines how we collect, use, and protect your information when you interact with our website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0c6a22] mb-4">2. Data Collection</h2>
              <p>We collect information you voluntarily provide, such as your name, email, and project details submitted through our inquiry forms. This data is used solely to provide our e-commerce consulting services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0c6a22] mb-4">3. Data Security</h2>
              <p>We implement industry-standard security measures to ensure your data remains confidential and secure. We do not sell or share your personal information with third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0c6a22] mb-4">4. Contact Us</h2>
              <p>If you have any questions regarding your data, please reach out to us at <span className="text-black font-semibold">hello@239tbd.com</span>.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}