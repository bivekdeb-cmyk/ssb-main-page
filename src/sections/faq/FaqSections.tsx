'use client';

import * as React from 'react';
import { Button, Container, Heading, Section, Text } from '@kishanscaler/ssx-ui';
import { ArrowRight, CheckCircle, PhoneCall, PlayIcon } from '@phosphor-icons/react';

import type { FaqBlock, FaqCategory, FaqItem, FaqVideo } from '@/content/faq';
import { faqCategories, faqHero, faqRecommended, faqUsps } from '@/content/faq';
import { Header } from '@/sections/deck/DeckSections';
import { Lightbox } from '@/sections/learn-by-doing/LearnByDoingSection';
import { ScrollDots } from '@/sections/shared/ScrollDots';
import { Title } from '@/sections/shared/Title';
import '@/sections/learn-by-doing/learn-by-doing.css';
import '@/sections/deck/deck-finale.css';
import './faq.css';

/**
 * The FAQ page's sections (/faq, 2026-11-13, the user's ask: the live FAQ page in the new pages' design,
 * light only). The first fold on the program page's green panel, the live page's three videos as a
 * player beside the copy; "Why SSB" as a white card of checks; the questions under their eight
 * categories (a sticky list at the left on desktop, chips on a phone) on the home page's FAQ accordion
 * (deck-finale.css `dkf-*`); the twelve recommended videos on a sideways row with the page's dots. Every
 * video opens the learn-by-doing lightbox (YouTube). Copy: content/faq.ts.
 */

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

/** One video's thumbnail with the play disc; a click opens the lightbox. */
function VideoThumb({ video, onPlay, className, eager }: { video: FaqVideo; onPlay: (v: FaqVideo) => void; className?: string; eager?: boolean }) {
  return (
    <button type="button" className={`fq-thumb ${className ?? ''}`} onClick={() => onPlay(video)} aria-label={`Play video: ${video.title}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- YouTube's own thumbnail */}
      <img src={thumb(video.id)} alt="" width={1280} height={720} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      <span className="lb-play-disc" aria-hidden="true">
        <PlayIcon weight="fill" />
      </span>
    </button>
  );
}

/* ── the first fold ─────────────────────────────────────────────────────────────────────────────── */

export function FaqHero() {
  const c = faqHero;
  const [active, setActive] = React.useState(0);
  const [playing, setPlaying] = React.useState<FaqVideo | null>(null);
  const v = c.videos[active];
  return (
    <Section id="fq-top" density="roomy" aria-labelledby="fqh-title" className="fqh">
      <div className="fqh-frame">
        <Container>
          <nav aria-label="Breadcrumb" className="fqh-crumbs">
            <ol>
              {c.crumbs.map((x, i) => (
                <li key={x.href}>{i === c.crumbs.length - 1 ? <span aria-current="page">{x.label}</span> : <a href={x.href}>{x.label}</a>}</li>
              ))}
            </ol>
          </nav>
          <div className="fqh-grid">
            <div className="fqh-copy">
              <Heading as="h1" size="display" id="fqh-title" className="fqh-title">
                {c.title}
              </Heading>
              <Text size="lg" className="fqh-line">
                {c.line}
              </Text>
              <div className="fqh-actions">
                <Button asChild size="lg" variant="primary" className="fqh-primary">
                  <a href={c.primaryCta.href}>
                    {c.primaryCta.label}
                    <ArrowRight weight="bold" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="fqh-secondary">
                  <a href={c.secondaryCta.href}>
                    {c.secondaryCta.label}
                    <PhoneCall weight="bold" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="fqh-player">
              <VideoThumb video={v} onPlay={setPlaying} className="fqh-main" eager />
              <ol className="fqh-list" aria-label="Videos">
                {c.videos.map((x, i) => (
                  <li key={x.id}>
                    <button type="button" aria-pressed={i === active} onClick={() => setActive(i)}>
                      {/* eslint-disable-next-line @next/next/no-img-element -- YouTube's own thumbnail */}
                      <img src={thumb(x.id)} alt="" width={160} height={90} decoding="async" />
                      <span>
                        <small>{String(i + 1).padStart(2, '0')}</small>
                        {x.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </div>
      {playing ? <Lightbox id={playing.id} title={playing.title} onClose={() => setPlaying(null)} /> : null}
    </Section>
  );
}

/* ── why SSB ────────────────────────────────────────────────────────────────────────────────────── */

export function FaqUsps() {
  const c = faqUsps;
  return (
    <Section density="roomy" aria-labelledby="fqu-title" className="fqu">
      <Container>
        <div className="fqu-card">
          <div className="fqu-head">
            <Header id="fqu" eyebrow={c.eyebrow} title={c.title} />
            <Button asChild size="lg" variant="primary" className="fqu-cta">
              <a href={c.cta.href}>
                {c.cta.label}
                <ArrowRight weight="bold" aria-hidden="true" />
              </a>
            </Button>
          </div>
          <ul className="fqu-points">
            {c.points.map((p) => (
              <li key={p}>
                <CheckCircle weight="fill" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

/* ── the questions ──────────────────────────────────────────────────────────────────────────────── */

function Answer({ blocks, video, onPlay }: { blocks: FaqBlock[]; video?: FaqVideo; onPlay: (v: FaqVideo) => void }) {
  return (
    <div className="fq-a">
      {blocks.map((b, i) =>
        'p' in b ? (
          <p key={i}>
            {b.p}
            {b.link ? (
              <>
                {' '}
                <a href={b.link.href}>{b.link.label} →</a>
              </>
            ) : null}
          </p>
        ) : 'list' in b ? (
          <div key={i} className="fq-a-list">
            {b.lead ? <p className="fq-a-lead">{b.lead}</p> : null}
            <ul>
              {b.list.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div key={i} className="fq-a-table" role="table">
            <div role="row" className="fq-a-tr fq-a-th">
              {b.table.head.map((h) => (
                <span key={h} role="columnheader">
                  {h}
                </span>
              ))}
            </div>
            {b.table.rows.map((r) => (
              <div key={r[0]} role="row" className="fq-a-tr">
                {r.map((x, j) => (
                  <span key={j} role="cell">
                    {x}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ),
      )}
      {video ? (
        <div className="fq-a-video">
          <VideoThumb video={video} onPlay={onPlay} />
          <span>{video.title}</span>
        </div>
      ) : null}
    </div>
  );
}

function Questions({ cat, onPlay }: { cat: FaqCategory; onPlay: (v: FaqVideo) => void }) {
  const [open, setOpen] = React.useState(0);
  return (
    <ol className="dkf-list fq-list">
      {cat.items.map((f: FaqItem, i) => {
        const on = open === i;
        const id = `fq-${cat.id}-${i}`;
        return (
          <li key={f.q} className="dkf-item" data-open={on ? '' : undefined}>
            <h3 className="dkf-q">
              <button type="button" aria-expanded={on} aria-controls={id} onClick={() => setOpen(on ? -1 : i)}>
                <span className="dkf-q-text">{f.q}</span>
                <span className="dkf-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={id} role="region" className="dkf-a" aria-hidden={!on}>
              <div className="dkf-a-inner">
                <Answer blocks={f.a} video={f.video} onPlay={onPlay} />
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function FaqBrowser() {
  const [cat, setCat] = React.useState(0);
  const [playing, setPlaying] = React.useState<FaqVideo | null>(null);
  const c = faqCategories[cat];
  const pick = (i: number) => {
    setCat(i);
    // phones: keep the chosen chip in view inside its row (never scrollIntoView: it scrolls the page)
    const row = document.querySelector<HTMLElement>('.fq-chips');
    const chip = row?.children[i] as HTMLElement | undefined;
    if (row && chip) row.scrollTo({ left: chip.offsetLeft - 16, behavior: 'smooth' });
  };
  return (
    <Section id="faq" density="roomy" aria-labelledby="fq-title" className="dkf fq">
      <Container>
        <div className="fq-head">
          <Heading as="p" size="eyebrow" className="text-content-brand">
            FAQ
          </Heading>
          <Heading as="h2" size="display" id="fq-title">
            <Title text="Frequently asked questions.|Answered." />
          </Heading>
        </div>
        <div className="fq-grid">
          <nav className="fq-cats" aria-label="FAQ categories">
            <ul className="fq-chips">
              {faqCategories.map((x, i) => (
                <li key={x.id}>
                  <button type="button" aria-pressed={i === cat} onClick={() => pick(i)}>
                    <span>{x.label}</span>
                    <small>{x.items.length}</small>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="fq-panel">
            <h3 className="fq-cat-title">{c.label}</h3>
            {/* keyed by category, so each opens on its first question */}
            <Questions key={c.id} cat={c} onPlay={setPlaying} />
          </div>
        </div>
      </Container>
      {playing ? <Lightbox id={playing.id} title={playing.title} onClose={() => setPlaying(null)} /> : null}
    </Section>
  );
}

/* ── recommended videos ─────────────────────────────────────────────────────────────────────────── */

export function FaqRecommended() {
  const c = faqRecommended;
  const row = React.useRef<HTMLOListElement>(null);
  const [playing, setPlaying] = React.useState<FaqVideo | null>(null);
  return (
    <Section density="roomy" aria-labelledby="fqr-title" className="fqr">
      <Container>
        <Header id="fqr" eyebrow={c.eyebrow} title={c.title} />
        <ol ref={row} className="fqr-row" aria-label="Recommended videos">
          {c.videos.map((v) => (
            <li key={v.id} className="fqr-card">
              <VideoThumb video={v} onPlay={setPlaying} />
              <p>{v.title}</p>
            </li>
          ))}
        </ol>
        <div className="fqr-dots">
          <ScrollDots scroller={row} count={c.videos.length} itemName="videos" fill="solid" autoplay={false} />
        </div>
      </Container>
      {playing ? <Lightbox id={playing.id} title={playing.title} onClose={() => setPlaying(null)} /> : null}
    </Section>
  );
}
