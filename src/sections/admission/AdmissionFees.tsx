import * as React from 'react';
import { Button, Container, Heading, Section, Text } from '@kishanscaler/ssx-ui';
import { ArrowRight, DownloadSimple } from '@phosphor-icons/react/ssr';

import type { admissionFees } from '@/content/admission';
import { Header } from '@/sections/deck/DeckSections';
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
          <div className="adm-fees-card">
            <table className="adm-fees-table">
              <caption className="sr-only">Intakes, deadlines and fees for the 2027 cohort</caption>
              <thead>
                <tr>
                  {c.columns.map((h) => (
                    <th key={h} scope="col">
                      {h}
                    </th>
                  ))}
                  <th scope="col">
                    <span className="sr-only">Apply</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.intake}>
                    <th scope="row" data-label={c.columns[0]}>
                      <span className="adm-fees-intake">{r.intake}</span>
                      {r.status ? (
                        <span className="adm-fees-status">
                          <span className="adm-fees-dot" aria-hidden="true" />
                          {r.status}
                        </span>
                      ) : null}
                    </th>
                    <td data-label={c.columns[1]}>
                      <time dateTime={r.deadlineIso}>{r.deadline}</time>
                    </td>
                    <td data-label={c.columns[2]}>{r.appFee}</td>
                    <td data-label={c.columns[3]} className="adm-fees-course">
                      {r.courseFee}
                    </td>
                    <td className="adm-fees-act">
                      <Button asChild size="md" variant="primary">
                        <a href={c.apply.href}>
                          {c.apply.label}
                          <ArrowRight weight="bold" aria-hidden="true" />
                        </a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="adm-points adm-fees-notes">
              {c.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
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
