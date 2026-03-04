import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

export const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
});

export const fontBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});
