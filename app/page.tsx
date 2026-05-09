import { supabase } from "@/lib/supabase";
import AddJobForm from "./AddJobForm";

export default async function Page() {
  const { data: jobs, error } = await supabase.from("jobs").select("*");

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Вакансии Узбекистана</h1>
      <AddJobForm />
      <div className="space-y-4">
        {jobs?.map((job) => (
          <div
            key={job.id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {job.job_type}
              </span>
            </div>
            <p className="text-gray-600 mt-1">
              {job.company} • {job.location}
            </p>
            {job.salary && <p className="mt-2 font-medium">{job.salary}</p>}
            <p className="mt-3 text-sm text-gray-700">{job.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
