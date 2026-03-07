"use client";

import { AnimatedGroup } from "@/components/motion/animated-group";
import { SPONSORS } from "@/lib/data";
import Image from "next/image";

export function Sponsors() {
	return (
		<section className="py-20 px-6" id="sponsors">
			<div className="mx-auto max-w-6xl">
				<div className="text-center mb-12">
					<p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">
						Sponsors
					</p>
					<h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
						Nuestros <span className="text-[var(--accent)]">Sponsors</span>
					</h2>
				</div>
				<AnimatedGroup
					preset="fade"
					triggerOnView
					className="flex items-center justify-center gap-6 flex-wrap"
				>
					{SPONSORS.map((s) => (
						<a
							key={s.name}
							href={s.url || undefined}
							target={s.url ? "_blank" : undefined}
							rel={s.url ? "noopener noreferrer" : undefined}
							className="brutalist-card bg-[var(--surface)] h-20 w-44 flex items-center justify-center p-4"
						>
							<Image
								src={s.logo}
								alt={s.name}
								width={120}
								height={40}
								className="max-h-10 w-auto object-contain"
							/>
						</a>
					))}
				</AnimatedGroup>
				<div className="mt-12 text-center">
					<a
						href="mailto:sponsors@sheships.dev"
						className="brutalist-button inline-flex items-center gap-2 px-6 py-2.5 text-sm text-[var(--accent)]"
					>
						Become a Sponsor
					</a>
				</div>
			</div>
		</section>
	);
}
