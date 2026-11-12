'use client';

import * as React from 'react';
import { Container, Section } from '@kishanscaler/ssx-ui';

import type { internshipRoles } from '@/content/internship';
import { Header } from '@/sections/deck/DeckSections';
import './internship-page.css';

/**
 * "Land high-impact roles" (the internship page, 2026-11-12): the live page's role split (a poster
 * image there) as bars. The header at the left, one card of the page's at the right with the six
 * functions, largest first: the name and its share on a line, a bar under it. The bars grow to their
 * share once the card is a third on screen (a transform, scaleX); under reduced motion they are simply
 * there. Phones: the card under the header.
 */
export function InternshipRoles({ content: c }: { content: typeof internshipRoles }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.33 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section id="roles" density="roomy" aria-labelledby="roles-title" className="int-roles">
      <Container>
        <div className="int-roles-grid">
          <Header id="roles" eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
          <div ref={ref} className="int-roles-card" data-in={shown || undefined}>
            <p className="int-roles-label">{c.label}</p>
            <ul className="int-bars">
              {c.roles.map((r, i) => (
                <li
                  key={r.name}
                  className="int-bar"
                  style={{ '--share': r.share / 100, '--i': i } as React.CSSProperties}
                >
                  <span className="int-bar-row">
                    <span className="int-bar-name">{r.name}</span>
                    <span className="int-bar-share">{r.share}%</span>
                  </span>
                  <span className="int-bar-track" aria-hidden="true">
                    <span className="int-bar-fill" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
