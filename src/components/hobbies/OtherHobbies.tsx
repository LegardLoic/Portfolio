import { hobbies } from "../../data/hobbies";
import { displayPlaceholderText } from "../../utils/placeholders";

export function OtherHobbies() {
  return (
    <section className="hobby-section other-hobbies" aria-labelledby="other-hobbies-title">
      <div className="section__header">
        <p className="eyebrow">Autres centres d'intérêt</p>
        <h2 id="other-hobbies-title">Des terrains d'exploration complémentaires</h2>
        <p>
          Quelques axes personnels restent prévus pour enrichir la page plus tard, sans
          ajouter d'informations non confirmées.
        </p>
      </div>

      <div className="other-hobbies__grid">
        {hobbies.otherHobbies.map((hobby) => (
          <article className="other-hobby-card" key={hobby.title}>
            <h3>{displayPlaceholderText(hobby.title, "Autre centre d'intérêt en préparation")}</h3>
            <p>{displayPlaceholderText(hobby.description)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
