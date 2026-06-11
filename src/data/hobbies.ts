import type { VideoItem } from "../types/content";

type CreativeLink = {
  title: string;
  description: string;
};

type OtherHobby = {
  title: string;
  description: string;
};

type HobbyData = {
  intro: string;
  mainHobby: {
    title: string;
    subtitle: string;
    description: string;
    practiceNote: string;
    videos: VideoItem[];
  };
  creativeLinks: CreativeLink[];
  otherHobbies: OtherHobby[];
};

export const hobbies: HobbyData = {
  intro:
    "En dehors du développement, le piano occupe une place importante dans mon univers créatif.",
  mainHobby: {
    title: "Piano",
    subtitle: "Rythme, précision et créativité.",
    description:
      "Le piano me permet d'explorer une autre forme de construction : plus sensible, plus musicale, mais tout aussi structurée. Cette pratique nourrit mon attention au rythme, au détail et à l'équilibre dans les projets web.",
    practiceNote:
      "Reprises et interprétations au piano autour d'univers marquants, entre jeux vidéo, animation japonaise et collaborations vocales.",
    videos: [
      {
        title: "Tokyo Ghoul - Unravel (Acoustic)",
        description:
          "Interprétation piano de l'arrangement TheIshter, autour d'un thème intense et expressif.",
        youtubeUrl: "https://www.youtube.com/watch?v=lJPxy5ds25E",
        thumbnail: "https://img.youtube.com/vi/lJPxy5ds25E/hqdefault.jpg",
        featured: true,
      },
      {
        title: "Kainé Salvation - NieR",
        description:
          "Reprise piano d'un morceau emblématique de NieR, centrée sur l'atmosphère et la progression émotionnelle.",
        youtubeUrl: "https://www.youtube.com/watch?v=Bxd8Rj8lqBc",
        thumbnail: "https://img.youtube.com/vi/Bxd8Rj8lqBc/hqdefault.jpg",
      },
      {
        title: "You're Not Alone - Final Fantasy IX",
        description:
          "Version piano et voix avec Mioune, sur un thème fort de Final Fantasy IX.",
        youtubeUrl: "https://www.youtube.com/watch?v=6KWXvommiYE",
        thumbnail: "https://img.youtube.com/vi/6KWXvommiYE/hqdefault.jpg",
      },
    ],
  },
  creativeLinks: [
    {
      title: "Rythme",
      description:
        "Penser une interprétation, c'est gérer une progression, des respirations et des temps forts. Cette logique se retrouve dans la structure d'une interface.",
    },
    {
      title: "Précision",
      description:
        "La pratique musicale développe l'attention au détail, la répétition utile et l'amélioration continue.",
    },
    {
      title: "Émotion",
      description:
        "La musique rappelle qu'une création ne doit pas seulement fonctionner : elle doit aussi transmettre quelque chose.",
    },
    {
      title: "Improvisation",
      description:
        "Chercher une solution musicale aide à garder une approche créative face aux contraintes techniques.",
    },
  ],
  otherHobbies: [
    {
      title: "Création de jeux",
      description:
        "Expérimentation autour de systèmes interactifs, de gameplay et d'interfaces capables de raconter une progression.",
    },
    {
      title: "Expérimentation web",
      description:
        "Tests d'interactions, de mises en page et de petits outils pour explorer des idées rapidement.",
    },
    {
      title: "Musiques de jeux et univers narratifs",
      description:
        "Intérêt pour les OST, les ambiances de jeux et les univers capables de relier image, son, progression et émotion.",
    },
  ],
};
