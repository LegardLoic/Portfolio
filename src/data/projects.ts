import type { PortfolioProject } from "../types/content";
import brawlCard120 from "../assets/images/brawlCards/cards/card120.1.webp";
import brawlCard121 from "../assets/images/brawlCards/cards/card121.1.webp";
import brawlCard217 from "../assets/images/brawlCards/cards/card217.webp";
import brawlCard222 from "../assets/images/brawlCards/cards/card222.1.webp";
import brawlCard29 from "../assets/images/brawlCards/cards/card29.1.webp";
import brawlCard33 from "../assets/images/brawlCards/cards/card33.1.webp";
import brawlCard72 from "../assets/images/brawlCards/cards/card72.1.webp";
import brawlCard82 from "../assets/images/brawlCards/cards/card82.1.webp";
import brawlCombat from "../assets/images/brawlCards/combat.webp";
import brawlDetailCard from "../assets/images/brawlCards/detail-card.webp";
import brawlIcon from "../assets/images/brawlCards/icon-512.webp";
import brawlPlateauShop from "../assets/images/brawlCards/plateau+shop.webp";
import verdelyaCascade from "../assets/images/les_terres_de_Verdelya/ferme-cascade.webp";
import verdelyaCombat from "../assets/images/les_terres_de_Verdelya/fight.webp";
import verdelyaOverview from "../assets/images/les_terres_de_Verdelya/ferme.webp";
import verdelyaInventory from "../assets/images/les_terres_de_Verdelya/inventory-menu.webp";
import verdelyaLogo from "../assets/images/les_terres_de_Verdelya/Logo.webp";
import verdelyaStats from "../assets/images/les_terres_de_Verdelya/stats-menu.webp";

export const projects: PortfolioProject[] = [
  {
    slug: "brawlcards-origins",
    title: "BrawlCards: Origins",
    subtitle:
      "Auto-battler de cartes inspiré des mécaniques de plateau, de synergies et de familles.",
    category: "personal",
    status: "in-progress",
    stack: ["React", "TypeScript", "Vite"],
    description:
      "Projet personnel ambitieux autour d'un auto-battler de cartes, conçu pour explorer la logique de gameplay, la gestion d'état complexe, le drag and drop et les animations de combat dans une application React.",
    highlights: [
      "Système de cartes et familles",
      "Mode IA",
      "Mode 1v1",
      "Drag and drop",
      "Phases de shop et combat",
      "Animations de combat",
      "Mécaniques avancées de cartes",
    ],
    links: [
      {
        label: "Tester le jeu",
        url: "https://legardloic.github.io/BrawlCardsOrigins",
      },
    ],
    heroImage: brawlIcon,
    caseStudy: {
      role: "Conception, développement front-end et logique gameplay",
      period: "2025 - aujourd'hui",
      type: "Jeu de cartes / auto-battler",
      objective:
        "Créer une expérience de jeu structurée autour de cartes, familles, synergies, phases de shop et combats automatisés.",
      overview:
        "BrawlCards: Origins est un projet personnel de jeu de cartes pensé comme un produit complet. Il met en avant une logique front-end avancée : gestion d'état, enchaînement de phases, interactions drag and drop, simulation de combat, IA et familles de cartes avec mécaniques propres.",
      goals: [
        "Concevoir une boucle de jeu claire entre shop, préparation et combat.",
        "Construire un système de cartes extensible avec familles, effets et synergies.",
        "Prototyper des modes de jeu IA et 1v1 dans une interface React.",
        "Tester des animations de combat lisibles sans perdre la clarté de l'interface.",
      ],
      features: [
        {
          title: "Cartes et familles",
          description:
            "Organisation des cartes par familles avec mécaniques propres, synergies et effets capables d'influencer le combat.",
          tag: "Gameplay",
        },
        {
          title: "Phases de shop",
          description:
            "Structure de progression où le joueur prépare son board, choisit ses cartes et construit une stratégie avant le combat.",
          tag: "Boucle de jeu",
        },
        {
          title: "Combat automatisé",
          description:
            "Simulation de combat avec enchaînement d'actions, résolution d'effets et restitution visuelle des événements importants.",
          tag: "Simulation",
        },
        {
          title: "Drag and drop",
          description:
            "Interactions pour manipuler les cartes et organiser le plateau de manière naturelle côté interface.",
          tag: "Interaction",
        },
        {
          title: "Mode IA",
          description:
            "Base de comportement adverse permettant de tester les mécaniques et d'itérer sur l'équilibrage.",
          tag: "IA",
        },
        {
          title: "Mode 1v1",
          description:
            "Préparation d'une expérience orientée duel, avec une logique de confrontation plus directe entre deux joueurs.",
          tag: "Multijoueur",
        },
      ],
      challenges: [
        {
          title: "Gestion d'état complexe",
          description:
            "Coordonner cartes, board, shop, combat, effets et transitions de phase sans rendre le code fragile.",
          tag: "Architecture",
        },
        {
          title: "Résolution des effets",
          description:
            "Structurer les mécaniques avancées de cartes pour garder un système lisible, testable et extensible.",
          tag: "Gameplay",
        },
        {
          title: "Combat et animations",
          description:
            "Synchroniser logique de combat et feedback visuel pour que les actions restent compréhensibles.",
          tag: "UX",
        },
        {
          title: "Équilibrage des familles",
          description:
            "Prévoir une base assez souple pour ajuster les synergies, puissances et interactions au fil des tests.",
          tag: "Design system gameplay",
        },
      ],
      learnings: [
        "Découper une logique de jeu complexe en états, phases et responsabilités lisibles.",
        "Construire une interface React capable de supporter des interactions riches sans perdre en maintenabilité.",
        "Penser une mécanique comme un produit : lisibilité, feedback, progression et itération.",
        "Préparer les données de jeu pour faciliter l'équilibrage et l'ajout de nouvelles cartes.",
      ],
      roadmap: [
        "Ajouter de vraies captures et une vidéo courte de gameplay.",
        "Stabiliser l'équilibrage des familles et documenter les mécaniques clés.",
        "Renforcer l'IA pour créer des parties plus variées.",
        "Améliorer les animations et les feedbacks de combat.",
      ],
      gallery: [
        {
          title: "Plateau de jeu",
          description: "Vue du plateau et de la phase de shop avec les cartes disponibles.",
          image: brawlPlateauShop,
        },
        {
          title: "Détail d'une carte",
          description: "Focus sur la lecture d'une carte, ses informations et son identité visuelle.",
          image: brawlDetailCard,
        },
        {
          title: "Combat",
          description: "Capture d'une phase de combat automatisé avec feedbacks visuels.",
          image: brawlCombat,
        },
      ],
      showcase: [
        {
          title: "Carte 120",
          description: "Carte issue du prototype BrawlCards: Origins.",
          image: brawlCard120,
        },
        {
          title: "Carte 121",
          description: "Carte issue du prototype BrawlCards: Origins.",
          image: brawlCard121,
        },
        {
          title: "Carte 217",
          description: "Carte issue du prototype BrawlCards: Origins.",
          image: brawlCard217,
        },
        {
          title: "Carte 222",
          description: "Carte issue du prototype BrawlCards: Origins.",
          image: brawlCard222,
        },
        {
          title: "Carte 29",
          description: "Carte issue du prototype BrawlCards: Origins.",
          image: brawlCard29,
        },
        {
          title: "Carte 33",
          description: "Carte issue du prototype BrawlCards: Origins.",
          image: brawlCard33,
        },
        {
          title: "Carte 72",
          description: "Carte issue du prototype BrawlCards: Origins.",
          image: brawlCard72,
        },
        {
          title: "Carte 82",
          description: "Carte issue du prototype BrawlCards: Origins.",
          image: brawlCard82,
        },
      ],
    },
  },
  {
    slug: "les-terres-de-verdelya",
    title: "Les Terres de Verdelya",
    subtitle:
      "Jeu 2D pixel-art mêlant gestion de ferme, exploration et combats au tour par tour.",
    category: "personal",
    status: "in-progress",
    stack: [
      "Unity 6",
      "C#",
      "URP 2D",
      "Tiled Map Editor",
      "Aseprite",
      "SuperTiled2Unity",
      "TextMeshPro",
      "ScriptableObjects",
    ],
    description:
      "Les Terres de Verdelya est un projet de jeu 2D en développement actif, conçu comme une boucle complète entre production agricole, exploration, progression RPG, équipement, crafting et combats au tour par tour.",
    highlights: [
      "Gameplay loop complet et jouable",
      "Ferme, cultures, outils et saisons",
      "Combat tour par tour avec initiative",
      "Inventaire, équipement et crafting",
      "PNJ, dialogues, shops et quêtes",
      "Architecture Unity modulaire",
    ],
    links: [],
    heroImage: verdelyaLogo,
    coverImage: verdelyaOverview,
    caseStudy: {
      role: "Conception, développement Unity/C#, gameplay, UI et architecture",
      period: "Avril 2026 - aujourd'hui",
      type: "Jeu 2D farming / RPG au tour par tour",
      objective:
        "Construire une expérience où la ferme soutient l'exploration et où la progression RPG transforme progressivement le village, l'économie et les possibilités du joueur.",
      overview:
        "Les Terres de Verdelya fusionne une gestion de ferme inspirée des jeux cozy avec une structure RPG plus classique : exploration, inventaire, équipement, progression de personnage, combats au tour par tour et narration par paliers. Le projet est construit dans Unity 6 avec une architecture modulaire C# et une logique data-driven basée sur les ScriptableObjects.",
      goals: [
        "Créer une boucle jouable entre cultiver, vendre, crafter, explorer, combattre, progresser et recommencer plus fort.",
        "Relier la ferme, le village et la tour pour que chaque système ait un impact concret sur les autres.",
        "Construire une base technique maintenable capable d'accueillir inventaire, équipement, dialogues, sauvegarde, combat et progression.",
        "Préparer une expérience claire pour un public casual/midcore, avec une lecture simple mais des systèmes assez riches pour durer.",
      ],
      features: [
        {
          title: "Système de ferme",
          description:
            "Cultures, graines, arrosage quotidien, outils, arbres plantables et persistance des parcelles entre les sessions et les changements de scène.",
          tag: "Farming",
        },
        {
          title: "Combat tour par tour",
          description:
            "Combats inspirés des RPG japonais avec initiative basée sur la vitesse, actions, compétences, objets, fuite, IA ennemie, loot, XP, or et points de compétence.",
          tag: "RPG",
        },
        {
          title: "Progression par équipement",
          description:
            "Système inspiré de Final Fantasy IX : les équipements donnent accès à des compétences qui peuvent être apprises définitivement via des points CP.",
          tag: "Progression",
        },
        {
          title: "Monde interconnecté",
          description:
            "Cinq scènes jouables structurent déjà l'expérience : ferme, maison du joueur, village, forêt et scène de combat, avec transitions, téléporteurs et ressources persistantes.",
          tag: "Exploration",
        },
        {
          title: "Jour, saisons et météo",
          description:
            "Cycle de 6h à 22h, saisons de 28 jours, météo, sommeil et résumé de fin de journée pour donner du rythme à la boucle de jeu.",
          tag: "Simulation",
        },
        {
          title: "Inventaire, équipement et coffres",
          description:
            "Inventaire principal, inventaire d'équipement, 10 slots équipables, coffres plaçables, drag and drop global et règles de transfert entre zones.",
          tag: "Systèmes",
        },
        {
          title: "PNJ, dialogues et économie",
          description:
            "PNJ avec dialogues contextuels, effets de dialogue, boutique fonctionnelle, vente de récoltes, achat de graines et déblocage progressif de recettes.",
          tag: "Monde vivant",
        },
        {
          title: "Interface complète",
          description:
            "HUD, toolbar, menu pause à onglets, panels d'inventaire, équipement, stats, crafting, sauvegarde, tooltips et feedbacks visuels.",
          tag: "UI",
        },
      ],
      challenges: [
        {
          title: "Architecture modulaire Unity",
          description:
            "Organiser plus de cent scripts C# en systèmes séparés tout en gardant une communication claire via Event Channels, singletons persistants et ScriptableObjects.",
          tag: "Architecture",
        },
        {
          title: "Persistance multi-systèmes",
          description:
            "Sauvegarder l'état des cultures, ressources, coffres, inventaires, équipements et scènes sans coupler la donnée durable au rendu Unity.",
          tag: "Sauvegarde",
        },
        {
          title: "Double boucle ferme / RPG",
          description:
            "Équilibrer deux piliers forts : la ferme doit aider le combat, et le combat doit débloquer des améliorations visibles pour le village et la ferme.",
          tag: "Game design",
        },
        {
          title: "Combat lisible",
          description:
            "Synchroniser initiative, actions, animations, VFX, popups, loot et retour au monde pour que le combat reste compréhensible et fluide.",
          tag: "Gameplay",
        },
        {
          title: "Drag and drop universel",
          description:
            "Gérer les règles de compatibilité entre inventaire, équipement, slots équipés, coffres et toolbar avec des retours visuels fiables.",
          tag: "Interaction",
        },
        {
          title: "Workflow data-driven",
          description:
            "Utiliser ScriptableObjects et scripts d'éditeur pour automatiser la configuration des assets, prefabs, items, recettes, dialogues et ennemis.",
          tag: "Outils",
        },
      ],
      learnings: [
        "Structurer un projet Unity ambitieux en systèmes isolés, capables de communiquer sans devenir interdépendants.",
        "Penser un jeu comme un produit complet : gameplay loop, UI, feedbacks, progression, contenu, sauvegarde et workflow de production.",
        "Construire des systèmes data-driven pour accélérer l'ajout de contenu et réduire le setup manuel.",
        "Travailler la lisibilité d'interfaces complexes comme l'inventaire, l'équipement, les shops, le crafting et le combat.",
        "Relier narration, progression et game design pour que les victoires du joueur aient des conséquences visibles sur le monde.",
      ],
      roadmap: [
        "Ajouter des captures réelles de la ferme, du combat, de l'inventaire et du village dans cette page portfolio.",
        "Polisher les 10 premiers étages de la tour et le premier boss majeur du MVP.",
        "Renforcer les quêtes, les flags narratifs et les transformations visibles du village.",
        "Équilibrer l'économie entre récoltes, crafting, équipement, loot et progression de personnage.",
        "Préparer une présentation publique plus complète du projet lorsque le prototype sera prêt à être partagé.",
      ],
      gallery: [
        {
          title: "Logo officiel",
          description:
            "Identité visuelle définitive du projet, orientée fantasy, nature et aventure.",
          image: verdelyaLogo,
          fit: "contain",
        },
        {
          title: "Boucle ferme",
          description:
            "Vue de la ferme avec cultures, HUD, outils, cycle de journée et espace de progression du joueur.",
          image: verdelyaOverview,
        },
        {
          title: "Combat tour par tour",
          description:
            "Interface de combat avec ordre de tour, ennemi, personnage, journal d'action et feedback de dégâts.",
          image: verdelyaCombat,
        },
        {
          title: "Inventaire et équipement",
          description:
            "Menu inventaire avec slots, filtres, équipement visible, toolbar et informations de personnage.",
          image: verdelyaInventory,
        },
        {
          title: "Progression du personnage",
          description:
            "Écran de statistiques montrant attributs, dégâts, résistances et base de progression RPG.",
          image: verdelyaStats,
        },
        {
          title: "Exploration top-down",
          description:
            "Zone extérieure en pixel-art avec cascade, reliefs, ressources récoltables et HUD permanent.",
          image: verdelyaCascade,
        },
      ],
    },
  },
];
