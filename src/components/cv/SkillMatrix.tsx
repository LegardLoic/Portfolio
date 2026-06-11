import { cv } from "../../data/cv";

export function SkillMatrix() {
  return (
    <section className="cv-section" aria-labelledby="cv-skills-title">
      <div className="section__header">
        <p className="eyebrow">Compétences techniques</p>
        <h2 id="cv-skills-title">Socle web et outils modernes</h2>
      </div>

      <div className="cv-skill-grid">
        {cv.skillGroups.map((group) => (
          <article className="cv-skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="tag-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

