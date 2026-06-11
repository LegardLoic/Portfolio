import { displayPlaceholderText } from "../../utils/placeholders";

type ProjectRoadmapProps = {
  learnings: string[];
  roadmap: string[];
};

export function ProjectRoadmap({ learnings, roadmap }: ProjectRoadmapProps) {
  return (
    <section className="project-section project-roadmap" aria-labelledby="project-roadmap-title">
      <div className="section__header">
        <p className="eyebrow">Suite</p>
        <h2 id="project-roadmap-title">Apprentissages et roadmap</h2>
      </div>

      <div className="project-roadmap__grid">
        <article className="project-copy-panel">
          <h3>Ce que ce projet m'a appris</h3>
          <ul className="check-list">
            {learnings.map((learning) => (
              <li key={learning}>{displayPlaceholderText(learning)}</li>
            ))}
          </ul>
        </article>

        <article className="project-copy-panel">
          <h3>Prochaines évolutions</h3>
          <ul className="check-list">
            {roadmap.map((item) => (
              <li key={item}>{displayPlaceholderText(item)}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
