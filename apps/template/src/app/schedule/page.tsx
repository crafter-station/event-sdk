import { event } from "@/lib/event";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: `Schedule | ${event.name}`,
};

const DAYS = [
  {
    label: "Day 1 — June 15",
    sessions: [
      { time: "09:00", title: "Registration & Check-in", type: "break" },
      { time: "10:00", title: "Opening Keynote", type: "talk" },
      { time: "11:00", title: "Hacking Begins!", type: "workshop" },
      { time: "13:00", title: "Lunch", type: "break" },
      { time: "14:00", title: "Mentor Office Hours", type: "networking" },
      { time: "18:00", title: "Lightning Talks", type: "talk" },
    ],
  },
  {
    label: "Day 2 — June 16",
    sessions: [
      { time: "09:00", title: "Hacking Continues", type: "workshop" },
      { time: "12:00", title: "Lunch", type: "break" },
      { time: "14:00", title: "Workshop: Deploy with Vercel", type: "workshop" },
      { time: "18:00", title: "Progress Check-in", type: "networking" },
    ],
  },
  {
    label: "Day 3 — June 17",
    sessions: [
      { time: "09:00", title: "Final Sprint", type: "workshop" },
      { time: "13:00", title: "Submissions Close", type: "break" },
      { time: "14:00", title: "Demo Presentations", type: "talk" },
      { time: "17:00", title: "Awards Ceremony", type: "talk" },
      { time: "18:00", title: "Closing & Networking", type: "networking" },
    ],
  },
];

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">Schedule</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
              Full <span className="text-[var(--accent)]">Agenda</span>
            </h1>
          </div>
          {DAYS.map((day) => (
            <div key={day.label} className="mb-12">
              <h2 className="font-mono text-sm text-[var(--accent)] mb-4">{day.label}</h2>
              <div className="space-y-2">
                {day.sessions.map((s) => (
                  <div key={`${s.time}-${s.title}`} className="flex items-center gap-4 rounded-lg border border-white/5 bg-[var(--surface)] p-4">
                    <span className="font-mono text-sm text-[var(--muted)] w-14 shrink-0">{s.time}</span>
                    <p className="text-sm font-medium flex-1">{s.title}</p>
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-mono uppercase text-[var(--muted)]">{s.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
