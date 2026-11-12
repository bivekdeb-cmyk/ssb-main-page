import type { BottomNavItem } from '@/content/bottom-nav';
import { bottomNav } from '@/content/bottom-nav';
import { deckClose } from '@/content/deck';
import type { TopContent } from '@/content/admission';
import type { CloseContent } from '@/sections/deck/DeckFinale';

/*
 * The internship page (/internship, 2026-11-12), rebuilt from the live page
 * (scaler.com/school-of-business/internship/, read that day) in the home page's components, the
 * admission page's way: the live page's sections in its order, its numbers in the first fold, a
 * request-a-callback band before the footer. The copy is the live page's, set in the components'
 * patterns (sentence case, no exclamation marks); nothing is added that the live page doesn't say.
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

/** The first fold (the admission page's, AdmissionTop): the footer's forest green, SSB's photo melting
 *  into it, the live page's title and line, then its numbers in one box, split by rules. */
export const internshipTop: TopContent = {
  chip: 'Pre-placement season',
  title: 'Internship outcomes',
  // the live page's line: "Just halfway through the program, great impact already, and a lot more to come."
  sub: 'Halfway through the programme: great impact already, and a lot more to come.',
  primaryCta: { label: 'Apply Now', href: APPLY },
  secondaryCta: { label: 'Download Brochure', href: BROCHURE },
  // SSB's own photo: the cohort in a classroom under the school's banners
  photo: {
    src: '/media/cohort-group.webp',
    alt: 'An SSB cohort together in a classroom under the school’s banners',
    position: '50% 40%',
  },
  // the live page's three figures, and its line under them ("full-time internship offers within 10
  // months, and the number keeps growing") as the fourth
  facts: [
    { value: '70%', label: 'Full-time internships', note: '2 months early', icon: 'briefcase' },
    { value: '₹60,000', label: 'Highest stipend', note: 'A month', icon: 'trend' },
    { value: '₹40,000', label: 'Median stipend', note: 'A month', icon: 'wallet' },
    { value: '10 months', label: 'Offers within', note: 'And counting', icon: 'clock' },
  ],
};

/** "Our learners are now creating impact at": the live page's twelve, in its order (the files are the
 *  home page's, public/internship/logos). */
export const internshipCompanies = {
  eyebrow: 'Companies',
  title: 'Where our learners intern.',
  names: [
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
  ],
};

/** "Did you know?": the live page's two facts, on the home page's career prep (DeckCareerPrep). */
export const internshipKnow = {
  eyebrow: 'Did you know?',
  title: 'Beyond internships.|Startups and wins.',
  stats: [
    { value: '₹10L+', label: 'Revenue from real sales at our students’ startups' },
    { value: 'IIM-C', label: 'Winners: a team from our cohort won the competition' },
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

/** "Land high-impact roles": the live page's poster (an image there), as bars, largest first. */
export const internshipRoles = {
  eyebrow: 'Roles',
  title: 'Land high-impact roles.',
  sub: 'Learners now shaping businesses as professionals.',
  label: 'Internship roles by function',
  roles: [
    { name: 'Marketing', share: 38 },
    { name: 'Product', share: 21 },
    { name: 'Strategy', share: 15 },
    { name: 'Founder’s Office', share: 15 },
    { name: 'Operations', share: 6 },
    { name: 'Finance', share: 5 },
  ],
};

/** The request-a-callback band, last before the footer (the admission page's), the four figures again. */
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
  { label: 'Outcomes', target: 'int-top' },
  { label: 'Companies', target: 'companies-title' },
  { label: 'Stories', target: 'stories-title' },
  { label: 'Roles', target: 'roles-title' },
];
