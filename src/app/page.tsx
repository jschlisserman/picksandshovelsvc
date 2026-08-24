import Image from "next/image";
import {
  areasOfInterest,
  backedBy,
  firm,
  portfolio,
  sourcing,
} from "@/data/content";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Home() {
  return (
    <>
      <header className="content-column flex items-center justify-between py-6 sm:py-8">
        <a
          href="#top"
          className="group flex items-center gap-3 text-ink no-underline"
        >
          <span
            aria-hidden
            className="grid size-9 place-items-center rounded-full border border-border bg-antigrid text-[10px] font-mono tracking-[0.08em] text-accent transition-colors group-hover:border-accent/40"
          >
            P&S
          </span>
          <span className="text-body font-medium tracking-tight">
            {firm.name}
          </span>
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          {[
            ["Sourcing", "#sourcing"],
            ["Portfolio", "#portfolio"],
            ["Interest", "#interest"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="mono-label no-underline transition-colors hover:text-ink"
            >
              {label}
            </a>
          ))}
          <a
            href={`mailto:${firm.email}`}
            className="rounded-full border border-border bg-elevation px-4 py-2 text-body-sm text-ink no-underline transition-colors hover:border-accent/50 hover:text-accent"
          >
            Contact
          </a>
        </nav>
        <a
          href={`mailto:${firm.email}`}
          className="rounded-full border border-border bg-elevation px-4 py-2 text-body-sm text-ink no-underline sm:hidden"
        >
          Contact
        </a>
      </header>

      <main id="top" className="flex-1 pb-20 sm:pb-28">
        {/* Hero — brand-first, one composition */}
        <section className="content-column relative min-h-[72vh] overflow-hidden pt-10 pb-16 sm:min-h-[78vh] sm:pt-16 sm:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full"
          >
            <div className="absolute -left-24 top-10 size-[28rem] rounded-full bg-accent/[0.06] blur-3xl animate-fade" />
            <div className="absolute right-0 top-32 size-[22rem] rounded-full bg-accent-blue/[0.05] blur-3xl animate-fade delay-2" />
          </div>

          <p className="mono-label animate-rise mb-6 text-accent">
            Inception - Early Stage Investing
          </p>
          <h1 className="text-headline-3xl animate-rise delay-1 max-w-[18ch] text-ink">
            {firm.name}
          </h1>
          <p className="text-body-lg animate-rise delay-2 mt-6 max-w-[34ch] text-ink-soft">
            {firm.tagline}
          </p>
          <div className="animate-rise delay-3 mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${firm.email}`}
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-body-sm font-medium text-bg no-underline transition-opacity hover:opacity-90"
            >
              Reach out
            </a>
            <a
              href="#sourcing"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-body-sm text-ink-soft no-underline transition-colors hover:border-ink-faint hover:text-ink"
            >
              Sourcing
            </a>
          </div>
        </section>

        {/* Backed by */}
        <section className="content-column py-10 sm:py-14" aria-labelledby="backed-by">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mono-label mb-3">Network</p>
              <h2 id="backed-by" className="text-headline-xl text-ink">
                Backed by
              </h2>
            </div>
            <p className="text-body-sm max-w-sm text-ink-muted">
              Operators and GPs who diligence deals and open doors when it
              matters.
            </p>
          </div>

          <ul className="anti-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {backedBy.map((person) => {
              const inner = (
                <>
                  <span
                    aria-hidden
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-elevation font-mono text-[11px] tracking-wide text-ink-soft"
                  >
                    {initials(person.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="text-body-sm font-medium leading-snug text-ink">
                      {person.name}
                    </p>
                    <p className="text-body-sm leading-snug text-ink-muted">
                      {person.role}
                    </p>
                  </div>
                </>
              );

              return (
                <li key={person.name}>
                  {person.href ? (
                    <a
                      href={person.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="box flex items-start gap-3 p-4 no-underline sm:p-5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="box flex items-start gap-3 p-4 sm:p-5">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
            <li className="box flex items-start gap-3 border-dashed p-4 text-ink-muted sm:p-5">
              <span
                aria-hidden
                className="grid size-11 shrink-0 place-items-center rounded-full border border-dashed border-ink-faint font-mono text-sm"
              >
                +
              </span>
              <p className="text-body-sm leading-snug">and others</p>
            </li>
          </ul>
        </section>

        {/* Sourcing */}
        <section
          id="sourcing"
          className="content-column scroll-mt-8 py-10 sm:py-14"
          aria-labelledby="sourcing-heading"
        >
          <div className="mb-8">
            <p className="mono-label mb-3">Process</p>
            <h2 id="sourcing-heading" className="text-headline-xl text-ink">
              Sourcing
            </h2>
            <p className="text-body mt-3 max-w-xl text-ink-muted">
              Markets first, then founders.
            </p>
          </div>

          <ol className="anti-grid">
            {sourcing.map((step, index) => (
              <li
                key={step.title}
                className="box grid gap-4 p-5 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-7"
              >
                <span className="font-mono text-headline-lg text-accent/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-headline-md text-ink">{step.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="text-body flex gap-3 text-ink-soft"
                      >
                        <span
                          aria-hidden
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Portfolio */}
        <section
          id="portfolio"
          className="content-column scroll-mt-8 py-10 sm:py-14"
          aria-labelledby="portfolio-heading"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mono-label mb-3">Companies</p>
              <h2 id="portfolio-heading" className="text-headline-xl text-ink">
                Portfolio
              </h2>
            </div>
            <p className="text-body-sm text-ink-muted">
              * = angel investment
            </p>
          </div>

          <ul className="anti-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {portfolio.map((company) => {
              const inner = (
                <>
                  <div className="mb-4 flex h-10 w-full items-center justify-start">
                    {company.logo ? (
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={120}
                        height={40}
                        className="h-8 w-auto max-w-[140px] object-contain object-left"
                      />
                    ) : (
                      <div
                        aria-hidden
                        className="flex h-10 w-full items-center justify-center rounded-md border border-dashed border-border bg-elevation/60 font-mono text-[10px] tracking-[0.14em] text-ink-faint transition-colors group-hover:border-accent/30 group-hover:text-ink-muted"
                      >
                        LOGO
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-body-sm font-medium text-ink">
                      {company.name}
                      {company.stealth ? (
                        <span className="text-accent">*</span>
                      ) : null}
                    </p>
                    <p className="mono-label mt-1 normal-case tracking-normal">
                      {company.stage ?? "—"}
                    </p>
                  </div>
                </>
              );

              const className =
                "box group flex min-h-[7.5rem] flex-col justify-between p-4 no-underline sm:min-h-[8.5rem] sm:p-5";

              return (
                <li key={company.name}>
                  {company.href ? (
                    <a
                      href={company.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={className}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        {/* Areas of interest */}
        <section
          id="interest"
          className="content-column scroll-mt-8 py-10 sm:py-14"
          aria-labelledby="interest-heading"
        >
          <div className="mb-8">
            <p className="mono-label mb-3">Thesis</p>
            <h2 id="interest-heading" className="text-headline-xl text-ink">
              Current areas of interest
            </h2>
            <p className="text-body mt-3 text-ink-muted">
              As of {areasOfInterest.asOf}
            </p>
          </div>

          <ul className="anti-grid sm:grid-cols-2">
            {areasOfInterest.items.map((item, index) => (
              <li key={item} className="box flex items-start gap-4 p-5 sm:p-6">
                <span className="font-mono text-body-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-headline-sm text-ink">{item}</p>
              </li>
            ))}
            <li className="box flex items-start gap-4 border-dashed p-5 sm:col-span-2 sm:p-6">
              <span className="font-mono text-body-sm text-ink-muted">··</span>
              <p className="text-headline-sm text-ink-muted">And more…</p>
            </li>
          </ul>
        </section>

        {/* Closing CTA */}
        <section className="content-column pt-6 sm:pt-10">
          <div className="box relative overflow-hidden p-7 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-accent/10 blur-3xl"
            />
            <p className="mono-label mb-4 text-accent">Founders</p>
            <h2 className="text-headline-lg max-w-[22ch] text-ink">
              Building something non-consensus?
            </h2>
            <p className="text-body mt-4 max-w-lg text-ink-muted">
              Reach out if you’re deep in-domain, don’t need
              hand-holding, and are raising before a lead is locked.
            </p>
            <a
              href={`mailto:${firm.email}`}
              className="mt-8 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-body-sm font-medium text-bg no-underline transition-opacity hover:opacity-90"
            >
              {firm.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="content-column border-t border-border py-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-sm text-ink-muted">{firm.name}</p>
          <p className="mono-label normal-case tracking-normal">
            Non-consensus → consensus
          </p>
        </div>
      </footer>
    </>
  );
}
