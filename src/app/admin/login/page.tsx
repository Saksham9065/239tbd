"use client";

import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setLoading(false);
      toast.error("Invalid email or password");
      return;
    }

    const session = await getSession();

    if (session?.user?.role !== "admin") {
      setLoading(false);
      toast.error("Access denied. Admin privileges required.");
      return;
    }

    toast.success("Successfully logged in!");
    router.push("/admin");
    router.refresh();
  };

  const inputStyles = "w-full p-4 bg-white rounded-xl border border-gray-200 text-black focus:border-[#0c6a22] focus:ring-1 focus:ring-[#0c6a22] outline-none transition-all";

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm bg-gray-50/80 backdrop-blur-sm p-8 rounded-4xl border border-gray-200 shadow-xl relative z-10"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#0c6a22] uppercase tracking-[0.2em] text-xs font-bold block mb-6"
        >
          Admin Access
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-black text-black mb-8"
        >
          Welcome Back
        </motion.h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className={inputStyles}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className={inputStyles}
            />
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full bg-[#0c6a22] text-white font-bold py-4 rounded-xl hover:bg-[#0a581c] transition-all disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}