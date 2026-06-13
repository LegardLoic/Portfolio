import type { VideoItem } from "../../types/content";
import { displayPlaceholderText, hasValidExternalUrl } from "../../utils/placeholders";
import { Card } from "./Card";

type VideoCardProps = {
  video: VideoItem;
};

export function VideoCard({ video }: VideoCardProps) {
  const hasUrl = hasValidExternalUrl(video.youtubeUrl);
  const title = displayPlaceholderText(video.title, "Vidéo piano en préparation");
  const description = displayPlaceholderText(video.description, "La description sera ajoutée avec la vidéo.");

  return (
    <Card className="video-card">
      <div
        aria-label={hasUrl ? `Aperçu de la vidéo ${title}` : `${title} - vidéo en préparation`}
        className="video-card__thumb"
        role="img"
      >
        {video.thumbnail ? <img alt="" loading="lazy" src={video.thumbnail} /> : null}
        <span>{hasUrl ? "YouTube" : "Vidéo en préparation"}</span>
      </div>
      {video.featured ? <span className="video-card__badge">Sélection</span> : null}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {hasUrl ? (
        <a href={video.youtubeUrl} rel="noreferrer" target="_blank">
          Voir sur YouTube
        </a>
      ) : (
        <span className="todo-note">Lien YouTube en attente</span>
      )}
    </Card>
  );
}
