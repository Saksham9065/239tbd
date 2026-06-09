"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Noise Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-black text-white tracking-tighter">
              239
            </h2>
            <p className="text-[#F97316] uppercase tracking-[0.35em] text-xs font-bold mt-1">
              The Business Developer LLP
            </p>
            <p className="mt-6 max-w-md text-gray-400 leading-relaxed font-light">
              Powering E-commerce growth through marketplace
              management, advertising, technology, and strategic
              growth solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Navigate
            </h3>
            <div className="flex flex-col gap-4">
              {["About", "Services", "Case Studies", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-400 hover:text-[#F97316] transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Get in Touch
            </h3>
            <div className="space-y-4 text-gray-400">
              <p className="hover:text-[#F97316] transition-colors cursor-pointer">hello@239commerce.com</p>
              <p>+91 98765 43210</p>
              <p>India</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 font-light">
            © 2026 239 Commerce. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}