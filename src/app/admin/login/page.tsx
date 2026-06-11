"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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

    setLoading(false);

    if (result?.error) {
      toast.error("Invalid email or password");
    } else {
      toast.success("Successfully logged in!");
      router.push("/admin"); // Redirect to your protected dashboard
      router.refresh();
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-[#0F1218] p-8 rounded-2xl border border-white/5">
        <h1 className="text-white text-2xl font-bold mb-6">Login</h1>
        
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 mb-4 bg-[#1A1F26] text-white rounded-lg border border-white/10 outline-none"
        />
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 mb-6 bg-[#1A1F26] text-white rounded-lg border border-white/10 outline-none"
        />
        
        <button 
          disabled={loading}
          className="w-full p-3 bg-[#F97316] text-white rounded-lg font-bold hover:bg-[#d96513] transition-all"
        >
          {loading ? "Authenticating..." : "Sign In"}
        </button>
      </form>
    </main>
  );
}