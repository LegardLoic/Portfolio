import { profile } from "./profile";
import { projects } from "./projects";
import { socials } from "./socials";
import { studyProjects } from "./studyProjects";

export type CvStat = {
  value: string;
  label: string;
  description: string;
};

export type CvExperience = {
  title: string;
  period: string;
  duration: string;
  description: string;
  highlights: string[];
};

export type CvSkillGroup = {
  title: string;
  skills: string[];
};

export type CvSoftSkill = {
  title: string;
  description: string;
};

export type CvEducationItem = {
  title: string;
  description: string;
};

export type CvFeaturedProject = {
  title: string;
  type: string;
  stack: string[];
  to: string;
};

const linkedin = socials.find((social) => social.label === "LinkedIn");

export const cv = {
  displayName: profile.name,
  role: profile.role,
  location: profile.location,
  cvPdfUrl: profile.cvPdfUrl,
  linkedinUrl: linkedin?.url ?? "TODO",
  headline:
    "Profil web expérimenté, avec 15 ans d'expérience en entreprise, spécialisé dans la maintenance, l'évolution de sites, la coordination technique et la création d'interfaces web modernes.",
  summary:
    "Parcours long en environnement professionnel, avec une base solide en gestion quotidienne de sites web, évolution de contenus, compréhension des besoins métier et progression vers des responsabilités de Technical Leader. Les projets récents montrent une montée en compétence moderne autour de React, TypeScript, Symfony et d'architectures front-end plus structurées.",
  stats: [
    {
      value: `${profile.experience.totalYears}`,
      label: "ans d'expérience",
      description: "Expérience en entreprise sur des projets web concrets et évolutifs.",
    },
    {
      value: `${profile.experience.webmasterYears}`,
      label: "ans Webmaster",
      description: "Maintenance, contenus, interfaces, suivi et amélioration de sites web.",
    },
    {
      value: `${profile.experience.technicalLeaderYears}`,
      label: "ans Technical Leader",
      description: "Coordination technique, recul sur l'architecture et amélioration continue.",
    },
    {
      value: `${projects.length + studyProjects.length}`,
      label: "projets présentés",
      description: "Projets personnels et d'étude documentés dans le portfolio.",
    },
  ] satisfies CvStat[],
  experiences: [
    {
      title: "Webmaster",
      period: "2009 - 2023 · Scooterpieces.fr",
      duration: `${profile.experience.webmasterYears} ans`,
      description:
        "Maintenance, évolution et gestion quotidienne de sites web en environnement professionnel. Suivi des contenus, optimisation des interfaces, coordination avec les besoins métier et résolution de problématiques web.",
      highlights: [
        "Maintenance long terme de sites web.",
        "Suivi des contenus, corrections et évolutions fonctionnelles.",
        "Compréhension des besoins métier et des contraintes de production.",
        "Amélioration progressive de l'expérience utilisateur.",
      ],
    },
    {
      title: "Technical Leader",
      period: "2023 - 2024 · Scooterpieces.fr",
      duration: `${profile.experience.technicalLeaderYears} ans`,
      description:
        "Accompagnement technique, prise de recul sur les choix d'architecture, coordination des développements et amélioration de la qualité des projets.",
      highlights: [
        "Coordination technique et accompagnement.",
        "Choix structurants pour améliorer la qualité des projets.",
        "Transmission, relecture et résolution de problèmes.",
        "Vision plus globale sur l'organisation du code et la maintenabilité.",
      ],
    },
  ] satisfies CvExperience[],
  skillGroups: [
    {
      title: "Front-end",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Vite",
        "Responsive design",
        "Accessibilité",
      ],
    },
    {
      title: "Back-end / Frameworks",
      skills: ["PHP", "Symfony", "Doctrine", "Twig"],
    },
    {
      title: "Outils / Méthodes",
      skills: [
        "Git",
        "GitHub",
        "GitHub Pages",
        "npm",
        "ESLint",
        "Architecture de projet",
        "Maintenance applicative",
      ],
    },
    {
      title: "Design / Produit",
      skills: [
        "UI moderne",
        "Expérience utilisateur",
        "Structuration de contenu",
        "Design system",
        "Prototypage",
      ],
    },
  ] satisfies CvSkillGroup[],
  softSkills: [
    {
      title: "Compréhension métier",
      description:
        "Capacité à relier les besoins concrets, les contraintes de production et les choix techniques.",
    },
    {
      title: "Maintenance long terme",
      description:
        "Attention portée à la stabilité, à la lisibilité et aux évolutions progressives d'un site.",
    },
    {
      title: "Rigueur",
      description:
        "Approche structurée, vérification du build et recherche de solutions maintenables.",
    },
    {
      title: "Transmission technique",
      description:
        "Capacité à accompagner, expliquer les choix et améliorer les pratiques collectives.",
    },
    {
      title: "Résolution de problèmes",
      description:
        "Analyse des situations, priorisation et correction pragmatique des points bloquants.",
    },
    {
      title: "Adaptation",
      description:
        "Progression continue vers des outils modernes comme React, TypeScript et Symfony.",
    },
  ] satisfies CvSoftSkill[],
  education: [
    {
      title: "Projets d'étude",
      description:
        "SoundTrackify et ZombieLand servent de supports pour pratiquer la modélisation, la structuration d'applications et l'interface web.",
    },
    {
      title: "Apprentissage continu",
      description:
        "Montée en compétence par la pratique sur React, TypeScript, Symfony, architecture front-end et projets personnels.",
    },
    {
      title: "Expert JavaScript - École O'clock",
      description: "2025 · Niveau 6 RNCP (Bac+4).",
    },
    {
      title: "Développeur Web - École O'clock",
      description: "2023 · Niveau 5 RNCP (Bac+2).",
    },
  ] satisfies CvEducationItem[],
  featuredProjects: [
    {
      title: "BrawlCards: Origins",
      type: "Projet personnel",
      stack: ["React", "TypeScript", "Vite"],
      to: "/projects/brawlcards-origins",
    },
    {
      title: "Les Terres de Verdelya",
      type: "Projet personnel",
      stack: ["Unity 6", "C#", "URP 2D"],
      to: "/projects/les-terres-de-verdelya",
    },
    {
      title: "SoundTrackify",
      type: "Projet d'étude",
      stack: ["Symfony 5.4", "Twig", "Doctrine"],
      to: "/study-projects",
    },
    {
      title: "ZombieLand",
      type: "Projet d'étude",
      stack: ["React", "Node.js", "Prisma"],
      to: "/study-projects",
    },
  ] satisfies CvFeaturedProject[],
} as const;


