import { event } from "@/lib/event";

export function Footer() {
	return (
		<footer className="border-t border-white/5 py-12 px-4">
			<div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-8">
				<div className="max-w-sm">
					<p className="font-mono text-sm font-medium">{event.name}</p>
					{event.tagline && <p className="mt-2 text-xs text-[var(--muted)]">{event.tagline}</p>}
				</div>
				<div className="flex gap-12 text-xs text-[var(--muted)]">
					<div className="flex flex-col gap-2">
						<span className="font-mono text-[var(--accent)] uppercase tracking-wider text-[10px]">
							Event
						</span>
						<a href="/speakers" className="hover:text-white transition-colors">
							Speakers
						</a>
						<a href="/schedule" className="hover:text-white transition-colors">
							Schedule
						</a>
						<a href="/sponsors" className="hover:text-white transition-colors">
							Sponsors
						</a>
					</div>
					<div className="flex flex-col gap-2">
						<span className="font-mono text-[var(--accent)] uppercase tracking-wider text-[10px]">
							Resources
						</span>
						{event.features.jobs?.enabled && (
							<a href="/jobs" className="hover:text-white transition-colors">
								Jobs
							</a>
						)}
						<a href="/faq" className="hover:text-white transition-colors">
							FAQ
						</a>
						{event.features.deck && (
							<a href="/deck" className="hover:text-white transition-colors">
								Sponsor Deck
							</a>
						)}
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-6xl mt-8 pt-8 border-t border-white/5">
				<p className="text-[10px] text-[var(--muted)]">
					Built with{" "}
					<a href="https://event-sdk.crafter.run" className="text-[var(--accent)] hover:underline">
						@event-sdk
					</a>
				</p>
			</div>
		</footer>
	);
}
