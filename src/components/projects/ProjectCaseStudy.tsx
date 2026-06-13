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
            <p>Cette page sera enrichie dès que le projet aura suffisamment de matière à montrer.</p>
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
        description="Les éléments qui donnent sa forme au projet aujourd'hui, entre usage, interaction et logique métier."
        eyebrow="Fonctionnalités"
        items={caseStudy.features}
        title="Fonctionnalités principales"
      />
      <ProjectTechStack stack={project.stack} />
      {caseStudy.showcase ? <ProjectShowcaseStrip items={caseStudy.showcase} /> : null}
      <ProjectFeatureGrid
        description="Les sujets sur lesquels le projet demande de vrais choix : architecture, lisibilité, progression et qualité d'expérience."
        eyebrow="Défis techniques"
        items={caseStudy.challenges}
        title="Ce qui demande du recul"
      />
      <ProjectRoadmap learnings={caseStudy.learnings} roadmap={caseStudy.roadmap} />
      <ProjectGallery gallery={caseStudy.gallery} />
    </>
  );
}
