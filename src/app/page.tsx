import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import {
  about,
  backedBy,
  firm,
  portfolioCompanies,
  portfolioGroups,
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
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* Hero — Surface */}
        <section className="hero-atmosphere strata relative overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-16">
          <div className="content-column relative">
            <p className="mono-label animate-rise mb-6 text-rust">
              Inception &amp; Early Stage
            </p>
            <h1 className="text-headline-3xl animate-rise delay-1 max-w-[14ch] text-ink">
              {firm.name}
            </h1>
            <p className="text-body-lg animate-rise delay-2 mt-6 max-w-[38ch] text-ink-soft">
              {firm.tagline}
            </p>
            <p className="text-body-sm animate-rise delay-3 mt-4 max-w-[36ch] text-ink-muted">
              {firm.secondaryLine}
            </p>
            <div className="animate-rise delay-4 mt-10 flex flex-wrap items-center gap-3">
              <a href={`mailto:${firm.email}`} className="btn-primary">
                Reach out
              </a>
              <a href="#portfolio" className="btn-secondary">
                See the portfolio
              </a>
            </div>
          </div>
        </section>

        <div className="strata-seam animate-seam" aria-hidden />

        {/* Backers — Topsoil / Surface label */}
        <section
          className="strata strata-topsoil py-12 sm:py-16"
          aria-labelledby="backed-by"
        >
          <div className="content-column">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 id="backed-by" className="text-headline-xl text-ink">
                  Backed by
                </h2>
              </div>
              <p className="text-body-sm max-w-sm text-ink-muted">
                Operators and GPs who diligence deals and open doors when it
                matters.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-[var(--spacing-gutter)] sm:grid-cols-3 lg:grid-cols-4">
              {backedBy.map((person) => {
                const photo =
                  "photo" in person && typeof person.photo === "string"
                    ? person.photo
                    : undefined;

                const inner = (
                  <>
                    {photo ? (
                      <Image
                        src={photo}
                        alt=""
                        width={44}
                        height={44}
                        className="size-11 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="grid size-11 shrink-0 place-items-center rounded-full border border-clay/50 bg-topsoil font-mono text-[11px] tracking-wide text-ink-soft"
                      >
                        {initials(person.name)}
                      </span>
                    )}
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
                        className="panel flex items-start gap-3 p-4 no-underline sm:p-5"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="panel flex items-start gap-3 p-4 sm:p-5">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
              <li className="panel flex items-start gap-3 border-dashed p-4 text-ink-muted sm:p-5">
                <span
                  aria-hidden
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-dashed border-clay font-mono text-sm"
                >
                  +
                </span>
                <p className="text-body-sm leading-snug">and others</p>
              </li>
            </ul>
          </div>
        </section>

        <div className="strata-seam strata-seam-dark" aria-hidden />

        {/* Portfolio — Bedrock */}
        <section
          id="portfolio"
          className="strata strata-bedrock strata-dark scroll-mt-8 py-14 sm:py-20"
          aria-labelledby="portfolio-heading"
        >
          <div className="content-column">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2
                  id="portfolio-heading"
                  className="text-headline-xl text-ink-on-dark"
                >
                  Portfolio
                </h2>
                <p className="text-body mt-3 max-w-md text-ink-on-dark-muted">
                  The tools underneath.
                </p>
              </div>
              <p className="text-body-sm text-ink-on-dark-muted">
                * = angel investment
              </p>
            </div>

            <div className="space-y-12 sm:space-y-14">
              {portfolioGroups.map((group) => (
                <div key={group.label}>
                  <div className="mb-5 flex items-center gap-4">
                    <h3 className="mono-label shrink-0 text-rust">
                      {group.label}
                    </h3>
                    <div
                      aria-hidden
                      className="h-px flex-1 bg-gradient-to-r from-clay/25 to-transparent"
                    />
                  </div>
                  <ul className="grid grid-cols-2 gap-[var(--spacing-gutter)] sm:grid-cols-3 lg:grid-cols-4">
                    {group.companies.map((key) => {
                      const company = portfolioCompanies[key];
                      if (!company) return null;

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
                                className="flex h-10 w-full items-center justify-center rounded-md border border-dashed border-clay/25 bg-ore/40 font-mono text-[10px] tracking-[0.14em] text-ink-on-dark-muted"
                              >
                                LOGO
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="text-body-sm font-medium text-ink-on-dark">
                              {company.name}
                              {company.stealth ? (
                                <span className="text-rust">*</span>
                              ) : null}
                            </p>
                            <p className="mono-label mt-1 normal-case tracking-normal">
                              {company.stage ?? "—"}
                            </p>
                          </div>
                        </>
                      );

                      const className =
                        "panel-dark panel-portfolio group flex min-h-[7.5rem] flex-col justify-between p-4 no-underline sm:min-h-[8.5rem] sm:p-5";

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
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="strata-seam strata-seam-dark" aria-hidden />

        {/* About — Ore */}
        <section
          id="about"
          className="strata strata-ore strata-dark scroll-mt-8 py-14 sm:py-20"
          aria-labelledby="about-heading"
        >
          <div className="content-column">
            <div className="mb-9">
              <h2
                id="about-heading"
                className="text-headline-xl text-ink-on-dark"
              >
                About
              </h2>
            </div>

            <div className="panel-dark mb-8 p-5 sm:p-6">
              <p className="text-body text-ink-on-dark">{about.summary}</p>
            </div>

            <div className="grid gap-[var(--spacing-gutter)] lg:grid-cols-2">
              {about.people.map((person) => (
                <article
                  key={person.name}
                  className="panel-dark divide-y divide-clay/15 overflow-hidden p-0"
                >
                  <div className="flex items-center gap-4 p-5 sm:p-6">
                    <a
                      href={person.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 no-underline"
                    >
                      <Image
                        src={person.portrait}
                        alt={person.name}
                        width={112}
                        height={112}
                        className="size-24 rounded-lg object-cover transition-opacity hover:opacity-90 sm:size-28"
                      />
                    </a>
                    <div className="min-w-0">
                      <h3 className="text-headline-md text-ink-on-dark">
                        <a
                          href={person.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink-on-dark no-underline transition-colors hover:text-rust"
                        >
                          {person.name}
                        </a>
                      </h3>
                      <p className="text-body mt-1 text-ink-on-dark-muted">
                        {person.title}
                      </p>
                      <a
                        href={`mailto:${person.email}`}
                        className="text-body-sm mt-1 inline-block text-ink-on-dark-muted no-underline transition-colors hover:text-rust"
                      >
                        {person.email}
                      </a>
                    </div>
                  </div>
                  {person.timeline.map((entry) => (
                    <div key={entry.label} className="p-5 sm:p-6">
                      <p className="mono-label mb-3 text-rust">{entry.label}</p>
                      <p className="text-body text-ink-on-dark-soft">
                        {entry.body}
                      </p>
                    </div>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA — Ore */}
        <section className="strata strata-ore strata-dark pb-16 sm:pb-24">
          <div className="content-column">
            <div className="panel-dark relative overflow-hidden p-7 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-rust/10 blur-3xl"
              />
              <h2 className="text-headline-lg max-w-[18ch] text-ink-on-dark">
                Building a shovel?
              </h2>
              <p className="text-body mt-4 max-w-lg text-ink-on-dark-muted">
                Reach out if you&apos;re deep in-domain, don&apos;t need
                hand-holding, and are raising before a lead is locked.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="strata strata-ore strata-dark border-t border-clay/15">
        <div className="content-column py-8">
          <p className="text-body-sm text-ink-on-dark-muted">
            Picks and Shovels · Non-consensus{" "}
            <span className="gold-arrow" aria-hidden>
              →
            </span>{" "}
            consensus
          </p>
        </div>
      </footer>
    </>
  );
}
