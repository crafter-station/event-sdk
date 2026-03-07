"use client";

import { AnimatedGroup } from "@/components/motion/animated-group";
import { MENTORS } from "@/lib/data";
import Image from "next/image";

export function Mentors() {
	return (
		<section className="py-20 px-6" id="mentors">
			<div className="mx-auto max-w-6xl">
				<div className="text-center mb-12">
					<p className="font-mono text-xs text-[var(--accent-secondary)] tracking-widest uppercase mb-2">
						Mentoras
					</p>
					<h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
						Nuestras <span className="text-[var(--accent-secondary)]">Mentoras</span>
					</h2>
				</div>
				<AnimatedGroup
					preset="blur-slide"
					triggerOnView
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
				>
					{MENTORS.map((m) => (
						<div
							key={m.name}
							className="brutalist-card bg-[var(--surface)] p-5"
						>
							<div className="mb-3 flex items-center gap-3">
								<Image
									src={m.photo}
									alt={m.name}
									width={56}
									height={56}
									className="h-14 w-14 object-cover border-2 border-[var(--border)]"
								/>
								<div>
									<h3 className="font-medium text-sm">{m.name}</h3>
									<p className="text-[11px] text-[var(--muted)]">
										{m.title}{m.company ? ` @ ${m.company}` : ""}
									</p>
								</div>
							</div>
							<span className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] border border-[var(--accent-secondary)]/30">
								{m.area}
							</span>
						</div>
					))}
				</AnimatedGroup>
			</div>
		</section>
	);
}
