import { event } from "@/lib/event";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: `Judges | ${event.name}`,
};

const PLACEHOLDER_JUDGES = [
  { name: "Dr. Ana Vargas", title: "AI Research Director", company: "CONCYTEC", expertise: ["NLP", "Computer Vision"] },
  { name: "Luis Torres", title: "VP Engineering", company: "Rappi", expertise: ["System Design", "ML Ops"] },
  { name: "Sofia Mendez", title: "Founder", company: "LatamTech", expertise: ["Product", "AI Strategy"] },
  { name: "Roberto Silva", title: "Professor", company: "UNMSM", expertise: ["Algorithms", "Theoretical CS"] },
];

export default function JudgesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">Jury</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
              Our <span className="text-[var(--accent)]">Judges</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLACEHOLDER_JUDGES.map((j) => (
              <div key={j.name} className="rounded-lg border border-white/5 bg-[var(--surface)] p-6 text-center">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-white/5" />
                <h3 className="font-medium">{j.name}</h3>
                <p className="text-xs text-[var(--muted)]">{j.title}</p>
                <p className="text-xs text-[var(--accent)]">{j.company}</p>
                <div className="mt-3 flex flex-wrap gap-1 justify-center">
                  {j.expertise.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-[var(--muted)]">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
