import Inquiry from "@/models/Inquiry";
import { connectDB } from "@/lib/mongodb";
import InquiryCard from "@/components/InquiryCard";

export const dynamic = 'force-dynamic';

export default async function AdminInquiries() {
  await connectDB();
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });

  return (
    <main className="min-h-screen bg-white p-6 md:p-12 text-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0c6a22 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-black tracking-tighter text-black">
            Lead <span className="text-[#0c6a22]">Inbox</span>
          </h1>
          <div className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600 border border-gray-200">
            Total Leads: {inquiries.length}
          </div>
        </header>

        <div className="grid gap-6">
          {inquiries.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-200">
              <p className="text-gray-500">No inquiries found in the database.</p>
            </div>
          ) : (
            inquiries.map((item, index) => (
              <InquiryCard key={item._id.toString()} item={item} index={index} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}