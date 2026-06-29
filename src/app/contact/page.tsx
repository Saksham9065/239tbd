"use client";

import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";

const mobileServices = [
  "E-commerce Account Creation", "E-commerce Account Management", "Product Listing & Cataloging",
  "Reconciliation", "Advertising", "Sale Boost",
  "SEO Friendly Content Writing", "Website Design & Development", "App Development",
  "Digital Marketing", "Social Media Management", "Product Photoshoot",
  "Warehousing & Fulfillment"
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Submitting...");

    const formData = new FormData(formRef.current!);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        formRef.current?.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch {
      setStatus("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyles = "w-full bg-white border border-gray-200 py-3 px-4 rounded-lg text-black placeholder-gray-400 focus:border-[#0c6a22] focus:ring-1 focus:ring-[#0c6a22] outline-none transition-all";
  const labelStyles = "text-xs font-bold text-[#0c6a22] uppercase tracking-[0.2em] mb-2 block";

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <main className="min-h-screen pt-40 pb-24 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter">
            Let&apos;s Talk.
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div
                custom={0}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-200 p-8 rounded-4xl"
              >
                <h3 className="text-[#0c6a22] font-bold uppercase tracking-widest text-xs mb-3">Email</h3>
                <a href="mailto:hello@239tbd.com" className="text-black text-lg font-medium hover:text-[#0c6a22] transition-colors">hello@239tbd.com</a>
              </motion.div>
              <motion.div
                custom={1}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-200 p-8 rounded-4xl"
              >
                <h3 className="text-[#0c6a22] font-bold uppercase tracking-widest text-xs mb-3">Support</h3>
                <p className="text-black text-lg font-medium">+91 98765 43210</p>
              </motion.div>
            </motion.div>

            <motion.div
              custom={2}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 border border-gray-200 p-10 rounded-4xl"
            >
              <h3 className="text-[#0c6a22] font-bold uppercase tracking-widest text-xs mb-4">Registered Office</h3>
              <p className="text-black text-xl leading-relaxed">
                74-75, Arjun Nagar, Durga Pura,<br />
                Jaipur, Rajasthan, India - 302018
              </p>
            </motion.div>

            <motion.div
              custom={3}
              variants={cardVariants}
              className="rounded-4xl overflow-hidden border border-gray-200 h-64 w-full"
            >
              <iframe 
                src="https://www.google.com/maps/embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Office Location Map"
              />
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 md:p-10 rounded-4xl border border-gray-200 shadow-xl flex flex-col h-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className={labelStyles}>Name *</label>
                <input name="name" required className={inputStyles} placeholder="FULL NAME" />
              </div>
              <div>
                <label className={labelStyles}>Email Address *</label>
                <input name="email" type="email" required className={inputStyles} placeholder="EMAIL ADDRESS" />
              </div>
            </div>

            <div className="mb-8">
              <label className={labelStyles}>Mobile Number *</label>
              <input name="phone" type="tel" required className={inputStyles} placeholder="+91 XXXXXXXXXX" />
            </div>

            <div className="mb-8">
              <label className={labelStyles}>Services Interested In</label>
              <select 
                name="service"
                className={inputStyles}
                defaultValue=""
              >
                <option value="" disabled>Select a service</option>
                {mobileServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-8 grow">
              <label className={labelStyles}>Tell Us About Your Project</label>
              <textarea name="message" rows={4} required className={inputStyles} placeholder="WHAT ARE YOU LOOKING TO ACHIEVE?"></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#0c6a22] text-white font-bold py-5 rounded-lg hover:bg-[#0a581c] transition-all disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : status || "Submit Inquiry"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </main>
  );
}