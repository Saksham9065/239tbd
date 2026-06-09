"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

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
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Submitting...");

    const formData = new FormData(formRef.current!);
    const data = Object.fromEntries(formData);
    
    const payload = {
      ...data,
      services: selectedServices,
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        formRef.current?.reset();
        setSelectedServices([]);
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch { // Removed unused 'error' parameter to clear linting warning
      setStatus("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyles = "w-full bg-[#1A1F26] border border-white/10 py-3 px-4 rounded-lg text-white placeholder-gray-500 focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none";
  const labelStyles = "text-xs font-bold text-[#F97316] uppercase tracking-[0.2em] mb-2 block";

  return (
    <main className="min-h-screen bg-[#050505] pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Branding */}
        <div className="sticky top-20">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
            Let&apos;s <br />
            <span className="text-[#F97316]">Scale.</span>
          </h1>
          <p className="text-gray-400 text-xl font-light leading-relaxed max-w-md">
            Your brand deserves a strategy that actually moves the needle.
          </p>
        </div>

        {/* Right Side: The Form */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          onSubmit={handleSubmit}
          className="bg-[#0F1218] p-8 md:p-10 rounded-4xl border border-white/5 shadow-2xl"
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
            <label className={labelStyles}>Services Interested In</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((service) => (
                <label key={service} className="flex items-center p-3 border border-white/10 rounded-lg hover:border-[#F97316] transition-all cursor-pointer text-xs text-gray-400">
                  <input 
                    type="checkbox" 
                    className="mr-3 w-4 h-4 accent-[#F97316]" 
                    onChange={() => handleServiceChange(service)}
                    checked={selectedServices.includes(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className={labelStyles}>Tell Us About Your Project</label>
            <textarea name="message" rows={4} required className={inputStyles} placeholder="WHAT ARE YOU LOOKING TO ACHIEVE?"></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#F97316] text-white font-bold py-5 rounded-lg hover:bg-orange-600 transition-all disabled:opacity-50"
          >
            {isLoading ? "Submitting..." : status || "Submit Inquiry"}
          </button>
        </motion.form>
      </div>
    </main>
  );
}