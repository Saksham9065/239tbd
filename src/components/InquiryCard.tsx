"use client";

import { motion } from "framer-motion";
import DeleteButton from "@/components/DeleteButton";

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  services?: string[];
  message: string;
  isRead?: boolean;
  createdAt: Date | string;
}

interface InquiryCardProps {
  item: Inquiry;
  index: number;
}

export default function InquiryCard({ item, index }: InquiryCardProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const created = new Date(item.createdAt);
  const dateLabel = created.toLocaleDateString();
  const timeLabel = created.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const isUnread = item.isRead === false;

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, borderColor: "rgba(12, 106, 34, 0.3)" }}
      className={`bg-gray-50/80 backdrop-blur-sm p-8 rounded-4xl border shadow-lg hover:shadow-xl transition-all ${
        isUnread ? "border-[#0c6a22]/40" : "border-gray-200"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-black">{item.name}</h2>
            {isUnread && (
              <span className="bg-[#0c6a22] text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded-full">
                New
              </span>
            )}
          </div>
          <a href={`mailto:${item.email}`} className="text-[#0c6a22] hover:underline text-sm transition-colors">
            {item.email}
          </a>
          {item.phone && (
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-semibold text-gray-700">Phone:</span>{" "}
              <a href={`tel:${item.phone}`} className="hover:underline">
                {item.phone}
              </a>
            </p>
          )}
        </div>
        <span className="text-[10px] uppercase tracking-widest text-gray-500 bg-gray-200/80 px-3 py-1 rounded-full whitespace-nowrap">
          {dateLabel} · {timeLabel}
        </span>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6 bg-white/80 p-4 rounded-xl border border-gray-100 whitespace-pre-wrap">
        {item.message}
      </p>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
        <div className="flex gap-2 flex-wrap">
          {item.services?.length ? (
            item.services.map((s) => (
              <motion.span
                key={s}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(12, 106, 34, 0.1)" }}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs border border-gray-200 transition-all"
              >
                {s}
              </motion.span>
            ))
          ) : (
            <span className="text-xs text-gray-400">No services selected</span>
          )}
        </div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <DeleteButton id={item.id} />
        </motion.div>
      </div>
    </motion.div>
  );
}
