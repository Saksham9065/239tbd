"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      setMounted(true);
      
      const hasAuth = document.cookie.includes('admin-auth') || document.cookie.includes('user-auth');
      setIsLoggedIn(hasAuth);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl font-black text-[#F97316] leading-none">239.</span>
          <div className="hidden md:flex flex-col border-l border-[#F97316]/30 pl-2">
            <span className="text-[8px] uppercase tracking-widest text-[#F97316] font-bold">The Business</span>
            <span className="text-[8px] uppercase tracking-widest text-[#F97316] font-bold">Developer LLP</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`relative py-1 text-sm font-semibold transition-colors duration-300 ${pathname === link.href ? "text-[#F97316]" : "text-gray-400 hover:text-white"}`}>
              {link.name}
              {pathname === link.href && <motion.div layoutId="nav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F97316]" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 h-10">
          {mounted ? (
            <>
              <Link 
                href={isLoggedIn ? "/admin" : "/login"} 
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#F97316] transition-all duration-300"
              >
                <svg 
                  className="w-5 h-5 text-gray-400 hover:text-[#F97316] transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-2xl z-50">
                {menuOpen ? "✕" : "☰"}
              </button>
            </>
          ) : (
            <div className="w-10 h-10" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-0 left-0 w-full h-screen bg-[#050505] flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-3xl font-black text-white hover:text-[#F97316] transition-colors">
                {link.name}
              </Link>
            ))}
            <Link href="/login" onClick={() => setMenuOpen(false)} className="text-3xl font-black text-[#F97316]">Login</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}