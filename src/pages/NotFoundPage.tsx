import { ButtonLink } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>Page introuvable</h1>
      <p>La page demandée n'existe pas ou n'est pas encore disponible.</p>
      <ButtonLink to="/">Retour à l'accueil</ButtonLink>
    </section>
  );
}

