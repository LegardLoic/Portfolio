# AGENTS.md — Instructions de travail pour Codex

## Rôle attendu

Tu agis comme un agent de développement senior spécialisé en React, TypeScript, UI moderne, accessibilité, performance front-end et déploiement GitHub Pages.

Tu dois construire un portfolio web moderne, élégant, rapide, maintenable et facilement éditable.

Le projet est un site statique React/TypeScript hébergé sur GitHub Pages.

## Objectif global

Créer un portfolio professionnel pour présenter :

* le profil du propriétaire du portfolio ;
* son parcours professionnel ;
* ses projets personnels ;
* ses projets d’étude ;
* son CV ;
* ses hobbies, notamment le piano et des vidéos YouTube ;
* ses réseaux sociaux.

Le site doit avoir une identité visuelle ultra moderne, avec un rendu premium, fluide, responsive, agréable sur desktop et mobile.

## Méthode de travail obligatoire

Avant d’écrire du code :

1. Lire tous les fichiers du dossier `docs/`.
2. Identifier les pages, composants et données nécessaires.
3. Proposer mentalement une architecture simple et maintenable.
4. Implémenter par petites étapes cohérentes.
5. Ne jamais casser volontairement le build.
6. Vérifier régulièrement TypeScript, lint et build.

## Contraintes non négociables

* Utiliser React + TypeScript.
* Utiliser Vite si le projet n’est pas encore initialisé.
* Le site doit être compatible GitHub Pages.
* Le site doit être statique : aucun backend requis.
* Les contenus doivent être centralisés dans des fichiers de données TypeScript.
* Le design doit être responsive mobile/tablette/desktop.
* L’accessibilité doit être prise au sérieux.
* Les composants doivent être réutilisables.
* Ne pas inventer de vrais liens sociaux si les liens ne sont pas fournis.
* Utiliser des placeholders explicites `TODO` lorsque des informations manquent.
* Ne pas exposer de données personnelles sensibles inutiles.
* Ne pas utiliser de dépendances lourdes sans justification.

## Qualité attendue

Le résultat final doit donner l’impression d’un portfolio moderne de développeur/profil tech créatif :

* hero section forte ;
* carrousel premium ;
* animations légères ;
* cartes projets élégantes ;
* navigation claire ;
* transitions fluides ;
* pages détaillées lisibles ;
* footer propre avec réseaux ;
* CV clair et professionnel ;
* design cohérent.

## Pages attendues

Le site doit contenir au minimum :

* Accueil ;
* BrawlCards: Origins ;
* Farm-RPG ;
* Projets d’étude ;
* CV ;
* Hobbies ;
* page 404.

## Standards de code

* TypeScript strict autant que possible.
* Composants fonctionnels React.
* Hooks uniquement quand nécessaire.
* Données séparées du rendu.
* Nommage clair.
* Pas de logique métier cachée dans le JSX.
* Pas de duplication excessive.
* CSS organisé et maintenable.
* Préférer une structure simple plutôt qu’une architecture trop abstraite.

## Définition du terminé

Une tâche est terminée seulement si :

* le site compile ;
* `npm run build` fonctionne ;
* il n’y a pas d’erreur TypeScript ;
* les pages principales sont accessibles ;
* la navigation fonctionne ;
* le rendu mobile est correct ;
* les images ont des textes alternatifs ;
* les liens externes sont sécurisés avec `rel="noreferrer"`;
* les contenus manquants sont marqués clairement avec `TODO`;
* le README explique comment lancer et déployer le projet.