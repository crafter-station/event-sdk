"use client";

import { AnimatedGroup } from "@/components/motion/animated-group";
import { COMMUNITY_PARTNERS } from "@/lib/data";
import Image from "next/image";

export function CommunityPartners() {
	return (
		<section className="py-20 px-6" id="community-partners">
			<div className="mx-auto max-w-6xl">
				<div className="text-center mb-12">
					<p className="font-mono text-xs text-[var(--accent-secondary)] tracking-widest uppercase mb-2">
						Comunidades Aliadas
					</p>
					<h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
						Nuestras <span className="text-[var(--accent-secondary)]">Comunidades</span>
					</h2>
				</div>
				<AnimatedGroup
					preset="fade"
					triggerOnView
					className="flex items-center justify-center gap-6 flex-wrap"
				>
					{COMMUNITY_PARTNERS.map((p) => (
						<div
							key={p.name}
							className="brutalist-card bg-[var(--surface)] h-20 w-44 flex items-center justify-center p-4"
						>
							<Image
								src={p.logo}
								alt={p.name}
								width={120}
								height={40}
								className="max-h-10 w-auto object-contain"
							/>
						</div>
					))}
				</AnimatedGroup>
			</div>
		</section>
	);
}
