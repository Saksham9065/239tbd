import Inquiry from "@/models/Inquiry";
import { connectDB } from "@/lib/mongodb";
import DeleteButton from "@/components/DeleteButton"; 

// This ensures the page is not pre-rendered at build time
export const dynamic = 'force-dynamic';

export default async function AdminInquiries() {
  await connectDB();
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });

  return (
    <main className="min-h-screen bg-[#050505] p-6 md:p-12 text-white">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-black tracking-tighter">
            Lead <span className="text-[#F97316]">Inbox</span>
          </h1>
          <div className="bg-[#1A1F26] px-4 py-2 rounded-full text-sm text-gray-400 border border-white/10">
            Total Leads: {inquiries.length}
          </div>
        </header>

        <div className="grid gap-6">
          {inquiries.length === 0 ? (
            <div className="text-center py-20 bg-[#0F1218] rounded-3xl border border-white/5">
              <p className="text-gray-500">No inquiries found in the database.</p>
            </div>
          ) : (
            inquiries.map((item) => (
              <div 
                key={item._id.toString()} 
                className="bg-[#0F1218] p-8 rounded-3xl border border-white/5 hover:border-[#F97316]/20 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">{item.name}</h2>
                    <a href={`mailto:${item.email}`} className="text-[#F97316] hover:underline text-sm">
                      {item.email}
                    </a>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-600 bg-white/5 px-3 py-1 rounded-full">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6 bg-white/5 p-4 rounded-xl border border-white/10">
                  {item.message}
                </p>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                  <div className="flex gap-2 flex-wrap">
                    {item.services?.map((s: string) => (
                      <span 
                        key={s} 
                        className="bg-[#1A1F26] text-gray-300 px-3 py-1 rounded-lg text-xs border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  
                  <DeleteButton id={item._id.toString()} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}