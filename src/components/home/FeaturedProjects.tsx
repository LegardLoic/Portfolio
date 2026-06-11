import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { Section } from "../ui/Section";

export function FeaturedProjects() {
  return (
    <Section
      className="featured-projects"
      description="BrawlCards: Origins et Les Terres de Verdelya structurent la partie projets personnels. Les cartes restent alimentées par les données TypeScript."
      eyebrow="Projets mis en avant"
      title="Des projets personnels avec une logique produit"
    >
      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            to={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </Section>
  );
}
