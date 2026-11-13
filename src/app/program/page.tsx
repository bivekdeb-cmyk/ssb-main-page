import type { Metadata } from 'next';
import { heroFrame } from '@/content/home';
import { deckAlumni } from '@/content/deck';
import { programNav } from '@/content/program';
import { AlumniSection } from '@/sections/alumni/AlumniSection';
import { PeersTicker } from '@/sections/alumni/PeersTicker';
import { CampusLifeSection } from '@/sections/community/CommunitySections';
import { DeckFooter } from '@/sections/deck/DeckFooter';
import { HeroFrameDeadline } from '@/sections/hero/frame/HeroFrame';
import { Curriculum, HomeNav, ScrollRefresh } from '@/sections/home/client';
import { PeopleTabsSection } from '@/sections/people-tabs/PeopleTabsSection';
import {
  ProgramCity,
  ProgramCompare,
  ProgramCta,
  ProgramHero,
  ProgramProjects,
  ProgramWorkshops,
} from '@/sections/program/ProgramSections';
import { ProgramWeek } from '@/sections/program/ProgramWeek';
import { BottomNav } from '@/sections/site/BottomNav';
import { CalmEntrance } from '@/sections/shared/CalmEntrance';
import { Tone } from '@/sections/tone/Tone';
import '../v6.css';
import '@/sections/deck/tokens.css';

export const metadata: Metadata = { title: 'PGP in Management & Technology | Scaler School of Business' };

/**
 * /program (2026-11-13, the user's asks): the programme page. The order and copy of
 * scaler.com/school-of-business/program, in the SSB pages' style: its own first fold (the programme's
 * name and six figures), SSB vs traditional as two cards, the main page's term-wise curriculum, the
 * projects and workshops as bentos, the instructors, a week at SSB as a timetable, the learners,
 * campus life, Bangalore, then the call to apply (content/program.ts, sections/program/).
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

        <Tone>
          <ProgramHero />
        </Tone>
        <Tone>
          <ProgramCompare />
        </Tone>
        {/* term-wise curriculum: the main page's terms, each opening its courses */}
        <Tone>
          <div id="program-curriculum">
            <Curriculum part="terms" termsStack termsVersion={4} deck />
          </div>
        </Tone>
        <Tone>
          <ProgramProjects />
        </Tone>
        <Tone>
          <ProgramWorkshops />
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
        <Tone>
          <ProgramWeek />
        </Tone>
        {/* meet our learners */}
        <Tone>
          <AlumniSection
            eyebrow={deckAlumni.eyebrow}
            title={deckAlumni.title}
            sub={deckAlumni.sub}
            people={deckAlumni.people}
            peers={<PeersTicker title={deckAlumni.peersTitle} />}
          />
        </Tone>
        <Tone>
          <CampusLifeSection />
        </Tone>
        <Tone>
          <ProgramCity />
        </Tone>
        <Tone>
          <ProgramCta />
        </Tone>
      </main>
      <Tone>
        <DeckFooter />
      </Tone>
    </>
  );
}
