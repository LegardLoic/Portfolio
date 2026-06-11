import type { ProjectGalleryItem } from "../../types/content";
import { displayPlaceholderText } from "../../utils/placeholders";

type ProjectGalleryProps = {
  gallery: ProjectGalleryItem[];
};

export function ProjectGallery({ gallery }: ProjectGalleryProps) {
  return (
    <section className="project-section" aria-labelledby="project-gallery-title">
      <div className="section__header">
        <p className="eyebrow">Galerie</p>
        <h2 id="project-gallery-title">Captures et visuels</h2>
        <p>Les blocs sont prêts à recevoir de vraies captures lorsque les visuels seront fournis.</p>
      </div>

      <div className="project-gallery-grid">
        {gallery.map((item) => (
          <article className="project-gallery-card" key={item.title}>
            {item.image ? (
              <img
                alt={item.title}
                className={
                  item.fit === "contain"
                    ? "project-gallery-card__image project-gallery-card__image--contain"
                    : "project-gallery-card__image"
                }
                loading="lazy"
                src={item.image}
              />
            ) : (
              <div
                aria-label={`${item.title} - capture à venir`}
                className="project-gallery-card__placeholder"
                role="img"
              >
                <span>Capture à venir</span>
              </div>
            )}
            <div>
              <h3>{item.title}</h3>
              <p>{displayPlaceholderText(item.description, "Capture à ajouter.")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
