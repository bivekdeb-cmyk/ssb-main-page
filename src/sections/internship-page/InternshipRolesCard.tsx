'use client';

import * as React from 'react';

import type { internshipRoles } from '@/content/internship';
import './internship-page.css';

/**
 * The role split in the placement highlights' press card place (the internship page, 2026-11-12, the
 * user's asks: the figures and the graph in one section; then the shares less cramped). The press
 * card's anatomy (deck-outcomes.css `dko-press`): a top line, the title and its line over a rule; the
 * six shares 3 × 2, each its key colour and name over the figure, largest first; in the card's foot one
 * slim bar split by share in the brand green's steps, which wipes open from the left once the card is a
 * third on screen (under reduced motion it is simply there).
 */
export function InternshipRolesCard({ content: c }: { content: typeof internshipRoles }) {
  const ref = React.useRef<HTMLElement>(null);
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
    <article ref={ref} className="dko-press int-roles" data-in={shown || undefined}>
      <div className="dko-press-top">
        <span className="int-roles-k">{c.label}</span>
      </div>
      <h3 className="dko-clip-title">{c.title}</h3>
      <p className="dko-press-by">{c.sub}</p>
      <dl className="int-shares">
        {c.roles.map((r, i) => (
          <div key={r.name} className="int-share" data-step={i}>
            <dt>
              <span className="int-key" aria-hidden="true" />
              {r.name}
            </dt>
            <dd>{r.share}%</dd>
          </div>
        ))}
      </dl>
      <div className="dko-press-foot">
        <div className="int-split" aria-hidden="true">
          {c.roles.map((r, i) => (
            <span key={r.name} data-step={i} style={{ flex: `${r.share} 0 0` }} />
          ))}
        </div>
      </div>
    </article>
  );
}
