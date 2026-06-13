import { profile } from "./profile";
import { projects } from "./projects";
import { studyProjects } from "./studyProjects";

export type HomeSlide = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  ctaLabel: string;
  ctaTo: string;
  tone: "violet" | "cyan" | "orange";
  visualTitle: string;
  visualItems: string[];
  metric: {
    value: string;
    label: string;
  };
};

export type HomeStat = {
  value: string;
  label: string;
  description: string;
};

export type BuildFocusItem = {
  title: string;
  description: string;
};

const projectCount = projects.length + studyProjects.length;

export const homeHero = {
  eyebrow: "Portfolio tech créatif",
  title: "Des interfaces web solides, modernes et vivantes.",
  description:
    "Un profil web expérimenté qui relie production, maintenance, leadership technique et projets créatifs avec React, TypeScript, jeux et outils web.",
  primaryCta: {
    label: "Explorer les projets",
    to: "/projects/brawlcards-origins",
  },
  secondaryCta: {
    label: "Voir le CV",
    to: "/cv",
  },
  proofPoints: [
    {
      value: `${profile.experience.totalYears}`,
      label: "ans d'expérience",
    },
    {
      value: `${profile.experience.webmasterYears}`,
      label: "ans Webmaster",
    },
    {
      value: `${profile.experience.technicalLeaderYears}`,
      label: "ans Technical Leader",
    },
  ],
};

export const homeCarouselSlides: HomeSlide[] = [
  {
    id: "professional-path",
    eyebrow: "Parcours professionnel",
    title: "15 ans d'expérience web",
    text:
      "Un parcours de terrain, entre maintenance de sites, évolutions concrètes, suivi de production et prise de recul technique.",
    ctaLabel: "Voir le CV",
    ctaTo: "/cv",
    tone: "violet",
    visualTitle: "Expérience",
    visualItems: ["Production", "Maintenance", "Évolution", "Leadership"],
    metric: {
      value: "15",
      label: "ans en entreprise",
    },
  },
  {
    id: "personal-projects",
    eyebrow: "Projets personnels",
    title: "Des projets qui vont au bout des idées",
    text:
      "Je travaille des expériences interactives où l'interface, les règles, la progression et l'identité visuelle avancent ensemble.",
    ctaLabel: "Explorer les projets",
    ctaTo: "/projects/brawlcards-origins",
    tone: "cyan",
    visualTitle: "Univers interactifs",
    visualItems: ["BrawlCards", "Verdelya", "Gameplay", "Interfaces"],
    metric: {
      value: "2",
      label: "projets personnels",
    },
  },
  {
    id: "creative-side",
    eyebrow: "Créativité & piano",
    title: "Code, musique et créativité",
    text:
      "Le piano et les projets créatifs nourrissent ma façon de concevoir des interfaces vivantes et expressives.",
    ctaLabel: "Voir les hobbies",
    ctaTo: "/hobbies",
    tone: "orange",
    visualTitle: "Créatif",
    visualItems: ["Piano", "YouTube", "Composition", "Expression"],
    metric: {
      value: "3",
      label: "vidéos piano",
    },
  },
];

export const homeStats: HomeStat[] = [
  {
    value: `${profile.experience.totalYears}`,
    label: "ans d'expérience",
    description:
      "Un parcours long en entreprise, au contact de sites vivants, de contraintes réelles et d'évolutions continues.",
  },
  {
    value: `${profile.experience.webmasterYears}`,
    label: "ans Webmaster",
    description:
      "Maintenance, contenus, qualité de production, suivi des besoins et amélioration progressive des plateformes.",
  },
  {
    value: `${profile.experience.technicalLeaderYears}`,
    label: "ans Technical Leader",
    description:
      "Pilotage technique, accompagnement, choix structurants et attention portée à la robustesse des solutions.",
  },
  {
    value: `${projectCount}`,
    label: "projets présentés",
    description:
      "Des projets personnels et d'étude pour montrer autant la construction produit que la progression technique.",
  },
];

export const buildFocusItems: BuildFocusItem[] = [
  {
    title: "Applications web modernes",
    description:
      "Des interfaces structurées, rapides et lisibles, pensées pour être maintenables et agréables à utiliser.",
  },
  {
    title: "Interfaces React / TypeScript",
    description:
      "Des composants réutilisables, typés et organisés pour faire évoluer le produit sans complexité inutile.",
  },
  {
    title: "Jeux et systèmes interactifs",
    description:
      "Des mécaniques de gameplay, des boucles de progression et des expériences qui demandent autant de logique que d'interface.",
  },
  {
    title: "Architecture front-end",
    description:
      "Une structure simple à lire, des données séparées du rendu et des choix techniques adaptés au vrai périmètre du projet.",
  },
  {
    title: "Maintenance et évolution",
    description:
      "Une culture de la stabilité, des corrections propres et des améliorations progressives sur des sites existants.",
  },
  {
    title: "Expériences créatives",
    description:
      "Une attention portée au rythme, aux détails visuels, aux micro-interactions et à l'identité du projet.",
  },
];

export const homeCta = {
  eyebrow: "Passer à la suite",
  title: "Un espace pour suivre ce que je construis.",
  description:
    "Les pages projets, le CV et la partie créative donnent une vision plus complète du parcours, du code et des univers que je développe.",
  primaryCta: {
    label: "Voir les projets",
    to: "/projects/brawlcards-origins",
  },
  secondaryCta: {
    label: "Lire le CV",
    to: "/cv",
  },
};
