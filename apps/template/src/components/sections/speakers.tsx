import { event } from "@/lib/event";

const PLACEHOLDER_SPEAKERS = [
  { name: "Jane Doe", title: "ML Engineer", company: "TechCorp", talk: "Building RAG at Scale" },
  { name: "Carlos Ruiz", title: "CTO", company: "StartupAI", talk: "AI-First Architecture" },
  { name: "Maria Chen", title: "Research Lead", company: "DeepLab", talk: "LLMs in Production" },
];

export function Speakers() {
  if (!event.features.speakers?.enabled) return null;

  return (
    <section className="py-20 px-6" id="speakers">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">Speakers</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
            Meet the <span className="text-[var(--accent)]">Speakers</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLACEHOLDER_SPEAKERS.map((s) => (
            <div key={s.name} className="rounded-lg border border-white/5 bg-[var(--surface)] p-6 transition-colors hover:border-white/10">
              <div className="mb-4 h-20 w-20 rounded-full bg-white/5" />
              <h3 className="font-medium">{s.name}</h3>
              <p className="text-xs text-[var(--muted)]">{s.title} @ {s.company}</p>
              <p className="mt-3 text-sm text-[var(--accent)]">{s.talk}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/speakers" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
            View all speakers →
          </a>
        </div>
      </div>
    </section>
  );
}
