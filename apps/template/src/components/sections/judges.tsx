import { event } from "@/lib/event";

const PLACEHOLDER_JUDGES = [
  { name: "Dr. Ana Vargas", title: "AI Research Director", company: "CONCYTEC" },
  { name: "Luis Torres", title: "VP Engineering", company: "Rappi" },
  { name: "Sofia Mendez", title: "Founder", company: "LatamTech" },
];

export function Judges() {
  if (!event.features.judges?.enabled) return null;

  return (
    <section className="py-20 px-6" id="judges">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">Judges</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
            Our <span className="text-[var(--accent)]">Judges</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLACEHOLDER_JUDGES.map((j) => (
            <div key={j.name} className="rounded-lg border border-white/5 bg-[var(--surface)] p-6 text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-white/5" />
              <h3 className="font-medium">{j.name}</h3>
              <p className="text-xs text-[var(--muted)]">{j.title}</p>
              <p className="text-xs text-[var(--accent)]">{j.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
