import { useEffect, useId } from "react";

export type LightboxImage = {
  src: string;
  title: string;
  description?: string;
};

type ImageLightboxProps = {
  image?: LightboxImage;
  onClose: () => void;
};

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      aria-describedby={image.description ? descriptionId : undefined}
      aria-labelledby={titleId}
      aria-modal="true"
      className="image-lightbox"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
    >
      <figure className="image-lightbox__figure">
        <button
          autoFocus
          className="image-lightbox__close"
          onClick={onClose}
          type="button"
        >
          Fermer
        </button>
        <img alt={image.title} src={image.src} />
        <figcaption className="image-lightbox__caption">
          <h2 id={titleId}>{image.title}</h2>
          {image.description ? <p id={descriptionId}>{image.description}</p> : null}
        </figcaption>
      </figure>
    </div>
  );
}
