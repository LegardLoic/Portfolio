# docs/01_TECHNICAL_ARCHITECTURE.md — Architecture technique

## Stack cible

* React
* TypeScript
* Vite
* React Router
* CSS moderne ou solution légère à déterminer
* GitHub Pages pour l’hébergement

Le site est une Single Page Application statique.

## Stratégie GitHub Pages

Le site doit fonctionner sur GitHub Pages.

Deux cas possibles :

### Cas A — dépôt utilisateur ou organisation

Exemple conceptuel :

```txt
username.github.io
```

Dans ce cas, le site est servi à la racine.

La configuration Vite peut utiliser :

```ts
base: "/"
```

### Cas B — dépôt projet

Exemple conceptuel :

```txt
username.github.io/nom-du-repo/
```

Dans ce cas, la configuration Vite doit utiliser :

```ts
base: "/nom-du-repo/"
```

Codex doit détecter ou demander le nom du repo si nécessaire.

Si le nom du repo n’est pas connu, mettre un TODO clair dans `vite.config.ts`.

## Routage

Le site doit gérer plusieurs pages.

Deux stratégies possibles :

### Option recommandée pour simplicité GitHub Pages

Utiliser `HashRouter`.

Avantage :

* très fiable sur GitHub Pages ;
* pas besoin de configuration spéciale pour les refresh de pages ;
* réduit les problèmes de 404.

Inconvénient :

* URL avec `#/`.

### Option plus propre visuellement

Utiliser `BrowserRouter` avec :

* `basename` adapté au repo ;
* fallback `404.html` si nécessaire.

Avantage :

* URLs plus jolies.

Inconvénient :

* demande plus d’attention au déploiement.

Pour ce projet, préférer `HashRouter` au départ, sauf si l’utilisateur demande explicitement des URLs sans hash.

## Structure recommandée

```txt
src/
  assets/
    images/
    icons/
  components/
    layout/
      Header.tsx
      Footer.tsx
      PageShell.tsx
    ui/
      Button.tsx
      Card.tsx
      Section.tsx
      Badge.tsx
      Carousel.tsx
      ProjectCard.tsx
      VideoCard.tsx
    home/
      Hero.tsx
      HomeCarousel.tsx
      FeaturedProjects.tsx
      ProfileSummary.tsx
    cv/
      Timeline.tsx
      SkillGroup.tsx
    projects/
      ProjectHero.tsx
      ProjectDetails.tsx
      FeatureList.tsx
  data/
    profile.ts
    projects.ts
    studyProjects.ts
    hobbies.ts
    socials.ts
    navigation.ts
  pages/
    HomePage.tsx
    ProjectPage.tsx
    StudyProjectsPage.tsx
    CvPage.tsx
    HobbiesPage.tsx
    NotFoundPage.tsx
  routes/
    AppRouter.tsx
  styles/
    globals.css
    tokens.css
  App.tsx
  main.tsx
```

## Données

Les contenus doivent être centralisés dans `src/data`.

Exemple :

```ts
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: "in-progress" | "paused" | "completed" | "prototype";
  category: "personal" | "study";
  stack: string[];
  highlights: string[];
  links?: {
    label: string;
    url: string;
  }[];
  coverImage?: string;
};
```

Objectif : modifier les textes et projets sans toucher aux composants.

## Pages dynamiques

Les pages BrawlCards: Origins et Les Terres de Verdelya peuvent utiliser un seul composant générique `ProjectPage`.

La route peut être :

```txt
/projects/:slug
```

Les slugs initiaux :

```txt
brawlcards-origins
les-terres-de-verdelya
```

## Composants principaux

### Header

Doit contenir :

* logo ou nom ;
* navigation desktop ;
* menu mobile ;
* bouton CV ou contact ;
* état actif de la page.

### Footer

Doit contenir :

* résumé court ;
* liens sociaux ;
* copyright ;
* liens internes.

### Carousel

Doit être :

* accessible au clavier ;
* utilisable au clic ;
* utilisable avec boutons précédent/suivant ;
* doté d’indicateurs ;
* capable d’avancer automatiquement, mais avec pause au survol ;
* désactivable si l’utilisateur préfère moins de mouvement.

### ProjectCard

Doit afficher :

* titre ;
* catégorie ;
* description courte ;
* stack ;
* statut ;
* bouton “Voir le projet”.

### VideoCard

Doit afficher :

* titre vidéo ;
* miniature ou embed ;
* lien YouTube ;
* description courte.

## Design tokens

Créer des variables CSS :

```css
:root {
  --color-bg: #080a12;
  --color-surface: rgba(255, 255, 255, 0.06);
  --color-surface-strong: rgba(255, 255, 255, 0.12);
  --color-text: #f8fafc;
  --color-muted: #a1a8b8;
  --color-primary: #7c3aed;
  --color-secondary: #06b6d4;
  --color-accent: #f97316;

  --radius-sm: 0.75rem;
  --radius-md: 1.25rem;
  --radius-lg: 2rem;
  --radius-xl: 3rem;

  --shadow-soft: 0 24px 80px rgba(0, 0, 0, 0.35);
  --max-width: 1180px;
}
```

La palette peut évoluer, mais cette base donne un style moderne immédiatement.

## Direction CSS

Préférer :

* variables CSS ;
* `clamp()` pour tailles fluides ;
* grid/flex modernes ;
* effets glassmorphism légers ;
* gradients subtils ;
* animations courtes ;
* pas de surcharge visuelle.

Éviter :

* trop de couleurs saturées ;
* animations permanentes trop agressives ;
* effets illisibles ;
* contrastes faibles ;
* dépendances CSS inutiles.

## Accessibilité

Obligatoire :

* navigation clavier ;
* labels ARIA quand nécessaire ;
* contrastes suffisants ;
* textes alternatifs pour images ;
* structure sémantique ;
* titres hiérarchisés ;
* respect de `prefers-reduced-motion`.

## Performance

Objectifs :

* site rapide ;
* images optimisées ;
* lazy loading des médias ;
* éviter les dépendances lourdes ;
* composants simples ;
* build final léger.

## Scripts recommandés

Dans `package.json`, prévoir :

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

## GitHub Actions

Prévoir un workflow de build et déploiement dans :

```txt
.github/workflows/deploy.yml
```

Le workflow doit :

1. installer les dépendances ;
2. lancer le build ;
3. publier le dossier `dist` sur GitHub Pages.

Ne pas créer le workflow si le projet utilise déjà une stratégie de déploiement existante sans vérifier.
