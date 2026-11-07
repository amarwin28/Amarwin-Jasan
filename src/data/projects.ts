import { Project, ProjectFilterCategory } from '../types';

export const projectFilterCategories: ProjectFilterCategory[] = [
  'All',
  'AI Applications',
  'Mobile Apps',
  'Web Applications',
  'Java Applications',
  'Web Design'
];

export const projectsData: Project[] = [
  {
    id: 'jarvis',
    title: 'JARVIS — AI Assistant Application',
    category: 'Mobile & Desktop',
    filterCategories: ['All', 'Mobile Apps', 'AI Applications'],
    description: 'Built an AI assistant application with task management and alarm functionality using Flutter for mobile and desktop targets.',
    techTags: ['Flutter', 'Dart', 'Task Management', 'Alarms Engine', 'Cross-Platform'],
    image: '/projects/jarvis/cover.png',
    gallery: [
      '/projects/jarvis/cover.png',
      '/projects/jarvis/windows/01-assistant.png',
      '/projects/jarvis/windows/02-tasks.png',
      '/projects/jarvis/windows/03-alarms.png',
      '/projects/jarvis/android/02-home.jpg',
      '/projects/jarvis/android/05-assistant.jpg'
    ],
    githubUrl: 'https://github.com/amarwin28',
    featured: true,
    highlights: [
      'Multi-platform targeting desktop and mobile via single Flutter codebase',
      'Integrated voice assistance and natural language command parsing',
      'Persistent task management and background alarm triggers'
    ]
  },
  {
    id: 'loanlens-ai',
    title: 'LoanLens AI',
    category: 'AI Application',
    filterCategories: ['All', 'AI Applications', 'Web Applications'],
    description: 'Developed an AI-focused loan assessment application covering loan analysis, risk information, and interactive insights.',
    techTags: ['React', 'TypeScript', 'AI Assessment', 'Risk Scoring', 'Tailwind CSS'],
    image: '/projects/loanlens-ai/cover.png',
    githubUrl: 'https://github.com/amarwin28',
    featured: true,
    highlights: [
      'Comprehensive financial risk evaluation models and scoring metrics',
      'Interactive visual breakdown of interest, repayment scenarios, and risk tiers',
      'Intuitive modern dashboard optimized for borrower clarity'
    ]
  },
  {
    id: 'feedguard-ai',
    title: 'FeedGuard AI',
    category: 'AI & Web',
    filterCategories: ['All', 'AI Applications', 'Web Applications'],
    description: 'Built an AI-driven platform with a React/Vite frontend, FastAPI backend, PostgreSQL integration, and machine-learning components for feed screening and anomaly analysis.',
    techTags: ['React', 'Vite', 'FastAPI', 'PostgreSQL', 'Machine Learning'],
    image: '/projects/feedguard-ai/cover.png',
    githubUrl: 'https://github.com/amarwin28',
    featured: true,
    highlights: [
      'Full-stack architecture with React/Vite frontend and asynchronous FastAPI backend',
      'Automated machine-learning anomaly detection and feed screening algorithms',
      'Structured PostgreSQL database with robust schema and metrics reporting'
    ]
  },
  {
    id: 'skillgap-ai',
    title: 'SkillGap AI',
    category: 'Java Application',
    filterCategories: ['All', 'Java Applications'],
    description: 'Developed an offline Java application that compares resume skills with those required for a selected job role and generates a personalized skill-gap report.',
    techTags: ['Java', 'Swing GUI', 'Text Parsing', 'Skill Matrix', 'Report Generator'],
    image: '/projects/skillgap-ai/cover.svg',
    githubUrl: 'https://github.com/amarwin28',
    featured: false,
    highlights: [
      'Zero-cloud offline processing ensuring complete user data privacy',
      'Algorithmic match comparison against curated industry job taxonomies',
      'Personalized exportable recommendation report for targeted upskilling'
    ]
  },
  {
    id: 'aj-controller',
    title: 'AJ Controller',
    category: 'Mobile Application',
    filterCategories: ['All', 'Mobile Apps'],
    description: 'Built a Flutter application that connects a mobile device with a PC and provides controller functionality.',
    techTags: ['Flutter', 'Dart', 'Network Sockets', 'PC Control', 'Low Latency'],
    image: '/projects/aj-controller/cover.jpg',
    gallery: [
      '/projects/aj-controller/cover.jpg',
      '/projects/aj-controller/screenshots/02-pc-controller-main.jpg',
      '/projects/aj-controller/screenshots/04-gamepad-layout.jpg',
      '/projects/aj-controller/screenshots/05-racing-simulator.jpg'
    ],
    githubUrl: 'https://github.com/amarwin28',
    featured: false,
    highlights: [
      'Turns mobile devices into a responsive wireless game and system controller',
      'Low-latency socket protocol for instant input transmission',
      'Customizable on-screen button layouts and sensitivity controls'
    ]
  },
  {
    id: 'dc-outpass',
    title: 'DC Outpass',
    category: 'Web Application',
    filterCategories: ['All', 'Web Applications'],
    description: 'Contributed to a collaborative college outpass management project developed for Dhaanish Chennai College.',
    techTags: ['Web Platform', 'React', 'Node.js', 'Workflow Approval', 'Institutional'],
    image: '/projects/dc-outpass/cover.svg',
    githubUrl: 'https://github.com/amarwin28',
    featured: false,
    highlights: [
      'Multi-tier digital approval pipeline for students, tutors, and wardens',
      'Real-time status tracking replacing manual paper gate-passes',
      'Collaborative team development for campus-wide deployment'
    ]
  },
  {
    id: 'jas-traders',
    title: 'JAS Traders Website',
    category: 'Business Website',
    filterCategories: ['All', 'Web Applications', 'Web Design'],
    description: 'Developed a business website for JAS Traders, a paper-bag production company.',
    techTags: ['Web Design', 'HTML5 / CSS3', 'JavaScript', 'Product Catalog', 'SEO'],
    image: '/projects/jas-traders/cover.jpg',
    gallery: [
      '/projects/jas-traders/cover.jpg',
      '/projects/jas-traders/images/hero/hero-bg.jpeg',
      '/projects/jas-traders/images/about/about.jpeg'
    ],
    githubUrl: 'https://github.com/amarwin28',
    featured: false,
    highlights: [
      'Commercial corporate identity showcasing paper-bag manufacturing capacities',
      'Comprehensive product showcase catalog with inquiry forms',
      'Lightweight, fast-loading, mobile-first responsive architecture'
    ]
  },
  {
    id: 'nanospark',
    title: 'NanoSpark',
    category: 'Web Design',
    filterCategories: ['All', 'Web Design', 'Web Applications'],
    description: 'Contributed to collaborative web-design work for a startup environment.',
    techTags: ['UI/UX Design', 'Modern Layouts', 'Startup Branding', 'Interactive'],
    image: '/projects/nanospark/cover.svg',
    githubUrl: 'https://github.com/amarwin28',
    featured: false,
    highlights: [
      'High-impact visual identity and modern user experience patterns',
      'Component-driven interface designs built for quick startup iteration',
      'Polished typography and cohesive brand storytelling'
    ]
  }
];

