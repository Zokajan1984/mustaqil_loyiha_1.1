"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AddJobForm() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("jobs").insert([
      {
        title,
        company,
        location: "Buxara",
        job_type: "Full-time",
        description: "Dobavlena cherez formu",
      },
    ]);
    setLoading(false);

    if (error) {
      alert("Oshibka: " + error.message);
    } else {
      setTitle("");
      setCompany("");
      router.refresh();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 p-4 border ronded-xl bg-gray-50"
    >
      <h2 className="font-bold mb-3">Добавить ваканцию</h2>
      <input
        type="text"
        className="border p-2 rounded w-full mb-2"
        placeholder="Nazvanie (naprimer Frontend)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        className="border p-2 rounded w-full mb-2"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Soxranyayu..." : "Dobavit"}
      </button>
    </form>
  );
}
