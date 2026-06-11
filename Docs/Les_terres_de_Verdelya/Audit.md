# Les Terres de Verdelya — Fiche Projet Portfolio

## Vue d'ensemble

**Les Terres de Verdelya** est un jeu vidéo 2D pixel-art en vue top-down qui fusionne la gestion de ferme à la Stardew Valley avec un système de combat tour par tour inspiré de Final Fantasy. Le joueur incarne un aventurier qui cultive sa ferme, explore un monde ouvert, combat des monstres dans une tour de 100 étages et interagit avec les habitants d'un village vivant.

**Statut** : En développement actif — gameplay loop complet et jouable.
**Début du projet** : Avril 2026
**Développeur** : Loïc Legard (ZephStudio)

---

## Technologies

| Outil | Usage |
|-------|-------|
| **Unity 6** (URP 2D) | Moteur de jeu, rendu 2D avec Universal Render Pipeline |
| **C#** | Langage de programmation — 106 scripts organisés en 13 systèmes |
| **Tiled Map Editor** | Création des maps (tilemaps, collisions, spawn points, zones) |
| **Aseprite** | Pixel art et animations des personnages, monstres et objets |
| **SuperTiled2Unity** | Import automatique des maps Tiled dans Unity |
| **TextMeshPro** | Rendu texte avancé pour toute l'interface utilisateur |
| **Claude AI** | Assistant IA pour le développement (architecture, scripts, debugging) |

**Résolution** : 16×16 pixels par tile, 320×180 interne, upscale ×4/×6.

---

## Architecture technique

Le projet repose sur une architecture modulaire de 106 scripts C# répartis en 13 systèmes distincts, communiquant via un pattern Event Channel (ScriptableObject pub/sub). Chaque système majeur est un singleton persistent qui survit aux changements de scène.

**Patterns utilisés** : Singleton, Observer (Event Channels), State Machine, Data-Driven Design (ScriptableObjects), Command Pattern (actions de combat).

**Automatisation** : Chaque feature inclut un Editor Script dédié qui configure automatiquement les assets, prefabs, composants et wiring dans Unity — réduisant les erreurs de setup manuel et accélérant le workflow.

---

## Systèmes implémentés

### 1. Système de ferme

Le joueur possède une parcelle de terre qu'il peut travailler avec ses outils.

- **5 cultures** : Blé, Carotte, Fraise, Pomme de terre, Tomate — chacune avec son cycle de croissance, ses graines et sa récolte
- **Cycle de vie des tiles** : Terre → Labourée → Plantée → Arrosée → Prête à récolter
- **Système d'arrosage** : Chaque culture doit être arrosée quotidiennement sous peine de dégradation
- **Arbres plantables** : Système de croissance avec stades visuels, deviennent des ResourceNode récoltables à maturité
- **Outils** : Houe, Arrosoir, Hache, Pioche, Faux — chacun avec animation d'arc et effets de particules
- **Persistance** : L'état de chaque tile (culture, jours de croissance, arrosage) est sauvegardé entre les sessions et les changements de scène

### 2. Système de combat (tour par tour)

Un système de combat complet inspiré des RPG japonais classiques.

- **Initiative par vitesse** : L'ordre des tours est calculé selon la statistique Speed de chaque combattant
- **Actions disponibles** : Attaque, Sorts/Compétences, Objets, Fuite
- **IA ennemie** : Sélection intelligente des cibles et des capacités
- **Animations de combat** : Déplacement vers la cible, attaque, recul, hit, mort, victoire — le tout avec des transitions fluides dans l'Animator
- **VFX élémentaires** : Feu, Glace, Foudre, Poison, Soin — systèmes de particules dédiés
- **Popups de dégâts** : Nombres flottants animés avec distinction critique/normal
- **Système de loot** : Table de drop par ennemi avec chances et quantités variables
- **Récompenses** : XP, Or, CP (points de compétence), objets — appliqués au retour dans le monde

### 3. Système d'apprentissage FF9

Chaque pièce d'équipement peut enseigner une compétence de manière permanente.

- **Compétences liées** : Chaque équipement accorde une compétence tant qu'il est porté
- **Points CP** : Accumulés en combat, une fois le seuil atteint la compétence est apprise définitivement
- **Progression naturelle** : Le joueur est encouragé à varier son équipement pour apprendre plus de compétences

### 4. Monde et exploration

Un monde ouvert composé de plusieurs zones interconnectées.

- **5 scènes jouables** : Ferme, Maison du joueur, Village, Forêt, Scène de combat
- **Transitions fluides** : Fade in/out entre les scènes avec ScreenFader
- **Teleporters** : Portails de transition entre zones avec spawn points ciblés
- **Zones d'encounter** : Zones dans la forêt qui déclenchent des combats aléatoires (style FF)
- **Ressources récoltables** : Arbres, rochers, herbes — chacun avec état de déplétion et respawn configurable
- **Persistance du monde** : Ressources coupées, arbres plantés, coffres posés — tout persiste entre les scènes et les combats

### 5. Cycle jour/nuit et saisons

- **Horloge en jeu** : Cycle de 6h à 22h, 1 jour = 15 minutes réelles (configurable)
- **4 saisons** : Printemps, Été, Automne, Hiver — 28 jours par saison
- **Système météo** : Soleil, Pluie, Tempête, Neige
- **Sommeil** : Le joueur peut dormir dans son lit pour passer au jour suivant avec régénération complète
- **Résumé de fin de journée** : Bilan des activités du jour

### 6. PNJs et dialogues

Des personnages vivants avec lesquels le joueur interagit.

- **4 PNJs implémentés** : Le Maire (mentor, donne les premières recettes), le Forgeron (envoûté au début du jeu), l'Épicier (vend graines, achète récoltes), et plus
- **Système de dialogue** : Dialogues à embranchements avec effets contextuels
- **Dialogues de première rencontre** : Chaque PNJ a un dialogue d'accueil unique joué une seule fois
- **Effets de dialogue** : Les dialogues peuvent débloquer des recettes, ouvrir un shop, déclencher des quêtes

### 7. Économie et commerce

- **Shop fonctionnel** : L'Épicier vend des graines et achète les récoltes du joueur
- **Prix d'achat/vente** : Chaque item a un prix d'achat et de revente distincts
- **Or** : Monnaie unique gagnée en combat et en vendant des récoltes

### 8. Crafting

- **5 recettes** : Épée en bois, Bouclier en cuir, Armure en tissu, Potion de soin, Coffre
- **Déblocage progressif** : Recettes données par le Maire via le dialogue, ou découvertes
- **Catégories** : Potions, Nourriture, Matériaux, Outils — avec filtres par onglets
- **Validation** : Vérification des ingrédients et de l'espace inventaire avant craft

### 9. Système d'inventaire double

Architecture d'inventaire séparée pour les objets et l'équipement.

- **Inventaire principal** : 9 slots de base, extensible jusqu'à 36 (backpack upgradeable)
- **Inventaire équipement** : 99 slots dédiés aux armes, armures et accessoires
- **Slots verrouillables** : Les slots supplémentaires se débloquent progressivement
- **8 types d'items** : Consommable, Matériau, Graine, Équipement, Objet clé, Loot, Outil, Plaçable

### 10. Équipement et stats

- **10 slots d'équipement** : Casque, Torse, Gants, Jambes, Bottes, Collier, 2 Bagues, Main gauche, Main droite
- **6 statistiques** : Force, Agilité, Constitution, Intelligence, Vitesse, Précision + Endurance
- **Bonus d'équipement** : Chaque pièce modifie les stats de base
- **Portrait dynamique** : Les équipements portés modifient visuellement le portrait du personnage dans le menu (overlay par pièce avec position/taille configurable)
- **Résistances élémentaires** : 7 types d'éléments avec résistances cumulatives (plafonnées à 75%)

### 11. Système de coffres

Le joueur peut crafter et placer des coffres de stockage dans le monde.

- **18 slots par coffre** : Stockage indépendant de l'inventaire
- **Placement libre** : Posable n'importe où dans le monde
- **Drag & drop** : Transfert d'items entre inventaire et coffre par glisser-déposer
- **Récupérable** : Le joueur peut ramasser un coffre (contenu transféré à l'inventaire)
- **Persistance** : Les coffres et leur contenu survivent aux changements de scène et aux combats
- **Illimité** : Aucune limite au nombre de coffres placés

### 12. Drag & drop universel

Un système de glisser-déposer unifié qui connecte tous les inventaires.

- **5 zones de drop** : Inventaire principal, Inventaire équipement, Slots équipés, Coffre, Toolbar
- **Règles de compatibilité** : Chaque combinaison source→destination a ses propres règles (swap, transfert, équiper, déséquiper)
- **Preview visuel** : Icône fantôme qui suit le curseur pendant le drag
- **Highlight** : Les slots valides s'illuminent quand un item est survolé

### 13. Interface utilisateur complète

26 scripts UI couvrant tous les aspects du jeu.

- **HUD permanent** : Barres HP/MP/Endurance, horloge, or, toolbar de raccourcis
- **Menu pause à onglets** : Inventaire, Équipements, Stats, Artisanat, Map, Sauvegarde — navigation par L1/R1
- **Panel latéral personnage** : Portrait avec overlays d'équipement, stats calculées, icônes d'équipement
- **Tooltips contextuels** : Informations détaillées au survol de chaque item
- **Sélecteur toolbar** : 9 slots de raccourcis avec navigation clavier (touches 1-9) et feedback visuel

### 14. Endurance (Stamina)

- **Barre d'endurance** : Visible sur le HUD, se consomme sur les actions (fermier, récolte, combat)
- **Régénération passive** : L'endurance remonte lentement pendant le gameplay
- **Régénération par sommeil** : Dormir restaure l'endurance complètement
- **Évanouissement** : Si l'endurance tombe à 0, le joueur s'évanouit et se réveille chez lui

### 15. Y-Sorting dynamique

- **Tri par profondeur** : Tous les sprites (joueur, PNJs, objets, coffres) sont triés dynamiquement par leur position Y
- **Sorting layer unifié** : Joueur et objets interactifs partagent le même sorting layer pour un tri correct
- **Précision** : Multiplication par 100 pour 0.01 unité de précision

---

## Contenu du jeu

| Catégorie | Quantité | Détails |
|-----------|----------|---------|
| Scripts C# | 106 | Répartis en 13 systèmes |
| ScriptableObjects | 100+ | Items, ennemis, recettes, dialogues, scènes |
| Cultures | 5 | Blé, Carotte, Fraise, Pomme de terre, Tomate |
| Outils | 5 | Houe, Arrosoir, Hache, Pioche, Faux |
| Ennemis | 2+ | Slime Vert, Goblin Archer |
| Recettes | 5 | Épée, Bouclier, Armure, Potion, Coffre |
| PNJs | 4 | Maire, Forgeron, Épicier + autres |
| Scènes | 5 | Ferme, Maison, Village, Forêt, Combat |
| Event Channels | 30 | Communication inter-systèmes |
| Prefabs | 15 | Combat, Ferme, UI, VFX |
| Slots d'équipement | 10 | Tête aux pieds + accessoires |
| Stats du joueur | 7 | FOR, AGI, CON, INT, VIT, PREC, END |

---

## Boucle de gameplay

```
Réveil à la ferme
    ↓
Cultiver (labourer, planter, arroser, récolter)
    ↓
Vendre les récoltes à l'Épicier → Gagner de l'or
    ↓
Acheter graines / Crafter équipement
    ↓
Explorer la forêt → Récolter ressources (bois, pierre, herbes)
    ↓
Rencontres aléatoires → Combat tour par tour
    ↓
Victoire → XP + Or + Loot + CP
    ↓
Monter de niveau → Points de stats
    ↓
Apprendre des compétences via l'équipement (système FF9)
    ↓
Retour à la ferme → Dormir → Jour suivant
    ↓
Cycle recommence avec progression
```

---

## Captures d'écran

*Section à compléter avec des captures du jeu en action.*

---

