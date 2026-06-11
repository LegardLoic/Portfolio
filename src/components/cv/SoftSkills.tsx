import { cv } from "../../data/cv";

export function SoftSkills() {
  return (
    <section className="cv-section" aria-labelledby="cv-soft-skills-title">
      <div className="section__header">
        <p className="eyebrow">Compétences transverses</p>
        <h2 id="cv-soft-skills-title">Travailler proprement sur la durée</h2>
      </div>

      <div className="cv-soft-grid">
        {cv.softSkills.map((skill) => (
          <article className="cv-soft-card" key={skill.title}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

