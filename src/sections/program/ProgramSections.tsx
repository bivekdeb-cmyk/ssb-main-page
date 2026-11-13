import * as React from 'react';
import { Button, Container, Heading, Section, Text } from '@kishanscaler/ssx-ui';
import {
  ArrowUpRight,
  Buildings,
  CalendarBlank,
  ChartBar,
  ChartLineUp,
  CheckCircle,
  Clock,
  CurrencyEth,
  CurrencyInr,
  Database,
  DownloadSimple,
  FileText,
  Flask,
  ForkKnife,
  Kanban,
  Lightbulb,
  LinkedinLogo,
  MapPin,
  MicrosoftExcelLogo,
  MicrosoftPowerpointLogo,
  PaintBrush,
  PenNib,
  PuzzlePiece,
  Robot,
  Sparkle,
  Train,
  TrendUp,
  UsersThree,
  VideoCamera,
  XCircle,

} from '@phosphor-icons/react/ssr';

import {
  programCity as city,
  programCompare as cmp,
  programCta as cta,
  programHero as hero,
  programProjects as proj,
  programWorkshops as ws,
  type WorkshopIcon,
} from '@/content/program';
import type { Icon } from '@phosphor-icons/react';
import { Title } from '@/sections/shared/Title';
import './program.css';

/**
 * The program page's own sections (/program, 2026-11-13): the copy of scaler.com's program page, in
 * the SSB pages' vocabulary (the section header, 8px cards, hairline bento cells, the brand green
 * only for figures and marks). Server components; the page's CalmEntrance fades each one in.
 */

/** The page's section header: eyebrow, "Lead.|Tail." title, line. */
function Header({ id, eyebrow, title, sub, center }: { id: string; eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className="pg-head" data-center={center ? '' : undefined}>
      <Heading as="p" size="eyebrow" className="text-content-brand">
        {eyebrow}
      </Heading>
      <Heading as="h2" size="display" id={`${id}-title`}>
        <Title text={title} />
      </Heading>
      {sub ? (
        <Text size="lg" tone="secondary">
          {sub}
        </Text>
      ) : null}
    </div>
  );
}

/* ── the first fold ─────────────────────────────────────────────────────────────────────────────── */

/**
 * The programme's first fold (in place of the home page's film): the breadcrumb, then the name and
 * its line with the two actions at the left, a campus photo at the right; under them the six
 * figures in one hairline strip (the home page's bento cells), the first, the terms, on the brand's
 * pale green.
 */
export function ProgramHero() {
  return (
    <Section density="roomy" aria-labelledby="pgh-title" className="pgh">
      <Container>
        <nav aria-label="Breadcrumb" className="pgh-crumbs">
          <ol>
            {hero.crumbs.map((c, i) => (
              <li key={c.href}>
                {i === hero.crumbs.length - 1 ? <span aria-current="page">{c.label}</span> : <a href={c.href}>{c.label}</a>}
              </li>
            ))}
          </ol>
        </nav>

        <div className="pgh-grid">
          <div className="pgh-copy">
            <p className="pgh-chip">{hero.eyebrow}</p>
            <Heading as="h1" size="display" id="pgh-title" className="pgh-title">
              {hero.title} <span className="h-tail">({hero.short})</span>
            </Heading>
            <Text size="lg" tone="secondary" className="pgh-line">
              {hero.line}
            </Text>
            <div className="pgh-actions">
              <Button asChild size="lg" variant="primary">
                <a href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowUpRight weight="bold" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                  <DownloadSimple weight="bold" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="pgh-note">
              <CalendarBlank aria-hidden="true" />
              {hero.note}
            </p>
          </div>
          <div className="pgh-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero.image.src} alt={hero.image.alt} width={1200} height={900} loading="eager" />
          </div>
        </div>

        <dl className="pgh-figs">
          {hero.figures.map((f, i) => (
            <div key={f.label} className="pgh-fig" data-lead={i === 0 ? '' : undefined}>
              <dd>{f.value}</dd>
              <dt>
                {f.label}
                {f.note ? <small>{f.note}</small> : null}
              </dt>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}

/* ── SSB vs traditional ─────────────────────────────────────────────────────────────────────────── */

/**
 * The comparison as two cards side by side (the earlier table read flat): SSB's a dark-green island,
 * raised, each row its aspect over a line with a green check; the conventional programmes' a quiet
 * grey card, the same rows with grey crosses, so the two read across, row by row. Phones: the two
 * cards stacked, SSB's first.
 */
export function ProgramCompare() {
  return (
    <Section id="compare" density="roomy" aria-labelledby="compare-title" className="pgc">
      <Container>
        <Header id="compare" eyebrow={cmp.eyebrow} title={cmp.title} sub={cmp.sub} />
        <div className="pgc-pair">
          <div className="pgc-card pgc-ssb" data-brand="ssb" data-theme="dark">
            <p className="pgc-name">
              <span className="pgc-mark" aria-hidden="true">
                SSB
              </span>
              {cmp.ssbLabel}
            </p>
            <ul>
              {cmp.rows.map((r) => (
                <li key={r.label}>
                  <CheckCircle weight="fill" aria-hidden="true" />
                  <div>
                    <span className="pgc-aspect">{r.label}</span>
                    <span className="pgc-text">{r.ssb}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="pgc-vs" aria-hidden="true">
            vs
          </div>
          <div className="pgc-card pgc-trad">
            <p className="pgc-name">{cmp.traditionalLabel}</p>
            <ul>
              {cmp.rows.map((r) => (
                <li key={r.label}>
                  <XCircle aria-hidden="true" />
                  <div>
                    <span className="pgc-aspect">{r.label}</span>
                    <span className="pgc-text">{r.traditional}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ── projects ───────────────────────────────────────────────────────────────────────────────────── */

/**
 * Real-world projects as a bento: first the 18 months as one bar split by phase (6, 6, 3, 3), then
 * a tile per phase: the specialisation phase large at the right with its eleven projects in two
 * columns; the fundamentals and the internship stacked at its left; the AI build across the foot.
 */
export function ProgramProjects() {
  const total = proj.phases.reduce((n, p) => n + p.months, 0);
  return (
    <Section id="projects" density="roomy" aria-labelledby="projects-title" className="pgp">
      <Container>
        <Header id="projects" eyebrow={proj.eyebrow} title={proj.title} sub={proj.sub} />

        <ol className="pgp-bar" aria-label={`${total} months, by phase`}>
          {proj.phases.map((p) => (
            <li key={p.num} style={{ flexGrow: p.months }}>
              <span>Phase {p.num}</span>
              <span>{p.months} months</span>
            </li>
          ))}
        </ol>

        <div className="pgp-bento">
          {proj.phases.map((p) => (
            <article key={p.num} className="pgp-tile" data-phase={p.num}>
              <header className="pgp-tile-head">
                <p className="pgp-phase">Phase {p.num}</p>
                <h3>{p.name}</h3>
                <p className="pgp-months">
                  <Clock aria-hidden="true" />
                  {p.months} months{p.projects.length > 1 ? ` · ${p.projects.length} projects` : ''}
                </p>
              </header>
              <ul className="pgp-list">
                {p.projects.map((x) => (
                  <li key={x.title}>
                    <h4>{x.title}</h4>
                    <p>{x.desc}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ── workshops ──────────────────────────────────────────────────────────────────────────────────── */

const WS_ICONS: Record<WorkshopIcon, Icon> = {
  excel: MicrosoftExcelLogo,
  powerpoint: MicrosoftPowerpointLogo,
  idea: Lightbulb,
  robot: Robot,
  design: PenNib,
  sql: Database,
  finance: CurrencyInr,
  linkedin: LinkedinLogo,
  kanban: Kanban,
  canva: PaintBrush,
  sparkle: Sparkle,
  lab: Flask,
  resume: FileText,
  analytics: ChartLineUp,
  puzzle: PuzzlePiece,
  bars: ChartBar,
  people: UsersThree,
  video: VideoCamera,
  crypto: CurrencyEth,
  trend: TrendUp,
};

/**
 * Practical workshops as a bento of six tiles: the "20+" figure on the pale green, then a tile per
 * term with its four workshops, each an icon on a small tile and its name.
 */
export function ProgramWorkshops() {
  return (
    <Section id="workshops" density="roomy" aria-labelledby="workshops-title" className="pgw">
      <Container>
        <Header id="workshops" eyebrow={ws.eyebrow} title={ws.title} sub={ws.sub} />
        <div className="pgw-bento">
          <div className="pgw-lead">
            <p className="pgw-value">{ws.lead.value}</p>
            <p className="pgw-label">{ws.lead.label}</p>
            <p className="pgw-line">{ws.lead.line}</p>
          </div>
          {ws.terms.map((t) => (
            <article key={t.term} className="pgw-tile">
              <h3 className="pgw-term">Term {t.term}</h3>
              <ul>
                {t.items.map((it) => {
                  const I = WS_ICONS[it.icon];
                  return (
                    <li key={it.name}>
                      <span className="pgw-icon" aria-hidden="true">
                        <I weight="duotone" />
                      </span>
                      {it.name}
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ── Bangalore ──────────────────────────────────────────────────────────────────────────────────── */

const COMFORT_ICONS = { transport: Train, food: ForkKnife, hub: Buildings } as const;

/**
 * Located in Bangalore: a bento of the city and the campus. At the left, Bengaluru (Vidhana Soudha)
 * large, the city's line and its three comforts over it on a dark frost; at the right the campus,
 * its line and points over two photos; the actions under.
 */
export function ProgramCity() {
  return (
    <Section id="city" density="roomy" aria-labelledby="city-title" className="pgy">
      <Container>
        <Header id="city" eyebrow={city.eyebrow} title={city.title} sub={city.sub} />
        <div className="pgy-bento">
          <figure className="pgy-city" data-brand="ssb" data-theme="dark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={city.image.src}
              srcSet={`${city.image.src} 1280w, ${city.image.srcLarge} 2560w`}
              sizes="(width >= 1056px) 60vw, 100vw"
              alt={city.image.alt}
              width={1280}
              height={853}
              loading="lazy"
            />
            <figcaption>
              <p className="pgy-kicker">{city.comfortLabel}</p>
              <ul>
                {city.comforts.map((c) => {
                  const I = COMFORT_ICONS[c.icon];
                  return (
                    <li key={c.label}>
                      <I weight="regular" aria-hidden="true" />
                      {c.label}
                    </li>
                  );
                })}
              </ul>
            </figcaption>
          </figure>

          <div className="pgy-campus">
            <div className="pgy-campus-copy">
              <h3>{city.campus.title}</h3>
              <p>{city.campus.line}</p>
              <ul>
                {city.campus.points.map((p) => (
                  <li key={p}>
                    <CheckCircle weight="fill" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pgy-photos">
              {city.campus.photos.map((p) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={p.src} src={p.src} alt={p.alt} width={800} height={600} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
        <div className="pgy-actions">
          <Button asChild size="lg" variant="primary">
            <a href={city.ctas.brochure.href}>
              {city.ctas.brochure.label}
              <DownloadSimple weight="bold" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={city.ctas.locate.href} target="_blank" rel="noreferrer">
              <MapPin weight="bold" aria-hidden="true" />
              {city.ctas.locate.label}
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

/* ── the call to apply ──────────────────────────────────────────────────────────────────────────── */

/** The last band: one deep-green card, the program page's line, the two actions. */
export function ProgramCta() {
  return (
    <Section density="roomy" aria-labelledby="pga-title" className="pga">
      <Container>
        <div className="pga-card" data-brand="ssb" data-theme="dark">
          <div className="pga-rings" aria-hidden="true" />
          <p className="pga-eyebrow">
            <span className="pga-dot" aria-hidden="true" />
            {cta.eyebrow}
          </p>
          <Heading as="h2" size="display" id="pga-title" className="pga-title">
            <Title text={cta.title} />
          </Heading>
          <div className="pga-actions" data-brand="ssb" data-theme="light">
            <Button asChild size="lg" variant="primary">
              <a href={cta.primaryCta.href}>
                {cta.primaryCta.label}
                <ArrowUpRight weight="bold" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={cta.secondaryCta.href}>
                {cta.secondaryCta.label}
                <DownloadSimple weight="bold" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
