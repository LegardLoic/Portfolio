import type { PortfolioProject } from "../../types/content";
import { ButtonLink } from "../ui/Button";
import { ProjectFeatureGrid } from "./ProjectFeatureGrid";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectHero } from "./ProjectHero";
import { ProjectNarrative } from "./ProjectNarrative";
import { ProjectOverview } from "./ProjectOverview";
import { ProjectRoadmap } from "./ProjectRoadmap";
import { ProjectShowcaseStrip } from "./ProjectShowcaseStrip";
import { ProjectTechStack } from "./ProjectTechStack";

type ProjectCaseStudyProps = {
  project: PortfolioProject;
};

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const caseStudy = project.caseStudy;

  if (!caseStudy) {
    return (
      <>
        <ProjectHero project={project} />
        <section className="project-section">
          <div className="placeholder-band">
            <p>Contenu case study à ajouter pour ce projet.</p>
            <ButtonLink to="/" variant="ghost">
              Retour à l'accueil
            </ButtonLink>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectNarrative caseStudy={caseStudy} />
      <ProjectFeatureGrid
        description="Les fonctionnalités ci-dessous résument les systèmes principaux déjà identifiés pour ce projet."
        eyebrow="Fonctionnalités"
        items={caseStudy.features}
        title="Fonctionnalités principales"
      />
      <ProjectTechStack stack={project.stack} />
      {caseStudy.showcase ? <ProjectShowcaseStrip items={caseStudy.showcase} /> : null}
      <ProjectFeatureGrid
        description="Les points techniques qui rendent le projet intéressant à présenter dans un portfolio."
        eyebrow="Défis techniques"
        items={caseStudy.challenges}
        title="Problèmes intéressants"
      />
      <ProjectRoadmap learnings={caseStudy.learnings} roadmap={caseStudy.roadmap} />
      <ProjectGallery gallery={caseStudy.gallery} />
    </>
  );
}
