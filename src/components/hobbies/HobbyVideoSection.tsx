import { hobbies } from "../../data/hobbies";
import { VideoCard } from "../ui/VideoCard";

export function HobbyVideoSection() {
  return (
    <section
      aria-labelledby="hobby-videos-title"
      className="hobby-section hobby-video-section"
      id="hobby-videos"
    >
      <div className="section__header">
        <p className="eyebrow">Sélection YouTube</p>
        <h2 id="hobby-videos-title">Vidéos piano</h2>
        <p>
          La structure est prête pour accueillir des vidéos YouTube réelles dès que les
          liens seront fournis. En attendant, les cartes restent propres et explicites.
        </p>
      </div>

      <div className="hobby-video-grid">
        {hobbies.mainHobby.videos.map((video) => (
          <VideoCard key={video.title} video={video} />
        ))}
      </div>
    </section>
  );
}
