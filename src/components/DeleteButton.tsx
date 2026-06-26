"use client";

import { deleteInquiry } from "@/app/actions/inquiryActions";

export default function DeleteButton({ id }: { id: string }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      await deleteInquiry(id);
    }
  };

  return (
    <button 
      onClick={handleDelete}
      className="text-red-600 hover:text-red-800 transition-colors text-xs font-bold uppercase tracking-wider"
    >
      Delete
    </button>
  );
}