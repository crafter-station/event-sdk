"use client";

import { event } from "@/lib/event";
import { useTranslation } from "@event-sdk/i18n";
import Link from "next/link";

export function Navbar() {
	const { t, locale, toggleLocale } = useTranslation();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[var(--background)]/80 backdrop-blur-xl">
			<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
				<Link href="/" className="font-mono text-sm font-medium tracking-tight">
					{event.name}
				</Link>
				<div className="flex items-center gap-6">
					<Link
						href="/speakers"
						className="text-xs text-[var(--muted)] hover:text-white transition-colors"
					>
						{t.nav.speakers}
					</Link>
					<Link
						href="/schedule"
						className="text-xs text-[var(--muted)] hover:text-white transition-colors"
					>
						{t.nav.schedule}
					</Link>
					<Link
						href="/sponsors"
						className="text-xs text-[var(--muted)] hover:text-white transition-colors"
					>
						{t.nav.sponsors}
					</Link>
					{event.features.jobs?.enabled && (
						<Link
							href="/jobs"
							className="text-xs text-[var(--muted)] hover:text-white transition-colors"
						>
							{t.nav.jobs}
						</Link>
					)}
					{event.features.deck && (
						<Link
							href="/deck"
							className="text-xs text-[var(--accent)] hover:underline transition-colors"
						>
							{t.nav.deck}
						</Link>
					)}
					{event.features.badges && (
						<Link
							href="/badge"
							className="text-xs text-[var(--muted)] hover:text-white transition-colors"
						>
							{t.nav.myBadge}
						</Link>
					)}
					<button
						type="button"
						onClick={toggleLocale}
						className="rounded border border-white/10 px-2 py-1 text-xs text-[var(--muted)] hover:text-white transition-colors"
					>
						{locale === "en" ? "ES" : "EN"}
					</button>
					<Link
						href="/register"
						className="rounded-md bg-[var(--accent)] px-4 py-1.5 text-xs font-medium text-[var(--background)] transition-opacity hover:opacity-90"
					>
						{t.nav.register}
					</Link>
				</div>
			</div>
		</nav>
	);
}
