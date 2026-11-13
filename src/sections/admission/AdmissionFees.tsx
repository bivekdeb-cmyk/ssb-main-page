import * as React from 'react';
import { Button, Container, Heading, Section, Text } from '@kishanscaler/ssx-ui';
import { DownloadSimple } from '@phosphor-icons/react/ssr';

import type { admissionFees } from '@/content/admission';
import { Header } from '@/sections/deck/DeckSections';
import '@/sections/admissions/admissions-v4.css';
import './admission.css';

/**
 * "Important dates and fees" (2026-11-13, the user's ask: the live page's table was missing). The
 * page's section header; then, side by side on desktop, the table on a white card (intake, deadline,
 * application fee, course fee; the open intake marked, Apply Now in its row) with the live page's
 * notes under it, and the detailed fee structure's brochure on the video band's forest green.
 * Phones: each intake as a stack of label and value, the brochure card under the table.
 */
export function AdmissionFees({ content: c }: { content: typeof admissionFees }) {
  return (
    <Section id="fees" density="roomy" aria-labelledby="fees-title" className="adm-fees">
      <Container>
        <Header id="fees" eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
        <div className="adm-fees-grid">
          {/* the main page's fee table (the admissions section's "Programme fee" card, admissions-v4.css),
              in its light colours (2026-11-13, the user's ask): the card's title and status chip, the
              uppercase column heads, hairline rows, the open intake on the brand tint with its bar and
              an "Open now" pill; the live page's notes as its fine print */}
          <div className="ad4-card ad4-fees adm-fees-card">
            <div className="ad4-card-h">
              <h3>Programme fee</h3>
              {c.rows[0]?.status ? (
                <span className="ad4-live">
                  <span className="ad4-dot" aria-hidden="true" />
                  {c.chip}
                </span>
              ) : null}
            </div>
            <div className="ad4-table adm-fees-table" role="table" aria-label="Intakes, deadlines and fees">
              <div className="ad4-tr ad4-th" role="row">
                {c.columns.map((h) => (
                  <span key={h} role="columnheader">
                    {h}
                  </span>
                ))}
              </div>
              {c.rows.map((r) => (
                <div key={r.intake} className="ad4-tr" role="row" data-now={r.status ? '' : undefined}>
                  <span role="cell">
                    {r.intake}
                    {r.status ? <em className="adm-fees-pill">{r.status}</em> : null}
                  </span>
                  <span role="cell">
                    <time dateTime={r.deadlineIso}>{r.deadline}</time>
                  </span>
                  <span role="cell" data-label="Application fee">
                    {r.appFee}
                  </span>
                  <span role="cell">
                    <span className="ad4-fee">{r.courseFee}</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="ad4-fine">{c.notes.join('. ')}.</p>
          </div>

          <div className="adm-fees-brochure" data-brand="ssb" data-theme="dark">
            <span className="adm-fees-brochure-icon" aria-hidden="true">
              <DownloadSimple weight="bold" />
            </span>
            <Heading as="h3" size="3" className="adm-fees-brochure-title">
              {c.brochure.title}
            </Heading>
            <Text size="md" className="adm-fees-brochure-line">
              {c.brochure.line}
            </Text>
            <Button asChild size="lg" variant="primary" className="adm-apply adm-fees-brochure-cta">
              <a href={c.brochure.cta.href}>
                {c.brochure.cta.label}
                <DownloadSimple weight="bold" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
