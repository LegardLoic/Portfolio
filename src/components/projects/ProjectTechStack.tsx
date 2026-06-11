import { displayPlaceholderText } from "../../utils/placeholders";

type ProjectTechStackProps = {
  stack: string[];
};

export function ProjectTechStack({ stack }: ProjectTechStackProps) {
  return (
    <section className="project-section" aria-labelledby="project-stack-title">
      <div className="section__header">
        <p className="eyebrow">Stack technique</p>
        <h2 id="project-stack-title">Technologies utilisées</h2>
        <p>Une lecture rapide des technologies déclarées dans les données du projet.</p>
      </div>

      <div className="project-stack-grid">
        {stack.map((item) => (
          <article className="project-stack-card" key={item}>
            <span>{displayPlaceholderText(item, "Stack à préciser")}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
