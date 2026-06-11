# ZombieLandCDA - Notes portfolio

## Pitch court

ZombieLandCDA est une application web full-stack de gestion et de reservation pour un parc d'attractions a theme post-apocalyptique. Le projet combine une vitrine publique, un catalogue d'activites filtrable, une billetterie en ligne, un espace client, un paiement Stripe, des billets avec QR code et un back-office administrateur complet.

Ce projet a servi de support pour l'examen CDA et montre une capacite a concevoir une application web complete, structuree en deux depots : une API REST Node.js/Express/Prisma et une SPA React/TypeScript.

## Resume reutilisable dans un portfolio

ZombieLandCDA est une plateforme de reservation pour un parc d'attractions fictif. L'utilisateur peut consulter les attractions, filtrer le catalogue, creer un compte, reserver des billets, payer en ligne et recuperer une facture PDF avec QR code. Un back-office permet aux administrateurs de gerer les utilisateurs, les activites, les categories, les produits de billetterie et les commandes.

Le backend expose une API REST securisee avec authentification JWT par cookies HTTP-only, validation Zod, base PostgreSQL via Prisma, documentation Swagger, envoi d'e-mails, webhooks Stripe, logs Winston et tests automatises. Le frontend est construit avec React, TypeScript, Vite, React Router, Redux Toolkit, Axios, Tailwind CSS, generation de QR codes et generation de PDF.

## Contexte projet

- Projet : ZombieLandCDA.
- Annee : 2026.
- Type : projet d'apotheose / support d'examen CDA.
- Organisation : deux applications separees, `ZombieLandCDA-back` et `ZombieLandCDA-front`.
- Objectif metier : moderniser la gestion d'un parc d'attractions avec une plateforme de presentation, de reservation et d'administration.

## Stack technique

### Backend

- Node.js 22.
- TypeScript strict.
- Express 5.
- Prisma 6 avec PostgreSQL.
- Zod pour la validation des entrees.
- JWT, bcrypt et cookies HTTP-only pour l'authentification.
- Stripe Checkout et webhook de paiement.
- Nodemailer pour les e-mails transactionnels.
- Swagger / OpenAPI pour la documentation API.
- Docker Compose avec PostgreSQL, API et Adminer.
- Winston et `winston-daily-rotate-file` pour les logs.
- ESLint, Husky et scripts npm.
- Tests unitaires et tests d'integration avec le runner natif Node.js.
- Workflow GitHub Actions pour les tests backend.

### Frontend

- React 19.
- TypeScript.
- Vite 7.
- React Router 7.
- Redux Toolkit et React Redux.
- Axios avec `withCredentials` et intercepteur de refresh token.
- Tailwind CSS 4.
- Headless UI / Preline.
- QRCode pour la generation de QR codes.
- `@react-pdf/renderer` pour les factures PDF.
- Vitest et Testing Library.
- Build Docker multi-stage avec Nginx pour servir la SPA.

## Fonctionnalites front-office

### Vitrine et navigation publique

- Page d'accueil avec univers graphique ZombieLand.
- Header, footer et navigation front-office.
- Pages legales : mentions legales et politique de confidentialite.
- Page contact connectee a l'API d'administration.

### Catalogue des activites

- Liste publique des activites publiees.
- Filtres par categorie, niveau de frayeur, accessibilite PMR et intensite.
- Recherche texte.
- Pagination.
- Detail d'une activite avec image, slogan, description, categorie, niveau, duree et pictogrammes.
- Notes utilisateurs avec calcul de moyenne et nombre de votes.
- Formulaire d'evaluation reserve aux utilisateurs connectes.

### Authentification et compte utilisateur

- Inscription avec confirmation d'e-mail.
- Connexion et deconnexion.
- Refresh automatique de session cote front.
- Mot de passe oublie et reinitialisation par token.
- Page compte avec onglets.
- Mise a jour des informations personnelles.
- Changement de mot de passe.
- Suppression ou desactivation du compte.
- Historique des commandes de l'utilisateur.

### Reservation et billetterie

- Selection des produits/billets disponibles.
- Gestion des quantites.
- Choix d'une date de visite.
- Panier conserve en `localStorage`.
- Calcul du sous-total, de la TVA et du total.
- Creation d'une commande en statut `pending`.
- Redirection vers Stripe Checkout.
- Page de confirmation apres paiement.
- Detail de commande.
- Annulation possible selon une regle metier de delai avant visite.
- Generation de QR code pour les billets.
- Telechargement d'une facture PDF.

## Fonctionnalites back-office

Le back-office est protege par le role `admin`. L'application verifie l'authentification au chargement et n'affiche l'interface admin que si l'utilisateur connecte possede le role administrateur.

### Gestion des activites

- Liste admin de toutes les activites, y compris brouillons et publiees.
- Recherche, filtres, tri et pagination.
- Creation d'activite.
- Edition d'activite.
- Suppression d'activite.
- Publication ou passage en brouillon.
- Gestion des champs metier : nom, slug, slogan, description, niveau de frayeur, duree, PMR, intensite, image, categorie.

### Gestion des categories

- Liste paginee.
- Creation.
- Edition.
- Suppression avec modale de confirmation.
- Couleur associee a chaque categorie.
- Cote backend, les categories peuvent etre hierarchiques via `parentId`.

### Gestion des produits

- Liste des produits de billetterie.
- Creation et edition de produit.
- Prix.
- Statut `draft` ou `published`.
- Publication ou passage en brouillon.
- Suppression avec confirmation.

### Gestion des utilisateurs

- Liste paginee.
- Recherche par prenom, nom ou e-mail.
- Detail utilisateur.
- Consultation des commandes d'un utilisateur.
- Changement de role `member` / `admin`.
- Suppression/desactivation d'un utilisateur.
- Affichage de l'etat actif/inactif, telephone et derniere connexion.

### Gestion des commandes

- Liste paginee des commandes.
- Recherche par e-mail, nom ou moyen de paiement.
- Filtre par statut.
- Tri par date de commande, date de visite ou statut.
- Detail de commande.
- Creation de reservation depuis l'administration.
- Mise a jour du statut : `pending`, `confirmed`, `canceled`, `refund`.
- Calculs de sous-total, TVA et total.
- Consultation des lignes de commande et du client associe.

## Architecture backend

### Structure globale

- `index.ts` demarre le serveur.
- `src/app.ts` assemble l'application Express.
- `src/routes` declare les routes REST.
- `src/controllers` porte la logique metier.
- `src/schemas` centralise les validations Zod.
- `src/models/schema.prisma` definit le modele relationnel.
- `src/middlewares` regroupe securite, logs, roles, sanitation et erreurs.
- `src/services/emails` gere les e-mails transactionnels.
- `src/lib` contient les helpers techniques : tokens, erreurs, logger.

### Middlewares importants

- CORS avec credentials.
- Helmet pour les headers de securite.
- Parser JSON et URL-encoded.
- Sanitisation des champs texte avec `sanitize-html`.
- `cookie-parser`.
- Morgan et logger applicatif.
- Gestion centralisee des erreurs.
- Verification de roles par JWT.
- Rate limiting sur login, inscription, e-mail et routes utilisateur.

### Authentification

- Creation de compte avec hash bcrypt.
- Confirmation e-mail avec token UUID valable 24 h.
- Refus de connexion si le compte n'est pas active.
- Login avec generation d'access token JWT et refresh token aleatoire.
- Access token en cookie HTTP-only.
- Refresh token stocke en base, remplace a chaque refresh.
- Refresh token en cookie HTTP-only restreint au chemin `/api/auth/refresh`.
- Deconnexion avec suppression des cookies.
- Mot de passe oublie avec token de reinitialisation valable 1 h.

### Modele de donnees

Principales entites Prisma :

- `User` : compte utilisateur, role, etat actif, informations personnelles.
- `Role` : roles `admin` et `member`.
- `Token` : refresh, verification e-mail, reset password.
- `Activity` : attraction ou activite du parc.
- `Category` : categories avec possibilite de hierarchie.
- `UserRateActivity` : notation et commentaire utilisateur sur une activite.
- `Product` : produit de billetterie.
- `Order` : commande/reservation avec statut, date de visite, ticket et QR code.
- `OrderLine` : lignes de commande avec snapshot du prix unitaire.

Points valorisables :

- Relations explicites entre utilisateurs, commandes, produits, activites et categories.
- Indexes Prisma sur les champs de recherche ou de filtrage.
- Statuts metier modelises avec des enums.
- Snapshot du prix dans `OrderLine` pour conserver l'historique meme si le prix produit change ensuite.

### Paiement Stripe

- Creation d'une session Stripe Checkout depuis une commande `pending`.
- Verification que seul le proprietaire de la commande ou un admin peut initier le paiement.
- Construction des `line_items` Stripe depuis les lignes de commande.
- URLs de succes et d'annulation.
- Webhook Stripe dedie avant le parsing JSON classique.
- Verification de signature Stripe.
- Confirmation automatique de commande sur `checkout.session.completed`.
- Recuperation du moyen de paiement depuis le PaymentIntent quand disponible.
- Traitement idempotent : si la commande est deja confirmee, le webhook ne la modifie pas.

### E-mails

- E-mail de confirmation de compte.
- Renvoi de confirmation.
- E-mail de reinitialisation de mot de passe.
- E-mail de contact vers l'administrateur.
- Service de test d'envoi.

### Documentation et exploitation

- Documentation Swagger disponible sur `/api/api-docs`.
- Docker Compose pour demarrer PostgreSQL, API et Adminer.
- Scripts Prisma pour generate, migrate, reset, studio et seeds.
- Script `init.database.sh` pour reset, migrations, generate et seeds.
- Variables d'environnement separees dans `.env.example`.
- Workflow GitHub Actions backend pour installation, generation Prisma, tests unitaires et tests d'integration.

## Architecture frontend

### Structure globale

- `src/components/App/App.tsx` gere le routage principal et la verification de session.
- `src/components/Layout/FrontOffice` porte le layout public.
- `src/components/Layout/BackOffice` porte le layout admin.
- `src/pages/FrontOffice` contient les pages utilisateur.
- `src/pages/BackOffice` contient les pages admin.
- `src/store` contient les reducers Redux Toolkit.
- `src/hooks` fournit des hooks metier.
- `src/api/axiosInstance.ts` centralise la configuration HTTP.
- `src/@types` declare les types metier partages cote front.

### Gestion d'etat

Reducers principaux :

- `userReducer` : login, logout, session, inscription, mot de passe, compte.
- `activitiesReducer` : liste publique, liste admin, creation, edition, publication, evaluation.
- `categoriesReducer` : categories publiques et admin.
- `ordersReducer` : produits de billetterie, creation commande, commandes utilisateur, commandes admin, detail, statut.
- `productsReducer` : produits admin.
- `adminReducer` : utilisateurs admin et roles.

### Communication API

- Base URL configurable via `VITE_API_BASE_URL`.
- Cookies envoyes automatiquement avec `withCredentials`.
- Intercepteur Axios pour intercepter les `401`, appeler `/auth/refresh`, puis rejouer la requete initiale.
- File d'attente pour eviter plusieurs refresh concurrents.

### Routage

Routes publiques :

- `/`
- `/activities`
- `/activities/:category`
- `/activity/:slug`
- `/register`
- `/login`
- `/email-confirmation`
- `/reset-password`
- `/account`
- `/checkout`
- `/checkout/confirmation/:id`
- `/order/:id`
- `/contact`
- `/privacy`
- `/legal`

Routes admin :

- `/admin/dashboard`
- `/admin/management/users`
- `/admin/management/users/:id`
- `/admin/management/activities`
- `/admin/management/activities/creation`
- `/admin/management/activities/:slug`
- `/admin/management/categories`
- `/admin/management/orders`
- `/admin/management/orders/add`
- `/admin/management/orders/:id`
- `/admin/management/products`

## Qualite, tests et outillage

### Backend

- Tests unitaires sur les schemas Zod.
- Tests d'integration sur l'authentification, les utilisateurs, les categories, les reservations et la route health.
- Environnement de test dedie via Docker Compose.
- Workflow GitHub Actions pour lancer les tests au push ou sur pull request vers `main` / `develop`.
- TypeScript strict.
- ESLint.

### Frontend

- Configuration Vitest en environnement `jsdom`.
- Testing Library.
- Test du composant `Button` : rendu, clic, disabled, lien React Router.
- TypeScript.
- ESLint React Hooks et React Refresh.
- Build Vite.
- Livraison Docker via Nginx avec fallback SPA.

## Points forts a mettre en avant dans le portfolio

- Projet full-stack complet, pas seulement une maquette.
- Separation claire entre API backend et SPA frontend.
- Gestion d'un vrai domaine metier : parc, activites, reservations, billets, produits, commandes, utilisateurs.
- Authentification complete avec confirmation e-mail, refresh token et mot de passe oublie.
- Back-office admin utilisable pour maintenir les donnees du site.
- Paiement Stripe integre avec webhook.
- Billets avec QR code.
- Generation de facture PDF.
- Validation robuste des entrees avec Zod cote backend.
- Base de donnees relationnelle modelisee avec Prisma.
- Documentation API Swagger.
- Dockerisation du backend, de la base et du frontend.
- Tests automatises et CI backend.
- Gestion de roles et droits d'acces.
- Filtrage, recherche, pagination et tri sur plusieurs ressources.
- Logs applicatifs et gestion centralisee des erreurs.

## Competences CDA illustrees

- Concevoir et developper une application web full-stack.
- Developper une interface utilisateur avec React et TypeScript.
- Mettre en place une architecture SPA avec routage protege.
- Concevoir une API REST avec Express.
- Modeliser une base de donnees relationnelle avec Prisma/PostgreSQL.
- Securiser une application : JWT, cookies HTTP-only, roles, rate limiting, sanitisation, hash de mot de passe.
- Integrer un service tiers de paiement.
- Gerer des e-mails transactionnels.
- Produire une documentation technique avec Swagger.
- Mettre en place des tests automatises.
- Conteneuriser une application avec Docker.
- Organiser le code en couches : routes, controllers, schemas, models, services, stores, pages et composants.

## Elements differenciants

- Le projet ne se limite pas a un CRUD : il inclut un parcours de reservation complet.
- La billetterie conserve les prix dans les lignes de commande pour fiabiliser l'historique.
- Le webhook Stripe ferme la boucle entre paiement et statut de commande.
- L'espace admin permet de piloter le contenu visible cote client.
- Le catalogue public et le back-office partagent les memes donnees, avec une logique de publication/brouillon.
- L'application gere des tokens de nature differente : refresh, verification e-mail, reset password.
- Les factures PDF et QR codes donnent un rendu proche d'un usage reel.

## Formulation possible pour une carte projet

**ZombieLandCDA**  
Application full-stack de reservation pour un parc d'attractions fictif. J'ai developpe une API REST Express/Prisma et une SPA React/TypeScript permettant de gerer les attractions, les utilisateurs, les reservations, les paiements Stripe, les billets QR code et un back-office administrateur complet. Le projet integre authentification securisee, validation Zod, PostgreSQL, Swagger, Docker, tests automatises et generation de factures PDF.

## Formulation possible pour l'entretien

J'ai voulu construire un projet proche d'un besoin professionnel : une vitrine publique alimentee par un back-office, avec un vrai parcours de reservation. Le point le plus interessant techniquement a ete de relier plusieurs briques : authentification par cookies securises, modelisation Prisma, logique de commande, paiement Stripe, webhook, generation de ticket et PDF. Cela m'a permis de travailler a la fois la conception, la securite, la persistance, l'experience utilisateur et l'exploitation du projet.

## Points d'amelioration a presenter comme perspectives

Ces points sont utiles a garder en tete pour montrer une prise de recul technique :

- Completer le dashboard admin avec des indicateurs reels : chiffre d'affaires, reservations par statut, activites les mieux notees.
- Ajouter un vrai upload d'image pour les activites au lieu d'une URL texte.
- Harmoniser les reponses API de certains endpoints pour garder un format identique partout.
- Ajouter des tests frontend sur les parcours critiques : login, reservation, filtres, paiement mocke.
- Ajouter plus de tests backend sur Stripe, produits et activites.
- Remplacer le champ `user_id` de creation de commande admin par une recherche utilisateur.
- Renforcer la couverture des roles sur toutes les routes sensibles.
- Nettoyer les logs `console.log` restants cote front avant une mise en production.
- Ajouter une page 404 effective dans le routage front.
- Mettre en place une stratégie d'accessibilite plus systematique : focus, labels, contrastes, navigation clavier.

## Fichiers representatifs a citer

Backend :

- `ZombieLandCDA-back/src/app.ts` : assemblage Express, middlewares, routes, webhook Stripe.
- `ZombieLandCDA-back/src/models/schema.prisma` : modele de donnees.
- `ZombieLandCDA-back/src/controllers/auth.controller.ts` : authentification, confirmation e-mail, refresh, reset password.
- `ZombieLandCDA-back/src/controllers/reservations.controller.ts` : commandes, lignes, statuts, Stripe, QR/ticket.
- `ZombieLandCDA-back/src/controllers/activities.controller.ts` : catalogue, filtres, publication, evaluation.
- `ZombieLandCDA-back/src/middlewares/check-roles.middleware.ts` : protection par role.
- `ZombieLandCDA-back/src/routes/swaggers/index.ts` : documentation OpenAPI.
- `ZombieLandCDA-back/.github/workflows/api-ci.yml` : CI backend.

Frontend :

- `ZombieLandCDA-front/src/components/App/App.tsx` : routage principal et controle admin.
- `ZombieLandCDA-front/src/api/axiosInstance.ts` : Axios, cookies et refresh automatique.
- `ZombieLandCDA-front/src/pages/FrontOffice/ActivitiesPage/ActivitiesPage.tsx` : catalogue public avec filtres.
- `ZombieLandCDA-front/src/pages/FrontOffice/CheckoutPage/CheckoutPage.tsx` : reservation et redirection Stripe.
- `ZombieLandCDA-front/src/pages/FrontOffice/OrderPage/OrderPDF.tsx` : facture PDF avec QR code.
- `ZombieLandCDA-front/src/pages/BackOffice/ActivitiesManagement/ActivitiesManagement.tsx` : gestion admin des activites.
- `ZombieLandCDA-front/src/pages/BackOffice/OrdersManagement/OrdersManagement.tsx` : gestion admin des commandes.
- `ZombieLandCDA-front/src/store/reducers` : etat applicatif Redux Toolkit.

## Angle de presentation conseille

Le meilleur angle portfolio est de presenter ZombieLandCDA comme un projet de gestion complet :

1. Une vitrine publique attractive pour decouvrir le parc.
2. Un parcours utilisateur complet, de l'inscription jusqu'au billet PDF.
3. Un back-office qui rend le site administrable.
4. Une API securisee et documentee.
5. Une base relationnelle coherente.
6. Des integrations proches du reel : e-mails, paiement, QR code, PDF, Docker, CI.

