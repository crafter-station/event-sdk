"use client";

import { AnimatedGroup } from "@/components/motion/animated-group";
import { SPEAKERS } from "@/lib/data";
import Image from "next/image";

export function Speakers() {
	return (
		<section className="py-20 px-6" id="speakers">
			<div className="mx-auto max-w-6xl">
				<div className="text-center mb-12">
					<p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">
						Speakers
					</p>
					<h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
						Nuestras <span className="text-[var(--accent)]">Ponentes</span>
					</h2>
				</div>
				<AnimatedGroup
					preset="blur-slide"
					triggerOnView
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
				>
					{SPEAKERS.map((s) => (
						<div
							key={s.name}
							className="brutalist-card bg-[var(--surface)] p-5"
						>
							<div className="mb-4 flex items-center gap-3">
								<Image
									src={s.photo}
									alt={s.name}
									width={56}
									height={56}
									className="h-14 w-14 object-cover border-2 border-[var(--border)]"
								/>
								<div>
									<h3 className="font-medium text-sm">{s.name}</h3>
									<p className="text-[11px] text-[var(--muted)]">
										{s.title}{s.company ? ` @ ${s.company}` : ""}
									</p>
								</div>
							</div>
							{s.talk && (
								<p className="text-sm text-[var(--accent)]">{s.talk}</p>
							)}
							{s.country && (
								<p className="mt-2 text-[10px] text-[var(--muted)] font-mono uppercase tracking-wider">
									{s.country}
								</p>
							)}
						</div>
					))}
				</AnimatedGroup>
			</div>
		</section>
	);
}
