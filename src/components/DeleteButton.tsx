"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteInquiry } from "@/app/actions/inquiryActions";
import { toast } from "sonner";

export default function DeleteButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;
    setLoading(true);
    try {
      await deleteInquiry(id);
      toast.success("Inquiry deleted");
      router.refresh();
    } catch {
      toast.error("Failed to delete inquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 hover:text-red-800 transition-colors text-xs font-bold uppercase tracking-wider disabled:opacity-50"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
