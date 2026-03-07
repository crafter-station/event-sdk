"use client";

import { event } from "@/lib/event";
import { WhatsappLogo, DiscordLogo } from "@phosphor-icons/react";

export function Community() {
	const community = event.features.community;
	if (!community) return null;

	return (
		<section className="py-20 px-6" id="community">
			<div className="mx-auto max-w-2xl text-center">
				<p className="font-mono text-xs text-[var(--accent-secondary)] tracking-widest uppercase mb-2">
					Community
				</p>
				<h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4">
					Join the <span className="text-[var(--accent-secondary)]">Community</span>
				</h2>
				<p className="text-sm text-[var(--muted)] mb-8">
					Connect with other builders before, during, and after the hackathon.
				</p>
				<div className="flex items-center justify-center gap-3">
					{community.whatsappUrl && (
						<a
							href={community.whatsappUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="brutalist-button inline-flex items-center gap-2 bg-[var(--surface)] px-6 py-2.5 text-sm text-[var(--foreground)]"
						>
							<WhatsappLogo size={16} weight="fill" className="text-[#25D366]" />
							WhatsApp
						</a>
					)}
					{community.discordUrl && (
						<a
							href={community.discordUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="brutalist-button inline-flex items-center gap-2 bg-[var(--surface)] px-6 py-2.5 text-sm text-[var(--foreground)]"
						>
							<DiscordLogo size={16} weight="fill" className="text-[#5865F2]" />
							Discord
						</a>
					)}
				</div>
			</div>
		</section>
	);
}
