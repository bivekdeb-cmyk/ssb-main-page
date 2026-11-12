'use client';

import * as React from 'react';
import { Container, Heading, Section, Text } from '@kishanscaler/ssx-ui';

import { deckCareerPrep } from '@/content/deck';
import { useSectionEntrance } from '@/sections/faculty/useSectionEntrance';
import { Title } from '@/sections/shared/Title';
import './deck-career.css';

/**
 * Career prep (the final page, 2026-10-28, the user's ask: back, crisp, no photos), above the 150-hour
 * AI curriculum: the header at the left (eyebrow, title, the three phases as its line), the four figures
 * 2 × 2 at the right, each in a card of the page's; one column on a phone.
 * `content`, `id` (the internship page, 2026-11-12: its "Did you know?", two figures in a row; `sub`
 * optional); the defaults are the home page's.
 */
export type CareerPrepContent = {
  eyebrow: string;
  title: string;
  sub?: string;
  stats: { value: string; label: string }[];
};

export function DeckCareerPrep({
  content: c = deckCareerPrep,
  id = 'dcp',
}: { content?: CareerPrepContent; id?: string } = {}) {
  const ref = React.useRef<HTMLElement>(null);
  useSectionEntrance(ref, { decks: ['.dcp-grid > *'] });
  return (
    <Section
      ref={ref}
      id={id === 'dcp' ? undefined : id}
      density="roomy"
      aria-labelledby={`${id}-title`}
      className="dcp"
      data-count={c.stats.length}
    >
      <Container>
        <div className="dcp-wrap">
          <div data-enter="header" className="dcp-head">
            <Heading as="p" size="eyebrow" className="text-content-brand" data-enter="eyebrow">
              {c.eyebrow}
            </Heading>
            <Heading as="h2" size="display" id={`${id}-title`} data-enter="headline">
              <Title text={c.title} />
            </Heading>
            {c.sub ? (
              <Text size="lg" tone="secondary" data-enter="sub">
                {c.sub}
              </Text>
            ) : null}
          </div>
          <dl className="dcp-grid">
            {c.stats.map((s) => (
              <div key={s.label} className="dcp-stat">
                <dd>{s.value}</dd>
                <dt>{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
