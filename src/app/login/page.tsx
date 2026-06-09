"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });
  // Removed 'const router = useRouter()' as it was unused

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
    <main className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-[#0F1218] p-8 rounded-3xl border border-white/5">
        <h1 className="text-2xl font-bold text-white mb-6">
          {isLogin ? 'Sign In' : 'Create Account'}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" placeholder="Email" required 
            className="w-full bg-[#050505] p-3 rounded-xl border border-white/10 text-white"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" placeholder="Password" required 
            className="w-full bg-[#050505] p-3 rounded-xl border border-white/10 text-white"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button className="w-full bg-[#F97316] py-3 rounded-xl font-bold text-white hover:bg-opacity-90 transition-all">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-[#F97316] font-bold">
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </main>
  );
}