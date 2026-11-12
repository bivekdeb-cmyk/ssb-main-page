import type { Metadata } from 'next';
import { admissionDeadline } from '@/content/admission';
import {
  internshipCallback,
  internshipHero,
  internshipHighlights,
  internshipNav,
  internshipNumbers,
  internshipRoles,
  internshipStories,
} from '@/content/internship';
import { DeckCloseSection } from '@/sections/deck/DeckFinale';
import { DeckFooter } from '@/sections/deck/DeckFooter';
import { DeckOutcomes } from '@/sections/deck/DeckOutcomes';
import { HeroFrameDeadline } from '@/sections/hero/frame/HeroFrame';
import { HomeNav, ScrollRefresh } from '@/sections/home/client';
import { InternshipHero } from '@/sections/internship-page/InternshipHero';
import { InternshipNumbers } from '@/sections/internship-page/InternshipNumbers';
import { InternshipRolesCard } from '@/sections/internship-page/InternshipRolesCard';
import { InternshipReels } from '@/sections/internship-page/InternshipReels';
import { CalmEntrance } from '@/sections/shared/CalmEntrance';
import { BottomNav } from '@/sections/site/BottomNav';
import { Tone } from '@/sections/tone/Tone';
import '@/sections/deck/tokens.css';

export const metadata: Metadata = {
  title: 'Internship | Scaler School of Business',
  description:
    'Scaler School of Business internship outcomes: full-time internships, stipends, the companies our learners intern at, their roles and their stories.',
};

/**
 * /internship (2026-11-12, the user's asks): the live internship page
 * (scaler.com/school-of-business/internship/) rebuilt from the home page's sections, short and light.
 * The first fold shows the companies our learners intern at, flipping (the home page's "Your peers
 * come from" grid, on the site's green panel); then the figures and the role split in one section, on
 * the home page's placement highlights (its ticker card and figure tiles; a roles card with the cohort
 * in the press card's place; no recruiters); the five students' videos on the home page's reel row; the
 * request-a-callback band before the footer. The early bird's countdown is the site's top strip, as on
 * /admission. Copy and its open questions: src/content/internship.ts.
 */
export default function InternshipPage() {
  return (
    <>
      <main
        data-page="v7"
        data-entrance="calm"
        data-brand="ssb"
        data-theme="light"
        className="bg-page text-content"
      >
        <ScrollRefresh />
        <CalmEntrance />
        <HeroFrameDeadline deadline={admissionDeadline} />
        <HomeNav light followTone pinned />
        <BottomNav instant hero="#int-top" items={internshipNav} />
        {/* the title and the companies our learners intern at */}
        <Tone>
          <InternshipHero content={internshipHero} />
        </Tone>
        {/* the figures and the role split, one section */}
        <Tone>
          <DeckOutcomes
            ticker
            recruiters={false}
            content={internshipHighlights}
            id="highlights"
            aside={<InternshipRolesCard content={internshipRoles} />}
          />
        </Tone>
        {/* the same figures as one crisp card (2026-11-12, the user's ask: another take, beside the one above) */}
        <Tone>
          <InternshipNumbers content={internshipNumbers} />
        </Tone>
        {/* "What Our Students Are Saying": the five students' videos on the home page's reel row */}
        <Tone>
          <InternshipReels content={internshipStories} />
        </Tone>
        {/* request a callback, the last thing before the footer */}
        <Tone>
          <DeckCloseSection content={internshipCallback} id="callback" />
        </Tone>
      </main>
      <Tone>
        <DeckFooter />
      </Tone>
    </>
  );
}
