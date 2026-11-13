import * as React from 'react';
import { Button, Container, Heading, Logo, Section, Text } from '@kishanscaler/ssx-ui';
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  CheckCircle,
  DownloadSimple,
  ForkKnife,
  MapPin,
  MinusCircle,
  Train,
} from '@phosphor-icons/react/ssr';

import { programCity as city, programCompare as cmp, programCta as cta, programHero as hero } from '@/content/program';
import { Title } from '@/sections/shared/Title';
import './program.css';

/**
 * The program page's own sections (/program, 2026-11-13): the copy of scaler.com's program page in
 * the SSB pages' vocabulary, all light (the user's ask: no dark anywhere). Everything else on the
 * page is the main page's own section, unchanged. Server components; CalmEntrance fades them in.
 */

/** The page's section header: eyebrow, "Lead.|Tail." title, line. */
function Header({ id, eyebrow, title, sub }: { id: string; eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="pg-head">
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
 * The first fold, text and figures only (the user's ask: no photo): at the left the breadcrumb, the
 * programme's name and its line, the two actions as quiet text links; at the right the six figures
 * as cards in a 3 × 2 grid, the terms first on the pale green. Phones: the figures 2 × 3 under it.
 */
export function ProgramHero() {
  return (
    <Section density="roomy" aria-labelledby="pgh-title" className="pgh">
      <Container>
        <div className="pgh-grid">
          <div className="pgh-copy">
            <nav aria-label="Breadcrumb" className="pgh-crumbs">
              <ol>
                {hero.crumbs.map((c, i) => (
                  <li key={c.href}>
                    {i === hero.crumbs.length - 1 ? <span aria-current="page">{c.label}</span> : <a href={c.href}>{c.label}</a>}
                  </li>
                ))}
              </ol>
            </nav>
            <p className="pgh-chip">{hero.eyebrow}</p>
            <Heading as="h1" size="display" id="pgh-title" className="pgh-title">
              {hero.title} <span className="pgh-short">({hero.short})</span>
            </Heading>
            <Text size="lg" tone="secondary" className="pgh-line">
              {hero.line}
            </Text>
            <p className="pgh-links">
              <a href={hero.primaryCta.href} className="pgh-link pgh-link-primary">
                {hero.primaryCta.label}
                <ArrowRight weight="bold" aria-hidden="true" />
              </a>
              <a href={hero.secondaryCta.href} className="pgh-link">
                {hero.secondaryCta.label}
                <DownloadSimple weight="bold" aria-hidden="true" />
              </a>
            </p>
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
        </div>
      </Container>
    </Section>
  );
}

/* ── SSB vs traditional ─────────────────────────────────────────────────────────────────────────── */

/**
 * The comparison as two cards side by side, subtle (the user's ask: no gradient, the green one in
 * focus): SSB's white with a green edge, the Scaler School of Business logo at its head, green checks;
 * the conventional programmes' a disabled-looking grey fill, faded text and grey minus marks. The
 * rows line up across. Phones: stacked, SSB's first.
 */
export function ProgramCompare() {
  return (
    <Section id="compare" density="roomy" aria-labelledby="compare-title" className="pgc">
      <Container>
        <Header id="compare" eyebrow={cmp.eyebrow} title={cmp.title} sub={cmp.sub} />
        <div className="pgc-pair">
          <div className="pgc-card pgc-ssb">
            <div className="pgc-name">
              <Logo brand="ssb" size="md" surface="light" />
              <span className="pgc-prog">{cmp.ssbLabel}</span>
            </div>
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
          <div className="pgc-card pgc-trad">
            <div className="pgc-name">
              <span className="pgc-trad-name">{cmp.traditionalLabel}</span>
            </div>
            <ul>
              {cmp.rows.map((r) => (
                <li key={r.label}>
                  <MinusCircle aria-hidden="true" />
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

/* ── Bangalore ──────────────────────────────────────────────────────────────────────────────────── */

const COMFORT_ICONS = { transport: Train, food: ForkKnife, hub: Buildings } as const;

/**
 * Located in Bangalore, light: at the left the city (Vidhana Soudha) in a white card, its three
 * comforts under the photo; at the right the campus, its line and points over two photos; the
 * actions under.
 */
export function ProgramCity() {
  return (
    <Section id="city" density="roomy" aria-labelledby="city-title" className="pgy">
      <Container>
        <Header id="city" eyebrow={city.eyebrow} title={city.title} sub={city.sub} />
        <div className="pgy-bento">
          <figure className="pgy-city">
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
                      <span className="pgy-icon" aria-hidden="true">
                        <I weight="duotone" />
                      </span>
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

/** The last band, light: one pale-green card, the program page's line, the two actions. */
export function ProgramCta() {
  return (
    <Section density="roomy" aria-labelledby="pga-title" className="pga">
      <Container>
        <div className="pga-card">
          <p className="pga-eyebrow">
            <span className="pga-dot" aria-hidden="true" />
            {cta.eyebrow}
          </p>
          <Heading as="h2" size="display" id="pga-title" className="pga-title">
            <Title text={cta.title} />
          </Heading>
          <div className="pga-actions">
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
