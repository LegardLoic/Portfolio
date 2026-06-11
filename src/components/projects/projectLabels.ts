import type { PortfolioProject } from "../../types/content";

export const projectStatusLabels: Record<PortfolioProject["status"], string> = {
  "in-progress": "En cours",
  paused: "En pause",
  completed: "Terminé",
  prototype: "Prototype",
};

export const projectCategoryLabels: Record<PortfolioProject["category"], string> = {
  personal: "Projet personnel",
  study: "Projet d'étude",
};

