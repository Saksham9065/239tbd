"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LayoutDashboard, Inbox, LogOut } from "lucide-react";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/leads", label: "Lead Inbox", icon: Inbox },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 bg-gray-900 text-white min-h-[calc(100vh-5rem)] p-6 flex flex-col overflow-x-hidden">
      <div className="mb-10">
        <p className="text-[#4ade80] uppercase tracking-[0.2em] text-xs font-bold wrap-break-word">239 Admin</p>
        <h2 className="text-xl font-black mt-1 wrap-break-word">Control Panel</h2>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 min-w-0 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                active ? "bg-[#0c6a22] text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon size={18} className="shrink-0" />
              <span className="truncate">{label}</span>
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => signOut({ callbackUrl: "/admin/login" })}
        className="flex items-center gap-3 min-w-0 px-4 py-3 rounded-xl text-sm font-semibold text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
      >
        <LogOut size={18} className="shrink-0" />
        <span className="truncate">Logout</span>
      </button>
    </aside>
  );
}
