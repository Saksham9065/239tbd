"use client";

import Link from "next/link";

const services = [
  { name: "Marketplace Management", slug: "marketplace-management" },
  { name: "Marketplace Advertising", slug: "marketplace-advertising" },
  { name: "SEO & Listing Optimization", slug: "seo-optimization" },
  { name: "Warehousing & Fulfillment", slug: "warehousing-fulfillment" },
  { name: "E-Commerce Development", slug: "ecommerce-development" },
  { name: "Analytics & Growth Strategy", slug: "analytics-strategy" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="font-bold text-black mb-4 uppercase tracking-wider text-xs">
              About Us
            </h3>
            <p className="text-gray-600 leading-relaxed font-light text-sm">
              239 The Business Developers LLP provides end-to-end e-commerce, digital marketing, and technology solutions designed for growth.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-4 uppercase tracking-wider text-xs">
              Services
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {services.map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`} 
                  className="hover:text-[#0c6a22] transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black mb-4 uppercase tracking-wider text-xs">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#0c6a22] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[#0c6a22] transition-colors">About Us</Link>
              <Link href="/services" className="hover:text-[#0c6a22] transition-colors">Services</Link>
              <Link href="/inquiry" className="hover:text-[#0c6a22] transition-colors">Inquiry</Link>
              <Link href="/contact" className="hover:text-[#0c6a22] transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-bold text-black mb-3 uppercase tracking-wider text-xs">
                Get in Touch
              </h3>
              <div className="text-sm text-gray-600 flex flex-col gap-1">
                <p>hello@239tbd.com</p>
                <p>+91 98765 43210</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-black mb-3 uppercase tracking-wider text-xs">
                Registered Office
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                74-75, Arjun Nagar, Durga Pura, <br />
                Jaipur, Rajasthan, India - 302018.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-light">
            © 2026 239 TBD. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}