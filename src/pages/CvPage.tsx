import { CvCallToAction } from "../components/cv/CvCallToAction";
import { CvEducation } from "../components/cv/CvEducation";
import { CvHero } from "../components/cv/CvHero";
import { CvProjectHighlights } from "../components/cv/CvProjectHighlights";
import { CvStats } from "../components/cv/CvStats";
import { ExperienceTimeline } from "../components/cv/ExperienceTimeline";
import { SkillMatrix } from "../components/cv/SkillMatrix";
import { SoftSkills } from "../components/cv/SoftSkills";
import { cv } from "../data/cv";

export function CvPage() {
  return (
    <>
      <CvHero />

      <section className="cv-section cv-summary" aria-labelledby="cv-summary-title">
        <div className="section__header">
          <p className="eyebrow">Résumé professionnel</p>
          <h2 id="cv-summary-title">Un profil web orienté stabilité, évolution et qualité</h2>
        </div>
        <p>{cv.summary}</p>
      </section>

      <CvStats />
      <ExperienceTimeline />
      <SkillMatrix />
      <SoftSkills />
      <CvProjectHighlights />
      <CvEducation />
      <CvCallToAction />
    </>
  );
}

