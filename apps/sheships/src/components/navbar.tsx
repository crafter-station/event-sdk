"use client";

import { event } from "@/lib/event";
import { useTranslation } from "@event-sdk/i18n";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
	const { t, locale, toggleLocale } = useTranslation();
	const pathname = usePathname();
	const [mobileOpen, setMobileOpen] = useState(false);

	const links = [
		{ href: "/speakers", label: t.nav.speakers },
		{ href: "/mentors", label: t.nav.mentors },
		{ href: "/sponsors", label: t.nav.sponsors },
		{ href: "#faq", label: t.nav.faq },
	];

	const linkClass = (href: string) =>
		`text-xs font-mono uppercase tracking-wider transition-colors ${
			pathname === href
				? "text-[var(--foreground)]"
				: "text-[var(--muted)] hover:text-[var(--foreground)]"
		}`;

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-b-3 border-[var(--border)] bg-[var(--background)]">
			<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
				<Link href="/" className="flex items-center">
					<Image
						src={event.brand?.logos?.icon ?? "/assets/SS-PinkSheep-Icon.png"}
						alt={event.name}
						width={32}
						height={32}
					/>
				</Link>

				<div className="hidden md:flex items-center gap-6">
					{links.map((l) => (
						<Link key={l.href} href={l.href} className={linkClass(l.href)}>
							{l.label}
						</Link>
					))}
					<button
						type="button"
						onClick={toggleLocale}
						className="brutalist-button px-2 py-1 text-[10px] text-[var(--muted)]"
					>
						{locale === "en" ? "ES" : "EN"}
					</button>
					<Link
						href="#register"
						className="brutalist-button bg-[var(--accent)] px-4 py-1.5 text-xs text-[var(--accent-foreground)]"
					>
						{t.nav.register}
					</Link>
				</div>

				<button
					type="button"
					onClick={() => setMobileOpen((v) => !v)}
					className="md:hidden brutalist-button p-1.5 text-[var(--muted)]"
					aria-label="Toggle menu"
				>
					{mobileOpen ? <X size={16} weight="fill" /> : <List size={16} weight="fill" />}
				</button>
			</div>

			{mobileOpen && (
				<div className="md:hidden border-t-3 border-[var(--border)] bg-[var(--background)] px-4 py-4 flex flex-col gap-4">
					{links.map((l) => (
						<Link key={l.href} href={l.href} className={linkClass(l.href)} onClick={() => setMobileOpen(false)}>
							{l.label}
						</Link>
					))}
					<div className="flex items-center gap-3 pt-2 border-t-3 border-[var(--border)]">
						<button
							type="button"
							onClick={toggleLocale}
							className="brutalist-button px-2 py-1 text-[10px] text-[var(--muted)]"
						>
							{locale === "en" ? "ES" : "EN"}
						</button>
						<Link
							href="#register"
							className="brutalist-button bg-[var(--accent)] px-4 py-1.5 text-xs text-[var(--accent-foreground)]"
							onClick={() => setMobileOpen(false)}
						>
							{t.nav.register}
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
