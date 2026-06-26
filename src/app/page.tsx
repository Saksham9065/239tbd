import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import MarketplaceLogos from "@/components/sections/MarketplaceLogos";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    // Changed bg-[#050505] to bg-white for a clean light-themed aesthetic
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navbar removed: handled by RootLayout */}
      
      <main>
        <Hero />
        <AboutPreview />
        <MarketplaceLogos />
        <ServicesGrid />
        <CaseStudies />
        <Testimonials />
        <ContactCTA />
      </main>

      {/* Footer removed: handled by RootLayout */}
    </div>
  );
}