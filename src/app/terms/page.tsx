"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-white relative overflow-hidden">
      {/* Background Noise Overlay adjusted for white background */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-black tracking-tighter">
            Terms of Service
          </h1>
          
          <div className="text-gray-600 space-y-8 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[#0c6a22] mb-4">1. Agreement to Terms</h2>
              <p>By accessing the website of 239 The Business Developers LLP, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0c6a22] mb-4">2. Intellectual Property</h2>
              <p>The content, branding, and proprietary strategies displayed on this website are the property of 239 The Business Developers LLP and are protected by applicable copyright and trademark law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0c6a22] mb-4">3. Limitation of Liability</h2>
              <p>Our services are provided &quot;as is.&quot; We do not guarantee specific results from our consulting services and are not liable for any indirect or consequential damages arising from the use of our website or services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0c6a22] mb-4">4. Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}