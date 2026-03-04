"use client";

import { event } from "@/lib/event";
import { useTranslation } from "@event-sdk/i18n";
import { useEffect, useState } from "react";

export function Countdown() {
	const { t } = useTranslation();
	const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

	useEffect(() => {
		if (!event.dates?.start) return;
		const target = event.dates.start.getTime();
		const update = () => {
			const diff = Math.max(0, target - Date.now());
			setTime({
				days: Math.floor(diff / 86400000),
				hours: Math.floor((diff % 86400000) / 3600000),
				minutes: Math.floor((diff % 3600000) / 60000),
				seconds: Math.floor((diff % 60000) / 1000),
			});
		};
		update();
		const id = setInterval(update, 1000);
		return () => clearInterval(id);
	}, []);

	if (!event.dates?.start) return null;

	const units = [
		{ value: time.days, label: t.countdown.days },
		{ value: time.hours, label: t.countdown.hours },
		{ value: time.minutes, label: t.countdown.minutes },
		{ value: time.seconds, label: t.countdown.seconds },
	];

	return (
		<section className="py-20 px-6">
			<div className="mx-auto max-w-4xl text-center">
				<p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4">
					{t.countdown.label}
				</p>
				<div className="flex items-center justify-center gap-4 md:gap-8">
					{units.map((u) => (
						<div key={u.label} className="flex flex-col items-center">
							<span className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tabular-nums">
								{String(u.value).padStart(2, "0")}
							</span>
							<span className="mt-1 text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
								{u.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
