import { event } from "@/lib/event";

export function Sponsors() {
  const sponsorConfig = event.features.sponsors;
  if (!sponsorConfig) return null;

  return (
    <section className="py-20 px-6" id="sponsors">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">Sponsors</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
            Our <span className="text-[var(--accent)]">Partners</span>
          </h2>
        </div>
        <div className="flex flex-col items-center gap-8">
          {sponsorConfig.tiers.map((tier) => (
            <div key={tier.id} className="text-center">
              <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: tier.color }}>
                {tier.name}
              </p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="h-16 w-40 rounded-lg border border-white/5 bg-[var(--surface)] flex items-center justify-center text-xs text-[var(--muted)]">
                  Sponsor Logo
                </div>
              </div>
            </div>
          ))}
        </div>
        {sponsorConfig.ctaUrl && (
          <div className="mt-12 text-center">
            <a
              href={sponsorConfig.ctaUrl}
              className="inline-flex items-center gap-2 rounded-md border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-6 py-2.5 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/10"
            >
              {sponsorConfig.ctaLabel ?? "Become a Sponsor"}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
