import { StudyProjectDetails } from "../components/study/StudyProjectDetails";
import { ButtonLink } from "../components/ui/Button";
import { studyProjects } from "../data/studyProjects";

const studySkills = Array.from(
  new Set(studyProjects.flatMap((project) => project.caseStudy?.skills ?? project.stack)),
);

export function StudyProjectsPage() {
  return (
    <>
      <section className="study-hero" aria-labelledby="study-hero-title">
        <div className="study-hero__content">
          <p className="eyebrow">Formation et pratique</p>
          <h1 id="study-hero-title">Projets d'étude</h1>
          <p>
            Ces projets d'étude m'ont permis de consolider mes compétences en
            développement web, de travailler sur des architectures complètes et de
            transformer des consignes techniques en applications concrètes.
          </p>
          <div className="study-hero__actions">
            <ButtonLink to="/cv">Voir le CV</ButtonLink>
            <ButtonLink to="/projects/brawlcards-origins" variant="secondary">
              Projets personnels
            </ButtonLink>
          </div>
        </div>

        <div className="study-hero__panel" aria-label="Compétences valorisées">
          <span>Apprentissage</span>
          <strong>Modéliser, structurer, livrer</strong>
          <p>
            Une sélection de projets pour montrer la progression technique, la
            manipulation de données et la construction d'interfaces web.
          </p>
        </div>
      </section>

      <section className="study-intro" aria-labelledby="study-intro-title">
        <div className="section__header">
          <p className="eyebrow">Approche</p>
          <h2 id="study-intro-title">Des exercices transformés en preuves de compétence</h2>
          <p>
            La page met l'accent sur ce que chaque projet démontre : compréhension du
            domaine, organisation du code, choix techniques et capacité à construire une
            expérience web cohérente.
          </p>
        </div>
      </section>

      <section className="study-project-list" aria-label="Liste des projets d'étude">
        {studyProjects.map((project, index) => (
          <StudyProjectDetails index={index} key={project.slug} project={project} />
        ))}
      </section>

      <section className="study-skills" aria-labelledby="study-skills-title">
        <div className="section__header">
          <p className="eyebrow">Compétences travaillées</p>
          <h2 id="study-skills-title">Ce que ces projets mettent en pratique</h2>
        </div>

        <ul className="study-skill-list">
          {studySkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="study-cta" aria-labelledby="study-cta-title">
        <div>
          <p className="eyebrow">Continuer la visite</p>
          <h2 id="study-cta-title">Voir aussi les projets personnels</h2>
          <p>
            Les projets personnels complètent cette progression avec des pages case study
            orientées produit, gameplay et logique front-end avancée.
          </p>
        </div>
        <div className="study-cta__actions">
          <ButtonLink to="/projects/brawlcards-origins">BrawlCards: Origins</ButtonLink>
          <ButtonLink to="/projects/les-terres-de-verdelya" variant="secondary">
            Les Terres de Verdelya
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
