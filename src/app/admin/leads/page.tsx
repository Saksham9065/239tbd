import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Inquiry from "@/models/Inquiry";
import { connectDB } from "@/lib/mongodb";
import InquiryCard from "@/components/InquiryCard";
import AdminNav from "@/components/AdminNav";

export const dynamic = "force-dynamic";

export default async function AdminLeads() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "admin") {
    redirect("/admin/login");
  }

  await connectDB();
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });

  const items = inquiries.map((i) => ({
    id: i._id.toString(),
    name: i.name,
    email: i.email,
    phone: i.phone,
    services: i.services,
    message: i.message,
    isRead: i.isRead,
    createdAt: i.createdAt,
  }));

  const unread = items.filter((i) => i.isRead === false).length;

  return (
    <div className="flex min-h-screen bg-white text-black pt-20">
      <AdminNav />
      <main className="flex-1 p-6 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #0c6a22 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <header className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-black tracking-tighter">
              Lead <span className="text-[#0c6a22]">Inbox</span>
            </h1>
            <div className="flex gap-3">
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600 border border-gray-200">
                Total: {items.length}
              </div>
              <div className="bg-[#0c6a22]/10 px-4 py-2 rounded-full text-sm text-[#0c6a22] border border-[#0c6a22]/20">
                Unread: {unread}
              </div>
            </div>
          </header>

          <div className="grid gap-6">
            {items.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-200">
                <p className="text-gray-500">No inquiries found in the database.</p>
              </div>
            ) : (
              items.map((item, index) => (
                <InquiryCard key={item.id} item={item} index={index} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
