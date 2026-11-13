import type { BottomNavItem } from './bottom-nav';

/**
 * The program page (/program, 2026-11-13, the user's asks): the section order and the copy of
 * scaler.com/school-of-business/program (overview, SSB vs traditional, curriculum, projects,
 * workshops, instructors, a week at SSB, learners, Bangalore, the call to apply), set in the SSB
 * pages' style. The projects, workshops and timetable are images on scaler.com; their text is
 * transcribed here as it reads there (2026-11-13).
 */

/** The sub-navigation, in the program page's order (each target an id on /program). */
export const programNav: BottomNavItem[] = [
  { label: 'SSB vs traditional', target: 'compare' },
  { label: 'Curriculum', target: 'program-curriculum' },
  { label: 'Projects', target: 'projects' },
  { label: 'Workshops', target: 'workshops' },
  { label: 'Faculty', target: 'program-faculty' },
  { label: 'Life at SSB', target: 'week' },
];

/** The first fold: the programme's name and its six figures. */
export const programHero = {
  crumbs: [
    { label: 'Home', href: '/' },
    { label: 'Program', href: '/program' },
  ],
  eyebrow: 'Full-time · On campus in Bangalore',
  title: 'PGP in Management & Technology',
  short: 'PGP-MT',
  line: 'An 18-month programme, built term by term with the industry: core business, functional and industry specialisations, real company projects and a 3-month internship.',
  primaryCta: { label: 'Apply Now', href: '#apply' },
  secondaryCta: { label: 'Download Brochure', href: '#brochure' },
  note: 'Admissions for the 2026 cohort are now open',
  image: { src: '/campus/classroom.webp', alt: 'SSB students in the lecture hall' },
  figures: [
    { value: '6', label: 'Terms', note: '3 months each' },
    { value: '22', label: 'Core Courses' },
    { value: '20', label: 'Functional Specialisations' },
    { value: '4', label: 'Industry Specialisations' },
    { value: '20+', label: 'Workshops' },
    { value: '100+', label: 'Case Studies' },
  ],
};

export type CompareRow = { label: string; ssb: string; traditional: string };

/** Scaler School of Business v/s Traditional B-Schools (the program page's six rows, its words). */
export const programCompare = {
  eyebrow: 'Why SSB',
  title: 'SSB vs traditional B‑schools.|Six differences that matter.',
  sub: 'Six ways the PGP-MT differs from a conventional MBA.',
  ssbLabel: 'Scaler’s PGP-MT',
  traditionalLabel: 'Conventional programs',
  rows: [
    {
      label: 'Curriculum',
      ssb: 'Modern and equipped with modules preferred by the industry',
      traditional: 'Outdated and ill-equipped to solve real-world business problems',
    },
    {
      label: 'Methodology',
      ssb: 'Practical first approach integrating modern business tools',
      traditional: 'Disproportionate emphasis on theory over practical experience',
    },
    {
      label: 'Instructors',
      ssb: 'Taught by business leaders from specific domains like finance, strategy & operations',
      traditional: 'No prior industry experience',
    },
    {
      label: 'Projects',
      ssb: 'Company-sourced, real-world projects to prepare for on-ground crisis',
      traditional: 'Age-old, theoretical projects that do not solve today’s key challenges',
    },
    {
      label: 'Resources',
      ssb: 'A sprawling Scaler Innovation Lab to bring your ideas to life',
      traditional: 'Restricted support to test and execute ideas',
    },
    {
      label: 'Employability',
      ssb: 'Access to top-notch job placements at MNCs & startups',
      traditional: 'Lack of domain-specific opportunities',
    },
  ] as CompareRow[],
};

export type Project = { title: string; desc: string };
export type Phase = { num: number; name: string; months: number; projects: Project[] };

/** Real-World Projects: four phases, 18 months. */
export const programProjects: { eyebrow: string; title: string; sub: string; phases: Phase[] } = {
  eyebrow: 'Learn by doing',
  title: 'Real-world projects.|Four phases, 18 months.',
  sub: 'Every phase is built around projects sourced from real companies.',
  phases: [
    {
      num: 1,
      name: 'Business Fundamentals',
      months: 6,
      projects: [
        {
          title: 'Business Performance Optimization',
          desc: 'Choose a real company and analyze its operations, covering financial accounting, marketing, managerial economics, communication, sales strategies and business strategy.',
        },
        {
          title: 'Hackathon: Strategy Consulting',
          desc: 'A problem-solving marathon led by seasoned McKinsey/BCG/Bain leaders, using consulting frameworks such as issue trees and the BCG growth matrix.',
        },
      ],
    },
    {
      num: 2,
      name: 'Functional Specialization',
      months: 6,
      projects: [
        { title: 'Strategic Investment Analysis', desc: 'Evaluate VC, PE and angel investment strategies in tech, and build funding frameworks that align business strategy with these investors’ expectations.' },
        { title: 'The Big Brand Story: A Data-Driven Approach', desc: 'Craft a brand narrative of milestones, challenges and strategies, using business analytics and product management principles.' },
        { title: 'New Product Launch Campaign', desc: 'Plan the marketing for a new product or service: goals, target audience, messaging and implementation.' },
        { title: 'Portfolio Optimisation Challenge', desc: 'Build and manage a diversified investment portfolio on historical market data, using modern portfolio theory.' },
        { title: 'Financial Health Assessment and Action Plan', desc: 'Analyze a company’s ratios and trends, benchmark it against peers and create an improvement plan.' },
        { title: 'E-commerce Operations Transformation', desc: 'Streamline order fulfilment for an e-commerce startup within a three-week timeframe.' },
        { title: 'Process Improvement Initiative', desc: 'Find process improvements in a SaaS company: the current process, enhancements and their benefits.' },
        { title: 'Strategy Bootcamp: Emerging Tech', desc: 'Design and execute a market-entry strategy for a virtual reality startup.' },
        { title: 'Competitive Landscape Analysis', desc: 'A SWOT assessment and strategic recommendations for a digital business.' },
        { title: 'Market Basket Analysis for Retail: DMart / Zepto', desc: 'Analyze retail transaction data for buying patterns and devise targeted marketing to lift sales.' },
        { title: 'Interview Mastery Bootcamp', desc: 'Real-world interview scenarios with expert guidance, salary negotiation workshops, peer best practices and mock interviews.' },
      ],
    },
    {
      num: 3,
      name: 'Internship',
      months: 3,
      projects: [
        { title: 'Industry Immersion', desc: 'A 3-month internship, managing real-life projects in top firms or leading startups.' },
      ],
    },
    {
      num: 4,
      name: 'Advanced Tech-Industry Integration',
      months: 3,
      projects: [
        { title: 'Build AI', desc: 'Design and develop a custom AI tool that automates or enhances a business process or customer experience in your organisation.' },
      ],
    },
  ],
};

export type WorkshopIcon =
  | 'excel' | 'powerpoint' | 'idea' | 'robot' | 'design' | 'sql' | 'finance' | 'linkedin'
  | 'kanban' | 'canva' | 'sparkle' | 'lab' | 'resume' | 'analytics' | 'puzzle' | 'bars'
  | 'people' | 'video' | 'crypto' | 'trend';

/** Practical Workshops: four a term, five terms. */
export const programWorkshops: {
  eyebrow: string;
  title: string;
  sub: string;
  lead: { value: string; label: string; line: string };
  terms: { term: number; items: { name: string; icon: WorkshopIcon }[] }[];
} = {
  eyebrow: 'Empower your skills',
  title: 'Practical workshops.|Tools you’ll use on day one.',
  sub: 'Hands-on sessions every term, from Excel to algorithmic trading.',
  lead: { value: '20+', label: 'Workshops', line: 'Four every term, across five terms, alongside your courses.' },
  terms: [
    { term: 1, items: [
      { name: 'Excel Fundamentals', icon: 'excel' },
      { name: 'PowerPoint Fundamentals', icon: 'powerpoint' },
      { name: 'Guesstimates & Business Cases', icon: 'idea' },
      { name: 'Build Your Own AI Chatbot', icon: 'robot' },
    ] },
    { term: 2, items: [
      { name: 'Design Thinking', icon: 'design' },
      { name: 'SQL Querying', icon: 'sql' },
      { name: 'Personal Finance', icon: 'finance' },
      { name: 'Profile Branding', icon: 'linkedin' },
    ] },
    { term: 3, items: [
      { name: 'Tools for Project Management', icon: 'kanban' },
      { name: 'Designing on Canva', icon: 'canva' },
      { name: 'AI Applications in Finance', icon: 'sparkle' },
      { name: 'Leadership Labs & Simulation', icon: 'lab' },
    ] },
    { term: 4, items: [
      { name: 'Resume Building', icon: 'resume' },
      { name: 'Mixpanel for Product Analytics', icon: 'analytics' },
      { name: 'Supply Chain Simulation: Beer Game', icon: 'puzzle' },
      { name: 'Fundamental Analysis using Screener', icon: 'bars' },
    ] },
    { term: 5, items: [
      { name: 'Mock Interviews', icon: 'people' },
      { name: 'Influencer Economy: Creator', icon: 'video' },
      { name: 'Tech in Finance: Blockchain & Crypto', icon: 'crypto' },
      { name: 'Algorithmic Trading', icon: 'trend' },
    ] },
  ],
};

/** A week in the life of an SSB student: the program page's timetable (Term 1). */
export type SlotKind = 'class' | 'free' | 'workshop' | 'immersion' | 'study' | 'experience';
export const programWeek = {
  eyebrow: 'Life at SSB',
  title: 'A week in the life of an SSB student.|Built around doing.',
  sub: 'Classes in the morning, building and people in the evening. A typical Term 1 week.',
  legend: [
    { kind: 'class', label: 'Academic classes' },
    { kind: 'workshop', label: 'Workshops' },
    { kind: 'immersion', label: 'Industry immersion' },
    { kind: 'study', label: 'Self & group study' },
    { kind: 'experience', label: 'Student experience' },
    { kind: 'free', label: 'Free slot' },
  ] as { kind: SlotKind; label: string }[],
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  /** Time rows, top to bottom. */
  times: ['10:00 AM – 12:00 PM', '12:00 – 1:00 PM', '1:00 – 3:00 PM', '3:00 – 3:15 PM', '3:15 – 4:30 PM', '4:30 – 6:00 PM', '6:00 – 9:00 PM'],
  /** Each block: its day (0 = Mon) and span of days, its first time row and span of rows. */
  blocks: [
    { d: 0, r: 0, label: 'Practical Managerial Economics', kind: 'class' },
    { d: 1, r: 0, label: 'Business Communications', kind: 'class' },
    { d: 2, r: 0, label: 'Product Management', kind: 'class' },
    { d: 3, r: 0, label: 'Practical Managerial Economics', kind: 'class' },
    { d: 4, r: 0, label: 'Business Communications', kind: 'class' },
    { d: 5, r: 0, label: 'Additional block: spillover class, guest lecture or workshop', kind: 'free' },
    { d: 6, r: 0, label: 'Additional block: spillover class, guest lecture or workshop', kind: 'free' },
    { d: 0, r: 1, ds: 7, label: 'Lunch and refreshment break', kind: 'break' },
    { d: 0, r: 2, label: 'Marketing Strategies', kind: 'class' },
    { d: 1, r: 2, label: 'Business Statistics', kind: 'class' },
    { d: 2, r: 2, label: 'Financial Accounting', kind: 'class' },
    { d: 3, r: 2, label: 'Marketing Strategies', kind: 'class' },
    { d: 4, r: 2, label: 'Business Statistics', kind: 'class' },
    { d: 5, r: 2, rs: 4, label: 'Workshop', kind: 'workshop' },
    { d: 6, r: 2, rs: 5, label: 'Break', kind: 'free' },
    { d: 0, r: 3, ds: 5, label: 'Refreshment break', kind: 'break' },
    { d: 0, r: 4, label: 'Mentor Connect', kind: 'immersion' },
    { d: 1, r: 4, label: 'Club Meetings', kind: 'experience' },
    { d: 2, r: 4, label: 'Networking Evening', kind: 'immersion' },
    { d: 3, r: 4, rs: 2, label: 'Financial Accounting', kind: 'class' },
    { d: 4, r: 4, label: 'CXO Fireside Chat', kind: 'immersion' },
    { d: 0, r: 5, label: 'Group Assignments Discussion', kind: 'study' },
    { d: 1, r: 5, label: 'Group Assignments Discussion', kind: 'study' },
    { d: 2, r: 5, label: 'Group Assignments Discussion', kind: 'study' },
    { d: 4, r: 5, label: 'Group Assignments Discussion', kind: 'study' },
    { d: 0, r: 6, label: 'Self Prep', kind: 'study' },
    { d: 1, r: 6, label: 'Recreational activity: cricket, football tournament', kind: 'experience' },
    { d: 2, r: 6, label: 'Self Prep', kind: 'study' },
    { d: 3, r: 6, label: 'Movie Night and Discussion', kind: 'experience' },
    { d: 4, r: 6, label: 'Self Prep', kind: 'study' },
    { d: 5, r: 6, label: 'Break', kind: 'free' },
  ] as { d: number; r: number; ds?: number; rs?: number; label: string; kind: SlotKind | 'break' }[],
};

/** Located in Bangalore: the Silicon Valley of India (the program page's campus and city blocks). */
export const programCity = {
  eyebrow: 'Located in Bangalore',
  title: 'The Silicon Valley of India.|Your campus at its centre.',
  sub: 'Situated in India’s Silicon Valley, our campus places students at the heart of real-world startup action and innovation.',
  image: { src: '/media/bengaluru-vidhana-soudha-1280.webp', srcLarge: '/media/bengaluru-vidhana-soudha-2560.webp', alt: 'Vidhana Soudha, Bengaluru' },
  comfortLabel: 'For your comfort',
  comforts: [
    { icon: 'transport', label: 'Easy access to transportation' },
    { icon: 'food', label: 'Proximity to restaurants and eateries' },
    { icon: 'hub', label: 'Campus located in the startup hub' },
  ] as { icon: 'transport' | 'food' | 'hub'; label: string }[],
  campus: {
    title: 'A campus built to build.',
    line: 'State-of-the-art infrastructure with cutting-edge business tools and technologies, designed to boost productivity and foster innovation.',
    points: ['Campus close to top companies', 'Modern amenities', 'Innovation from day one'],
    photos: [
      { src: '/campus/building.webp', alt: 'The SSB campus building' },
      { src: '/campus/arch.webp', alt: 'The campus arch' },
    ],
  },
  ctas: { brochure: { label: 'Download Brochure', href: '#brochure' }, locate: { label: 'Locate Campus', href: 'https://maps.google.com/?q=Scaler+School+of+Business+Bengaluru' } },
};

/** The call to apply. */
export const programCta = {
  eyebrow: 'Admissions for the 2026 cohort are now open',
  title: 'Take the first step towards becoming part of the top 1% of business leaders.',
  primaryCta: { label: 'Apply Now', href: '#apply' },
  secondaryCta: { label: 'Download Brochure', href: '#brochure' },
};
