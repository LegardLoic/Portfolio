import { ButtonLink } from "../ui/Button";

export function HobbiesCallToAction() {
  return (
    <section className="hobbies-cta" aria-labelledby="hobbies-cta-title">
      <div>
        <p className="eyebrow">Continuer la visite</p>
        <h2 id="hobbies-cta-title">Relier créativité, technique et parcours</h2>
        <p>
          Les hobbies complètent les pages projets et CV en montrant une facette plus
          personnelle du profil, toujours reliée à la construction d'expériences web.
        </p>
      </div>
      <div className="hobbies-cta__actions">
        <ButtonLink to="/projects/brawlcards-origins">Voir les projets</ButtonLink>
        <ButtonLink to="/cv" variant="secondary">
          Lire le CV
        </ButtonLink>
      </div>
    </section>
  );
}
