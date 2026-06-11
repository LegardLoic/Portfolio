import { buildFocusItems } from "../../data/home";
import { Section } from "../ui/Section";

export function BuildFocus() {
  return (
    <Section
      className="build-focus-section"
      description="Une synthèse des domaines qui relient le parcours professionnel, les projets personnels et la sensibilité créative."
      eyebrow="Ce que je construis"
      title="Des interfaces utiles, solides et expressives"
    >
      <div className="build-grid">
        {buildFocusItems.map((item, index) => (
          <article className="build-item" key={item.title}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

