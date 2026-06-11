import { homeStats } from "../../data/home";
import { Section } from "../ui/Section";

export function ProfileStats() {
  return (
    <Section
      className="profile-stats-section"
      description="Des repères concrets pour situer l'expérience, le rôle et les projets déjà présentés dans le portfolio."
      eyebrow="Parcours"
      title="Chiffres clés"
    >
      <dl className="stats-grid">
        {homeStats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <dt>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </dt>
            <dd>{stat.description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

