import { useParams } from "react-router-dom";

import { ProjectCaseStudy } from "../components/projects/ProjectCaseStudy";
import { projects } from "../data/projects";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return <ProjectCaseStudy project={project} />;
}

