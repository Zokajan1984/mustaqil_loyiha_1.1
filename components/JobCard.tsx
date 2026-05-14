type Job = {
  id: string;
  title: string;
  company: string;
  locaion: string;
  salary: string;
  category: string;
  description: string;
  requirements: string[];
};

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-slate-800">{job.title}</h3>
        <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
          {job.category}
        </span>
        <p className="text-slate-500 mb-2">
          {job.company} • {job.locaion}
        </p>
        <p className="text-slate-900 font-medium mb-3">{job.salary}</p>
        <p className="text-slate-600 text-sm">
          {job.description.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
}
