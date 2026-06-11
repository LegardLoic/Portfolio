import type { PortfolioProject } from "../../types/content";
import { displayPlaceholderText } from "../../utils/placeholders";
import { Badge } from "./Badge";
import { ButtonLink } from "./Button";
import { Card } from "./Card";

const statusLabels: Record<PortfolioProject["status"], string> = {
  "in-progress": "En cours",
  paused: "En pause",
  completed: "Terminé",
  prototype: "Prototype",
};

type ProjectCardProps = {
  project: PortfolioProject;
  to?: string;
};

export function ProjectCard({ project, to }: ProjectCardProps) {
  const visibleStack = project.stack.map((item) =>
    displayPlaceholderText(item, "Stack à préciser"),
  );

  return (
    <Card className="project-card">
      <div className="project-card__top">
        <div className="project-card__meta">
          <Badge tone={project.category === "personal" ? "primary" : "success"}>
            {project.category === "personal" ? "Projet personnel" : "Projet d'étude"}
          </Badge>
          <Badge tone="warning">{statusLabels[project.status]}</Badge>
        </div>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__subtitle">
          {displayPlaceholderText(project.subtitle)}
        </p>
        <p className="project-card__description">
          {displayPlaceholderText(project.description)}
        </p>
      </div>

      <div className="project-card__preview" aria-hidden="true">
        <span>{project.title}</span>
        <strong>{visibleStack.slice(0, 3).join(" · ")}</strong>
      </div>

      <ul className="tag-list" aria-label={`Stack technique de ${project.title}`}>
        {project.stack.map((item) => (
          <li key={item}>{displayPlaceholderText(item, "Stack à préciser")}</li>
        ))}
      </ul>
      {to ? (
        <ButtonLink to={to} variant="secondary">
          Voir le projet
        </ButtonLink>
      ) : null}
    </Card>
  );
}
