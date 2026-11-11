// All site copy lives here, so updating the site never means touching layout code.

export const profile = {
  name: 'Onke Sipuka',
  role: 'Frontend-focused full-stack developer',
  location: 'Johannesburg, South Africa',
  eyebrow: 'Vue & .NET developer · Johannesburg',
  headline: 'I build in Vue and .NET, and I ship what I build, from the screen to the database to the release pipeline.',
  intro: [
    'Most of my career has been on the marketing side of products: tracking, catalogues and retargeting at an insurtech, and now business messaging on WhatsApp at SMSPortal, part of LINK Mobility.',
    'I lead with the frontend but work the whole stack, and I deploy my own frontend and backend changes through Azure DevOps. Outside work I build small local-first tools and write Bad Priors, a set of essays in philosophy and reasoning.',
  ],
  email: 'sipukao@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/Onke' },
    { label: 'Bad Priors', href: 'https://badpriors.substack.com' },
  ],
}

// The thread that runs through the work history, shown as a strip under the hero.
export const focus = [
  {
    title: 'Frontend',
    body: 'Vue 3 and TypeScript product UI: customer and reseller portals, responsive redesigns, shared component work.',
  },
  {
    title: 'Backend',
    body: 'C# and .NET services and endpoints, SQL Server views and stored procedures, third-party API integrations.',
  },
  {
    title: 'Marketing tech & messaging',
    body: 'The WhatsApp Business Platform today; Meta’s Conversions API, product catalogues and server-side tagging before that.',
  },
  {
    title: 'Shipping',
    body: 'I own my releases: Azure DevOps pipelines, branch deploys to QA and staging, and production rollouts for frontend and backend.',
  },
]

export const work = [
  {
    company: 'SMSPortal',
    note: 'part of LINK Mobility',
    role: 'Software Developer · frontend-focused, full-stack',
    period: 'Mar 2024 — present',
    points: [
      'Built much of the customer-facing WhatsApp Business product: onboarding, account and number management, message templates and insights.',
      'Contributed heavily to the reseller portal redesign and its responsive rollout.',
      'Grew from frontend into backend work in .NET and SQL Server: reporting, support tooling and proxy services over Meta’s Graph API.',
      'Deploy my own frontend and backend changes through Azure DevOps, and review and release alongside a small team.',
    ],
  },
  {
    company: 'Pineapple',
    note: 'insurtech',
    role: 'Full-stack Developer · marketing',
    period: 'Jan 2023 — Feb 2024',
    points: [
      'Built a product catalogue service feeding Meta’s Conversions API, so the marketing team could retarget users accurately.',
      'Built tracked landing pages with Google Tag Manager, and set up server-side tagging on AWS.',
      'Worked on internal claims tooling, from requirements through to the database.',
    ],
  },
  {
    company: 'Nelson Mandela University',
    note: 'Computer Science Department',
    role: 'Departmental intern & tutor',
    period: '2019 — 2021',
    points: ['Tutored first- and second-year students in programming and data structures, and supported the department’s labs and students.'],
  },
]

export const education = {
  school: 'Nelson Mandela University',
  degree: 'BSc Computer Science and Statistics',
  year: '2021',
}

export const projects = [
  {
    title: 'Constellations',
    kind: 'Game · Web & Android TV',
    blurb:
      'An original dice-drafting puzzle game, grown out of my university Sagrada project. One deterministic, fully tested engine ships two themes, Stained Glass and Constellations, and plays against one to three bots. It also builds as an Android TV app played entirely with the remote.',
    stack: ['Vue 3', 'TypeScript', 'Vitest', 'Capacitor'],
    href: null,
  },
  {
    title: 'Ledger',
    kind: 'Personal finance',
    blurb:
      'A local-first monthly budgeting app. Plan income, spending, savings and debt, and see what is left, how goals are tracking and whether net worth is improving. No server and no account: everything stays in the browser’s IndexedDB.',
    stack: ['Vue 3', 'Pinia', 'IndexedDB', 'Vitest'],
    href: null,
  },
  {
    title: 'Aphro',
    kind: 'In progress',
    blurb:
      'A booking platform for South African salons and independent stylists, with customer, freelancer and salon-owner roles, WhatsApp integration and OTP sign-in.',
    stack: ['Vue 3', 'Vite', 'FastAPI', 'WhatsApp API'],
    href: null,
  },
  {
    title: 'Chat Insights',
    kind: 'Data visualisation',
    blurb:
      'Drop in a WhatsApp chat export and get a dashboard of who talks when, streaks, words and highlights, all parsed in the browser, so nothing leaves your machine.',
    stack: ['Vue 3', 'TypeScript'],
    href: null,
  },
  {
    title: 'Small-world Dilemma',
    kind: 'Simulation',
    blurb:
      'The iterated prisoner’s dilemma played out on a small-world network, to see how strategies spread when neighbours mostly know each other.',
    stack: ['Vue 3', 'D3'],
    href: null,
  },
]

export const skills = [
  { group: 'Frontend', items: ['Vue 3', 'TypeScript', 'JavaScript', 'Pinia', 'Vite', 'SCSS', 'Vitest'] },
  { group: 'Backend & data', items: ['C# / .NET', 'ASP.NET', 'SQL Server', 'REST APIs', 'Python / FastAPI'] },
  { group: 'Marketing & messaging', items: ['WhatsApp Business Platform', 'Meta Graph API', 'Conversions API', 'Google Tag Manager'] },
  { group: 'Delivery', items: ['Azure DevOps', 'CI/CD pipelines', 'Git', 'AWS', 'Linux'] },
]

export const writing = {
  title: 'Bad Priors',
  tagline: 'Bad priors, honest reasoning, no guarantees.',
  description:
    'Essays in philosophy and reasoning: consciousness, the Ship of Theseus, Sleeping Beauty, Camus, and how arguments go wrong.',
  href: 'https://badpriors.substack.com',
}
