import type { VideoItem } from "../../types/content";
import { displayPlaceholderText, hasValidExternalUrl } from "../../utils/placeholders";
import { Card } from "./Card";

type VideoCardProps = {
  video: VideoItem;
};

function getYoutubeEmbedUrl(url?: string) {
  if (!url || !hasValidExternalUrl(url)) {
    return undefined;
  }

  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, "");
    const videoId =
      host === "youtu.be"
        ? parsedUrl.pathname.slice(1)
        : parsedUrl.searchParams.get("v") ??
          parsedUrl.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1];

    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : undefined;
  } catch {
    return undefined;
  }
}

export function VideoCard({ video }: VideoCardProps) {
  const hasUrl = hasValidExternalUrl(video.youtubeUrl);
  const embedUrl = getYoutubeEmbedUrl(video.youtubeUrl);
  const title = displayPlaceholderText(video.title, "Vidéo piano en préparation");
  const description = displayPlaceholderText(video.description, "La description sera ajoutée avec la vidéo.");

  return (
    <Card className="video-card">
      <div className="video-card__player">
        {embedUrl ? (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={embedUrl}
            title={title}
          />
        ) : (
          <div
            aria-label={`${title} - vidéo en préparation`}
            className="video-card__fallback"
            role="img"
          >
            {video.thumbnail ? <img alt="" loading="lazy" src={video.thumbnail} /> : null}
            <span>Vidéo en préparation</span>
          </div>
        )}
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
