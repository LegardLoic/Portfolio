# docs/02_UI_UX_DIRECTION.md — Direction artistique et expérience utilisateur

## Objectif visuel

Créer un portfolio ultra moderne, premium et immersif.

Le style doit évoquer :

* technologie ;
* créativité ;
* sérieux ;
* mouvement ;
* clarté ;
* personnalité.

## Direction proposée

Style recommandé :

* fond sombre profond ;
* gradients violets/cyan/orange ;
* cartes semi-transparentes ;
* bordures fines lumineuses ;
* effets de profondeur ;
* typographie grande et impactante ;
* animations douces ;
* mise en page très aérée.

## Ambiance

Le site doit faire “portfolio tech créatif”, pas template générique.

Il doit être assez professionnel pour un recruteur, mais assez vivant pour représenter des projets personnels et artistiques.

## Typographie

Aucune police définitive n’est imposée.

Recommandation :

* utiliser une police système au départ pour éviter les dépendances ;
* prévoir une hiérarchie forte ;
* titres très visibles ;
* paragraphes lisibles ;
* éviter les polices trop fantaisie.

Pile de polices temporaire :

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

## Layout général

Chaque page doit suivre une structure claire :

```txt
Header
Main
  Hero de page
  Sections
Footer
```

Le contenu doit être centré avec une largeur maximale.

Utiliser :

```css
max-width: var(--max-width);
margin-inline: auto;
padding-inline: clamp(1rem, 4vw, 2rem);
```

## Accueil

Sections recommandées :

1. Hero principal
   Présentation courte + CTA.

2. Carrousel premium
   Trois slides :

   * parcours ;
   * projets ;
   * piano/créativité.

3. Projets mis en avant
   Cartes vers BrawlCards et Les Terres de Verdelya.

4. Parcours en chiffres
   Exemple :

   * 15 ans d’expérience ;
   * 13 ans Webmaster ;
   * 2 ans Technical Leader ;
   * projets React/TypeScript.

5. Section “Ce que je construis”
   Mettre en avant :

   * applications web ;
   * jeux ;
   * outils ;
   * interfaces modernes.

6. Footer.

## Micro-interactions

Utiliser des effets sobres :

* hover sur cartes ;
* bouton avec léger déplacement ;
* apparition douce des sections ;
* halo lumineux derrière certains éléments ;
* transition de slide fluide.

Ne pas faire d’animations qui gênent la lecture.

## Mobile first

Le site doit être très propre sur mobile.

Priorités mobile :

* menu simple ;
* gros boutons ;
* cartes empilées ;
* textes lisibles ;
* carrousel utilisable au doigt ;
* pas d’éléments trop petits.

