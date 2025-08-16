// Project type definitions
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  images: string[];
  thumbnail?: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectFormData {
  title: string;
  description: string;
  longDescription?: string;
  images: File[];
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

// Portfolio type definitions
export interface Portfolio {
  id: string;
  userId: string;
  title: string;
  description: string;
  customUrl?: string;
  generatedUrl: string;
  bio: string;
  profileImage?: string;
  contactInfo: ContactInfo;
  isPublished: boolean;
  projects: Project[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  portfolio?: Portfolio;
}

// Categories for project organization
export const PROJECT_CATEGORIES = [
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Machine Learning',
  'Design',
  'DevOps',
  'Other'
] as const;

export type ProjectCategory = typeof PROJECT_CATEGORIES[number];

// Common technologies list for suggestions
export const COMMON_TECHNOLOGIES = [
  // Frontend
  'React', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js',
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'SCSS',
  
  // Backend
  'Node.js', 'Express', 'Django', 'Flask', 'FastAPI', 'Ruby on Rails',
  'PHP', 'Laravel', 'ASP.NET', 'Spring Boot',
  
  // Mobile
  'React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin',
  
  // Databases
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Firebase',
  
  // Cloud & DevOps
  'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Vercel', 'Netlify',
  
  // Other
  'Python', 'Java', 'C++', 'Rust', 'Go', 'GraphQL', 'REST API'
] as const;

// Dribbble shots (lightweight)
export interface DribbbleShot {
  id: string;
  title: string;
  url: string;
  image: string; // preferred preview image (normal/one_x)
  published: string; // ISO date string
  tags?: string[];
  animated?: boolean; // true if image is a GIF
}
