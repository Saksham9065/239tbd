"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check against your environment variable
    if (password === process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY) {
      document.cookie = "admin-auth=true; path=/; max-age=86400; SameSite=Strict";
      router.push("/admin");
    } else {
      setError("Unauthorized access attempt.");
      setPassword("");
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <form 
        onSubmit={handleLogin} 
        className="w-full max-w-sm bg-[#0F1218] p-8 rounded-2xl border border-white/5 shadow-2xl"
      >
        <h1 className="text-white text-2xl font-bold mb-2">Admin Portal</h1>
        <p className="text-gray-500 text-sm mb-6">Restricted access for 239 LLP management.</p>
        
        {error && <p className="text-red-400 text-sm mb-4 bg-red-500/10 p-2 rounded">{error}</p>}
        
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 bg-[#1A1F26] text-white rounded-lg border border-white/10 focus:border-[#F97316] outline-none transition-all"
          placeholder="Enter Secret Key"
          required
        />
        <button className="w-full p-3 bg-[#F97316] text-white rounded-lg font-bold hover:bg-[#d96513] transition-all">
          Authorize Access
        </button>
      </form>
    </main>
  );
}