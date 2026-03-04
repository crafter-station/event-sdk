import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: [
		"@event-sdk/core",
		"@event-sdk/db",
		"@event-sdk/i18n",
		"@event-sdk/ui",
		"@event-sdk/badge-3d",
		"@event-sdk/react",
	],
};

export default nextConfig;
