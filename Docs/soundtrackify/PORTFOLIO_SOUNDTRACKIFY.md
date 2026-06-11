# SoundTrackify - Synthese portfolio

Analyse realisee le 11 juin 2026 a partir du depot local.

SoundTrackify est une application web Symfony dediee aux bandes originales de jeux video. Le site permet de consulter des jeux, leurs albums et leurs musiques, puis de composer des playlists personnalisees avec un lecteur audio integre. Le projet a servi de projet d'apotheose dans le cadre de la formation DWWM.

## Pitch court pour portfolio

SoundTrackify est une plateforme web de decouverte d'OST de jeux video, construite avec Symfony 5.4, Doctrine, Twig et MySQL. Elle propose un catalogue de jeux, albums et musiques, un espace utilisateur avec playlists personnalisees, un lecteur MP3 en JavaScript, ainsi qu'un back-office admin complet pour gerer les contenus du site.

## Contexte du projet

- Projet d'apotheose realise pendant la formation O'clock, utilise comme support pour l'examen DWWM.
- Projet oriente produit, avec une problematique claire : faciliter l'ecoute et la redecouverte de musiques de jeux video.
- Projet d'equipe indique dans le README avec trois contributeurs : Emilie Derepierre, Loic Legard et Gabriel Boukouch.
- Application monolithique Symfony avec separation front-office, back-office, entites metier, formulaires, repositories et templates Twig.

## Probleme utilisateur adresse

Le README met en avant un constat simple : les OST de jeux video sont souvent dispersees, difficiles a retrouver sur les services de streaming generalistes, et les sites specialises ne proposent pas toujours une experience moderne avec gestion de playlists.

SoundTrackify repond a ce besoin avec :

- un acces direct a des albums de jeux video ;
- une lecture des musiques depuis les fiches album ;
- la creation de playlists personnalisees ;
- une experience visuelle orientee culture gaming ;
- un back-office permettant d'alimenter le catalogue.

## Stack technique relevee

- PHP >= 7.2.5.
- Symfony 5.4.
- Doctrine ORM et Doctrine Migrations.
- Twig pour les vues.
- MySQL via Doctrine DBAL.
- Symfony Security avec authenticator personnalise.
- Symfony Form et Validator.
- KnpPaginatorBundle pour la pagination.
- ConnectHolland Cookie Consent Bundle pour la gestion du consentement cookies.
- Beberlei DoctrineExtensions avec `RAND()` en DQL pour les albums aleatoires.
- Bootstrap, CSS personnalise, Material Icons, Bootstrap Icons.
- JavaScript vanilla et jQuery pour les interactions front.
- Select2 et Bootstrap Datepicker dans le back-office.
- PHPUnit installe, mais peu de tests applicatifs presents dans le depot.

## Architecture du code

Le projet suit une architecture MVC Symfony classique :

- `src/Entity` : modele de donnees Doctrine.
- `src/Repository` : requetes personnalisees.
- `src/Controller/Front` : parcours publics et utilisateurs.
- `src/Controller/Back` : back-office admin.
- `src/Form/Front` et `src/Form/Back` : formulaires metier.
- `templates/front` : interface publique.
- `templates/back` : interface d'administration.
- `public/js` : interactions du lecteur audio, recherche, validation et animations.
- `migrations` : evolution du schema de base de donnees.
- `sources/bdd` : fichiers SQL d'import de donnees.

Cette structure montre une bonne comprehension des conventions Symfony : routes par controleurs, templates separes, formulaires types, repositories dedies et mapping Doctrine.

## Modele de donnees

Entites principales :

- `Videogame` : jeu video, affiche, resume, date de sortie, slug, relations avec albums et plateformes.
- `Album` : album de bande originale, affiche, date de sortie, theme principal, slug, rattache a un jeu.
- `Music` : titre musical, duree, lien MP3, rattache a un album et associable a des playlists.
- `Playlist` : playlist utilisateur, nom, slug, relation many-to-many avec les musiques.
- `User` : utilisateur avec email, mot de passe hashe, roles, gamer tag, slug, avatar et playlists.
- `Platform` : plateforme de jeu, associee aux jeux en many-to-many.
- `Avatar` : avatar selectionnable par les utilisateurs.

Relations notables :

- Un jeu possede plusieurs albums.
- Un album possede plusieurs musiques.
- Une musique peut appartenir a plusieurs playlists.
- Une playlist appartient a un utilisateur.
- Un jeu peut etre disponible sur plusieurs plateformes.
- Un utilisateur peut choisir un avatar.

## Volume de donnees fourni

Le fichier `sources/bdd/soundtrackify_insert.sql` fournit un jeu de donnees consequent :

- 90 jeux video.
- 95 albums.
- 4 728 musiques.
- 25 plateformes.
- 8 avatars.
- 3 utilisateurs.
- 1 playlist de demonstration.
- 234 associations jeu/plateforme.
- 16 associations musique/playlist.

Ce volume est interessant a valoriser : le projet ne se limite pas a quelques donnees de test, il manipule un catalogue assez large pour tester la navigation, la recherche, la pagination et les performances de base.

## Fonctionnalites front-office

- Page d'accueil avec baseline, recherche, derniers jeux ajoutes et albums aleatoires.
- Liste paginee des jeux video.
- Liste paginee des albums.
- Recherche d'albums et de jeux par mots-cles via repositories Doctrine.
- Fiche jeu avec informations, affiche, date, plateformes et albums associes.
- Fiche album avec affiche, liste des pistes, duree et lecteur audio.
- Lecture de pistes MP3 directement depuis la page album.
- Inscription utilisateur avec gamer tag, email, mot de passe confirme et avatar.
- Connexion/deconnexion via Symfony Security.
- Modification du profil utilisateur.
- Changement de mot de passe.
- Espace utilisateur avec liste de playlists.
- Creation, modification et suppression de playlists.
- Ajout d'une musique dans une ou plusieurs playlists de l'utilisateur connecte.
- Suppression d'une musique depuis une playlist.
- Fiche playlist avec lecteur audio, piste suivante, piste precedente et mode aleatoire.
- Pages statiques : contact, mentions legales, donnees personnelles.
- Bandeau de consentement cookies.

## Fonctionnalites back-office

Le back-office est protege par le role `ROLE_ADMIN` via `@IsGranted("ROLE_ADMIN")`.

Il comprend :

- un dashboard avec compteurs et derniers ajouts ;
- un CRUD jeux video ;
- un CRUD albums ;
- un CRUD musiques ;
- un CRUD plateformes ;
- un CRUD utilisateurs ;
- un CRUD playlists ;
- un CRUD avatars ;
- pagination des listes d'administration ;
- formulaires Symfony dedies au back-office ;
- suppression avec tokens CSRF ;
- navigation laterale responsive ;
- integration de Select2 pour faciliter la recherche de musiques ;
- integration d'un datepicker pour les dates de sortie.

## Securite et gestion utilisateur

Elements positifs a valoriser :

- Utilisation de Symfony Security.
- Authenticator personnalise `LoginFormAuthenticator`.
- Hashage des mots de passe avec `UserPasswordHasherInterface`.
- Roles stockes en JSON.
- Hierarchie de roles avec `ROLE_ADMIN` heritant de `ROLE_USER`.
- Protection du back-office par annotations `@IsGranted`.
- Token CSRF sur le formulaire de connexion.
- Token CSRF sur les suppressions du back-office.
- Formulaires avec validation Symfony : email, URL, longueurs, champs obligatoires.
- Controle d'unicite sur plusieurs entites via `UniqueEntity`.

Point a presenter comme axe d'amelioration :

- La fonctionnalite "mot de passe oublie" ressemble plutot a une modification de mot de passe par email, sans token temporaire ni envoi de mail. Pour un contexte production, il faudrait ajouter un workflow securise avec token de reinitialisation, expiration et email.

## Recherche et navigation

Le projet contient plusieurs recherches personnalisees :

- recherche d'albums dans `AlbumRepository::search()`;
- recherche de jeux dans `VideogameRepository::search()`;
- filtrage des musiques pour le back-office via `MusicRepository::findFilteredMusics()`;
- suppression de mots courants comme `et`, `ou`, `de`, `the`, `of` dans les recherches.

La navigation utilise des slugs pour les fiches publiques de jeux, albums, utilisateurs et playlists. Les slugs sont generes avec `AsciiSlugger`.

## Lecteur audio et interactions JavaScript

Les fichiers `public/js/mp3-player.js`, `mp3-player-without-button.js` et `mp3-player-text.js` apportent une vraie experience interactive :

- lecture d'une musique depuis une liste ;
- affichage du titre en cours ;
- passage automatique a la piste suivante ;
- boutons suivant et precedent sur les playlists ;
- mode aleatoire ;
- changement d'icone selon l'etat du mode aleatoire ;
- texte defilant pour le morceau en cours.

Ces elements sont interessants pour montrer que le projet ne se limite pas a du CRUD : il propose une experience d'ecoute utilisable.

## UX et interface

Points visibles dans les templates et assets :

- identite visuelle dediee a l'univers jeu video ;
- logo et favicon specifiques front/back ;
- navigation responsive avec menu mobile ;
- pages separees front-office et back-office ;
- cartes pour les jeux et albums ;
- affichage d'avatars pour l'espace utilisateur ;
- lecteur audio integre dans les fiches album et playlists ;
- scroll-up button ;
- messages flash avec tonalite gaming ;
- pages legales et gestion du consentement cookies.

## Commande console

Le projet contient une commande Symfony `create-user` permettant de creer un utilisateur depuis le terminal.

Elle montre :

- l'utilisation du composant Console ;
- des questions interactives ;
- une validation custom de l'email et du mot de passe ;
- le choix entre `ROLE_USER` et `ROLE_ADMIN` ;
- le hashage du mot de passe ;
- la generation du slug du gamer tag ;
- la persistance Doctrine.

C'est un bon point a valoriser en entretien, car cela montre une comprehension de Symfony au-dela des pages web.

## Competences DWWM mises en avant

Developpement front-end :

- integration HTML/Twig avec composants reutilisables ;
- CSS personnalise et Bootstrap ;
- JavaScript pour interactions audio et UI ;
- responsive design ;
- formulaires utilisateur.

Developpement back-end :

- application Symfony structuree ;
- controleurs front et back ;
- formulaires Symfony ;
- validation serveur ;
- authentification et roles ;
- CRUD complet ;
- repositories Doctrine avec requetes personnalisees ;
- migrations et schema relationnel ;
- commande console.

Base de donnees :

- modelisation relationnelle ;
- relations one-to-many, many-to-one et many-to-many ;
- contraintes d'unicite ;
- jeu de donnees SQL volumineux ;
- migrations successives.

Qualite applicative :

- separation front/back ;
- protection admin ;
- pagination ;
- gestion des erreurs 403, 404 et 500 avec templates dedies ;
- messages flash ;
- pages legales et consentement cookies.

## Points forts a mentionner dans le portfolio

- Premier projet complet avec une vraie logique produit.
- Application full-stack Symfony et MySQL.
- Back-office admin complet et separe du front-office.
- Modele de donnees riche avec plusieurs relations Doctrine.
- Gestion d'utilisateurs, roles et authentification.
- Lecteur audio personnalise en JavaScript.
- Fonctionnalite centrale de playlists utilisateur.
- Catalogue initial consequent : plus de 4 700 musiques.
- Recherches et pagination pour rendre le contenu navigable.
- Projet deployable localement avec Composer, migrations et import SQL.
- Presence d'une commande CLI Symfony.

## Points de vigilance a assumer comme projet 2023

Ces points ne retirent pas de valeur au projet, mais peuvent etre utiles a presenter avec maturite dans un portfolio ou en entretien :

- Les tests automatises ne sont pas developpes, meme si PHPUnit est configure.
- Certaines protections d'acces front pourraient etre renforcees au niveau controleur, notamment pour s'assurer qu'un utilisateur ne modifie que ses propres playlists ou son propre profil.
- Le reset de mot de passe devrait etre remplace par un vrai systeme de token temporaire.
- Les routes utilisent les annotations Doctrine/Symfony historiques ; une migration vers les attributs PHP serait possible dans une version modernisee.
- Le projet utilise des versions aujourd'hui anciennes de PHP/Symfony, coherentes avec un projet de 2023 mais a moderniser pour un usage actuel.
- Certains textes affichent des problemes d'encodage dans le depot, probablement lies a un melange d'encodages ou a l'import historique des fichiers.
- Les assets front sont servis directement depuis `public` sans pipeline moderne type Vite/Webpack Encore.

## Formulation possible pour le portfolio

> SoundTrackify est mon projet d'apotheose realise pendant ma formation DWWM. Il s'agit d'une application Symfony permettant de decouvrir des bandes originales de jeux video, d'ecouter les pistes par album et de creer ses propres playlists. Le projet comprend un front-office public, un espace utilisateur, un lecteur audio JavaScript et un back-office admin complet pour gerer les jeux, albums, musiques, plateformes, utilisateurs, playlists et avatars.

## Version courte pour fiche projet

- Nom : SoundTrackify.
- Type : application web full-stack.
- Domaine : musiques et OST de jeux video.
- Contexte : projet d'apotheose DWWM, 2023.
- Stack : Symfony 5.4, PHP, Doctrine, Twig, MySQL, JavaScript, Bootstrap.
- Fonctionnalites cles : catalogue de jeux/albums, lecteur audio, playlists utilisateur, authentification, back-office admin, recherche, pagination.
- Donnees : environ 90 jeux, 95 albums et 4 728 musiques dans le seed SQL.
- Apports : mise en pratique d'une architecture MVC, modelisation de base de donnees, securite Symfony, formulaires, CRUD, UX front et administration.

## Captures d'ecran interessantes a ajouter au portfolio

Pour rendre la page portfolio plus concrete, les captures suivantes seraient pertinentes :

- page d'accueil avec la baseline et les cartes de jeux/albums ;
- fiche album avec lecteur audio et liste des musiques ;
- page detail d'une playlist avec lecteur, suivant, precedent et aleatoire ;
- formulaire d'inscription avec choix d'avatar ;
- dashboard admin ;
- liste CRUD admin, par exemple albums ou jeux video ;
- formulaire admin d'ajout/modification d'un jeu ou d'un album.

## Angles de discours en entretien

- "J'ai appris a structurer une application Symfony avec entites, repositories, formulaires, controleurs et templates."
- "La partie la plus interessante etait la relation entre albums, musiques et playlists, car elle necessitait de manipuler des associations Doctrine."
- "Le lecteur audio m'a permis de completer le CRUD par une vraie interaction utilisateur en JavaScript."
- "Le back-office m'a permis de comprendre la difference entre interface publique et interface d'administration."
- "Avec le recul, je moderniserais le projet avec une version recente de Symfony, des tests fonctionnels, un reset password securise et un controle d'acces plus fin sur les ressources utilisateur."
