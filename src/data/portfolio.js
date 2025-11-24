export const profile = {
  name: 'Onke Sipuka',
  role: 'Full-stack Product Engineer',
  location: 'Johannesburg, South Africa',
  availability: 'Available for fractional product work starting February 2026.',
  heroImage:
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  summary:
    'I build resilient insurance and fintech platforms with a healthy mix of product thinking, UX sensitivity, and pragmatic engineering. Over the past few years I have owned design systems, automated manual back-office processes, and guided teams from research through production launches.',
  focusAreas: [
    'Developer experience & internal tooling',
    'Policy + claims automation',
    'End-to-end product leadership',
  ],
  heroCtas: [
    {
      label: 'Download resume',
      href: 'https://drive.google.com/file/d/1-OSresume/view?usp=sharing',
      variant: 'primary',
    },
    {
      label: "Let's talk",
      href: '#contact',
      variant: 'secondary',
    },
  ],
  social: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/onke-sipuka-01755a163/',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/Onke',
    },
    {
      label: 'X (Twitter)',
      url: 'https://x.com/onkesipuka',
    },
  ],
  now: 'Leading customer experience engineering at Pineapple Insurance.',
};

export const highlights = [
  { label: 'Products shipped', value: '14' },
  { label: 'People mentored', value: '18' },
  { label: 'Availability', value: '2 days / week' },
];

export const experiences = [
  {
    company: 'Pineapple Insurance',
    role: 'Senior Full-stack Engineer',
    period: '2023 - Present',
    location: 'Hybrid, Johannesburg',
    summary:
      'Partnered with design and actuarial teams to re-imagine the claims operating system and craft new self-service experiences.',
    achievements: [
      'Led the build of Atlas, an internal console that reduced claim triage time from 72 hours to 18.',
      'Established a shared React component library backed by Storybook, eliminating duplicate design work across squads.',
      'Piloted observability practices (metrics, tracing, chaos tests) that now back-stop every production deployment.',
    ],
    stack: ['React 19', 'Node.js', 'PostgreSQL', 'AWS', 'Storybook'],
  },
  {
    company: 'Independent Studio',
    role: 'Founder & Product Engineer',
    period: '2019 - Present',
    location: 'Remote',
    summary:
      'Boutique consultancy specializing in mobile apps and developer tooling for African startups.',
    achievements: [
      'Shipped six Android + React Native apps covering mobility, social, and commerce use cases.',
      'Introduced product discovery rituals (opportunity trees, weekly bet reviews) that helped clients prioritize ruthlessly.',
      'Coached junior engineers through architecture reviews, pair sessions, and lightweight growth plans.',
    ],
    stack: ['React Native', 'Kotlin', 'Supabase', 'Cloud Run'],
  },
  {
    company: 'Nelson Mandela University',
    role: 'Computer Science Department Intern & Tutor',
    period: '2021 - 2023',
    location: 'Gqeberha, South Africa',
    summary:
      'Supported the CS department with technical enablement, lab automation, and student mentorship.',
    achievements: [
      'Modernized lab onboarding workflows using self-service scripts and documentation.',
      'Ran foundations workshops for 150+ students covering data structures, testing, and git.',
    ],
    stack: ['Python', 'Java', 'Bash', 'Linux'],
  },
];

export const skillGroups = [
  {
    title: 'Core Stack',
    items: ['TypeScript', 'React 19', 'Node.js', 'Kotlin', 'PostgreSQL', 'Python'],
  },
  {
    title: 'Cloud & Ops',
    items: ['AWS', 'Docker', 'Supabase', 'Vite', 'GitHub Actions'],
  },
  {
    title: 'Product Craft',
    items: ['Journey mapping', 'Experiment design', 'Design systems', 'DX research'],
  },
];

export const projects = [
  {
    slug: 'atlas-claims-console',
    name: 'Atlas Claims Console',
    tagline: 'A unified OS for the Pineapple claims crew.',
    summary:
      'Replaced siloed spreadsheets with a collaborative console that surfaces fraud signals, service queues, and customer context in one view.',
    cover:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    timeframe: '12 weeks',
    role: 'Product + Tech Lead',
    problem:
      'Agents relied on 7+ browser tabs to assess a claim, causing slow response times, audit gaps, and low morale.',
    solution: [
      'Designed modular workspaces (triage, investigation, payouts) so each discipline sees just enough signal.',
      'Built a rule engine backed by PostgreSQL JSON policies to highlight anomalies without blocking agents.',
      'Instrumented every edge with telemetry and replay tools to quickly debug tricky claim journeys.',
    ],
    impact: [
      { label: 'Triage time', value: '-42%' },
      { label: 'Manual audits', value: '-63%' },
      { label: 'NPS', value: '+18' },
    ],
    stack: ['React 19', 'Vite', 'Tailwind Modules', 'Node.js', 'PostgreSQL', 'AWS Fargate'],
    links: {
      live: 'https://pineapple.co.za',
      repo: 'https://github.com/Onke/atlas-console',
    },
    sections: [
      {
        title: 'Why it matters',
        body: 'Atlas gave every adjuster the same live context, removed painful copy/paste rituals, and unlocked richer coaching conversations through audit trails and event playback.',
      },
      {
        title: 'What I owned',
        body: 'Ran weekly discovery interviews with the claims pod, paired with design on interaction patterns, defined the API surface, and shipped the first release in 12 weeks with a squad of four.',
      },
    ],
  },
  {
    slug: 'atlas-design-system',
    name: 'Orbit Design System',
    tagline: 'A system of tokens and foundations powering three web apps.',
    summary:
      'Established a multi-brand design system with codified tokens, Radix-based primitives, accessibility linting, and documentation site.',
    cover:
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80',
    timeframe: '8 weeks',
    role: 'Design System Engineer',
    problem:
      'Teams were copying UI snippets between repositories, causing inconsistent behaviors and long onboarding time.',
    solution: [
      'Defined design tokens (color, typography, spacing) that sync to Figma via Style Dictionary.',
      'Published a component library with automated visual regression tests and usage guidelines.',
      'Created scaffolding CLIs so product teams can spin up new surfaces with linting, testing, and analytics pre-wired.',
    ],
    impact: [
      { label: 'UI defects', value: '-55%' },
      { label: 'Time to first PR', value: '3 days -> 4 hours' },
    ],
    stack: ['Storybook', 'React 19', 'TypeScript', 'Vite', 'Chromatic', 'Figma Tokens'],
    links: {
      live: 'https://orbit.onke.dev',
      repo: 'https://github.com/Onke/orbit-system',
    },
    sections: [
      {
        title: 'Scale without chaos',
        body: 'Orbit keeps typography rhythm, spacing, and motion rules consistent while still allowing product-specific expression via themes and composition APIs.',
      },
      {
        title: 'Guardrails for every PR',
        body: 'Accessibility, visual drift, and bundle budgets are enforced in CI so engineers get instant feedback before reviewers ever see a diff.',
      },
    ],
  },
  {
    slug: 'roots-mobile',
    name: 'Roots Mobile',
    tagline: 'Neighbourhood commerce in your pocket.',
    summary:
      'Android + web experience that helps independent grocers launch a storefront, accept payments, and manage deliveries from one place.',
    cover:
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1200&q=80',
    timeframe: '16 weeks',
    role: 'Lead Mobile Engineer',
    problem:
      'Local grocers could not keep up with delivery demand during lockdowns and were stitched together with WhatsApp orders.',
    solution: [
      'Designed a guided onboarding that created inventory, payment, and logistics setups in under 10 minutes.',
      'Implemented an offline-first data layer so couriers could sync orders even with unreliable connectivity.',
      'Built a lightweight analytics view so owners can track repeat purchases and delivery health.',
    ],
    impact: [
      { label: 'Average order value', value: '+27%' },
      { label: 'Delivery SLA', value: '95% under 60 min' },
    ],
    stack: ['React Native', 'Expo', 'Supabase', 'Stripe', 'Cloud Functions'],
    links: {
      live: 'https://rootsapp.africa',
      repo: 'https://github.com/Onke/roots-mobile',
    },
    sections: [
      {
        title: 'Reliable in the real world',
        body: 'Caching, optimistic UI, and background sync were treated as first-class features because merchants often operate on spotty 3G connections.',
      },
      {
        title: 'Business visibility',
        body: 'We surfaced the numbers that small businesses actually understand-repeat rate, delivery SLA, and fulfillment cost-rather than vanity charts.',
      },
    ],
  },
];

export const contact = {
  email: 'sipukao@gmail.com',
  phone: '+27 74 951 8824',
  location: 'Johannesburg, South Africa',
  calendar: 'https://cal.com/onke/coffee',
  availability: 'Booking limited engagements for Q1 2026.',
};


