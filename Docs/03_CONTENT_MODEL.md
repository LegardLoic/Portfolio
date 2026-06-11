# docs/03_CONTENT_MODEL.md — Modèle de contenu

## Profil

Créer `src/data/profile.ts`.

Structure recommandée :

```ts
export const profile = {
  name: "TODO",
  role: "Webmaster / Technical Leader / Développeur web",
  headline: "Portfolio moderne autour du développement web, des projets créatifs et de l’expérimentation.",
  location: "France",
  experience: {
    totalYears: 15,
    webmasterYears: 13,
    technicalLeaderYears: 2
  },
  summary:
    "Profil web expérimenté, avec un parcours long en entreprise, une sensibilité produit et une forte appétence pour les projets créatifs.",
  cvPdfUrl: "TODO"
};
```

## Réseaux sociaux

Créer `src/data/socials.ts`.

```ts
export const socials = [
  {
    label: "LinkedIn",
    url: "TODO",
    kind: "professional"
  },
  {
    label: "GitHub",
    url: "TODO",
    kind: "code"
  },
  {
    label: "Discord",
    url: "TODO",
    kind: "community"
  },
  {
    label: "Patreon",
    url: "TODO",
    kind: "support"
  },
  {
    label: "YouTube",
    url: "TODO",
    kind: "creative"
  }
];
```

## Projets personnels

Créer `src/data/projects.ts`.

```ts
export const projects = [
  {
    slug: "brawlcards-origins",
    title: "BrawlCards: Origins",
    subtitle: "Auto-battler de cartes inspiré des mécaniques de plateau, de synergies et de familles.",
    category: "personal",
    status: "in-progress",
    stack: ["React", "TypeScript", "Vite"],
    description:
      "Projet de jeu de cartes avec mécaniques de familles, synergies, phases de shop, combat et IA.",
    highlights: [
      "Système de cartes et familles",
      "Mode IA",
      "Mode 1v1",
      "Drag and drop",
      "Animations de combat",
      "Mécaniques avancées de cartes"
    ],
    links: []
  },
  {
    slug: "les-terres-de-verdelya",
    title: "Les Terres de Verdelya",
    subtitle: "Projet de jeu RPG/farming à détailler.",
    category: "personal",
    status: "prototype",
    stack: ["TODO"],
    description:
      "Description à compléter. Prévoir une présentation orientée gameplay, progression et boucle de jeu.",
    highlights: ["TODO"],
    links: []
  }
];
```

## Projets d’étude

Créer `src/data/studyProjects.ts`.

```ts
export const studyProjects = [
  {
    slug: "soundtrackify",
    title: "SoundTrackify",
    subtitle: "Application web autour des musiques de jeux vidéo.",
    category: "study",
    status: "completed",
    stack: ["Symfony", "Twig", "Doctrine", "Bootstrap"],
    description:
      "Projet d’étude permettant d’organiser et explorer des musiques, albums, jeux vidéo, plateformes et playlists.",
    highlights: [
      "Gestion d’entités liées",
      "Interface web structurée",
      "Pagination",
      "Organisation de contenus musicaux"
    ],
    links: []
  },
  {
    slug: "zombieland",
    title: "ZombieLand",
    subtitle: "Projet d’étude à compléter.",
    category: "study",
    status: "completed",
    stack: ["TODO"],
    description:
      "Description à compléter selon le contenu exact du projet.",
    highlights: ["TODO"],
    links: []
  }
];
```

## Hobbies

Créer `src/data/hobbies.ts`.

```ts
export const hobbies = {
  intro:
    "En dehors du développement, le piano occupe une place importante dans mon univers créatif.",
  mainHobby: {
    title: "Piano",
    description:
      "Pratique musicale, reprises, compositions ou interprétations publiées sur YouTube.",
    videos: [
      {
        title: "TODO - Vidéo piano 1",
        youtubeUrl: "TODO",
        description: "TODO"
      },
      {
        title: "TODO - Vidéo piano 2",
        youtubeUrl: "TODO",
        description: "TODO"
      },
      {
        title: "TODO - Vidéo piano 3",
        youtubeUrl: "TODO",
        description: "TODO"
      }
    ]
  }
};
```
