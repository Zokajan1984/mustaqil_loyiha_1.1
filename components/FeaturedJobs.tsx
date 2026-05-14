import JobCard from "./JobCard";
import data from "../db.json";

export default function FeaturedJobs() {
  const jobs = data.jobs.slice(0, 3);

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Featured Jobs
          </h2>
          <p className="text-slate-600">
            Hand-picked opportunities from top companies
          </p>
        </div>

        {/* 1 колонка на мобильном, как на скрине */}
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
