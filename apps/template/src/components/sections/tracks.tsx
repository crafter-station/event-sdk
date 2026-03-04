import { event } from "@/lib/event";

export function Tracks() {
	const hackathon = event.features.hackathon;
	if (!hackathon?.enabled || !hackathon.tracks) return null;

	return (
		<section className="py-20 px-6" id="tracks">
			<div className="mx-auto max-w-6xl">
				<div className="text-center mb-12">
					<p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">
						Hackathon
					</p>
					<h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
						<span className="text-[var(--accent)]">Tracks</span>
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{hackathon.tracks.map((track) => (
						<div
							key={track.slug}
							className="rounded-lg border border-white/5 bg-[var(--surface)] p-6 transition-colors hover:border-white/10"
						>
							<div className="mb-3 flex items-center gap-2">
								<div className="h-3 w-3 rounded-full" style={{ background: track.color }} />
								<h3 className="font-medium">{track.name}</h3>
							</div>
							{track.description && (
								<p className="text-sm text-[var(--muted)]">{track.description}</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
