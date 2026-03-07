import { event } from "@/lib/event";
import { spaceGrotesk, spaceMono } from "@/lib/fonts";
import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
	title: event.name,
	description: event.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
