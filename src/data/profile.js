// Central profile content. Edit here to update the site copy.

export const profile = {
  name: 'Onke Sipuka',
  firstName: 'Onke',
  role: 'Software Developer',
  tagline: 'Frontend-focused software developer',
  company: 'SMSPortal',
  location: 'Sandton, Johannesburg, South Africa',
  email: 'sipukao@gmail.com',
  phone: '+27 74 951 8824',
  website: 'https://www.onkesipuka.co.za',
  // Drop your CV in /public as resume.pdf to enable the download button.
  resume: '/resume.pdf',
  profileImage: '/images/profilepic.jpg',

  // Short hero statement.
  headline:
    'I build reliable, user-facing React frontends — shipping features across customer, business and internal products on a steady release cycle.',

  // Longer about section (array of paragraphs).
  about: [
    "I'm a software developer at SMSPortal, where I focus on the frontend of products used by customers, business partners and internal teams alike. Day to day I turn designs and requirements into clean, dependable React interfaces, then harden them for production through a regular release cadence.",
    'My recent work has centred on a WhatsApp Business messaging experience — multi-account management, template tooling and the validation and polish that make a feature feel trustworthy. I enjoy the full arc of a feature: shaping the structure, integrating endpoints, auditing what already exists, and tidying the rough edges before release.',
    'I hold a BSc in Computer Science and Statistics from Nelson Mandela University. Away from the keyboard you’ll find me at the gym, reading, cooking, or working through a backlog of podcasts.',
  ],

  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/Onke',
      handle: '@Onke',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/onke-sipuka-01755a163/',
      handle: 'Onke Sipuka',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:sipukao@gmail.com',
      handle: 'sipukao@gmail.com',
      icon: 'mail',
    },
  ],

  // Skills grouped by category — rendered as tag pills.
  skills: [
    {
      group: 'Languages',
      items: ['JavaScript', 'HTML', 'CSS', 'SASS', 'SQL', 'Java'],
    },
    {
      group: 'Frameworks & Libraries',
      items: ['React', 'React Native', 'Node.js'],
    },
    {
      group: 'Data & APIs',
      items: ['REST APIs', 'API design', 'MongoDB'],
    },
    {
      group: 'Tools & Platforms',
      items: [
        'Git & GitHub',
        'AWS (EC2)',
        'Google Tag Manager',
        'Google Analytics',
        'Meta / Facebook Analytics',
      ],
    },
    {
      group: 'Ways of working',
      items: [
        'Release management',
        'Code review',
        'Technical analysis',
        'Cross-browser & device testing',
      ],
    },
  ],

  // Experience timeline (most recent first).
  experience: [
    {
      role: 'Software Developer',
      company: 'SMSPortal',
      location: 'Sandton, South Africa',
      period: '2024 — Present',
      current: true,
      summary:
        "Build and ship frontend features across SMSPortal's customer-facing, business-admin and internal platforms in React, JavaScript and SASS — delivered through a regular release cycle.",
      highlights: [
        'Led the frontend of a WhatsApp Business multi-account experience on the customer-facing platform: account switching and a tabbed account layout (Insights, Numbers, Templates) with modal-based detail flows and improved loading states.',
        'Built an Integrations area, including a third-party marketing-platform integration (Optimove) with a guided setup and a configurable mappings & templates screen.',
        'Hardened WhatsApp template tooling for production: language-code display, emoji validation, created-date sorting, unsaved-change handling, dynamic support links and app-review support.',
        'Ran a frontend endpoint audit, coordinated backend endpoint updates and removed deprecated usage to stabilise key flows.',
        'Improved reliability on the business-admin platform — pricing-modal validation plus settings, badge and email-display fixes.',
        'Added messaging and campaign-reporting features to the internal admin tooling, including email sending, image downloads and reporting screens.',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Pineapple',
      location: 'Sandton, South Africa',
      period: '2022 — 2024',
      current: false,
      summary:
        'Worked across front-end and back-end on marketing, tracking and claims tooling for the insurance product, writing production-ready code with autonomy.',
      highlights: [
        'Built a tracked landing page with React, SASS and Google Tag Manager from provided designs, and set up AWS EC2 instances for GTM server-side tagging.',
        'Helped design and implement a To-do List feature that simplified the claims process, including the requirements and a supporting database.',
        'Developed a product catalogue with the marketing team to improve user retargeting.',
        'Reviewed code for structure, security and cross-browser, device and OS compatibility.',
      ],
    },
    {
      role: 'Tutor & Computer Science Dept. Intern',
      company: 'Nelson Mandela University',
      location: 'Gqeberha, South Africa',
      period: '2019 — 2021',
      current: false,
      summary:
        'Tutored first- and second-year students in introductory programming and data structures, and supported the department’s computer labs and student technical needs.',
      highlights: [],
    },
  ],

  education: [
    {
      school: 'Nelson Mandela University',
      degree: 'BSc — Computer Science & Statistics',
      period: '2018 — 2021',
      location: 'Gqeberha, South Africa',
      description:
        'Majored in Computer Science with Statistics as a second major. Coursework spanned data structures and algorithms, advanced programming and Android development — a strong foundation in technical problem-solving.',
    },
  ],
}

export default profile
