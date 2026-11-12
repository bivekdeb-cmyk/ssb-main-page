'use client';

import * as React from 'react';

import type { internshipRoles } from '@/content/internship';
import './internship-page.css';

/**
 * The role split in the placement highlights' press card place (the internship page, 2026-11-12, the
 * user's ask: the figures and the graph in one section, on the home page's placement section). The
 * press card's anatomy (deck-outcomes.css `dko-press`): a top line, the title and its line over a rule,
 * the placement section's cohort photo beside the legend, then, in the card's foot, one bar split by
 * function, largest first, in the brand green's steps. The bar wipes open from the left once the card
 * is a third on screen; under reduced motion it is simply there.
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
      <div className="dko-press-story int-roles-story">
        {/* eslint-disable-next-line @next/next/no-img-element -- fills its box */}
        <img
          className="dko-clip-photo"
          src={c.photo.src}
          srcSet={c.photo.srcSet}
          sizes="(min-width: 1056px) 260px, 100vw"
          alt={c.photo.alt}
          loading="lazy"
          decoding="async"
        />
        <ul className="int-legend">
          {c.roles.map((r, i) => (
            <li key={r.name} data-step={i}>
              <span className="int-legend-dot" aria-hidden="true" />
              <span className="int-legend-name">{r.name}</span>
              <span className="int-legend-share">{r.share}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="dko-press-foot">
        <div className="int-split" aria-hidden="true">
          {c.roles.map((r, i) => (
            <span key={r.name} data-step={i} style={{ flex: `${r.share} 0 0` }}>
              {r.share >= 15 ? `${r.share}%` : null}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
