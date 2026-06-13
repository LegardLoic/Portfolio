import { homeStats } from "../../data/home";
import { Section } from "../ui/Section";

export function ProfileStats() {
  return (
    <Section
      className="profile-stats-section"
      description="Quelques chiffres pour comprendre le parcours, le rôle tenu en entreprise et les projets présentés ici."
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
