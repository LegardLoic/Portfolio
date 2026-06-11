import { cv } from "../../data/cv";

export function ExperienceTimeline() {
  return (
    <section className="cv-section" aria-labelledby="cv-experience-title">
      <div className="section__header">
        <p className="eyebrow">Expérience</p>
        <h2 id="cv-experience-title">Timeline professionnelle</h2>
        <p>Une structure honnête avec les informations disponibles, prête à recevoir les dates et entreprises exactes.</p>
      </div>

      <div className="cv-timeline">
        {cv.experiences.map((experience) => (
          <article className="cv-timeline-item" key={experience.title}>
            <div className="cv-timeline-item__marker" aria-hidden="true" />
            <div className="cv-timeline-item__content">
              <span>{experience.duration}</span>
              <h3>{experience.title}</h3>
              <p className="cv-timeline-item__period">{experience.period}</p>
              <p>{experience.description}</p>
              <ul className="check-list">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

