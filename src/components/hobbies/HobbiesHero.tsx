import { hobbies } from "../../data/hobbies";
import { ButtonLink } from "../ui/Button";

export function HobbiesHero() {
  const scrollToVideos = () => {
    const videosSection = document.getElementById("hobby-videos");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    videosSection?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="hobbies-hero" aria-labelledby="hobbies-hero-title">
      <div className="hobbies-hero__content">
        <p className="eyebrow">Piano et créativité</p>
        <h1 id="hobbies-hero-title">Musique, rythme et interfaces vivantes</h1>
        <p>{hobbies.intro}</p>
        <p className="hobbies-hero__lead">
          Le piano est une autre manière de construire : rythme, progression, émotion
          et précision se retrouvent aussi dans ma façon de concevoir des projets web.
        </p>
        <div className="hobbies-hero__actions">
          <button className="button button--primary" onClick={scrollToVideos} type="button">
            Voir les vidéos
          </button>
          <ButtonLink to="/projects/brawlcards-origins" variant="secondary">
            Découvrir les projets
          </ButtonLink>
        </div>
      </div>

      <div
        aria-label="Illustration abstraite inspirée du piano"
        className="hobbies-hero__visual"
        role="img"
      >
        <div className="music-panel">
          <span className="music-panel__label">Piano</span>
          <div className="music-panel__wave" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="music-panel__keys" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <strong>{hobbies.mainHobby.subtitle}</strong>
        </div>
      </div>
    </section>
  );
}
