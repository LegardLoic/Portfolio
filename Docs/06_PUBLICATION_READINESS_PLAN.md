# Plan de publication du portfolio

## Objectif

Rendre le portfolio publiable sur GitHub Pages avec un niveau professionnel : contenu crédible, pages cohérentes, responsive propre, accessibilité correcte, SEO de base, performances acceptables et déploiement fiable.

Le site est déjà fonctionnel et construit sur une base saine :

- React + TypeScript + Vite ;
- `HashRouter`, adapté à GitHub Pages ;
- `base: "/Portfolio/"` dans `vite.config.ts` ;
- workflow GitHub Actions présent dans `.github/workflows/deploy.yml` ;
- contenus centralisés dans `src/data` ;
- pages principales existantes ;
- README déjà structuré.

Ce document liste ce qu'il reste à faire avant publication publique.

## Priorité 1 - Bloquants de contenu public

Ces points doivent être réglés avant de partager largement le lien.

### 1. Nettoyer les placeholders visibles

Fichiers concernés :

- `src/data/socials.ts`
- `src/data/hobbies.ts`
- `src/data/studyProjects.ts`
- `src/data/cv.ts`
- `src/data/projects.ts`

Actions :

- [x] Décider quoi faire du lien `Soutien` dans `src/data/socials.ts`.
  - Patreon est renseigné comme plateforme de soutien pour Zeph Studio.
  - TikTok, X et YouTube Dev sont ajoutés pour la communication autour du projet.

- [x] Remplacer les vidéos piano placeholders dans `src/data/hobbies.ts`.
  - Trois vidéos YouTube renseignées avec titre, description, URL et miniature.

- [x] Compléter ou masquer `TODO - Autre centre d'intérêt` dans `src/data/hobbies.ts`.
  - Le troisième bloc est remplacé par un centre d'intérêt cohérent autour des musiques de jeux et univers narratifs.

- [x] Compléter ZombieLand dans `src/data/studyProjects.ts`.
  - Stack, contexte, objectifs, fonctionnalités, apprentissages et captures intégrés à partir de la documentation fournie.

- [x] Compléter la stack ZombieLand dans `src/data/cv.ts`.

- [x] Compléter SoundTrackify.
  - Période, contexte, fonctionnalités et captures front/back-office intégrés.
  - Il reste possible d'ajouter un lien GitHub ou une note claire si le projet devient public.

- [x] Remplacer le message `Lien public à ajouter si disponible` sur Les Terres de Verdelya.
  - Le projet n'a pas encore de version compilée publique.
  - Le message affiché est maintenant une formulation assumée : `Prototype en développement, partage public à venir`.

## Priorité 2 - Polish visuel et responsive

Le design est en place, mais une passe de revue réelle reste nécessaire après les dernières intégrations d'images.

- [x] Passe CSS responsive appliquée sur l'accueil et les pages internes.
- [ ] Revue manuelle finale à faire dans le navigateur sur les viewports listés ci-dessous.

### Pages à vérifier

- [ ] Accueil.
- [ ] BrawlCards: Origins.
- [ ] Les Terres de Verdelya.
- [ ] Projets d'étude.
- [ ] CV.
- [ ] Hobbies.
- [ ] 404.
- [ ] Footer.
- [ ] Header mobile.

### Viewports à tester

- [ ] Mobile étroit : 360 x 740.
- [ ] Mobile courant : 390 x 844.
- [ ] Tablette : 768 x 1024.
- [ ] Desktop : 1366 x 768.
- [ ] Desktop large : 1920 x 1080.

### Points à surveiller

- [ ] Aucun texte ne doit se superposer.
- [ ] Les badges et tags doivent avoir assez d'espace vertical.
- [ ] Les cartes d'une même grille doivent paraître alignées.
- [ ] Les boutons ne doivent pas se coller ou sortir des cartes.
- [ ] Les images projet doivent être cadrées proprement.
- [ ] Le carrousel d'accueil doit garder une hauteur stable.
- [ ] Les pages longues doivent garder un rythme visuel, sans zones trop vides.
- [ ] Le footer doit rester propre avec les réseaux Zeph Studio ajoutés.

## Priorité 3 - Performance et poids des images

Le build fonctionne et les assets BrawlCards ont été optimisés.

Constat actuel :

- Les captures BrawlCards utilisées par le site pointent vers des versions WebP.
- Les cartes BrawlCards utilisées dans le carousel de cartes pointent vers des versions WebP.
- Les anciens fichiers PNG/JPG BrawlCards devenus inutiles ont été supprimés.
- Les images du projet Les Terres de Verdelya sont aussi en WebP.

Actions :

- [x] Convertir les captures BrawlCards en WebP.
- [x] Compresser les cartes BrawlCards ou produire des versions WebP dédiées au portfolio.
- [x] Supprimer les anciens fichiers PNG/JPG BrawlCards inutiles.
- [ ] Garder une taille d'affichage adaptée.
- [ ] Vérifier que les images de galerie utilisent bien `loading="lazy"`.
- [x] Éviter d'importer des images non affichées.
- [ ] Refaire un `npm run build` et comparer les tailles dans `dist/assets`.

Objectifs indicatifs :

- Images de galerie : idéalement moins de 300 à 450 ko chacune.
- Cartes animées/défilantes : idéalement moins de 150 à 250 ko chacune.
- Bundle JS : rester sous un poids raisonnable, actuellement acceptable.

## Priorité 4 - SEO et partage social

La base SEO est présente dans `index.html`, mais il reste des finitions.

Actions :

- [x] Créer une image Open Graph finale en PNG.
  - Les balises pointent maintenant vers `public/og-image.png`.
  - Le type Open Graph est `image/png`.

- [x] Mettre à jour `index.html` pour pointer vers l'image PNG finale.

- [ ] Vérifier le titre SEO.
  - Titre actuel orienté `Expert JavaScript & Technical Leader`.
  - Confirmer si c'est le positionnement final.

- [ ] Vérifier la description SEO.
  - Elle est correcte, mais peut être ajustée après choix final du positionnement.

- [ ] Tester un partage LinkedIn après publication.

## Priorité 5 - Accessibilité

La structure est déjà correcte : skip link, `main`, navigation, boutons et liens externes sécurisés. Il faut faire une passe de validation.

Actions :

- [ ] Tester toute la navigation au clavier.
- [ ] Vérifier que le menu mobile est utilisable au clavier.
- [ ] Vérifier que le carrousel est utilisable au clavier.
- [ ] Vérifier le focus visible sur tous les liens et boutons.
- [ ] Tester `prefers-reduced-motion`.
- [ ] Vérifier qu'il n'y a qu'un `h1` principal par page.
- [ ] Vérifier les contrastes sur badges, textes gris et boutons secondaires.
- [ ] Vérifier les placeholders image avec `role="img"` et `aria-label`.
- [ ] Lancer un audit Lighthouse ou axe sur les pages principales.

## Priorité 6 - Déploiement GitHub Pages

Le workflow existe déjà.

Actions :

- [x] Vérifier que la branche principale du dépôt est bien `main`.
- [x] Vérifier dans GitHub que Pages utilise la source `GitHub Actions`.
- [ ] Pousser sur `main`.
- [ ] Vérifier le run GitHub Actions.
- [ ] Ouvrir `https://legardloic.github.io/Portfolio/`.
- [ ] Tester les routes HashRouter :
  - `/#/`
  - `/#/projects/brawlcards-origins`
  - `/#/projects/les-terres-de-verdelya`
  - `/#/study-projects`
  - `/#/cv`
  - `/#/hobbies`
  - route inconnue pour la 404.

## Questions à trancher

### Plateforme de soutien pour Les Terres de Verdelya

Décision actuelle :

- [x] Utiliser Patreon pour le soutien continu, le journal de développement et la construction progressive d'une communauté.
- [x] Ajouter les réseaux Zeph Studio : TikTok, X et YouTube Dev.

Point à suivre :

- [ ] Ajuster la stratégie éditoriale selon l'avancement du prototype et la fréquence réelle de publication.

### YouTube

Décision actuelle :

- [x] Garder la chaîne piano comme chaîne créative personnelle.
- [x] Ajouter une chaîne YouTube Dev dédiée à Zeph Studio.

Pour le portfolio :

- [x] Choisir 1 à 3 vidéos à afficher.
- [x] Renseigner les URLs dans `src/data/hobbies.ts`.

### Projets d'étude

ZombieLand et SoundTrackify sont maintenant documentés avec les informations et visuels disponibles.

Décisions restantes :

- [ ] Ajouter un lien GitHub ou une URL publique si l'un des projets peut être partagé.
- [ ] Ajouter d'autres captures si elles deviennent disponibles.

### Contact public

Actuellement, le site renvoie surtout vers LinkedIn, GitHub, Discord, Patreon, YouTube Piano, YouTube Dev, TikTok, X et le CV PDF.

Décision à faire :

- [ ] Ajouter ou non un email public.
- [ ] Si oui, éviter d'afficher un numéro de téléphone directement sur le site.
- [ ] Garder LinkedIn comme contact principal si l'objectif est recrutement.

## Plan d'exécution recommandé

### Étape 1 - Stabiliser les contenus visibles

Objectif : supprimer les éléments qui donnent une impression de site incomplet.

1. Vérifier si SoundTrackify et ZombieLand peuvent recevoir des liens publics.

Validation :

```bash
npm run lint
npm run build
```

### Étape 2 - Optimiser les images

Objectif : réduire le poids du site sans changer le design.

1. Convertir les captures BrawlCards en WebP.
2. Compresser les cartes BrawlCards.
3. Vérifier les imports dans `src/data/projects.ts`.
4. Relancer le build.

Validation :

```bash
npm run build
```

Comparer ensuite la liste des fichiers dans `dist/assets`.

### Étape 3 - Revue responsive complète

Objectif : corriger les défauts visibles avant publication.

1. Lancer le site en local.
2. Tester mobile, tablette et desktop.
3. Corriger les chevauchements, espacements et cartes désalignées.
4. Vérifier les pages longues : CV, Hobbies, Projets d'étude.

Validation :

```bash
npm run dev
```

Puis revue manuelle dans le navigateur.

### Étape 4 - Accessibilité et SEO

Objectif : éviter les erreurs publiques simples.

1. Tester clavier.
2. Tester Lighthouse.
3. Vérifier titre, description, canonical et liens externes.

Validation :

```bash
npm run lint
npm run build
npm run preview
```

### Étape 5 - Préparation déploiement

Objectif : publier proprement.

1. Vérifier `git status`.
2. Commit clair.
3. Push sur `main`.
4. Vérifier GitHub Actions.
5. Vérifier GitHub Pages.
6. Tester les routes en ligne.

### Étape 6 - Contrôle post-publication

Objectif : vérifier le site réel, pas seulement le build local.

1. Ouvrir le site sur desktop et mobile.
2. Tester tous les liens internes.
3. Tester tous les liens externes.
4. Tester le CV PDF.
5. Tester un partage LinkedIn.
6. Corriger les derniers détails.

## Checklist finale avant publication

- [ ] `npm run lint` passe.
- [ ] `npm run build` passe.
- [ ] `npm run preview` fonctionne.
- [ ] Aucune route principale cassée.
- [ ] Aucun placeholder gênant visible.
- [ ] Aucun lien externe cassé.
- [ ] CV PDF accessible.
- [x] LinkedIn, GitHub, Discord, Patreon, YouTube, TikTok et X renseignés.
- [x] Le lien soutien est soit réel, soit masqué.
- [x] Les vidéos piano sont réelles ou la section est masquée.
- [x] ZombieLand est complété avec ses données et visuels disponibles.
- [x] SoundTrackify est illustré avec ses captures front/back-office.
- [ ] Les images BrawlCards sont optimisées.
- [x] L'image Open Graph finale est en PNG.
- [ ] Revue mobile faite.
- [ ] Revue tablette faite.
- [ ] Revue desktop faite.
- [ ] Navigation clavier vérifiée.
- [x] GitHub Pages configuré sur `GitHub Actions`.
- [ ] Site vérifié en ligne après déploiement.

## Ordre conseillé pour la suite

1. Vérifier les liens publics possibles pour SoundTrackify et ZombieLand.
2. Faire revue responsive/accessibilité.
3. Publier via GitHub Actions.
