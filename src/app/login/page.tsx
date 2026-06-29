"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (isLogin) {
      alert("User Login initiated for: " + formData.email);
    } else {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Account created successfully!");
        setIsLogin(true);
      } else {
        alert("Signup failed.");
      }
    }
  };

  const inputStyles = "w-full bg-white p-4 rounded-xl border border-gray-200 text-black focus:border-[#0c6a22] focus:ring-1 focus:ring-[#0c6a22] outline-none transition-all";

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm bg-gray-50/80 backdrop-blur-sm p-8 rounded-4xl border border-gray-200 shadow-xl relative z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-gray-100/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200">
            <button 
              type="button"
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                isLogin ? 'bg-[#0c6a22] text-white' : 'text-gray-600 hover:text-[#0c6a22]'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                !isLogin ? 'bg-[#0c6a22] text-white' : 'text-gray-600 hover:text-[#0c6a22]'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-black text-black mb-2 text-center"
        >
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 text-sm mb-6 text-center"
        >
          {isLogin ? 'Enter your credentials to access your account' : 'Fill in your details to get started'}
        </motion.p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <input 
              type="email" placeholder="Email Address" required 
              className={inputStyles}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <input 
              type="password" placeholder="Password" required 
              className={inputStyles}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </motion.div>

          {!isLogin && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <input 
                type="password" placeholder="Confirm Password" required 
                className={inputStyles}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
            </motion.div>
          )}
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#0c6a22] py-4 rounded-xl font-bold text-white transition-all hover:bg-[#0a581c]"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}