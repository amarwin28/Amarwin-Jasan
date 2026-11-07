export interface Profile {
  name: string;
  fullName: string;
  roleTitle: string;
  shortTitle: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  availability: string;
  shortIntro: string;
  aboutStory: string[];
  dimensions: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  isDarkNavy?: boolean;
  websiteUrl?: string;
  logo?: string;
  badge?: string;
}

export type ProjectFilterCategory =
  | 'All'
  | 'AI Applications'
  | 'Mobile Apps'
  | 'Web Applications'
  | 'Java Applications'
  | 'Web Design';

export interface Project {
  id: string;
  title: string;
  category: string;
  filterCategories: ProjectFilterCategory[];
  description: string;
  techTags: string[];
  image: string;
  gallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  highlights?: string[];
}

export interface SkillGroup {
  category: string;
  description?: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  current?: boolean;
  details?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  location?: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  context?: string;
  iconName: string;
}

