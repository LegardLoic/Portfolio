import { cv } from "../../data/cv";
import { profile } from "../../data/profile";
import { hasValidExternalUrl } from "../../utils/placeholders";
import { Badge } from "../ui/Badge";
import { ButtonLink } from "../ui/Button";

export function CvHero() {
  const hasCvPdf = hasValidExternalUrl(cv.cvPdfUrl);

  return (
    <section className="cv-hero" aria-labelledby="cv-hero-title">
      <div className="cv-hero__content">
        <p className="eyebrow">CV</p>
        <h1 id="cv-hero-title">{cv.displayName}</h1>
        <p className="cv-hero__role">{cv.role}</p>
        <p className="cv-hero__headline">{cv.headline}</p>

        <div className="cv-hero__meta" aria-label="Informations principales">
          <Badge tone="primary">{cv.location}</Badge>
          <Badge tone="success">{profile.experience.totalYears} ans d'expérience</Badge>
        </div>

        <div className="cv-hero__actions">
          <ButtonLink to="/projects/brawlcards-origins">Voir les projets</ButtonLink>
          {hasCvPdf ? (
            <ButtonLink href={cv.cvPdfUrl} variant="secondary">
              Télécharger le CV
            </ButtonLink>
          ) : (
            <span className="cv-disabled-action">CV PDF bientôt disponible</span>
          )}
        </div>
      </div>

      <div className="cv-hero__panel" aria-label="Synthèse professionnelle">
        <span>Profil web</span>
        <strong>{profile.experience.totalYears} ans</strong>
        <p>Maintenance, évolution de sites, coordination technique et interfaces modernes.</p>
      </div>
    </section>
  );
}
