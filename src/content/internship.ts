import type { BottomNavItem } from '@/content/bottom-nav';
import { bottomNav } from '@/content/bottom-nav';
import { deckClose } from '@/content/deck';
import type { OutcomesContent } from '@/sections/deck/DeckOutcomes';
import type { CloseContent } from '@/sections/deck/DeckFinale';
import type { HeroLogo } from '@/sections/hero/types';

/*
 * The internship page (/internship, 2026-11-12), rebuilt from the live page
 * (scaler.com/school-of-business/internship/, read that day) in the home page's components: the
 * companies in the first fold, on the home page's flipping logo grid; the figures and the role split
 * in one section, on the home page's placement highlights (its ticker card and figure tiles, a roles
 * card in the press card's place); the students' stories; the request-a-callback band. The copy is
 * the live page's, set in the components' patterns (sentence case, no exclamation marks); nothing is
 * added that the live page doesn't say.
 *
 * TO CONFIRM before this ships: the live page's figures are its "pre-placement season" (70% with
 * full-time internships 2 months early, ₹60,000 highest and ₹40,000 median monthly stipend, offers
 * within 10 months). The home page's internship section says otherwise (100% internship placement,
 * stipends up to ₹1 lakh, 52%+ in Product and Founder's Office; content/deck.ts
 * `deckInternshipStats`), and the live page's role split puts Product and Founder's Office at 36%.
 */

const APPLY = 'https://www.scaler.com/school-of-business/application';
const BROCHURE =
  'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/164/923/original/brochure-nov-compressed.pdf?1763005202';

/** Where our learners intern: the live internship page's twelve first, in its order, then the rest of
 *  the live home page's "Our learners are now creating impact at" (the home page's files,
 *  public/internship/logos). The first fold shows twelve at a time and flips through all of them. */
const COMPANIES = [
  'Razorpay',
  'MPL',
  'Chai Point',
  'Aeos Labs',
  'SpotDraft',
  'WNS Vuram',
  'Vaani',
  'Emergent',
  'Neosapien',
  'Clientell',
  'BharatPe',
  'Onsurity',
  'BCCI',
  'The Whole Truth',
  'apna',
  'LoEstro',
  'Airtribe',
  'Slikk',
  'Ninjacart',
  'BorderPlus',
  'ToolJet',
  'FirstClub',
  'LimeChat',
  'Reckitt',
];

/** The first fold: the title and the live page's line, the actions, and the companies. */
export const internshipHero = {
  chip: 'Pre-placement season',
  title: 'Internship outcomes',
  // the live page's line ("Just halfway through the program, great impact already, and a lot more
  // to come.") with its first figure ("70% secured full-time internships 2 months early")
  sub: 'Halfway through the programme, 70% have secured full-time internships, two months early.',
  primaryCta: { label: 'Apply Now', href: APPLY },
  secondaryCta: { label: 'Download Brochure', href: BROCHURE },
  logosLabel: 'Our learners intern at',
  logos: COMPANIES.map((name): HeroLogo => ({
    name,
    wordmark: name,
    logoUrl: `/internship/logos/${name.toLowerCase().replace(/ /g, '-')}.png`,
  })),
};

/** The figures, on the home page's placement highlights (DeckOutcomes): the live page's three, its
 *  "offers within 10 months" line, and its two "Did you know?" facts. */
export const internshipHighlights: OutcomesContent = {
  eyebrow: 'Outcomes',
  title: 'Internship highlights.|Great impact already, and more to come.',
  ticker: 'Internship highlights',
  figures: [
    {
      value: '70%',
      label: 'Full-time internships',
      note: 'Secured 2 months early',
      short: 'Full-time interns',
    },
    { value: '₹60,000', label: 'Highest stipend', note: 'A month', short: 'Highest stipend' },
    { value: '₹40,000', label: 'Median stipend', note: 'A month, full-time', short: 'Median stipend' },
    { value: '10', label: 'Months to offers', note: 'Full-time, and counting', short: 'Months to offers' },
    {
      value: '₹10L+',
      label: 'Startup revenue',
      note: 'Real sales, student startups',
      short: 'Startup revenue',
    },
    { value: 'IIM-C', label: 'Competition winners', note: 'A team from our cohort', short: 'IIM-C winners' },
  ],
};

/** The role split (the live page's "Land High Impact Roles" poster), in the press card's place: the
 *  placement section's cohort photo, then one bar split by function, largest first. */
export const internshipRoles = {
  title: 'Land high-impact roles',
  sub: 'Learners now shaping businesses as professionals.',
  label: 'Internship roles by function',
  photo: {
    src: '/media/cohort-group-800.webp',
    srcSet: '/media/cohort-group-800.webp 800w, /media/cohort-group.webp 1600w',
    alt: 'An SSB cohort together on campus',
  },
  roles: [
    { name: 'Marketing', share: 38 },
    { name: 'Product', share: 21 },
    { name: 'Strategy', share: 15 },
    { name: 'Founder’s Office', share: 15 },
    { name: 'Operations', share: 6 },
    { name: 'Finance', share: 5 },
  ],
};

export type InternshipStory = {
  name: string;
  /** the student's line, the live card's (sentence case) */
  quote: string;
  /** the live page's cover (its headline and play mark are in the picture) */
  cover: string;
  /** the live page's video: vertical, 9:16, 40–50 MB each, so it plays on a tap only */
  video: string;
};

const CDN = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000';

/** "What our students are saying": the five stories, each its cover and video from the live page. */
export const internshipStories = {
  eyebrow: 'Student stories',
  title: 'What our students are saying.|In their own words.',
  items: [
    {
      name: 'Akarsh',
      quote: 'I went from Senior Analyst at Uber to crafting a GTM strategy for US market penetration.',
      cover: '/internship/stories/akarsh.webp',
      video: `${CDN}/138/535/original/akarsh.mp4?1752238085`,
    },
    {
      name: 'Yukthi',
      quote: 'I work with a $100M fund partner to discover SaaS companies with an ARR of $1 million.',
      cover: '/internship/stories/yukthi.webp',
      video: `${CDN}/138/859/original/yukhti_compressed.mp4?1752568638`,
    },
    {
      name: 'Moh',
      quote: 'I’m managing a $40M fund for India’s next breakout startups.',
      cover: '/internship/stories/moh.webp',
      video: `${CDN}/138/217/original/Script_6_Moh_2_9-16_%281%29.mp4?1752057825`,
    },
    {
      name: 'Ayush',
      quote: 'I went from CA to working directly with a private equity fund manager.',
      cover: '/internship/stories/ayush.webp',
      video: `${CDN}/138/536/original/ayush.mp4?1752238172`,
    },
    {
      name: 'Yash',
      quote:
        'Building an AI startup that cuts UPSC paper correction costs by 10x, while interning at a YC-backed fintech.',
      cover: '/internship/stories/yash.webp',
      video: `${CDN}/138/537/original/yash.mp4?1752238269`,
    },
  ] satisfies InternshipStory[],
};

/** The request-a-callback band, last before the footer (the admission page's), the key figures again. */
export const internshipCallback: CloseContent = {
  ...deckClose,
  eyebrow: undefined,
  title: 'Questions about the internship?',
  line: 'Talk to an admissions counsellor, one to one, about internships, roles and stipends.',
  // PLACEHOLDER href: the home page's call-back placeholder, until a real destination is agreed
  primaryCta: { label: bottomNav.callback.label, href: bottomNav.callback.href, icon: 'arrow' },
  secondaryCta: { label: 'Download Brochure', href: BROCHURE, icon: 'download' },
  facts: [
    { value: '70%', label: 'Full-time internships' },
    { value: '₹60,000', label: 'Highest stipend' },
    { value: '₹40,000', label: 'Median stipend' },
    { value: '10 months', label: 'Offers within' },
  ],
  // SSB's own photo: students in a lecture hall (the live page's first fold is a classroom too)
  image: '/campus/classroom.webp',
  imageSmall: '/campus/classroom.webp',
  imageAlt: 'SSB students in a lecture hall',
};

/** The bottom navigation: this page's sections. Each target is a section's heading id (or the first
 *  fold's own); a target resolves to its closest section. */
export const internshipNav: BottomNavItem[] = [
  { label: 'Companies', target: 'int-top' },
  { label: 'Highlights', target: 'highlights-title' },
  { label: 'Stories', target: 'stories-title' },
];
