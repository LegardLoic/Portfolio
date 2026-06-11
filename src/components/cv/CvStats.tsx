import { cv } from "../../data/cv";

export function CvStats() {
  return (
    <section className="cv-section" aria-labelledby="cv-stats-title">
      <div className="section__header">
        <p className="eyebrow">Chiffres clés</p>
        <h2 id="cv-stats-title">Repères rapides</h2>
      </div>

      <div className="cv-stats-grid">
        {cv.stats.map((stat) => (
          <article className="cv-stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <p>{stat.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

