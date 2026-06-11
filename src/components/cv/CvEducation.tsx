import { cv } from "../../data/cv";
import { displayPlaceholderText } from "../../utils/placeholders";

export function CvEducation() {
  return (
    <section className="cv-section" aria-labelledby="cv-education-title">
      <div className="section__header">
        <p className="eyebrow">Formation et apprentissage</p>
        <h2 id="cv-education-title">Progression continue</h2>
      </div>

      <div className="cv-education-grid">
        {cv.education.map((item) => (
          <article className="cv-education-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>
              {displayPlaceholderText(
                item.description,
                "Formation, certification ou parcours exact à ajouter.",
              )}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
