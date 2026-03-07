"use client";

import { I18nProvider } from "@event-sdk/i18n";

export function Providers({ children }: { children: React.ReactNode }) {
	return <I18nProvider defaultLocale="es">{children}</I18nProvider>;
}
