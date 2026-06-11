export type ProjectStatus = "in-progress" | "paused" | "completed" | "prototype";

export type ProjectCategory = "personal" | "study";

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectCaseStudyItem = {
  title: string;
  description: string;
  tag?: string;
};

export type ProjectGalleryItem = {
  title: string;
  description: string;
  image?: string;
  fit?: "cover" | "contain";
};

export type ProjectCaseStudy = {
  role: string;
  period: string;
  type: string;
  objective: string;
  overview: string;
  goals: string[];
  features: ProjectCaseStudyItem[];
  challenges: ProjectCaseStudyItem[];
  learnings: string[];
  roadmap: string[];
  gallery: ProjectGalleryItem[];
  showcase?: ProjectGalleryItem[];
  entities?: string[];
  skills?: string[];
};

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  stack: string[];
  description: string;
  highlights: string[];
  links: ProjectLink[];
  heroImage?: string;
  coverImage?: string;
  coverFit?: "cover" | "contain";
  caseStudy?: ProjectCaseStudy;
};

export type NavigationItem = {
  label: string;
  to: string;
};

export type SocialLink = {
  label: string;
  url: string;
  kind: "professional" | "code" | "community" | "support" | "creative";
};

export type VideoItem = {
  title: string;
  description: string;
  youtubeUrl?: string;
  thumbnail?: string;
  featured?: boolean;
};
