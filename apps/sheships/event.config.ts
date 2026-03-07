import { defineEvent } from "@event-sdk/core";

const event = defineEvent({
	name: "She Ships",
	slug: "she-ships",
	tagline: "48-hour global hackathon for women builders",
	type: "hackathon",
	dates: {
		start: new Date("2026-03-06T09:00:00-05:00"),
		end: new Date("2026-03-08T18:00:00-05:00"),
	},
	location: {
		city: "Global",
		country: "LATAM",
		format: "virtual",
	},
	brand: {
		colors: {
			primary: "#e9a1c9",
			secondary: "#7fe179",
			background: "#131414",
			surface: "#1e1f1f",
			text: "#f2f2ef",
			textMuted: "#6b7280",
		},
		fonts: {
			display: { family: "Space Grotesk", weights: [700, 800], source: "google" as const },
			body: { family: "Space Mono", weights: [400, 700], source: "google" as const },
			mono: { family: "Space Mono", weights: [400], source: "google" as const },
		},
		logos: {
			primary: "/assets/SS-Brand-Long-Pink.png",
			icon: "/assets/SS-PinkSheep-Icon.png",
		},
		badge: {
			template: "card" as const,
			dimensions: { width: 1080, height: 1440 },
			qrCode: { enabled: true, position: "bottom-left" as const },
			numberFormat: "###",
		},
		poster: {
			dimensions: { width: 1080, height: 1920 },
			templates: ["half-face" as const, "eyes" as const, "smile" as const],
		},
	},
	style: "brutal",
	features: {
		speakers: { enabled: true },
		sponsors: {
			tiers: [
				{
					id: "main",
					name: "Sponsors",
					slug: "main",
					price: 0,
					color: "#e9a1c9",
					benefits: [],
				},
			],
			ctaUrl: "mailto:sponsors@sheships.dev",
			ctaLabel: "Become a Sponsor",
		},
		schedule: { enabled: true, timezone: "America/Lima" },
		judges: { enabled: false },
		mentors: { enabled: true, ctaUrl: "/mentor", ctaLabel: "Become a Mentor" },
		jobs: { enabled: false },
		hackathon: {
			enabled: true,
			tracks: [
				{ name: "AI for Social Impact", slug: "social-impact", color: "#e9a1c9" },
				{ name: "Developer Tools", slug: "dev-tools", color: "#7fe179" },
				{ name: "Open Track", slug: "open", color: "#f2f2ef" },
			],
			submissionDeadline: "2026-03-08T15:00:00-05:00",
		},
		faq: {
			items: [
				{ question: "Who can participate?", answer: "Anyone who identifies as a woman or non-binary person. All skill levels welcome." },
				{ question: "Is it free?", answer: "Yes, completely free to participate." },
				{ question: "Do I need a team?", answer: "You can participate solo or in teams of up to 4." },
				{ question: "What should I bring?", answer: "Your laptop, charger, and enthusiasm. It's fully remote!" },
				{ question: "Are there prizes?", answer: "Yes! Each track has prizes. Total prize pool announced closer to the event." },
			],
			contactUrl: "mailto:hello@sheships.dev",
		},
		community: {
			whatsappUrl: "https://chat.whatsapp.com/example",
			discordUrl: "https://discord.gg/example",
		},
		communityPartners: { enabled: true },
		registration: { provider: "luma", requireVerification: true },
		badges: true,
		i18n: true,
		deck: false,
	},
});

export default event;
