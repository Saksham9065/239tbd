import Inquiry from "@/models/Inquiry";
import { connectDB } from "@/lib/mongodb";
import DeleteButton from "@/components/DeleteButton"; 

// This ensures the page is not pre-rendered at build time
export const dynamic = 'force-dynamic';

export default async function AdminInquiries() {
  await connectDB();
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });

  return (
    <main className="min-h-screen bg-white p-6 md:p-12 text-black">
      <div className="max-w-6xl mx-auto">
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
            inquiries.map((item) => (
              <div 
                key={item._id.toString()} 
                className="bg-gray-50 p-8 rounded-3xl border border-gray-200 hover:border-[#0c6a22]/20 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-black">{item.name}</h2>
                    <a href={`mailto:${item.email}`} className="text-[#0c6a22] hover:underline text-sm">
                      {item.email}
                    </a>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 bg-white p-4 rounded-xl border border-gray-100">
                  {item.message}
                </p>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                  <div className="flex gap-2 flex-wrap">
                    {item.services?.map((s: string) => (
                      <span 
                        key={s} 
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs border border-gray-200"
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