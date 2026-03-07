"use client";

import { event } from "@/lib/event";
import Image from "next/image";

export function Hero() {
	const dateStr = event.dates
		? `${event.dates.start.toLocaleDateString("es-PE", { month: "short", day: "numeric" })} - ${event.dates.end.toLocaleDateString("es-PE", { month: "short", day: "numeric", year: "numeric" })}`
		: undefined;

	return (
		<section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-32">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,var(--accent)_0%,transparent_70%)] opacity-[0.06] pointer-events-none" />
			<div className="relative text-center max-w-3xl brutalist-card p-8 bg-[var(--background)]">
				<Image
					src={event.brand?.logos?.primary ?? "/assets/SS-Brand-Long-Pink.png"}
					alt={event.name}
					width={400}
					height={100}
					className="mx-auto mb-6"
					priority
				/>
				<p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4">
					{event.type.toUpperCase()} / {event.location?.format?.toUpperCase()}
				</p>
				<h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
					{event.name}
				</h1>
				{event.tagline && (
					<p className="mt-4 text-lg text-[var(--muted)]">{event.tagline}</p>
				)}
				{(dateStr || event.location) && (
					<div className="mt-6 flex items-center justify-center gap-4 text-sm text-[var(--muted)]">
						{dateStr && <span className="font-mono">{dateStr}</span>}
						{dateStr && event.location?.city && <span className="text-[var(--border)]">|</span>}
						{event.location && (
							<span className="font-mono">
								{event.location.city}, {event.location.country}
							</span>
						)}
					</div>
				)}
				<div className="mt-8 flex items-center justify-center gap-3">
					<a
						href="#register"
						className="brutalist-button bg-[var(--accent)] text-[var(--accent-foreground)] px-6 py-2.5 text-sm"
					>
						Register Now
					</a>
					<a
						href="#sponsors"
						className="brutalist-button bg-[var(--accent-secondary)] text-[var(--accent-foreground)] px-6 py-2.5 text-sm"
					>
						Become a Sponsor
					</a>
				</div>
			</div>
		</section>
	);
}
