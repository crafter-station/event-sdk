# @event-sdk

Open-source event platform SDK. Clone, edit one config file, deploy.

## Packages

| Package | Description |
|---------|-------------|
| `@event-sdk/core` | Event config, types, `defineEvent()` factory |
| `@event-sdk/db` | Drizzle ORM schemas (12 tables) |
| `@event-sdk/i18n` | Typed EN/ES translations + React provider |
| `@event-sdk/ui` | Section components (hero, sponsors, speakers, schedule, etc.) |
| `@event-sdk/badge` | Badge generation pipeline (Satori + Sharp) |
| `@event-sdk/badge-3d` | 3D particle badge system (Three.js + Rapier) |
| `@event-sdk/react` | React components (Badge3DScene, BadgeCard) |

## Quick Start

```bash
git clone https://github.com/crafter-station/event-sdk.git
cd event-sdk
bun install

# Edit the config
$EDITOR apps/template/event.config.ts

# Run
bun run build && cd apps/template && bun dev
```

## `event.config.ts`

The **one file** you edit. Everything else adapts.

```ts
import { defineEvent } from "@event-sdk/core";

export default defineEvent({
  name: "My Event",
  slug: "my-event",
  type: "hackathon", // "conference" | "meetup" | "workshop" | "hybrid"
  tagline: "Build something real",
  dates: { start: new Date("2026-06-15"), end: new Date("2026-06-17") },
  location: { city: "Lima", country: "PE", format: "hybrid" },
  brand: {
    colors: { primary: "#00FF87", secondary: "#00D1FF", background: "#0A0A0B" },
    // ...
  },
  features: {
    speakers: { enabled: true },
    sponsors: { tiers: [...], ctaUrl: "/deck" },
    schedule: { enabled: true },
    judges: { enabled: true },
    jobs: { enabled: true },
    hackathon: { enabled: true, tracks: [...] },
    faq: { items: [...] },
    community: { whatsappUrl: "...", discordUrl: "..." },
    badges: true,
    i18n: true,
    deck: true,
  },
});
```

## Template Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page (hero, countdown, sponsors, speakers, schedule, FAQ) |
| `/speakers` | Speaker grid with bios |
| `/schedule` | Full multi-day agenda |
| `/sponsors` | Tiered sponsor showcase |
| `/jobs` | Job board from sponsor companies |
| `/judges` | Judge grid with expertise tags |
| `/faq` | Accordion FAQ |
| `/deck` | Scroll-snap sponsor pitch deck |
| `/badge` | Badge generator with 3D preview |
| `/register` | Multi-step registration |
| `/submit` | Hackathon project submission |
| `/submissions` | Project gallery |

## Stack

| Layer | Tech |
|-------|------|
| Runtime | Bun |
| Framework | Next.js 15, React 19, App Router |
| Styling | Tailwind CSS 4 |
| DB | Drizzle ORM + Neon (PostgreSQL) |
| i18n | Typed context (EN/ES) |
| 3D | Three.js, React Three Fiber, Rapier |
| Lint | Biome |

## License

AGPL-3.0
