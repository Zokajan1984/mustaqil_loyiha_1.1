import data from "../../db.json";
import JobCard from "@/components/JobCard";
import Header from "@/components/Header";

export default function JobsPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">All Jobs</h1>
            <p className="text-slate-600">
              {data.jobs.length} opportunities available
            </p>
          </div>
          <div className="space-y-6">
            {data.jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
