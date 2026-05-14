// Тип вакансии как в db.json
type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  category: string;
  type: string;
  description: string;
  requirements: string[];
};

export default function JobCard({ job }: { job: Job }) {
  // Берём первую букву компании для аватарки
  const avatarLetter = job.company.charAt(0).toUpperCase();
  // Показываем первые 3 навыка, остальные считаем
  const visibleReqs = job.requirements.slice(0, 5);
  const moreCount = job.requirements.length - 5;

  return (
    // Карточка: белая, с границей, скруглённая, тень при наведении
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
      {/* Верх: заголовок + аватарка */}
      <div className="flex justify-between items-start mb-1">
        <div>
          {/* Название вакансии */}
          <h3 className="text-xl font-semibold text-slate-900">{job.title}</h3>
          {/* Компания */}
          <p className="text-slate-500 text-sm mt-1">{job.company}</p>
        </div>
        {/* Аватарка компании - тёмно-синий квадрат с буквой */}
        <div className="w-10 h-10 bg-[#0f3d7a] text-white rounded-lg flex items-center justify-center font-bold">
          {avatarLetter}
        </div>
      </div>

      {/* Описание */}
      <p className="text-slate-600 mt-4 mb-4 leading-relaxed">
        {job.description}
      </p>

      {/* Бейджи: категория и тип */}
      <div className="flex gap-2 mb-4">
        {/* Technology - голубой */}
        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-md font-medium">
          {job.category}
        </span>
        {/* Full-time - зелёный */}
        <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-md font-medium">
          {job.type}
        </span>
      </div>

      {/* Локация и зарплата с иконками */}
      <div className="flex items-center gap-4 text-slate-600 mb-4">
        <span className="flex items-center gap-1">📍 {job.location}</span>
        <span className="flex items-center gap-1">💰 {job.salary}</span>
      </div>

      {/* Требования */}
      <div className="mb-5">
        <p className="text-slate-500 text-sm mb-2">Requirements:</p>
        <div className="flex flex-wrap gap-2">
          {/* Выводим первые 3 навыка */}
          {visibleReqs.map((req) => (
            <span
              key={req}
              className="border border-slate-300 text-slate-700 text-xs px-3 py-1 rounded-md"
            >
              {req}
            </span>
          ))}
          {/* Если навыков больше 3, показываем +N more */}
          {/* {moreCount > 0 && (
            <span className="border border-slate-300 text-slate-500 text-xs px-3 py-1 rounded-md">
              +{moreCount} more
            </span>
          )} */}
        </div>
      </div>

      {/* Кнопка */}
      <button className="w-full bg-[#0f3d7a] hover:bg-[#0c3263] text-white py-3 rounded-lg font-medium transition">
        View Details
      </button>
    </div>
  );
}
