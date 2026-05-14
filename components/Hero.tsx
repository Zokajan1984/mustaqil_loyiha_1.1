import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-slate-700 text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Find Your Perfect Career</h1>
        <p className="text-slate-300 mb-8 text-lg">
          Discover thousands of job opportunities from top companies worlwide
        </p>
        <div className="bg-white rounded-lg p-2 flex gap-2 max-w-2xl mx-auto mb-6">
          <input
            type="text"
            placeholder="Search jobs, compaies..."
            className="flex-1 px-4 py-3 text-black outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-md font-medium">
            Search
          </button>
          <div className="flex gap-4 justify-center">
            <Link
              href="/jobs"
              className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-md font-medium"
            >
              Browse All Jobs
            </Link>
            <Link
              href="/jobs"
              className="bg-slate-800 hover:bg-slate-600 px-6 py-3 rounded-md font-medium"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
