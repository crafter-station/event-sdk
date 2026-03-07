"use client";

import { event } from "@/lib/event";
import Image from "next/image";

export function Footer() {
	return (
		<footer className="border-t-3 border-[var(--border)] py-12 px-4">
			<div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-8">
				<div className="max-w-sm">
					<Image
						src={event.brand?.logos?.primary ?? "/assets/SS-Brand-Long-Pink.png"}
						alt={event.name}
						width={200}
						height={50}
					/>
					{event.tagline && <p className="mt-2 text-xs text-[var(--muted)]">{event.tagline}</p>}
				</div>
				<div className="flex gap-12 text-xs text-[var(--muted)]">
					<div className="flex flex-col gap-2">
						<span className="font-mono text-[var(--accent)] uppercase tracking-wider text-[10px]">
							Evento
						</span>
						<a href="/speakers" className="hover:text-[var(--foreground)] transition-colors">Ponentes</a>
						<a href="/mentors" className="hover:text-[var(--foreground)] transition-colors">Mentoras</a>
						<a href="/sponsors" className="hover:text-[var(--foreground)] transition-colors">Sponsors</a>
					</div>
					<div className="flex flex-col gap-2">
						<span className="font-mono text-[var(--accent)] uppercase tracking-wider text-[10px]">
							Recursos
						</span>
						<a href="#faq" className="hover:text-[var(--foreground)] transition-colors">FAQ</a>
						<a href="mailto:hello@sheships.dev" className="hover:text-[var(--foreground)] transition-colors">Contacto</a>
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-6xl mt-8 pt-8 border-t-3 border-[var(--border)]">
				<p className="text-[10px] text-[var(--muted)]">
					Built with{" "}
					<a href="https://github.com/crafter-station/event-sdk" className="text-[var(--accent)] hover:underline">
						@event-sdk
					</a>
					{" "}by Crafter Station
				</p>
			</div>
		</footer>
	);
}
