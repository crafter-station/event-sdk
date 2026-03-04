import { event } from "@/lib/event";

export function Hero() {
  const dateStr = event.dates
    ? `${event.dates.start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${event.dates.end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`
    : undefined;

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 pt-20 pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,var(--accent)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />
      <div className="relative text-center max-w-3xl">
        <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4">
          @event-sdk/template
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
          {event.name}
        </h1>
        {event.tagline && (
          <p className="mt-4 text-lg text-[var(--muted)]">{event.tagline}</p>
        )}
        {(dateStr || event.location) && (
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-[var(--muted)]">
            {dateStr && <span className="font-mono">{dateStr}</span>}
            {dateStr && event.location?.city && <span className="text-white/20">|</span>}
            {event.location && (
              <span className="font-mono">
                {event.location.city}{event.location.country ? `, ${event.location.country}` : ""}
                {event.location.format !== "in-person" && ` (${event.location.format})`}
              </span>
            )}
          </div>
        )}
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#register"
            className="rounded-md bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90"
          >
            Register Now
          </a>
          {event.features.deck && (
            <a
              href="/deck"
              className="rounded-md border border-white/10 px-6 py-2.5 text-sm font-medium text-[var(--muted)] transition-colors hover:text-white hover:border-white/20"
            >
              Sponsor Deck
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
