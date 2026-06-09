"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-[#050505] relative overflow-hidden">
      {/* Background Noise Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
            Let&apos;s Talk.
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-12">
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/3 border border-white/5 p-8 rounded-4xl">
                <h3 className="text-[#F97316] font-bold uppercase tracking-widest text-xs mb-3">Email</h3>
                <a href="mailto:hello@239tbd.com" className="text-white text-lg font-medium hover:text-[#F97316] transition-colors">hello@239tbd.com</a>
              </div>
              <div className="bg-white/3 border border-white/5 p-8 rounded-4xl">
                <h3 className="text-[#F97316] font-bold uppercase tracking-widest text-xs mb-3">Support</h3>
                <p className="text-white text-lg font-medium">+91 98765 43210</p>
              </div>
            </div>

            {/* Registered Office */}
            <div className="bg-white/3 border border-white/5 p-10 rounded-4xl">
              <h3 className="text-[#F97316] font-bold uppercase tracking-widest text-xs mb-4">Registered Office</h3>
              <p className="text-white text-xl leading-relaxed">
                74-75, Arjun Nagar, Durga Pura,<br />
                Jaipur, Rajasthan, India - 302018
              </p>
            </div>

            {/* Map */}
            <div className="rounded-4xl overflow-hidden border border-white/5 h-64 w-full">
              <iframe 
                src="https://www.google.com/maps/embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Office Location Map"
              />
            </div>
          </div>

          {/* Quick CTA */}
          <div className="bg-white/3 border border-white/5 p-12 rounded-4xl flex flex-col justify-center items-center text-center">
            
            <div className="mb-8">
              <h3 className="text-[#9A3412] font-black text-6xl tracking-tighter mb-1">
                239
              </h3>
              <p className="text-[#F97316] font-bold uppercase tracking-[0.2em] text-xs">
                THE BUSINESS DEVELOPERS LLP
              </p>
            </div>
            
            <h2 className="text-3xl font-black text-white mb-6">Ready to scale?</h2>
            <p className="text-gray-400 mb-8">We respond to all inquiries within 24 hours.</p>
            <a 
              href="/inquiry" 
              className="bg-[#F97316] text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              Start Your Project →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}