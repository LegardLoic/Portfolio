import type { VideoItem } from "../../types/content";
import { displayPlaceholderText, hasValidExternalUrl } from "../../utils/placeholders";
import { Card } from "./Card";

type VideoCardProps = {
  video: VideoItem;
};

export function VideoCard({ video }: VideoCardProps) {
  const hasUrl = hasValidExternalUrl(video.youtubeUrl);
  const title = displayPlaceholderText(video.title, "Vidéo piano à ajouter");
  const description = displayPlaceholderText(video.description, "Description à ajouter.");

  return (
    <Card className="video-card">
      <div
        aria-label={hasUrl ? `Aperçu de la vidéo ${title}` : `${title} - vidéo à ajouter`}
        className="video-card__thumb"
        role="img"
      >
        {video.thumbnail ? <img alt="" loading="lazy" src={video.thumbnail} /> : null}
        <span>{hasUrl ? "YouTube" : "Vidéo à ajouter"}</span>
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
        <span className="todo-note">URL YouTube à compléter</span>
      )}
    </Card>
  );
}
