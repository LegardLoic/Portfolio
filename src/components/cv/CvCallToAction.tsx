import { cv } from "../../data/cv";
import { hasValidExternalUrl } from "../../utils/placeholders";
import { ButtonLink } from "../ui/Button";

export function CvCallToAction() {
  const hasCvPdf = hasValidExternalUrl(cv.cvPdfUrl);
  const hasLinkedIn = hasValidExternalUrl(cv.linkedinUrl);

  return (
    <section className="cv-cta" aria-labelledby="cv-cta-title">
      <div>
        <p className="eyebrow">Contact et suite</p>
        <h2 id="cv-cta-title">Voir le travail derrière le parcours</h2>
        <p>
          Le CV donne la synthèse. Les pages projets montrent la pratique, les choix techniques
          et la progression récente sur des interfaces modernes.
        </p>
      </div>

      <div className="cv-cta__actions">
        <ButtonLink to="/projects/brawlcards-origins">Découvrir mes projets</ButtonLink>
        <ButtonLink to="/study-projects" variant="secondary">
          Projets d'étude
        </ButtonLink>
        {hasLinkedIn ? (
          <ButtonLink href={cv.linkedinUrl} variant="secondary">
            LinkedIn
          </ButtonLink>
        ) : (
          <span className="cv-disabled-action">LinkedIn non disponible pour le moment</span>
        )}
        {hasCvPdf ? (
          <ButtonLink href={cv.cvPdfUrl} variant="ghost">
            Télécharger le CV
          </ButtonLink>
        ) : null}
      </div>
    </section>
  );
}
