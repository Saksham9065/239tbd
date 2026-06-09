import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import MarketplaceLogos from "@/components/sections/MarketplaceLogos";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden">
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