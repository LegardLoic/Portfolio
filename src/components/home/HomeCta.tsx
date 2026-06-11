import { homeCta } from "../../data/home";
import { ButtonLink } from "../ui/Button";

export function HomeCta() {
  return (
    <section className="home-cta" aria-labelledby="home-cta-title">
      <div>
        <p className="eyebrow">{homeCta.eyebrow}</p>
        <h2 id="home-cta-title">{homeCta.title}</h2>
        <p>{homeCta.description}</p>
        <ul className="home-cta__stack" aria-label="Technologies mises en avant">
          <li>React</li>
          <li>TypeScript</li>
          <li>Unity</li>
          <li>Symfony</li>
        </ul>
      </div>

      <div className="home-cta__actions">
        <ButtonLink to={homeCta.primaryCta.to}>{homeCta.primaryCta.label}</ButtonLink>
        <ButtonLink to={homeCta.secondaryCta.to} variant="secondary">
          {homeCta.secondaryCta.label}
        </ButtonLink>
      </div>
    </section>
  );
}
