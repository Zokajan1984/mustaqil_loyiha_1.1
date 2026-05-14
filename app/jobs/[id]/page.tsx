// Импортируем данные
import data from "../../../db.json";
import Header from "@/components/Header";
import Link from "next/link";

// Next.js передаёт params с id из URL
export default function JobDetail({ params }: { params: { id: string } }) {
  // Находим вакансию по id
  const job = data.jobs.find((j) => j.id === params.id);

  // Если не нашли
  if (!job) {
    return (
      <>
        <Header />
        <div className="p-12 text-center">Job not found</div>
      </>
    );
  }

  const avatarLetter = job.company.charAt(0).toUpperCase();

  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-4">
          {/* Кнопка назад */}
          <Link
            href="/jobs"
            className="text-blue-600 hover:underline mb-6 inline-block"
          >
            ← Back to jobs
          </Link>

          {/* Карточка вакансии - большая */}
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            {/* Верх */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  {job.title}
                </h1>
                <p className="text-slate-600 text-lg">{job.company}</p>
              </div>
              <div className="w-14 h-14 bg-[#0f3d7a] text-white rounded-xl flex items-center justify-center font-bold text-xl">
                {avatarLetter}
              </div>
            </div>

            {/* Бейджи */}
            <div className="flex gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium">
                {job.category}
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md text-sm font-medium">
                {job.type}
              </span>
            </div>

            {/* Локация и зарплата */}
            <div className="flex gap-6 text-slate-600 mb-8 pb-8 border-b">
              <span>📍 {job.location}</span>
              <span>💰 {job.salary}</span>
            </div>

            {/* Описание */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">About the role</h2>
              <p className="text-slate-700 leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Требования */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((req) => (
                  <li key={req} className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Кнопка Apply */}
            <button className="w-full bg-[#0f3d7a] hover:bg-[#0c3263] text-white py-4 rounded-lg font-medium text-lg transition">
              Apply Now
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
