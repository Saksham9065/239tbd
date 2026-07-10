import { redirect } from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Inquiry from "@/models/Inquiry";
import Task from "@/models/Task";
import { connectDB } from "@/lib/mongodb";
import InquiryCard from "@/components/InquiryCard";
import AdminNav from "@/components/AdminNav";

export const dynamic = "force-dynamic";

function startOfThisWeek() {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(now.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday;
}

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "admin") {
    redirect("/admin/login");
  }

  await connectDB();

  const [inquiries, tasks] = await Promise.all([
    Inquiry.find().sort({ createdAt: -1 }),
    Task.find().sort({ createdAt: -1 }),
  ]);

  const weekStart = startOfThisWeek();
  const totalLeads = inquiries.length;
  const unreadLeads = inquiries.filter((i) => !i.isRead).length;
  const weeklyLeads = inquiries.filter((i) => new Date(i.createdAt) >= weekStart).length;
  const openTasks = tasks.filter((t) => !t.completed).length;

  const recent = inquiries.slice(0, 5).map((i) => ({
    id: i._id.toString(),
    name: i.name,
    email: i.email,
    phone: i.phone,
    services: i.services,
    message: i.message,
    isRead: i.isRead,
    createdAt: i.createdAt,
  }));

  const stats = [
    { label: "Total Leads", value: totalLeads, accent: "text-[#0c6a22]" },
    { label: "New This Week", value: weeklyLeads, accent: "text-blue-600" },
    { label: "Unread", value: unreadLeads, accent: "text-amber-600" },
    { label: "Open Tasks", value: openTasks, accent: "text-purple-600" },
  ];

  return (
    <div className="flex min-h-screen bg-white text-black pt-20">
      <AdminNav />
      <main className="flex-1 p-6 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #0c6a22 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <header className="mb-10">
            <h1 className="text-4xl font-black tracking-tighter">
              Dashboard
            </h1>
            <p className="text-gray-500 mt-1">Welcome back, {session.user.email}</p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-sm">
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className={`text-3xl font-black mt-2 ${s.accent}`}>{s.value}</p>
              </div>
            ))}
          </div>

          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black">Recent Leads</h2>
              <Link href="/admin/leads" className="text-sm font-semibold text-[#0c6a22] hover:underline">
                View all →
              </Link>
            </div>
            {recent.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-200">
                <p className="text-gray-500">No inquiries yet.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {recent.map((item, index) => (
                  <InquiryCard key={item.id} item={item} index={index} />
                ))}
              </div>
            )}
          </section>

          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black">Tasks</h2>
              <Link href="/tasks" className="text-sm font-semibold text-[#0c6a22] hover:underline">
                Manage →
              </Link>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 divide-y divide-gray-200">
              {tasks.length === 0 ? (
                <p className="text-gray-500 py-4">No tasks yet.</p>
              ) : (
                tasks.slice(0, 6).map((t) => (
                  <div key={t._id.toString()} className="flex items-center gap-3 py-3">
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        t.completed ? "bg-[#0c6a22] border-[#0c6a22]" : "border-gray-400"
                      }`}
                    >
                      {t.completed && <span className="text-white text-[10px]">✓</span>}
                    </span>
                    <span className={t.completed ? "text-gray-400 line-through" : "text-gray-800"}>
                      {t.title}
                    </span>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
