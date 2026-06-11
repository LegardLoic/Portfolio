import soundtrackifyBackOffice from "../assets/images/soundtrackify/BackOffice.webp";
import soundtrackifyBanner from "../assets/images/soundtrackify/banner.webp";
import soundtrackifyFrontOffice from "../assets/images/soundtrackify/FrontOffice.webp";
import zombielandHome from "../assets/images/zombieland/home.webp";
import zombielandLogo from "../assets/images/zombieland/logo.svg";
import type { PortfolioProject } from "../types/content";

export const studyProjects: PortfolioProject[] = [
  {
    slug: "soundtrackify",
    title: "SoundTrackify",
    subtitle:
      "Application Symfony dédiée aux musiques de jeux vidéo, aux playlists et à l'exploration d'OST.",
    category: "study",
    status: "completed",
    stack: [
      "Symfony 5.4",
      "PHP",
      "Doctrine ORM",
      "Twig",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "KnpPaginator",
    ],
    description:
      "SoundTrackify est une application web full-stack construite avec Symfony autour des bandes originales de jeux vidéo. Le projet associe catalogue, lecteur audio, playlists utilisateur, modélisation relationnelle et back-office d'administration.",
    highlights: [
      "Projet d'apothéose DWWM",
      "Catalogue de plus de 4 700 musiques",
      "Lecteur audio JavaScript",
      "Playlists utilisateur",
      "Back-office Symfony",
      "Modèle Doctrine riche",
    ],
    coverImage: soundtrackifyBanner,
    coverFit: "contain",
    links: [],
    caseStudy: {
      role: "Développement full-stack Symfony en projet d'équipe",
      period: "2023",
      type: "Application web full-stack Symfony",
      objective:
        "Créer une plateforme de découverte d'OST de jeux vidéo avec catalogue, écoute, playlists, espace utilisateur et interface d'administration.",
      overview:
        "SoundTrackify est un projet d'étude complet réalisé dans le cadre de la formation Développeur Web et Web Mobile. L'application structure un domaine riche autour des jeux vidéo, albums, musiques, plateformes, playlists, utilisateurs et avatars. Elle montre une capacité à modéliser des données relationnelles, construire des parcours front-office, sécuriser des espaces utilisateur et maintenir un back-office exploitable.",
      goals: [
        "Modéliser un domaine musical et vidéoludique avec plusieurs entités fortement liées.",
        "Construire une application Symfony cohérente entre routes, contrôleurs, formulaires, vues Twig et repositories Doctrine.",
        "Proposer une navigation claire entre jeux, albums, musiques, playlists et profils utilisateur.",
        "Créer un back-office permettant d'administrer les contenus principaux avec formulaires, pagination et contrôles d'accès.",
        "Intégrer un lecteur audio JavaScript et des interactions utiles sans transformer le projet en application front-end lourde.",
      ],
      features: [
        {
          title: "Catalogue OST",
          description:
            "Consultation des jeux vidéo, albums et musiques avec pages de liste, pages de détail, recherche et pagination.",
          tag: "Front-office",
        },
        {
          title: "Lecteur audio",
          description:
            "Lecteur JavaScript dédié aux musiques, avec navigation entre morceaux et comportements adaptés aux playlists.",
          tag: "Interaction",
        },
        {
          title: "Playlists utilisateur",
          description:
            "Création et gestion de playlists pour organiser les musiques favorites et composer des parcours d'écoute.",
          tag: "Produit",
        },
        {
          title: "Espace utilisateur",
          description:
            "Inscription, connexion, profil, changement de mot de passe et contenus personnels reliés au compte.",
          tag: "Symfony Security",
        },
        {
          title: "Back-office complet",
          description:
            "Administration des jeux, albums, musiques, plateformes, utilisateurs, playlists et avatars avec CRUD, formulaires et pagination.",
          tag: "Admin",
        },
        {
          title: "Commande console",
          description:
            "Commande Symfony interactive pour créer un utilisateur avec validation, rôles, hash du mot de passe et persistance.",
          tag: "CLI",
        },
      ],
      challenges: [
        {
          title: "Modélisation relationnelle",
          description:
            "Structurer les relations entre jeux, albums, musiques, plateformes, playlists, utilisateurs et avatars tout en gardant des pages compréhensibles.",
          tag: "Doctrine",
        },
        {
          title: "Sécurité et rôles",
          description:
            "Mettre en place l'authentification, la hiérarchie de rôles, les accès admin et les protections CSRF sur les actions sensibles.",
          tag: "Security",
        },
        {
          title: "Navigation dans un gros catalogue",
          description:
            "Rendre consultable un jeu de données conséquent avec recherche, pagination, pages liées et slugs lisibles.",
          tag: "UX",
        },
        {
          title: "Back-office maintenable",
          description:
            "Créer une administration suffisamment structurée pour gérer les contenus sans dupliquer excessivement les formulaires et templates.",
          tag: "Architecture",
        },
        {
          title: "Lecteur audio sur mesure",
          description:
            "Ajouter une couche JavaScript utile dans une application Twig afin de rendre l'écoute plus fluide et interactive.",
          tag: "JavaScript",
        },
      ],
      learnings: [
        "Construire une application Symfony complète avec séparation claire entre front-office et back-office.",
        "Modéliser un domaine relationnel riche avec Doctrine ORM, migrations, repositories et contraintes de validation.",
        "Relier sécurité, expérience utilisateur et administration sans perdre la cohérence du projet.",
        "Mesurer les limites d'un projet d'étude : tests encore limités, reset password à renforcer et stack à moderniser pour une production durable.",
      ],
      roadmap: [
        "Moderniser le projet vers une version récente de Symfony et PHP.",
        "Renforcer les tests fonctionnels sur les parcours critiques : compte, playlists, back-office et lecteur audio.",
        "Remplacer le reset password par un flux complet basé sur token et email.",
        "Durcir les règles de propriété sur les contenus utilisateur.",
        "Documenter visuellement le modèle de données et les principales relations Doctrine.",
      ],
      gallery: [
        {
          title: "Identité SoundTrackify",
          description:
            "Bannière du projet, pensée comme une porte d'entrée vers une plateforme musicale dédiée aux OST de jeux vidéo.",
          image: soundtrackifyBanner,
          fit: "contain",
        },
        {
          title: "Front-office",
          description:
            "Accueil public avec recherche, mise en avant de contenus et accès aux jeux, albums et musiques.",
          image: soundtrackifyFrontOffice,
          fit: "contain",
        },
        {
          title: "Back-office",
          description:
            "Interface d'administration Symfony pour gérer les contenus et suivre les dernières entrées.",
          image: soundtrackifyBackOffice,
          fit: "contain",
        },
      ],
      entities: ["Videogame", "Album", "Music", "Playlist", "User", "Platform", "Avatar"],
      skills: [
        "Symfony 5.4",
        "PHP",
        "Twig",
        "Doctrine ORM",
        "MySQL",
        "Symfony Security",
        "JavaScript",
        "Bootstrap",
        "KnpPaginator",
        "Back-office",
        "Modélisation relationnelle",
        "CRUD",
      ],
    },
  },
  {
    slug: "zombieland",
    title: "ZombieLand",
    subtitle:
      "Plateforme full-stack de réservation pour un parc d'attractions post-apocalyptique fictif.",
    category: "study",
    status: "completed",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Docker",
    ],
    description:
      "ZombieLand est un projet CDA complet composé d'une API Node/Express et d'une SPA React. Il couvre la vitrine publique, le catalogue d'activités, les comptes clients, la réservation, le paiement Stripe, les billets QR code, les factures PDF et un back-office d'administration.",
    highlights: [
      "Architecture API + SPA",
      "Réservation et paiement Stripe",
      "Billets QR code et PDF",
      "Back-office administrateur",
      "Auth sécurisée avec cookies HTTP-only",
      "Docker, Swagger, tests et CI",
    ],
    heroImage: zombielandLogo,
    coverImage: zombielandHome,
    links: [],
    caseStudy: {
      role: "Conception et développement full-stack en contexte CDA",
      period: "2026",
      type: "Application full-stack React / Node.js",
      objective:
        "Concevoir une plateforme complète pour présenter un parc d'attractions fictif, gérer des activités, vendre des billets et administrer les contenus.",
      overview:
        "ZombieLand est une application web full-stack pensée comme un produit complet. Le projet sépare une API REST TypeScript avec Express, Prisma et PostgreSQL d'une interface React/Vite. Il met en pratique des sujets proches d'un contexte professionnel : authentification, rôles, catalogue, réservation, paiement Stripe, emails, QR code, factures PDF, documentation Swagger, Docker, tests et workflow CI.",
      goals: [
        "Structurer une API REST sécurisée et documentée autour d'un domaine de réservation.",
        "Créer une SPA React capable de gérer vitrine publique, session utilisateur, panier, paiement et espace client.",
        "Mettre en place un back-office pour administrer activités, catégories, produits, utilisateurs et commandes.",
        "Relier les flux de réservation à Stripe Checkout, aux webhooks et à la génération de billets.",
        "Industrialiser le projet avec Docker, scripts, tests et intégration continue.",
      ],
      features: [
        {
          title: "Vitrine et catalogue",
          description:
            "Accueil public, navigation, activités, filtres, recherche, pagination, détail d'activité, avis et contenus légaux.",
          tag: "Front-office",
        },
        {
          title: "Comptes clients",
          description:
            "Inscription, confirmation email, connexion, refresh token, réinitialisation de mot de passe, profil et historique.",
          tag: "Auth",
        },
        {
          title: "Réservation",
          description:
            "Sélection de produits, quantités, date, panier local, commande pending, calcul du total et parcours de confirmation.",
          tag: "Billetterie",
        },
        {
          title: "Paiement Stripe",
          description:
            "Création de Checkout Session, webhook signé, idempotence et mise à jour de l'état des commandes.",
          tag: "Paiement",
        },
        {
          title: "Billets et facture",
          description:
            "QR code de billet et génération de facture PDF côté interface pour rendre le parcours plus concret.",
          tag: "Post-achat",
        },
        {
          title: "Back-office",
          description:
            "Administration protégée pour gérer activités, catégories, produits, utilisateurs et commandes avec listes, filtres et formulaires.",
          tag: "Admin",
        },
      ],
      challenges: [
        {
          title: "Séparation API / SPA",
          description:
            "Maintenir une frontière claire entre serveur Express, validation Zod, accès Prisma et interface React avec état global.",
          tag: "Architecture",
        },
        {
          title: "Authentification robuste",
          description:
            "Gérer access token, refresh token en cookies HTTP-only, rotation, activation email et réinitialisation sécurisée.",
          tag: "Security",
        },
        {
          title: "Paiement et webhooks",
          description:
            "Orchestrer les commandes, Stripe Checkout, la vérification de signature et les transitions d'état sans double traitement.",
          tag: "Stripe",
        },
        {
          title: "Back-office métier",
          description:
            "Créer des écrans administrateur utiles avec recherche, tri, pagination, statuts, rôles et actions de gestion.",
          tag: "Admin",
        },
        {
          title: "Qualité projet",
          description:
            "Documenter l'API, conteneuriser l'environnement, ajouter des tests et vérifier le projet via CI GitHub Actions.",
          tag: "Industrialisation",
        },
      ],
      learnings: [
        "Concevoir une application complète en séparant clairement API, base de données, front-office et back-office.",
        "Mettre en place une authentification plus réaliste avec rôles, cookies sécurisés, tokens et flux email.",
        "Comprendre les contraintes d'un parcours de réservation : panier, commande, paiement, statut, billet et facture.",
        "Structurer un projet TypeScript moderne avec validation Zod, Prisma, Docker, documentation API, tests et CI.",
      ],
      roadmap: [
        "Ajouter un vrai tableau de bord admin avec indicateurs métier.",
        "Remplacer les URLs d'images par un flux d'upload et de gestion média.",
        "Normaliser davantage les réponses API et les erreurs côté front.",
        "Renforcer les tests front-end sur les parcours critiques : auth, réservation, paiement et administration.",
        "Finaliser les derniers nettoyages : logs de debug, page 404 dédiée, audit accessibilité et rôles plus fins.",
      ],
      gallery: [
        {
          title: "Identité ZombieLand",
          description:
            "Logo du projet, utilisé comme signature visuelle d'un parc d'attractions post-apocalyptique fictif.",
          image: zombielandLogo,
          fit: "contain",
        },
        {
          title: "Vitrine publique",
          description:
            "Page d'accueil de la SPA React avec mise en scène du parc et accès aux activités.",
          image: zombielandHome,
        },
      ],
      entities: [
        "User",
        "Role",
        "Token",
        "Activity",
        "Category",
        "UserRateActivity",
        "Product",
        "Order",
        "OrderLine",
      ],
      skills: [
        "React 19",
        "TypeScript",
        "Vite",
        "Redux Toolkit",
        "Node.js 22",
        "Express 5",
        "Prisma 6",
        "PostgreSQL",
        "Zod",
        "JWT",
        "Stripe",
        "Docker",
        "Swagger",
        "Tests",
        "CI",
      ],
    },
  },
];
