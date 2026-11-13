import type { BottomNavItem } from './bottom-nav';
import { heroFrame, type HeroFrameContent } from './home';

/**
 * The program page (/program, 2026-11-13, the user's ask): the section order of
 * scaler.com/school-of-business/program (overview, SSB vs traditional, curriculum, projects,
 * workshops, instructors, learners, life at SSB, then the call to apply), with the main page's
 * latest copy. Only the comparison below is new copy; every other section is the main page's own.
 */

/** The first fold: the main page's framed hero, naming the programme. */
export const programHero: HeroFrameContent = {
  ...heroFrame,
  eyebrow: 'Program',
  title: 'PGP in Management & Technology',
  // the curriculum's overview figures (sections/curriculum/journey/ssb.ts, `facts`)
  line: ['150+ hours of AI across 25+ tools', '10+ company-sourced projects', '3–6 month internship'],
  primaryCta: { label: 'Apply Now', href: '#apply' },
  secondaryCta: { label: 'Download Brochure', href: '#brochure' },
};

/** The sub-navigation, in the program page's order (each target an id on /program). */
export const programNav: BottomNavItem[] = [
  { label: 'SSB vs traditional', target: 'compare' },
  { label: 'Curriculum', target: 'program-curriculum' },
  { label: 'Projects', target: 'live-projects' },
  { label: 'Workshops', target: 'program-workshops' },
  { label: 'Faculty', target: 'program-faculty' },
  { label: 'Campus', target: 'campus-title' },
];

export type CompareRow = { label: string; ssb: string; traditional: string };

/** Scaler School of Business vs traditional B-schools: the program page's six rows, each SSB line
 *  rewritten from the main page's figures. The traditional lines are the program page's own. */
export const programCompare: {
  eyebrow: string;
  title: string;
  sub: string;
  ssbLabel: string;
  traditionalLabel: string;
  rows: CompareRow[];
} = {
  eyebrow: 'Why SSB',
  title: 'Built for today’s business.|Not yesterday’s.',
  sub: 'How the PGP in Management & Technology compares with a conventional MBA.',
  ssbLabel: 'SSB’s PGP-MT',
  traditionalLabel: 'Traditional B-schools',
  rows: [
    {
      label: 'Curriculum',
      ssb: 'Business fundamentals and 150+ hours of AI across 25+ tools, term by term.',
      traditional: 'Outdated and ill-equipped to solve real-world business problems.',
    },
    {
      label: 'Methodology',
      ssb: 'Learn by doing: launch a D2C brand, sell on the street, ship an AI product every term.',
      traditional: 'Disproportionate emphasis on theory over practical experience.',
    },
    {
      label: 'Instructors',
      ssb: 'Taught by 100+ industry leaders and faculty from McKinsey, BCG, Google, Uber and more.',
      traditional: 'Faculty with little or no industry experience.',
    },
    {
      label: 'Projects',
      ssb: '10+ company-sourced projects, pitched to founders such as Mokobara’s.',
      traditional: 'Age-old, theoretical projects that don’t solve today’s challenges.',
    },
    {
      label: 'Resources',
      ssb: 'The Scaler Innovation Lab and up to ₹50K in funding to build your MVP.',
      traditional: 'Restricted support to test and execute ideas.',
    },
    {
      label: 'Employability',
      ssb: 'Career prep from month one: 1,100+ mock interviews and a 3–6 month internship.',
      traditional: 'Placement prep left to the final term.',
    },
  ],
};
