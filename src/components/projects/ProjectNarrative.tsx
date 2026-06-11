import type { ProjectCaseStudy } from "../../types/content";
import { displayPlaceholderText } from "../../utils/placeholders";

type ProjectNarrativeProps = {
  caseStudy: ProjectCaseStudy;
};

export function ProjectNarrative({ caseStudy }: ProjectNarrativeProps) {
  return (
    <section className="project-section project-narrative" aria-labelledby="project-context-title">
      <div className="section__header">
        <p className="eyebrow">Contexte</p>
        <h2 id="project-context-title">Pourquoi ce projet existe</h2>
      </div>

      <div className="project-narrative__grid">
        <article className="project-copy-panel">
          <h3>Vue d'ensemble</h3>
          <p>{displayPlaceholderText(caseStudy.overview)}</p>
        </article>

        <article className="project-copy-panel">
          <h3>Objectifs</h3>
          <ul className="check-list">
            {caseStudy.goals.map((goal) => (
              <li key={goal}>{displayPlaceholderText(goal)}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
