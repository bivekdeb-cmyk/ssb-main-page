'use client';

import * as React from 'react';
import { Container, Section } from '@kishanscaler/ssx-ui';

import type { internshipNumbers } from '@/content/internship';
import { Header } from '@/sections/deck/DeckSections';
import './internship-page.css';

/** The donut's ring: radius and circumference in the SVG's units (a 120 × 120 box). */
const R = 48;
const C = 2 * Math.PI * R;
/** The gap between two segments, in the same units. */
const GAP = 1.6;

/**
 * The internship figures as one crisp card (2026-11-12, the user's ask: another section beside the
 * placement-highlights one, after his earlier numbered-blocks layout): a white card of the page's split
 * by hairlines into numbered blocks, each its number in the brand green and its title. 01 the role split
 * as a donut in the brand green's steps beside its legend; 02 the two stipends as columns fading into the
 * card, the figure over each and its label under; 03 the season's other figures in a row, hairlines
 * between. Everything draws in once the card is a fifth on screen (the donut's segments, the columns
 * rising); under reduced motion it is simply there. Phones: the blocks stacked, the row 2 × 2.
 */
export function InternshipNumbers({ content: c }: { content: typeof internshipNumbers }) {
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
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const total = c.roles.items.reduce((sum, r) => sum + r.share, 0);
  let start = 0;
  const segments = c.roles.items.map((r) => {
    const len = (r.share / total) * C;
    const seg = { name: r.name, len: Math.max(0, len - GAP), off: -start };
    start += len;
    return seg;
  });

  return (
    <Section id="numbers" density="roomy" aria-labelledby="numbers-title" className="int-num">
      <Container>
        <Header id="numbers" eyebrow={c.eyebrow} title={c.title} />
        <div ref={ref} className="int-num-card" data-in={shown || undefined}>
          <div className="int-num-top">
            {/* 01: the role split */}
            <div className="int-num-block">
              <h3 className="int-num-title">
                <span className="int-num-k">{c.roles.num}</span>
                {c.roles.title}
              </h3>
              <div className="int-donut-wrap">
                <svg className="int-donut" viewBox="0 0 120 120" role="img" aria-label={c.roles.title}>
                  <g transform="rotate(-90 60 60)">
                    {segments.map((s, i) => (
                      <circle
                        key={s.name}
                        cx="60"
                        cy="60"
                        r={R}
                        data-step={i}
                        style={
                          {
                            '--len': s.len,
                            '--c': C,
                            strokeDashoffset: s.off,
                            transitionDelay: `${i * 90}ms`,
                          } as React.CSSProperties
                        }
                      />
                    ))}
                  </g>
                </svg>
                <ul className="int-donut-legend">
                  {c.roles.items.map((r, i) => (
                    <li key={r.name} data-step={i}>
                      <span className="int-key" aria-hidden="true" />
                      <b>{r.share}%</b>
                      {r.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 02: the stipends */}
            <div className="int-num-block">
              <h3 className="int-num-title">
                <span className="int-num-k">{c.stipends.num}</span>
                {c.stipends.title}
              </h3>
              <div
                className="int-scale"
                aria-label={`${c.stipends.median.label} ${c.stipends.median.display}, ${c.stipends.highest.label} ${c.stipends.highest.display}, a month`}
              >
                <div className="int-scale-plot" aria-hidden="true">
                  {/* the two readouts, each hung over its own mark on the track: the median's to the
                      left of its mark, the highest's to the right of its own */}
                  {[c.stipends.median, c.stipends.highest].map((p, i) => (
                    <div
                      key={p.label}
                      className="int-scale-call"
                      data-side={i === 0 ? 'left' : 'right'}
                      style={{ '--at': p.value / c.stipends.max } as React.CSSProperties}
                    >
                      <span className="int-scale-value">{p.display}</span>
                      <span className="int-scale-label">{p.label}</span>
                    </div>
                  ))}
                  <div className="int-scale-track">
                    <span
                      className="int-scale-fill"
                      style={{ '--to': c.stipends.median.value / c.stipends.max } as React.CSSProperties}
                    />
                    <span
                      className="int-scale-range"
                      style={
                        {
                          '--from': c.stipends.median.value / c.stipends.max,
                          '--to': c.stipends.highest.value / c.stipends.max,
                        } as React.CSSProperties
                      }
                    />
                    {[c.stipends.median, c.stipends.highest].map((p) => (
                      <span
                        key={p.label}
                        className="int-scale-pin"
                        style={{ '--at': p.value / c.stipends.max } as React.CSSProperties}
                      />
                    ))}
                  </div>
                  <div className="int-scale-ticks">
                    {c.stipends.ticks.map((t) => (
                      <span key={t.value} style={{ '--at': t.value / c.stipends.max } as React.CSSProperties}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 03: the season's other figures */}
          <div className="int-num-block int-num-season">
            <h3 className="int-num-title">
              <span className="int-num-k">{c.season.num}</span>
              {c.season.title}
            </h3>
            <dl className="int-num-row">
              {c.season.items.map((f) => (
                <div key={f.value}>
                  <dd>{f.value}</dd>
                  <dt>{f.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
