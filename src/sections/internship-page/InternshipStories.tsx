'use client';

import * as React from 'react';

import type { InternshipStory, internshipStories } from '@/content/internship';
import { Lightbox } from '@/sections/learn-by-doing/LearnByDoingSection';
import { RowSection } from '@/sections/shared/RowSection';
import '@/sections/learn-by-doing/learn-by-doing.css';
import './internship-page.css';

/**
 * "What our students are saying" (the internship page, 2026-11-12): the five stories in the home
 * page's row (RowSection), each a card of the page's with the live page's cover (its headline and play
 * mark are in the picture), the name and the student's line under it. A tap plays the video in the
 * lightbox, 9:16, with sound and controls. The videos are 40–50 MB each, so nothing autoplays: they
 * load only when asked for. Desktop: all five in a row; narrower, the row scrolls with its dots.
 */
export function InternshipStories({ content: c }: { content: typeof internshipStories }) {
  const [open, setOpen] = React.useState<InternshipStory | null>(null);
  return (
    <>
      <RowSection
        id="stories"
        eyebrow={c.eyebrow}
        title={c.title}
        itemName="story"
        // narrower than desktop the row scrolls; from 1056px the five sit across the column (internship-page.css)
        cardWidth="16rem"
      >
        {c.items.map((s) => (
          <article key={s.name} className="ins-card">
            <button
              type="button"
              className="ins-btn"
              onClick={() => setOpen(s)}
              aria-label={`Play ${s.name}’s story: ${s.quote}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- the live page's cover */}
              <img
                className="ins-cover"
                src={s.cover}
                alt=""
                width={1192}
                height={1558}
                loading="lazy"
                decoding="async"
              />
              <span className="ins-copy">
                <span className="ins-name">{s.name}</span>
                <span className="ins-quote">{s.quote}</span>
              </span>
            </button>
          </article>
        ))}
      </RowSection>
      {open ? (
        <Lightbox
          src={open.video}
          poster={open.cover}
          portrait
          title={`${open.name}’s story`}
          onClose={() => setOpen(null)}
        />
      ) : null}
    </>
  );
}
