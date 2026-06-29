"use client";

import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";

const services = [
  "E-commerce Account Creation", "E-commerce Account Management", "Product Listing & Cataloging",
  "Reconciliation", "Advertising", "Sale Boost",
  "SEO Friendly Content Writing", "Website Design & Development", "App Development",
  "Digital Marketing", "Social Media Management", "Product Photoshoot",
  "Warehousing & Fulfillment"
];

export default function Inquiry() {
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Branding */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sticky top-20"
        >
          <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none mb-8">
            Let&apos;s <br />
            <span className="text-[#0c6a22]">Scale.</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-xl font-light leading-relaxed max-w-md"
          >
            Your brand deserves a strategy that actually moves the needle.
          </motion.p>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.form
          ref={formRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 md:p-10 rounded-4xl border border-gray-200 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div variants={itemVariants}>
              <label className={labelStyles} htmlFor="name">Name *</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                id="name" name="name" required className={inputStyles} placeholder="FULL NAME"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className={labelStyles} htmlFor="email">Email Address *</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                id="email" name="email" type="email" required className={inputStyles} placeholder="EMAIL ADDRESS"
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-8">
            <label className={labelStyles} htmlFor="phone">Mobile Number *</label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              id="phone" name="phone" type="tel" required className={inputStyles} placeholder="+91 XXXXXXXXXX"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <label className={labelStyles} htmlFor="service">Services Interested In</label>
            <select 
              id="service"
              name="service"
              className={inputStyles}
              defaultValue=""
              aria-label="Select a service"
            >
              <option value="" disabled>Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 grow">
            <label className={labelStyles} htmlFor="message">Tell Us About Your Project</label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              id="message" name="message" rows={4} required className={inputStyles} placeholder="WHAT ARE YOU LOOKING TO ACHIEVE?"
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
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
    </main>
  );
}