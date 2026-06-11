import type { ProjectCaseStudyItem } from "../../types/content";
import { displayPlaceholderText } from "../../utils/placeholders";

type ProjectFeatureGridProps = {
  eyebrow: string;
  title: string;
  description?: string;
  items: ProjectCaseStudyItem[];
};

export function ProjectFeatureGrid({
  eyebrow,
  title,
  description,
  items,
}: ProjectFeatureGridProps) {
  const titleId = `project-${eyebrow.toLowerCase().replace(/\s+/g, "-")}-title`;

  return (
    <section className="project-section" aria-labelledby={titleId}>
      <div className="section__header">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>

      <div className="project-feature-grid">
        {items.map((item) => (
          <article className="project-feature-card" key={item.title}>
            {item.tag ? <span>{displayPlaceholderText(item.tag, "À préciser")}</span> : null}
            <h3>{item.title}</h3>
            <p>{displayPlaceholderText(item.description)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
