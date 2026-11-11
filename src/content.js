// All site copy lives here, so updating the site never means touching layout code.

export const profile = {
  name: 'Onke Sipuka',
  role: 'Software developer',
  location: 'Johannesburg, South Africa',
  headline: 'I build interfaces people can rely on, and I follow the bug down to the database when it leads there.',
  intro: [
    'I work in Vue 3 and TypeScript every day, and lately in C#, SQL Server views and stored procedures as well, at SMSPortal, an SMS and WhatsApp messaging platform now part of LINK Mobility.',
    'Outside work I build small, careful tools that respect the people using them: local-first, no accounts, no tracking. I also write Bad Priors, a set of essays in philosophy and reasoning.',
  ],
  email: 'sipukao@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/Onke' },
    { label: 'Bad Priors', href: 'https://badpriors.substack.com' },
  ],
}

export const work = [
  {
    company: 'SMSPortal',
    note: 'part of LINK Mobility',
    role: 'Frontend Engineer, now full-stack',
    period: 'Mar 2024 — present',
    points: [
      'Shipped a large part of the reseller portal redesign, bringing it in line with the customer portal and making it fully responsive.',
      'Own the WhatsApp Template Library: editing and customising approved templates, review flows, and a rewritten responsive modal component.',
      'Moved into backend work: built a WhatsApp messaging report end to end, from a SQL Server view and stored procedure through a C# service and endpoint to the Vue screen.',
      'Brought WhatsApp account management into the support tooling, including WABA search, number registration and business profile endpoints.',
      'Consolidated duplicated UI into shared components and split large feature areas into smaller modules.',
    ],
  },
  {
    company: 'Pineapple',
    note: 'insurance',
    role: 'Full-stack Developer',
    period: 'Jan 2023 — Feb 2024',
    points: ['Full-stack development across the product at an insurtech startup, writing SQL directly against the database.'],
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
  { group: 'Frontend', items: ['Vue 3', 'TypeScript', 'JavaScript', 'Pinia', 'Vite', 'CSS / SCSS', 'D3'] },
  { group: 'Backend & data', items: ['C# / .NET', 'SQL Server', 'Stored procedures & views', 'Python / FastAPI', 'REST APIs'] },
  { group: 'Also', items: ['Java & Android', 'Capacitor', 'Vitest', 'Git', 'Linux'] },
]

export const writing = {
  title: 'Bad Priors',
  tagline: 'Bad priors, honest reasoning, no guarantees.',
  description:
    'Essays in philosophy and reasoning: consciousness, the Ship of Theseus, Sleeping Beauty, Camus, and how arguments go wrong.',
  href: 'https://badpriors.substack.com',
}
