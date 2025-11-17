export const companyLinks = {
  'Lil Snack': 'https://lilsnack.com',
  'Blizzard Entertainment': 'https://www.blizzard.com/',
  'Battle.net': 'https://www.battle.net/',
  Uplift: 'https://uplift.com/',
  'Ample Organics': 'https://ampleorganics.com',
  'E-Data Now': 'https://edatanow.com',
};

export const profile = {
  name: 'Kaelyn Suh',
  title: 'Software Engineer',
  summary: [
    "Hi! My name is Kaelyn. I'm a Software Engineer from Canada based in Irvine, California. I am passionate about building beautiful interfaces and making the web accessible for all.",
    'Most recently, I was a Founding Engineer at Lil Snack, where I built the daily games platform delivering engaging new player experiences, social systems, onboarding flows, brand integrations, internal tools, and core platform infrastructure.',
    'I also worked at Blizzard Entertainment on the Battle.net e-commerce storefront, delivering games and experiences to millions of players. Prior to that, I worked at Uplift making travel accessible and affordable for everyone, at Ample Organics making medical cannabis safely accessible to those in need, and at E-Data Now ensuring quality assurance compliance in the automotive industry.',
    'When I am not coding, you can find me rock climbing, cosplaying, streaming video games on Twitch, attempting digital art, or binging anime.',
  ],
};

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact Me' },
];

export const workHistory = [
  {
    role: 'Founding Engineer',
    company: 'Lil Snack',
    start: 'April 2024',
    end: 'May 2025',
    description: [
      '- Built the Lil Snack daily games platform using Next.js, Firestore, and Unity, creating new player experiences and embedded web applications for partners including Imgur, Fox News, BuzzFeed, and Amazon.',
      '- Oversaw platform growth, scaling DAU by 1040% and surpassing 10 million total games played within one year.',
      '- Developed core social and meta-game systems such as streak leaderboards, group leaderboards, and a full discussion board with replies, likes, comments, and reporting.',
      '- Led implementation of first-time user experiences like onboarding modals, game recommendations, and conversion prompts, driving a 15% increase in account sign-ups.',
      '- Integrated the Lil Snack platform into Imgur’s mobile app and website, delivering 5 daily games with custom authentication flows and real-time user state.',
      '- Maintained and expanded UI components, including loading screens, how-to-play flows, messaging surfaces, and dynamic share text for game outcomes.',
      '- Implemented a feature flagging system with Firebase Remote Config to safely gate and gradually release new features.',
      '- Improved internal tooling for the content team, optimizing workflows such as past-day game selection and playlist management to reduce operational overhead.',
      '- Supported platform stability and performance across frontend and backend infrastructure using Sentry and Vercel as traffic scaled.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Blizzard Entertainment',
    start: 'April 2022',
    end: 'March 2024',
    description: [
      '- Maintained Battle.net e-commerce application (Angular and Java) with 20 million concurrent users, partaking in ops, on-call rotations, resolving bugs, updating dependencies, and maintaining releases while developing features for deployment.',
      '- Improved purchase conversion of products by ~9% through various A/B tests focused on user behavior, such as product ordering and interface changes.',
      '- Integrated the web app with the Battle.net Mobile App (iOS and Android) enabling players to complete purchases in their respective mobile game apps.',
      "- Automated management of on-premise servers to limit toil during the team's ongoing cloud migration efforts.",
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Uplift Inc.',
    start: 'October 2019',
    end: 'March 2022',
    description: [
      "- Owned the Borrower's Portal where consumers service and manage loans, re-platforming it from Clojure to React and Redux.",
      '- Led feature work including scheduling payments, down payments, beyond travel functionality, FAQs, and search.',
      '- Built the CCPA Portal (React, TypeScript, GraphQL, Apollo) enabling users to opt out of data sharing.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Ample Organics',
    start: 'September 2018',
    end: 'October 2019',
    description: [
      '- Worked on a B2B platform providing a Seed-to-Sale ecosystem for cannabis businesses, enabling tracking and reporting of plant growth as well as medical and recreational sales.',
      '- Collaborated with the DevOps team on client implementation, infrastructure maintenance, deployments, and monitoring.',
      '- Technologies included Vue, Vuex, Ruby on Rails, PostgreSQL, Docker, Kubernetes, and AWS.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'E-Data Now',
    start: 'May 2017',
    end: 'September 2018',
    description: [
      '- Built a web app that allows users to manage and track production and manufacturing processes.',
      '- Re-platformed the support portal from ERB to Vue, streamlining support request submission and management.',
      '- Technologies included Vue, Vuex, Ruby on Rails, PostgreSQL, Docker, and AWS.',
    ],
  },
];

export const skills = {
  Technologies: [
    'Angular',
    'RxJS',
    'React',
    'Redux',
    'Ruby on Rails',
    'Vue',
    'AWS',
    'PostgreSQL',
    'Docker',
    'Git',
  ],
  Languages: [
    'JavaScript',
    'TypeScript',
    'HTML & CSS',
    'Java',
    'Ruby',
    'Python',
    'SQL',
  ],
  Others: ['Web Components', 'Figma', 'UX / UI design', 'Technical writing'],
};

export const education = {
  institution: "Queen's University",
  program: 'Bachelor of Computing',
  start: 'September 2012',
  end: 'April 2016',
  highlights: [
    "Recipient of the Queen's University Excellence Scholarship",
    "Activities and Societies: Queen's Dance Club, Flow Dance Club",
  ],
};

export const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:kaelyn@kaelyn.dev',
    display: 'kaelyn@kaelyn.dev',
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    icon: 'file-text',
    display: 'Resume',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kaelynsuh',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kaelynsuh',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kaelynge',
    icon: 'instagram',
  },
  {
    label: 'Twitch',
    href: 'https://www.twitch.tv/kaelynge',
    icon: 'twitch',
  },
];
