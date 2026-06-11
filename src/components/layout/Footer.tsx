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

          {/* Column 1: About Us */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              About Us
            </h3>
            <p className="text-gray-400 leading-relaxed font-light text-sm">
              239 The Business Developers LLP provides end-to-end e-commerce, digital marketing, and technology solutions designed for growth.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Services
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href="/services" className="hover:text-[#F97316] transition-colors">E-commerce Management</Link>
              <Link href="/services" className="hover:text-[#F97316] transition-colors">Digital Marketing</Link>
              <Link href="/services" className="hover:text-[#F97316] transition-colors">Web Development</Link>
              <Link href="/services" className="hover:text-[#F97316] transition-colors">App Development</Link>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href="/" className="hover:text-[#F97316] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[#F97316] transition-colors">About Us</Link>
              <Link href="/services" className="hover:text-[#F97316] transition-colors">Services</Link>
              <Link href="/inquiry" className="hover:text-[#F97316] transition-colors">Inquiry</Link>
              <Link href="/contact" className="hover:text-[#F97316] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Column 4: Get in Touch & Registered Office */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
                Get in Touch
              </h3>
              <div className="text-sm text-gray-400 flex flex-col gap-1">
                <p>hello@239commerce.com</p>
                <p>+91 98765 43210</p>
                <p>India</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
                Registered Office
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                74-75, Arjun Nagar, Durga Pura, <br />
                Jaipur, Rajasthan, India - 302018.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 font-light">
            © 2026 239 Commerce. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
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