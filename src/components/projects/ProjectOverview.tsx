import type { PortfolioProject } from "../../types/content";
import { displayPlaceholderText } from "../../utils/placeholders";
import { projectStatusLabels } from "./projectLabels";

type ProjectOverviewProps = {
  project: PortfolioProject;
};

export function ProjectOverview({ project }: ProjectOverviewProps) {
  const caseStudy = project.caseStudy;
  const overviewItems = [
    {
      label: "Type",
      value: displayPlaceholderText(caseStudy?.type, "Type à préciser"),
    },
    {
      label: "Rôle",
      value: displayPlaceholderText(caseStudy?.role, "Rôle à préciser"),
    },
    {
      label: "Période",
      value: displayPlaceholderText(caseStudy?.period, "Période à préciser"),
    },
    {
      label: "Statut",
      value: projectStatusLabels[project.status],
    },
  ];

  return (
    <section className="project-section" aria-labelledby="project-overview-title">
      <div className="section__header">
        <p className="eyebrow">Résumé rapide</p>
        <h2 id="project-overview-title">Repères projet</h2>
      </div>

      <div className="project-overview-grid">
        {overviewItems.map((item) => (
          <article className="project-overview-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
