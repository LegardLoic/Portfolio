import { hobbies } from "../../data/hobbies";
import { displayPlaceholderText } from "../../utils/placeholders";

const pianoHighlights = [
  "Construction progressive",
  "Attention au détail",
  "Expression personnelle",
];

export function PianoSection() {
  return (
    <section className="hobby-section piano-story" aria-labelledby="piano-story-title">
      <div className="section__header">
        <p className="eyebrow">Hobby principal</p>
        <h2 id="piano-story-title">{hobbies.mainHobby.title}</h2>
        <p>{hobbies.mainHobby.description}</p>
      </div>

      <div className="piano-story__grid">
        <div className="piano-story__panel">
          <span>Pratique créative</span>
          <h3>{hobbies.mainHobby.subtitle}</h3>
          <p>
            La musique apporte une respiration plus personnelle au portfolio. Elle
            montre une facette créative, structurée et sensible, complémentaire au
            travail technique présenté dans les projets.
          </p>
          <p className="todo-note">
            {displayPlaceholderText(
              hobbies.mainHobby.practiceNote,
              "Détails musicaux à compléter.",
            )}
          </p>
        </div>

        <div className="piano-story__panel piano-story__panel--rhythm">
          <span>Ce que cela raconte</span>
          <ul className="hobby-pill-list">
            {pianoHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="piano-rhythm" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
