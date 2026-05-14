import JobCard from "./JobCard";
import data from "../db.json";

export default function FeaturedJobs() {
  const jobs = data.jobs.slice(0, 3);
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-16xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Featured Jobs
          </h2>
          <p className="text-slate-500">
            Hand-picked opportunities from top companies
          </p>
        </div>

        <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
