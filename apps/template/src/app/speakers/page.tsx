import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { event } from "@/lib/event";

export const metadata = {
	title: `Speakers | ${event.name}`,
};

const PLACEHOLDER_SPEAKERS = [
	{
		name: "Jane Doe",
		title: "ML Engineer",
		company: "TechCorp",
		talk: "Building RAG at Scale",
		bio: "10+ years in ML.",
	},
	{
		name: "Carlos Ruiz",
		title: "CTO",
		company: "StartupAI",
		talk: "AI-First Architecture",
		bio: "Built 3 unicorns.",
	},
	{
		name: "Maria Chen",
		title: "Research Lead",
		company: "DeepLab",
		talk: "LLMs in Production",
		bio: "Published 20+ papers.",
	},
	{
		name: "Alex Kim",
		title: "DevRel",
		company: "OpenAI",
		talk: "Prompt Engineering 2.0",
		bio: "Community builder.",
	},
	{
		name: "Luna Patel",
		title: "Staff Engineer",
		company: "Vercel",
		talk: "Edge AI",
		bio: "Edge computing pioneer.",
	},
	{
		name: "Diego Morales",
		title: "Founder",
		company: "LatamAI",
		talk: "AI in LATAM",
		bio: "Building LATAM's AI future.",
	},
];

export default function SpeakersPage() {
	return (
		<>
			<Navbar />
			<main className="pt-20 px-6 pb-20">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">
							Speakers
						</p>
						<h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
							Meet the <span className="text-[var(--accent)]">Speakers</span>
						</h1>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{PLACEHOLDER_SPEAKERS.map((s) => (
							<div
								key={s.name}
								className="rounded-lg border border-white/5 bg-[var(--surface)] p-6"
							>
								<div className="mb-4 h-24 w-24 rounded-full bg-white/5" />
								<h3 className="font-medium text-lg">{s.name}</h3>
								<p className="text-xs text-[var(--muted)]">
									{s.title} @ {s.company}
								</p>
								<p className="mt-2 text-sm text-[var(--accent)]">{s.talk}</p>
								<p className="mt-2 text-xs text-[var(--muted)]">{s.bio}</p>
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
