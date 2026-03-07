"use client";

import { event } from "@/lib/event";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

export function FAQ() {
	const faqConfig = event.features.faq;
	const [open, setOpen] = useState<number | null>(null);

	if (!faqConfig || faqConfig.items.length === 0) return null;

	return (
		<section className="py-20 px-6" id="faq">
			<div className="mx-auto max-w-3xl">
				<div className="text-center mb-12">
					<p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">
						FAQ
					</p>
					<h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
						Preguntas <span className="text-[var(--accent)]">Frecuentes</span>
					</h2>
				</div>
				<div className="space-y-2">
					{faqConfig.items.map((item, i) => (
						<div key={item.question} className="brutalist-card bg-[var(--surface)] overflow-hidden">
							<button
								type="button"
								onClick={() => setOpen(open === i ? null : i)}
								className="flex w-full items-center justify-between p-4 text-left text-sm font-medium transition-colors hover:bg-white/[0.02]"
							>
								{item.question}
								<CaretDown
									size={16}
									weight="fill"
									className={`ml-4 shrink-0 text-[var(--muted)] transition-transform duration-300 ${
										open === i ? "rotate-180" : ""
									}`}
								/>
							</button>
							<div
								className="grid transition-[grid-template-rows] duration-300"
								style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
							>
								<div className="overflow-hidden">
									<div className="px-4 pb-4 text-sm text-[var(--muted)]">{item.answer}</div>
								</div>
							</div>
						</div>
					))}
				</div>
				{faqConfig.contactUrl && (
					<div className="mt-8 text-center">
						<a href={faqConfig.contactUrl} className="text-sm text-[var(--accent)] hover:underline">
							Don't see your question? Contact us
						</a>
					</div>
				)}
			</div>
		</section>
	);
}
