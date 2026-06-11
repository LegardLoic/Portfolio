import type { PortfolioProject } from "../../types/content";
import { displayPlaceholderText } from "../../utils/placeholders";
import { projectStatusLabels } from "../projects/projectLabels";
import { Badge } from "../ui/Badge";

type StudyProjectDetailsProps = {
  project: PortfolioProject;
  index: number;
};

export function StudyProjectDetails({ project, index }: StudyProjectDetailsProps) {
  const caseStudy = project.caseStudy;
  const titleId = `study-project-${project.slug}`;
  const visualImage = project.coverImage ?? project.heroImage;

  return (
    <article className="study-project" aria-labelledby={titleId}>
      <div className="study-project__hero">
        <div>
          <p className="eyebrow">Projet d'étude {String(index + 1).padStart(2, "0")}</p>
          <h2 id={titleId}>{project.title}</h2>
          <p className="study-project__subtitle">
            {displayPlaceholderText(project.subtitle)}
          </p>
          <p>{displayPlaceholderText(project.description)}</p>
        </div>

        {visualImage ? (
          <div
            className={
              project.coverFit === "contain"
                ? "study-project__visual study-project__visual--image study-project__visual--image-contain"
                : "study-project__visual study-project__visual--image"
            }
          >
            <img alt={`Aperçu du projet ${project.title}`} src={visualImage} />
          </div>
        ) : (
          <div
            aria-label={`Visuel à venir pour ${project.title}`}
            className="study-project__visual"
            role="img"
          >
            <span>{project.title}</span>
            <strong>Capture à venir</strong>
          </div>
        )}
      </div>

      <div className="study-project__meta">
        <Badge tone="success">{projectStatusLabels[project.status]}</Badge>
        <Badge tone="primary">{displayPlaceholderText(caseStudy?.type, "Type à préciser")}</Badge>
      </div>

      <ul className="tag-list study-project__stack" aria-label={`Stack de ${project.title}`}>
        {project.stack.map((item) => (
          <li key={item}>{displayPlaceholderText(item, "Stack à préciser")}</li>
        ))}
      </ul>

      {caseStudy ? (
        <>
          <div className="study-project__split">
            <section aria-labelledby={`${project.slug}-context`}>
              <h3 id={`${project.slug}-context`}>Contexte</h3>
              <p>{displayPlaceholderText(caseStudy.overview)}</p>
            </section>

            <section aria-labelledby={`${project.slug}-goals`}>
              <h3 id={`${project.slug}-goals`}>Objectifs</h3>
              <ul className="check-list">
                {caseStudy.goals.map((goal) => (
                  <li key={goal}>{displayPlaceholderText(goal)}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="study-project__block" aria-labelledby={`${project.slug}-features`}>
            <h3 id={`${project.slug}-features`}>Fonctionnalités principales</h3>
            <div className="study-feature-grid">
              {caseStudy.features.map((feature) => (
                <article className="study-feature-card" key={feature.title}>
                  {feature.tag ? (
                    <span>{displayPlaceholderText(feature.tag, "À préciser")}</span>
                  ) : null}
                  <h4>{feature.title}</h4>
                  <p>{displayPlaceholderText(feature.description)}</p>
                </article>
              ))}
            </div>
          </section>

          {caseStudy.entities ? (
            <section className="study-project__block" aria-labelledby={`${project.slug}-entities`}>
              <h3 id={`${project.slug}-entities`}>Entités et domaine</h3>
              <ul className="entity-list" aria-label={`Entités de ${project.title}`}>
                {caseStudy.entities.map((entity) => (
                  <li key={entity}>{displayPlaceholderText(entity, "Entité à préciser")}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="study-project__split">
            <section aria-labelledby={`${project.slug}-learnings`}>
              <h3 id={`${project.slug}-learnings`}>Apprentissages</h3>
              <ul className="check-list">
                {caseStudy.learnings.map((learning) => (
                  <li key={learning}>{displayPlaceholderText(learning)}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby={`${project.slug}-proof`}>
              <h3 id={`${project.slug}-proof`}>Ce que le projet démontre</h3>
              <ul className="check-list">
                {caseStudy.challenges.map((challenge) => (
                  <li key={challenge.title}>
                    {challenge.title} - {displayPlaceholderText(challenge.description)}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="study-project__block" aria-labelledby={`${project.slug}-gallery`}>
            <h3 id={`${project.slug}-gallery`}>Galerie</h3>
            <div className="study-gallery-grid">
              {caseStudy.gallery.map((item) => (
                <article className="study-gallery-card" key={item.title}>
                  {item.image ? (
                    <img
                      alt={item.title}
                      className={
                        item.fit === "contain"
                          ? "study-gallery-card__image study-gallery-card__image--contain"
                          : "study-gallery-card__image"
                      }
                      loading="lazy"
                      src={item.image}
                    />
                  ) : (
                    <div role="img" aria-label={`${item.title} - capture à venir`}>
                      <span>Capture à venir</span>
                    </div>
                  )}
                  <h4>{item.title}</h4>
                  <p>{displayPlaceholderText(item.description, "Capture à ajouter.")}</p>
                </article>
              ))}
            </div>
          </section>
        </>
      ) : (
        <p className="todo-note">Détail de ce projet d'étude à ajouter.</p>
      )}
    </article>
  );
}
