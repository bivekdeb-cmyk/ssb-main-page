import type { Metadata } from 'next';
import { heroFrame } from '@/content/home';
import { faqNav } from '@/content/faq';
import { DeckCloseSection } from '@/sections/deck/DeckFinale';
import { DeckFooter } from '@/sections/deck/DeckFooter';
import { FaqBrowser, FaqHero, FaqRecommended, FaqUsps } from '@/sections/faq/FaqSections';
import { HeroFrameDeadline } from '@/sections/hero/frame/HeroFrame';
import { HomeNav, ScrollRefresh } from '@/sections/home/client';
import { PinLight } from '@/sections/program/PinLight';
import { BottomNav } from '@/sections/site/BottomNav';
import { CalmEntrance } from '@/sections/shared/CalmEntrance';
import { Tone } from '@/sections/tone/Tone';
import '@/sections/deck/tokens.css';

export const metadata: Metadata = {
  title: 'FAQs | Scaler School of Business',
  description: 'Answers to the most commonly asked questions about Scaler School of Business: degree, eligibility, application, interviews, admissions, the programme and outcomes, financing and scholarships.',
};

/**
 * /faq (2026-11-13, the user's ask): the live FAQ page (scaler.com/school-of-business/faq/) in the new
 * pages' design, light only (PinLight, as /program). The first fold on the program page's green panel
 * with the live page's three videos; "Why SSB"; the questions under their eight categories on the home
 * page's FAQ accordion; the twelve recommended videos; the main page's closing band (id "callback", so
 * the page's "Request a callback" links land on it). Copy: content/faq.ts; sections: sections/faq/.
 */
export default function FaqPage() {
  return (
    <>
      <PinLight />
      <main data-page="v7" data-entrance="calm" data-brand="ssb" data-theme="light" className="bg-page text-content">
        <ScrollRefresh />
        <CalmEntrance />
        <HeroFrameDeadline deadline={heroFrame.deadline} />
        <HomeNav light followTone pinned />
        <BottomNav instant hero="#fq-top" items={faqNav} />
        <Tone>
          <FaqHero />
        </Tone>
        <Tone>
          <FaqUsps />
        </Tone>
        <Tone>
          <FaqBrowser />
        </Tone>
        <Tone>
          <FaqRecommended />
        </Tone>
        <Tone>
          <DeckCloseSection id="callback" />
        </Tone>
      </main>
      <Tone>
        <DeckFooter />
      </Tone>
    </>
  );
}
