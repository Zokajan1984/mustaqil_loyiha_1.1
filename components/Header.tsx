import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <span className="bg-white text-slate-900 w-8 h-8 grid place-items-center rounded">
            JP
          </span>
          <span>JobPortal</span>
        </Link>

        <nav className="flex gap-6">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/jobs" className="hover:text-blue-300">
            Jobs
          </Link>
          <Link href="/jobs" className="hover:text-blue-300">
            Post s Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
