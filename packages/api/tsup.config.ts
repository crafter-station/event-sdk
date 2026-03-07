import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm"],
	dts: true,
	clean: true,
	sourcemap: true,
	external: [
		"@event-sdk/core",
		"@event-sdk/db",
		"@event-sdk/badge",
		"@neondatabase/serverless",
		"drizzle-orm",
		"sharp",
		"satori",
	],
});
