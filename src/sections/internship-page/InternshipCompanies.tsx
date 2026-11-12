import * as React from 'react';
import { Container, Section } from '@kishanscaler/ssx-ui';

import type { internshipCompanies } from '@/content/internship';
import { Header } from '@/sections/deck/DeckSections';
import { LogoGrid } from '@/sections/internship/InternshipSection';
import '@/sections/deck/deck-outcomes.css';
import './internship-page.css';

/**
 * "Our learners are now creating impact at" (the internship page, 2026-11-12): the page's header over
 * the home page's internship logo grid (`LogoGrid`, in its /v7 tiles, deck-outcomes.css) with the live
 * page's twelve: 6 × 2 on desktop, 4 × 3 on a tablet, 3 × 4 on a phone.
 */
export function InternshipCompanies({ content: c }: { content: typeof internshipCompanies }) {
  return (
    <Section id="companies" density="roomy" aria-labelledby="companies-title" className="int-companies">
      <Container>
        <Header id="companies" eyebrow={c.eyebrow} title={c.title} />
        <LogoGrid companies={c.names} className="int-logos" />
      </Container>
    </Section>
  );
}
