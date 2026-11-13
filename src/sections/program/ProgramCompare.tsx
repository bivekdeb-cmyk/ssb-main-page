'use client';

import * as React from 'react';
import { Container, Heading, Section, Text } from '@kishanscaler/ssx-ui';
import { CheckCircle, XCircle } from '@phosphor-icons/react';

import { programCompare as c } from '@/content/program';
import { useSectionEntrance } from '@/sections/faculty/useSectionEntrance';
import { Title } from '@/sections/shared/Title';
import './program.css';

/**
 * SSB vs traditional B-schools (/program, 2026-11-13): the program page's comparison, in the main
 * page's vocabulary. The page's section header, then one 8px card: a row per dimension, its name at
 * the left, SSB's line on a pale brand-green column with a green check, the traditional line muted
 * with a grey cross. Phones: each row stacks (name, SSB, traditional), the column labels repeated
 * as small kickers so each line still says whose it is.
 */
export function ProgramCompare() {
  const ref = React.useRef<HTMLElement>(null);
  useSectionEntrance(ref, { decks: [] });

  return (
    <Section ref={ref} id="compare" density="roomy" aria-labelledby="compare-title" className="pc">
      <Container>
        <div data-enter="header" className="flex max-w-(--size-measure-max) flex-col gap-3">
          <Heading as="p" size="eyebrow" className="text-content-brand" data-enter="eyebrow">
            {c.eyebrow}
          </Heading>
          <Heading as="h2" size="display" id="compare-title" data-enter="headline">
            <Title text={c.title} />
          </Heading>
          <Text size="lg" tone="secondary" data-enter="sub">
            {c.sub}
          </Text>
        </div>

        <div className="pc-table" role="table" aria-label="SSB’s PGP-MT compared with traditional B-schools" data-enter="block">
          <div className="pc-row pc-head" role="row">
            <span role="columnheader" className="pc-label">
              <span className="sr-only">Aspect</span>
            </span>
            <span role="columnheader" className="pc-ssb">
              {c.ssbLabel}
            </span>
            <span role="columnheader" className="pc-trad">
              {c.traditionalLabel}
            </span>
          </div>
          {c.rows.map((r) => (
            <div className="pc-row" role="row" key={r.label}>
              <span role="rowheader" className="pc-label">
                {r.label}
              </span>
              <span role="cell" className="pc-ssb">
                <span className="pc-kicker" aria-hidden="true">
                  {c.ssbLabel}
                </span>
                <span className="pc-line">
                  <CheckCircle weight="fill" aria-hidden="true" />
                  {r.ssb}
                </span>
              </span>
              <span role="cell" className="pc-trad">
                <span className="pc-kicker" aria-hidden="true">
                  {c.traditionalLabel}
                </span>
                <span className="pc-line">
                  <XCircle weight="regular" aria-hidden="true" />
                  {r.traditional}
                </span>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
