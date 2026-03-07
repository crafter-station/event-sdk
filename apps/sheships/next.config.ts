import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: [
		"@event-sdk/core",
		"@event-sdk/db",
		"@event-sdk/i18n",
		"@event-sdk/ui",
	],
};

export default nextConfig;
