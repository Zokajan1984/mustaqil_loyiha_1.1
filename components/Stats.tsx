export default function Stats() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-3">500+</div>
            <div className="text-slate-500">Active Jobs</div>
          </div>

          <div>
            <div className="text-4xl font-bold text-blue-600 mb-3">200+</div>
            <div className="text-slate-600">Companies</div>
          </div>

          <div>
            <div className="text-4xl font-bold text-blue-600 mb-3">50K+</div>
            <div className="text-slate-600">Job Seekers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
