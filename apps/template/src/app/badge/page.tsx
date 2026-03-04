import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { event } from "@/lib/event";
import { BadgeGenerator } from "./badge-generator";

export const metadata = {
	title: `Badge | ${event.name}`,
	description: "Generate your personalized event badge",
};

export default function BadgePage() {
	return (
		<>
			<Navbar />
			<main className="pt-20 px-6 pb-20">
				<div className="mx-auto max-w-2xl">
					<div className="text-center mb-12">
						<p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">
							Badge
						</p>
						<h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
							Your <span className="text-[var(--accent)]">Badge</span>
						</h1>
						<p className="mt-4 text-sm text-[var(--muted)]">
							Generate your personalized event badge with 3D particles.
						</p>
					</div>
					<BadgeGenerator />
				</div>
			</main>
			<Footer />
		</>
	);
}
