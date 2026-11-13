import type { Metadata } from 'next';
import { heroFrame } from '@/content/home';
import { deckAlumni, deckLiveLogos } from '@/content/deck';
import { programHero, programNav } from '@/content/program';
import { AlumniSection } from '@/sections/alumni/AlumniSection';
import { PeersTicker } from '@/sections/alumni/PeersTicker';
import { CampusLifeSection } from '@/sections/community/CommunitySections';
import { DeckCareerPrep } from '@/sections/deck/DeckCareerPrep';
import { DeckCloseSection, DeckFaqSection } from '@/sections/deck/DeckFinale';
import { DeckFooter } from '@/sections/deck/DeckFooter';
import { HeroFrame, HeroFrameDeadline } from '@/sections/hero/frame/HeroFrame';
import { Curriculum, HomeNav, ScrollRefresh } from '@/sections/home/client';
import { LiveProjectsSection } from '@/sections/live-projects/LiveProjectsSection';
import { PeopleTabsSection } from '@/sections/people-tabs/PeopleTabsSection';
import { ProgramCompare } from '@/sections/program/ProgramCompare';
import { BottomNav } from '@/sections/site/BottomNav';
import { CalmEntrance } from '@/sections/shared/CalmEntrance';
import { Tone } from '@/sections/tone/Tone';
import '../v6.css';
import '@/sections/deck/tokens.css';

export const metadata: Metadata = { title: 'PGP in Management & Technology | Scaler School of Business' };

/**
 * /program (2026-11-13, the user's ask): the programme page. The order of
 * scaler.com/school-of-business/program (overview, SSB vs traditional, term-wise curriculum, projects,
 * workshops, instructors, learners, life at SSB, the call to apply), each slot filled with the main
 * page's (/) latest section in the same style and tones. New here: the hero's copy and the comparison
 * (content/program.ts, sections/program/).
 */
export default function ProgramPage() {
  return (
    <>
      <main data-page="v7" data-entrance="calm" data-brand="ssb" data-theme="light" className="bg-page text-content">
        <ScrollRefresh />
        <CalmEntrance />
        <HeroFrameDeadline deadline={heroFrame.deadline} />
        <HomeNav light followTone pinned />
        <BottomNav instant items={programNav} />

        {/* overview: the programme's name, its figures and facts */}
        <Tone>
          <HeroFrame content={programHero} variant="deck" />
        </Tone>
        {/* Scaler vs traditional */}
        <Tone>
          <ProgramCompare />
        </Tone>
        {/* term-wise curriculum: the five terms, each opening its courses and workshops */}
        <Tone>
          <div id="program-curriculum">
            <Curriculum part="terms" termsStack termsVersion={4} deck />
          </div>
        </Tone>
        {/* real-world projects */}
        <Tone>
          <LiveProjectsSection logos={deckLiveLogos} />
        </Tone>
        {/* practical workshops: the 150-hour AI curriculum, then career prep */}
        <Tone>
          <div id="program-workshops">
            <Curriculum part="ai" aiCarousel deck />
          </div>
        </Tone>
        <Tone dark>
          <DeckCareerPrep />
        </Tone>
        {/* who are your instructors: faculty, then mentors */}
        <Tone>
          <div id="program-faculty">
            <PeopleTabsSection groups={['faculty']} drift />
          </div>
        </Tone>
        <Tone>
          <PeopleTabsSection groups={['mentors']} id="mentors" label="Mentors" stack borrow={{ from: 'investors', count: 5 }} />
        </Tone>
        {/* meet our learners: the alumni, then where the cohort comes from */}
        <Tone>
          <AlumniSection
            eyebrow={deckAlumni.eyebrow}
            title={deckAlumni.title}
            sub={deckAlumni.sub}
            people={deckAlumni.people}
            peers={<PeersTicker title={deckAlumni.peersTitle} />}
          />
        </Tone>
        {/* life at SSB: the campus in Bangalore */}
        <Tone>
          <CampusLifeSection />
        </Tone>
        {/* the call to apply */}
        <Tone>
          <DeckFaqSection />
          <DeckCloseSection />
        </Tone>
      </main>
      <Tone>
        <DeckFooter />
      </Tone>
    </>
  );
}
