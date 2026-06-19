export interface Candidate {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  website: string;
  tagline: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  architecture: string;
  impact: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  workMode: string;
  period: string;
  location: string;
}

export interface NavLink {
  label: string;
  href: string;
}
