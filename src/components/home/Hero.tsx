import { homeHero } from "../../data/home";
import { ButtonLink } from "../ui/Button";

export function Hero() {
  const roleItems = ["Expert JavaScript", "Technical Leader", "Webmaster"];

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__scene" aria-hidden="true">
        <div className="hero-visual">
          <div className="hero-visual__topline">
            <span>Portfolio system</span>
            <span>GitHub Pages</span>
          </div>

          <div className="hero-visual__spotlight">
            <span>15 ans</span>
            <strong>web, produit & interfaces</strong>
          </div>

          <div className="hero-visual__tracks">
            <div>
              <span>Front-end</span>
              <strong>React · TypeScript</strong>
            </div>
            <div>
              <span>Projets</span>
              <strong>BrawlCards · Verdelya</strong>
            </div>
            <div>
              <span>Créatif</span>
              <strong>Piano · expériences web</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="home-hero__content">
        <p className="eyebrow">{homeHero.eyebrow}</p>
        <h1 id="home-hero-title">{homeHero.title}</h1>
        <p className="home-hero__lead">{homeHero.description}</p>

        <ul className="home-hero__roles" aria-label="Positionnement professionnel">
          {roleItems.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>

        <div className="home-hero__actions">
          <ButtonLink to={homeHero.primaryCta.to}>{homeHero.primaryCta.label}</ButtonLink>
          <ButtonLink to={homeHero.secondaryCta.to} variant="secondary">
            {homeHero.secondaryCta.label}
          </ButtonLink>
        </div>

        <div className="home-hero__proof" role="list" aria-label="Chiffres clés">
          {homeHero.proofPoints.map((point) => (
            <div key={point.label} role="listitem">
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
