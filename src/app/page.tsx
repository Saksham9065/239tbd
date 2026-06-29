"use client";

import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import MarketplaceLogos from "@/components/sections/MarketplaceLogos";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main>
        <Hero />
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <AboutPreview />
          <MarketplaceLogos />
          <ServicesGrid />
          <CaseStudies />
          <Testimonials />
          <ContactCTA />
        </motion.div>
      </main>
    </div>
  );
}