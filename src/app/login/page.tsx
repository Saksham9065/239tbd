"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-gray-50 p-8 rounded-3xl border border-gray-200">
        <h1 className="text-2xl font-bold text-black mb-6">
          {isLogin ? 'Sign In' : 'Create Account'}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" placeholder="Email" required 
            className="w-full bg-white p-3 rounded-xl border border-gray-200 text-black focus:border-[#0c6a22] outline-none"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" placeholder="Password" required 
            className="w-full bg-white p-3 rounded-xl border border-gray-200 text-black focus:border-[#0c6a22] outline-none"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button className="w-full bg-[#0c6a22] py-3 rounded-xl font-bold text-white hover:bg-[#0a581c] transition-all">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-[#0c6a22] font-bold">
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </main>
  );
}