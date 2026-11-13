import type { BottomNavItem } from './bottom-nav';

/**
 * The FAQ page (/faq, 2026-11-13, the user's ask: the live FAQ page, scaler.com/school-of-business/faq/,
 * in the new pages' design, light only). Every question, answer and video is the live page's as read
 * that day; its answers' run-together lists are laid out as lists, the scholarship types as a table,
 * and its links to the live admission page point at this site's /admission. Video titles are YouTube's.
 */

const APPLY = 'https://www.scaler.com/school-of-business/application';
const CALLBACK = '#callback';

export type FaqVideo = { id: string; title: string };
/** One block of an answer: a paragraph (with an optional link after it), a list, or a table. */
export type FaqBlock =
  | { p: string; link?: { label: string; href: string } }
  | { list: string[]; lead?: string }
  | { table: { head: string[]; rows: string[][] } };
export type FaqItem = { q: string; a: FaqBlock[]; video?: FaqVideo };
export type FaqCategory = { id: string; label: string; items: FaqItem[] };

const V = {
  top1: { id: 'clkY2FHblao', title: 'Becoming a Top 1% Business Leader with Scaler School of Business' },
  campus: { id: 'yBYXT419bFw', title: 'Scaler School of Business: Campus Walkthrough' },
  curriculum: { id: 'XLEGsivJZHM', title: 'What’s the Curriculum at SSB?' },
  different: { id: 'u1ANgQDw9_s', title: 'What makes Scaler School of Business different and better?' },
  mba: { id: 'Ae7ecVYzwu8', title: 'Should you pursue an MBA or not?' },
  eligibility: { id: '9kGAVYkqvZQ', title: 'Eligibility and Admission Process | Scaler School of Business' },
  coding: { id: 'r05hBcMghIk', title: 'Is coding experience needed for Scaler School of Business?' },
  fees: { id: 'YKigBMv2004', title: 'Fees and Scholarships | Scaler School of Business' },
  instructors: { id: 'TvRkuAHIGpQ', title: 'Instructors, Academics and Mentors at Scaler School of Business' },
  placements: { id: '_kswQmPO9Rs', title: 'Placements at Scaler School of Business | Tech and Non-Tech roles' },
  structure: { id: 'zMLjdRxMP4s', title: 'Program Structure & Curriculum Breakdown | Scaler School of Business' },
  batch: { id: 'nWjACugDDiA', title: '2024 Batch Profile & Intake | Scaler School of Business' },
  degree: { id: 'aholpOZhRP4', title: 'Degree or Diploma: What does Scaler School of Business provide?' },
  lab: { id: '__fBoTGv41g', title: 'What is Scaler’s Innovation Lab?' },
} satisfies Record<string, FaqVideo>;

/** The first fold: the page's name, its line and the live page's three videos. */
export const faqHero = {
  crumbs: [
    { label: 'Home', href: '/' },
    { label: 'FAQs', href: '/faq' },
  ],
  title: 'Everything about SSB',
  line: 'Answers to the most commonly asked questions about Scaler School of Business.',
  primaryCta: { label: 'Apply Now', href: APPLY },
  secondaryCta: { label: 'Request a callback', href: CALLBACK },
  videos: [
    { ...V.top1, label: 'Becoming a Top 1% Business Leader' },
    { ...V.campus, label: 'Campus walkthrough' },
    { ...V.curriculum, label: 'Program overview' },
  ],
};

/** The live page's "India's Only B-School" list. */
export const faqUsps = {
  eyebrow: 'Why SSB',
  title: 'India’s only B-school|built by industry leaders, for future leaders.',
  points: [
    'Tech-enabled, practical-first, industry-integrated curriculum',
    'Top instructors: practitioners and academicians',
    'Company-sourced projects and case studies',
    'Personalised mentorship',
    'Build your own business with Scaler’s Innovation Lab',
    'A 3-month mandatory internship',
    '100% placement support',
  ],
  cta: { label: 'Apply Now', href: APPLY },
};

const eligibility: FaqItem = {
  q: 'What is the eligibility criteria?',
  video: V.eligibility,
  a: [
    { lead: 'Education', list: ['Completed Class 12', 'Completed a bachelor’s degree from an accredited institution'] },
    {
      p: 'Work experience: it’s ideal to have adequate professional work experience to support your learning journey (a minimum of 1 year), but we encourage freshers to apply as well.',
    },
    {
      p: 'Profile-based evaluation: we evaluate your work experience, academics, co-curricular and leadership abilities. We’re looking for demonstrated proactiveness through side projects, startups or other hustles.',
    },
  ],
};
const testScores: FaqItem = {
  q: 'Do I need any management test scores to be eligible for application?',
  a: [
    {
      p: 'No, management test scores are not mandatory. We conduct a profile-based evaluation based on your work experience, academics, co-curricular and leadership abilities. A strong profile with side projects, startup experience or other side hustles is a powerful indicator of your potential.',
    },
  ],
};
const financing: FaqItem = {
  q: 'What financing options are available for paying admission fees if I get selected?',
  a: [
    {
      p: 'We provide several financing options based on your needs and background, through partnerships with banks and NBFCs. To know more, request a call back: our dedicated team will promptly reach out and help.',
      link: { label: 'Request a callback', href: CALLBACK },
    },
  ],
};

export const faqCategories: FaqCategory[] = [
  {
    id: 'important',
    label: 'Important FAQs',
    items: [
      { q: 'Why Scaler School of Business?', video: V.campus, a: [{ p: 'A walk through the campus and what makes the programme different.' }] },
      { q: 'Is this a fully residential program?', a: [{ p: 'Yes, the PGP programme at Scaler School of Business is a full-time, on-campus programme.' }] },
      financing,
      {
        q: 'What is the admission process for Scaler School of Business?',
        a: [
          { list: ['Submission of application', 'Review process', 'Interviews', 'Decision', 'Offer and acceptance'] },
          { p: 'For a complete deep dive into the admission process, see the admission page.', link: { label: 'Admission process', href: '/admission' } },
        ],
      },
      {
        q: 'How can I apply for scholarships?',
        video: V.fees,
        a: [
          {
            lead: 'The scholarship application process has these steps:',
            list: [
              'Screening: applicants are evaluated on their academic performance, test scores and a recorded personal interview.',
              'Document submission: candidates submit the supporting documents for the category of scholarship they are applying for.',
              'Sponsor’s assessment: once the profile (the recorded interview, essays and documents) is complete, it is shared with sponsors whose criteria match it. A one-on-one meeting with a sponsor may be arranged on request.',
              'Results: the sponsors announce their decisions, and the chosen candidates are informed.',
            ],
          },
          { p: 'For each scholarship’s eligibility criteria, see the admission page.', link: { label: 'Scholarships', href: '/admission#scholarships' } },
        ],
      },
      eligibility,
      testScores,
    ],
  },
  {
    id: 'degree',
    label: 'Degree',
    items: [
      {
        q: 'Does this course have a degree or diploma?',
        video: V.degree,
        a: [
          {
            p: 'No, you will receive a certificate for the PGP in Management and Technology. Keeping control over our curriculum keeps it agile and responsive to industry trends and technological advances, so the programme stays relevant and competitive.',
          },
        ],
      },
    ],
  },
  {
    id: 'eligibility',
    label: 'Eligibility Criteria',
    items: [
      eligibility,
      testScores,
      {
        q: 'Is there an age limit for entry?',
        a: [
          {
            p: 'There is no age limit. The programme suits people early in their careers, with one to four years of experience. If you have more, request a call back: the admissions team will evaluate your profile and guide you.',
            link: { label: 'Request a callback', href: CALLBACK },
          },
        ],
      },
    ],
  },
  {
    id: 'application',
    label: 'Application',
    items: [
      {
        q: 'What are the earliest and latest application deadlines?',
        a: [{ p: 'Admissions are open. Every intake’s deadline is on the admission page.', link: { label: 'Dates and fees', href: '/admission#fees' } }],
      },
      {
        q: 'What is the total admission fee cost?',
        a: [{ list: ['Early Bird: Rs 2,000', 'Intake 1: Rs 3,000', 'Intake 2: Rs 3,500', 'Intake 3: Rs 4,000'] }],
      },
      {
        q: 'How can I strengthen my application?',
        a: [
          {
            lead: 'With 0–1 year of experience',
            list: [
              'Academic excellence: strong undergraduate grades',
              'Leadership potential: extracurriculars, volunteer work or leadership roles in student organisations',
              'Internship experience during your undergraduate studies',
              'Standardised test scores, such as the GRE or GMAT',
              'Strong letters of recommendation from professors, employers or mentors',
              'A personal statement on your career goals and why the programme fits them',
            ],
          },
          {
            lead: 'With 2–3 years of experience',
            list: [
              'Professional experience: progression and achievements in your current role',
              'Leadership: roles or significant contributions to projects or teams',
              'Industry knowledge, and how the programme will move your career forward',
              'Clear, well-defined career goals',
              'Recommendations from supervisors or colleagues',
            ],
          },
          {
            lead: 'With 4+ years of experience',
            list: [
              'Leadership and management experience: leading teams or projects',
              'Significant professional achievements in your field',
              'Impact within your organisation or industry',
              'Clear career progression',
              'Deep knowledge of your industry and its emerging trends',
              'Recommendations from senior leaders who can attest to your leadership',
            ],
          },
        ],
      },
      { q: 'Are there any application fee waivers available?', a: [{ p: 'Only existing Scaler learners or alumni are eligible for an application fee waiver.' }] },
      {
        q: 'Does the admission fee guarantee an application review or interview?',
        a: [
          {
            p: 'No. Selection decisions are based on a holistic assessment of your profile: academic performance, work experience, extracurricular achievements and essay. We use a rubric for both the application review and interview shortlisting, so every applicant is considered fairly and thoroughly.',
          },
        ],
      },
    ],
  },
  {
    id: 'interview',
    label: 'Personal Interview',
    items: [
      {
        q: 'How will the personal interview happen?',
        a: [
          {
            p: 'There are two personal interviews, in person or online depending on the circumstances and the candidate’s preference. They assess your suitability for the programme, your potential and your aspirations. The format, location or platform is shared with you before the interview.',
          },
        ],
      },
      {
        q: 'What kind of questions will be asked in the personal interview?',
        a: [
          {
            p: 'The interview goes deeper into your motivations, aspirations and readiness for the programme. It looks at your communication and interpersonal skills and your potential to contribute to the business community, through your past accomplishments and future goals.',
          },
        ],
      },
      {
        q: 'Are there any resources to prepare for the personal interview?',
        a: [{ p: 'Yes. Once you are shortlisted, you receive a Personal Interview Prep Kit to help you prepare.' }],
      },
      {
        q: 'When will the interviews take place?',
        a: [{ p: 'Interview dates are shared with shortlisted candidates on their registered email.' }],
      },
    ],
  },
  {
    id: 'admissions',
    label: 'Admissions',
    items: [
      { q: 'When do classes start?', a: [{ p: 'Classes for the next cohort begin in August 2027. Every date is on the admission page.', link: { label: 'Admission page', href: '/admission' } }] },
      { q: 'How can I apply for the program?', a: [{ p: 'Admissions are open.', link: { label: 'Apply now', href: APPLY } }] },
      { q: 'Can I defer admission?', a: [{ p: 'No, you are required to apply for the intake in which you intend to enrol.' }] },
    ],
  },
  {
    id: 'program',
    label: 'Program and Outcome',
    items: [
      { q: 'What is the curriculum covered at Scaler School of Business?', video: V.curriculum, a: [{ p: 'The curriculum, term by term.', link: { label: 'See the programme', href: '/program' } }] },
      { q: 'What kind of jobs can I expect at the end of the program?', video: V.placements, a: [{ p: 'Placements across tech and non-tech roles.', link: { label: 'Internship outcomes', href: '/internship' } }] },
      { q: 'What is Scaler’s Innovation Lab?', video: V.lab, a: [{ p: 'The lab where students build their own products and businesses.' }] },
      { q: 'Who are the instructors at Scaler School of Business?', video: V.instructors, a: [{ p: 'Practitioners and academicians who teach and mentor at SSB.' }] },
      { q: 'Do I need prior coding experience to join?', video: V.coding, a: [{ p: 'Scaler’s co-founder answers it.' }] },
      {
        q: 'Is there an exchange program for this course?',
        a: [
          {
            p: 'No. The programme focuses on a comprehensive, immersive learning experience within our institution, which keeps the curriculum consistent, the instruction high-quality and the engagement deep.',
          },
        ],
      },
    ],
  },
  {
    id: 'financing',
    label: 'Financing and Scholarships',
    items: [
      financing,
      {
        q: 'What types of scholarships does Scaler School of Business offer?',
        video: V.fees,
        a: [
          { p: 'Four scholarships, each designed to recognise and support deserving students:' },
          {
            table: {
              head: ['Category', 'Eligibility'],
              rows: [
                ['Future Business Innovators', 'Founder or co-founder of a startup with measurable impact; successfully closed a funding round with VCs'],
                ['Extraordinary Achievements', 'Exceptional academic or competition achievements: an international Olympiad medal, a top finish at a leading hackathon or coding competition, or a strong undergraduate merit rank'],
                ['Industry Leaders', 'A proven track record in a corporate setting: a consultant at a tier 1/2 consulting firm, or a founding team member of a startup'],
                ['Women in Leadership', 'Demonstrated leadership and professional achievements; a leadership position in organisations or college clubs'],
              ],
            },
          },
        ],
      },
      { q: 'Are the scholarships applicable on tuition fees or the entire fees (tuition + hostel)?', a: [{ p: 'Scholarships apply to the tuition fees only.' }] },
      {
        q: 'Do you offer a zero-cost EMI option?',
        a: [{ p: 'Not at this time. For questions about payment options, request a call back.', link: { label: 'Request a callback', href: CALLBACK } }],
      },
      { q: 'What is the fee structure of the program?', a: [{ p: 'Every intake’s fees are on the admission page.', link: { label: 'Dates and fees', href: '/admission#fees' } }] },
    ],
  },
];

/** "Recommended for you": the live page's twelve videos, in its order. */
export const faqRecommended = {
  eyebrow: 'Watch',
  title: 'Recommended for you.|Short films on every question.',
  videos: [V.mba, V.eligibility, V.coding, V.fees, V.instructors, V.placements, V.structure, V.batch, V.different, V.degree, V.curriculum, V.lab],
};

/** The bottom navigation: this page's sections. */
export const faqNav: BottomNavItem[] = [
  { label: 'Videos', target: 'fqh-title' },
  { label: 'Why SSB', target: 'fqu-title' },
  { label: 'FAQs', target: 'fq-title' },
  { label: 'Watch more', target: 'fqr-title' },
];
