import { useState } from "react";
import type { ProjectGalleryItem } from "../../types/content";
import { displayPlaceholderText } from "../../utils/placeholders";
import { ImageLightbox, type LightboxImage } from "../ui/ImageLightbox";

type ProjectGalleryProps = {
  gallery: ProjectGalleryItem[];
};

export function ProjectGallery({ gallery }: ProjectGalleryProps) {
  const hasRealImages = gallery.some((item) => Boolean(item.image));
  const [activeImage, setActiveImage] = useState<LightboxImage>();
  const openImage = (item: ProjectGalleryItem) => {
    if (!item.image) {
      return;
    }

    setActiveImage({
      description: item.description,
      src: item.image,
      title: item.title,
    });
  };

  return (
    <>
      <section className="project-section" aria-labelledby="project-gallery-title">
        <div className="section__header">
          <p className="eyebrow">Galerie</p>
          <h2 id="project-gallery-title">Captures et visuels</h2>
          <p>
            {hasRealImages
              ? "Quelques écrans pour voir le projet tel qu'il existe, avec son interface, son ambiance et ses systèmes."
              : "Les visuels seront ajoutés lorsque le projet aura des captures assez propres pour être partagées."}
          </p>
        </div>

        <div className="project-gallery-grid">
          {gallery.map((item) => (
            <article className="project-gallery-card" key={item.title}>
              {item.image ? (
                <button
                  aria-label={`Voir ${item.title} en plein écran`}
                  className="gallery-image-button"
                  onClick={() => openImage(item)}
                  type="button"
                >
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
                  <span>Agrandir</span>
                </button>
              ) : (
                <div
                  aria-label={`${item.title} - visuel en préparation`}
                  className="project-gallery-card__placeholder"
                  role="img"
                >
                  <span>Visuel en préparation</span>
                </div>
              )}
              <div>
                <h3>{item.title}</h3>
                <p>
                  {displayPlaceholderText(
                    item.description,
                    "Visuel prévu lorsque le projet sera prêt à être montré.",
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(undefined)} />
    </>
  );
}
