import type { ProjectGalleryItem } from "../../types/content";

type ProjectShowcaseStripProps = {
  items: ProjectGalleryItem[];
};

export function ProjectShowcaseStrip({ items }: ProjectShowcaseStripProps) {
  if (items.length === 0) {
    return null;
  }

  const loopItems = [...items, ...items];

  return (
    <section className="project-section project-showcase" aria-labelledby="project-showcase-title">
      <div className="section__header">
        <p className="eyebrow">Cartes du jeu</p>
        <h2 id="project-showcase-title">Un aperçu des familles et personnages</h2>
        <p>
          Quelques cartes issues du projet, présentées comme un aperçu visuel de
          l'identité du jeu.
        </p>
      </div>

      <div className="project-showcase__viewport" aria-label="Aperçu des cartes BrawlCards">
        <div className="project-showcase__track">
          {loopItems.map((item, index) => (
            <figure
              aria-hidden={index >= items.length}
              className="project-showcase-card"
              key={`${item.title}-${index}`}
            >
              {item.image ? (
                <img alt={index < items.length ? item.title : ""} loading="lazy" src={item.image} />
              ) : null}
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
