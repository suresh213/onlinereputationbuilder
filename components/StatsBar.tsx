"use client";

const stats = [
  { number: "1200+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Platforms Covered" },
  { number: "250+", label: "Brands Trusted Us" },
];

export default function StatsBar() {
  return (
    <div className="bg-brand-blue py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-4xl font-bold text-white mb-1">{s.number}</p>
            <p className="text-white/60 text-sm font-medium uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
