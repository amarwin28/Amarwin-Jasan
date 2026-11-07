import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'exp-kromaxzon',
    organization: 'Kromaxzon Technologies',
    role: 'Media & Growth',
    period: '2026 – Present',
    location: 'Remote / On-site',
    description: "Contributing to the company's media presence, brand development, and growth initiatives.",
    responsibilities: [
      'Media and brand communication.',
      'Digital content and creative direction.',
      'Marketing and promotional initiatives.',
      'Brand positioning.',
      'Audience engagement.',
      "Supporting the company's digital presence."
    ],
    isDarkNavy: true,
    logo: '/images/companies/kromaxzon-logo.png',
    badge: 'Core Leadership'
  },
  {
    id: 'exp-weboclypse',
    organization: 'WEBOCLYPSE',
    role: 'Founder',
    period: '2026 – Present',
    websiteUrl: 'https://www.weboclypse.site',
    description: 'Founded WEBOCLYPSE, an initiative focused on building practical technology solutions and digital products.',
    responsibilities: [
      'Project ideation and execution.',
      'Team and project management.',
      'Technology and solution development.',
      'Website and digital product initiatives.'
    ],
    isDarkNavy: false,
    logo: '/images/companies/weboclypse-logo.jpg',
    badge: 'Founder & Lead'
  },
  {
    id: 'exp-codevstudio',
    organization: 'codeVstudio',
    role: 'Member',
    period: '2026 – Present',
    description: 'A digital-development team focused on building web and software solutions.',
    responsibilities: [
      'Business development.',
      'Digital product development.',
      'Web development.',
      'Team collaboration.'
    ],
    isDarkNavy: false,
    badge: 'Member'
  },
  {
    id: 'exp-it-boundaries',
    organization: 'IT Boundaries',
    role: 'Flutter App Development Intern',
    period: 'Completed Internship',
    description: 'Completed an internship focused on mobile application development using Flutter.',
    responsibilities: [
      'Cross-platform mobile application development with Flutter and Dart.',
      'UI component design, state handling, and client feature integration.',
      'Performance tuning and Android build optimization.'
    ],
    isDarkNavy: false,
    badge: 'Internship'
  }
];

