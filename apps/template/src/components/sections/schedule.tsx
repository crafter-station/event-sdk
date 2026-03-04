import { event } from "@/lib/event";

const PLACEHOLDER_SESSIONS = [
  { time: "09:00", title: "Registration & Check-in", type: "break" },
  { time: "10:00", title: "Opening Keynote", type: "talk", speaker: "Jane Doe" },
  { time: "11:00", title: "Hacking Begins!", type: "workshop" },
  { time: "13:00", title: "Lunch Break", type: "break" },
  { time: "14:00", title: "Mentor Office Hours", type: "networking" },
  { time: "18:00", title: "Day 1 Wrap-up", type: "talk", speaker: "Carlos Ruiz" },
];

export function Schedule() {
  if (!event.features.schedule?.enabled) return null;

  return (
    <section className="py-20 px-6" id="schedule">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">Schedule</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
            Event <span className="text-[var(--accent)]">Agenda</span>
          </h2>
        </div>
        <div className="space-y-2">
          {PLACEHOLDER_SESSIONS.map((s) => (
            <div key={`${s.time}-${s.title}`} className="flex items-center gap-4 rounded-lg border border-white/5 bg-[var(--surface)] p-4 transition-colors hover:border-white/10">
              <span className="font-mono text-sm text-[var(--muted)] w-14 shrink-0">{s.time}</span>
              <div className="flex-1">
                <p className="text-sm font-medium">{s.title}</p>
                {s.speaker && <p className="text-xs text-[var(--muted)]">{s.speaker}</p>}
              </div>
              <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-mono uppercase text-[var(--muted)]">
                {s.type}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/schedule" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
            Full schedule →
          </a>
        </div>
      </div>
    </section>
  );
}
