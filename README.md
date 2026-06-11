# Portfolio

Portfolio web personnel moderne, statique et compatible GitHub Pages. Le site présente un profil web créatif, un parcours professionnel, des projets personnels, des projets d'étude, une page CV et une page hobbies centrée sur le piano.

## Stack

- React
- TypeScript
- Vite
- React Router avec `HashRouter`
- CSS natif avec design tokens
- GitHub Pages via GitHub Actions

## Fonctionnalités

- Accueil premium avec hero, carrousel, projets mis en avant, chiffres clés et CTA.
- Pages case study pour `BrawlCards: Origins` et `Les Terres de Verdelya`.
- Page `Projets d'étude` avec SoundTrackify et ZombieLand.
- Page CV professionnelle et lisible.
- Page Hobbies avec section piano et vidéos YouTube configurables.
- Page 404 gérée par React Router.
- Métadonnées SEO, Open Graph, favicon SVG et image de partage.

## Structure

```txt
src/
  components/     Composants layout, UI, accueil, projets, CV, hobbies
  data/           Contenus éditables du portfolio
  pages/          Pages principales
  routes/         Routage HashRouter
  styles/         Design tokens et styles globaux
  types/          Types TypeScript partagés
  utils/          Helpers d'affichage
public/
  favicon.svg
  og-image.png
.github/workflows/
  deploy.yml
```

## Installation

```bash
npm install
```

## Lancement local

```bash
npm run dev
```

Le site utilise `base: "/Portfolio/"` dans `vite.config.ts`, car le dépôt GitHub Pages cible est `LegardLoic/Portfolio`.

## Vérifications

```bash
npm run lint
npm run build
npm run preview
```

`npm run preview` sert le build de production localement. Vite affiche l'URL et le port à utiliser.

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy.yml` :

1. se déclenche sur push vers `main` ou manuellement ;
2. installe Node 22 ;
3. lance `npm ci` ;
4. exécute `npm run build` ;
5. publie `dist` avec GitHub Pages.

URL cible :

```txt
https://legardloic.github.io/Portfolio/
```

Dans GitHub, vérifier que Pages utilise bien la source `GitHub Actions`.

## Routage

Le site utilise `HashRouter` pour rester fiable sur GitHub Pages. Les URLs internes prennent donc la forme :

```txt
https://legardloic.github.io/Portfolio/#/cv
https://legardloic.github.io/Portfolio/#/projects/brawlcards-origins
```

Ce choix évite les erreurs 404 lors d'un rafraîchissement direct sur une route interne.

## Modifier les contenus

Les contenus sont centralisés dans `src/data` :

- `profile.ts` : nom, rôle, résumé, années d'expérience, lien CV PDF.
- `projects.ts` : projets personnels et case studies.
- `studyProjects.ts` : projets d'étude.
- `cv.ts` : données de la page CV.
- `hobbies.ts` : piano, vidéos et contenus créatifs.
- `socials.ts` : liens sociaux.
- `navigation.ts` : navigation principale.
- `home.ts` : contenus de l'accueil et du carrousel.

Les informations manquantes peuvent rester marquées par `TODO` dans les données. L'interface les affiche avec des libellés propres comme `Information à compléter`, `Lien à ajouter`, `Capture à venir` ou `Vidéo à ajouter`.

## Informations à compléter

- Captures restantes pour compléter les galeries de Les Terres de Verdelya.
- Sélection YouTube à faire évoluer si d'autres vidéos doivent être mises en avant.
- Stratégie éditoriale Zeph Studio à affiner entre Patreon, TikTok, X et YouTube Dev.
- Image Open Graph finale à faire évoluer si une direction graphique plus précise est fournie.
- Dates de certains projets, captures et contenus détaillés encore à fournir.

## Prochaines améliorations possibles

- Ajouter de vraies captures projet.
- Faire évoluer la sélection de vidéos piano si besoin.
- Faire évoluer l'image Open Graph finale si besoin.
- Ajouter un fichier CV PDF.
- Faire une dernière revue responsive sur appareils réels.
