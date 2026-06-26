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
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-gray-50 p-8 rounded-2xl border border-gray-200">
        <h1 className="text-black text-2xl font-bold mb-6">Login</h1>
        
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 mb-4 bg-white text-black rounded-lg border border-gray-200 outline-none focus:border-[#0c6a22]"
        />
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 mb-6 bg-white text-black rounded-lg border border-gray-200 outline-none focus:border-[#0c6a22]"
        />
        
        <button 
          disabled={loading}
          className="w-full p-3 bg-[#0c6a22] text-white rounded-lg font-bold hover:bg-[#0a581c] transition-all"
        >
          {loading ? "Authenticating..." : "Sign In"}
        </button>
      </form>
    </main>
  );
}