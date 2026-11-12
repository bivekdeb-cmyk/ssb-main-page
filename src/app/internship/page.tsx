import type { Metadata } from 'next';
import { admissionDeadline } from '@/content/admission';
import {
  internshipCallback,
  internshipCompanies,
  internshipKnow,
  internshipNav,
  internshipRoles,
  internshipStories,
  internshipTop,
} from '@/content/internship';
import { AdmissionTop } from '@/sections/admission/AdmissionTop';
import { DeckCareerPrep } from '@/sections/deck/DeckCareerPrep';
import { DeckCloseSection } from '@/sections/deck/DeckFinale';
import { DeckFooter } from '@/sections/deck/DeckFooter';
import { HeroFrameDeadline } from '@/sections/hero/frame/HeroFrame';
import { HomeNav, ScrollRefresh } from '@/sections/home/client';
import { InternshipCompanies } from '@/sections/internship-page/InternshipCompanies';
import { InternshipRoles } from '@/sections/internship-page/InternshipRoles';
import { InternshipStories } from '@/sections/internship-page/InternshipStories';
import { CalmEntrance } from '@/sections/shared/CalmEntrance';
import { BottomNav } from '@/sections/site/BottomNav';
import { Tone } from '@/sections/tone/Tone';
import '@/sections/deck/tokens.css';

export const metadata: Metadata = {
  title: 'Internship | Scaler School of Business',
  description:
    'Scaler School of Business internship outcomes: full-time internships, stipends, the companies our learners intern at, their stories and roles.',
};

/**
 * /internship (2026-11-12, the user's ask: the live internship page, built the admission page's way):
 * the live page (scaler.com/school-of-business/internship/) rebuilt from the home page's and the
 * admission page's sections, in the live page's order. Its numbers first, in the admission page's
 * short green first fold (SSB's cohort photo, not the arch, so the page reads as its own); the
 * companies in the home page's logo tiles; "Did you know?" dark, on the career prep's cards; the five
 * students' stories with the live covers and videos; the role split as bars (an image on the live
 * page); the request-a-callback band last before the footer. The early bird's countdown is the site's
 * top strip, as on /admission. Copy and its open questions: src/content/internship.ts.
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
        {/* "Pre-Placement Season Outcomes" and its three figures (and the offers line) in one box */}
        <Tone>
          <AdmissionTop content={internshipTop} id="int-top" />
        </Tone>
        {/* "Our Learners Are Now Creating Impact At": the twelve logos */}
        <Tone>
          <InternshipCompanies content={internshipCompanies} />
        </Tone>
        {/* "Did you know?": the students' startups' revenue and the IIM-C win, dark */}
        <Tone dark>
          <DeckCareerPrep content={internshipKnow} id="know" />
        </Tone>
        {/* "What Our Students Are Saying": the five stories, a tap to play */}
        <Tone>
          <InternshipStories content={internshipStories} />
        </Tone>
        {/* "Land High Impact Roles": the role split */}
        <Tone>
          <InternshipRoles content={internshipRoles} />
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
