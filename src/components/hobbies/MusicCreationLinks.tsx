import { hobbies } from "../../data/hobbies";

export function MusicCreationLinks() {
  return (
    <section className="hobby-section music-creation" aria-labelledby="music-creation-title">
      <div className="section__header">
        <p className="eyebrow">Musique et création</p>
        <h2 id="music-creation-title">Ce que le piano apporte à ma façon de créer</h2>
        <p>
          La pratique musicale nourrit une façon de penser les interfaces : moins
          mécanique, plus attentive au rythme, aux transitions et à l'expérience ressentie.
        </p>
      </div>

      <div className="music-creation__grid">
        {hobbies.creativeLinks.map((link, index) => (
          <article className="music-creation-card" key={link.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{link.title}</h3>
            <p>{link.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
