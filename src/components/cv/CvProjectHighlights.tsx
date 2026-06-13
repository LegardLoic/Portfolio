import { cv } from "../../data/cv";
import { displayPlaceholderText } from "../../utils/placeholders";
import { ButtonLink } from "../ui/Button";

export function CvProjectHighlights() {
  return (
    <section className="cv-section" aria-labelledby="cv-projects-title">
      <div className="section__header">
        <p className="eyebrow">Projets significatifs</p>
        <h2 id="cv-projects-title">Projets à découvrir</h2>
        <p>Des exemples visibles pour compléter le parcours avec du concret : interfaces, logique métier et architecture.</p>
      </div>

      <div className="cv-project-grid">
        {cv.featuredProjects.map((project) => (
          <article className="cv-project-card" key={project.title}>
            <span>{project.type}</span>
            <h3>{project.title}</h3>
            <ul className="tag-list" aria-label={`Stack de ${project.title}`}>
              {project.stack.map((item) => (
                <li key={item}>{displayPlaceholderText(item, "Stack à préciser")}</li>
              ))}
            </ul>
            <ButtonLink to={project.to} variant="secondary">
              Voir
            </ButtonLink>
          </article>
        ))}
      </div>
    </section>
  );
}
