import { HashRouter, Route, Routes } from "react-router-dom";

import { PageShell } from "../components/layout/PageShell";
import { CvPage } from "../pages/CvPage";
import { HobbiesPage } from "../pages/HobbiesPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectPage } from "../pages/ProjectPage";
import { StudyProjectsPage } from "../pages/StudyProjectsPage";

export function AppRouter() {
  return (
    <HashRouter>
      <PageShell>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProjectPage />} path="/projects/:slug" />
          <Route element={<StudyProjectsPage />} path="/study-projects" />
          <Route element={<CvPage />} path="/cv" />
          <Route element={<HobbiesPage />} path="/hobbies" />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </PageShell>
    </HashRouter>
  );
}

