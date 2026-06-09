"use client";
import { deleteInquiry } from "@/app/actions/inquiryActions";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <button 
      onClick={() => deleteInquiry(id)}
      className="text-red-500 hover:text-red-400 text-xs font-bold uppercase"
    >
      Delete
    </button>
  );
}