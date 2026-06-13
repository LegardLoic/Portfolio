import type { PortfolioProject } from "../../types/content";
import { displayPlaceholderText } from "../../utils/placeholders";
import { Badge } from "../ui/Badge";
import { ButtonLink } from "../ui/Button";
import { projectCategoryLabels, projectStatusLabels } from "./projectLabels";

type ProjectHeroProps = {
  project: PortfolioProject;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const visualImage = project.coverImage ?? project.heroImage;
  const hasCoverImage = Boolean(project.coverImage);
  const visualCardClassName = [
    "project-visual-card",
    visualImage ? "project-visual-card--image" : "",
    hasCoverImage ? "project-visual-card--cover" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="project-hero" aria-labelledby="project-title">
      <div className="project-hero__content">
        <p className="eyebrow">{projectCategoryLabels[project.category]}</p>
        <h1 id="project-title">{project.title}</h1>
        <p className="project-hero__subtitle">{project.subtitle}</p>
        <p className="project-hero__description">{project.description}</p>

        <div className="project-hero__meta" aria-label="Informations projet">
          <Badge tone="warning">{projectStatusLabels[project.status]}</Badge>
          <Badge tone="primary">
            {displayPlaceholderText(project.caseStudy?.type, "Type à préciser")}
          </Badge>
        </div>

        <ul className="tag-list project-hero__stack" aria-label="Stack principale">
          {project.stack.map((item) => (
            <li key={item}>{displayPlaceholderText(item, "Stack à préciser")}</li>
          ))}
        </ul>

        <div className="project-hero__actions">
          {project.links.length > 0 ? (
            project.links.map((link) => (
              <ButtonLink href={link.url} key={link.label}>
                {link.label}
              </ButtonLink>
            ))
          ) : (
            <span className="todo-note">Prototype en développement, partage public à venir.</span>
          )}
          <ButtonLink to="/" variant="secondary">
            Retour à l'accueil
          </ButtonLink>
        </div>
      </div>

      <div
        aria-label={
          visualImage
            ? `Visuel du projet ${project.title}`
            : `Visuel en préparation pour ${project.title}`
        }
        className="project-hero__visual"
        role="img"
      >
        <div className={visualCardClassName}>
          {hasCoverImage && visualImage ? (
            <>
              <div className="project-visual-cover__media">
                <img alt="" src={visualImage} />
              </div>
              <div className="project-visual-cover__details">
                {project.highlights.slice(0, 3).map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </>
          ) : (
            <>
              <span>{project.title}</span>
              {visualImage ? (
                <img alt="" src={visualImage} />
              ) : (
                <strong>Visuel en préparation</strong>
              )}
              <p>
                {displayPlaceholderText(
                  project.caseStudy?.objective,
                  "Objectif du projet en cours de clarification.",
                )}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
