import { useState } from "react";
import { NavLink } from "react-router-dom";

import { navigationItems } from "../../data/navigation";
import { profile } from "../../data/profile";
import { ButtonLink } from "../ui/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-logo" to="/" aria-label="Retour à l'accueil">
          <span className="site-logo__mark" aria-hidden="true">
            LL
          </span>
          <span>{profile.name}</span>
        </NavLink>

        <button
          aria-controls="site-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
          className="menu-button"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          aria-label="Navigation principale"
          className={isMenuOpen ? "site-nav site-nav--open" : "site-nav"}
          id="site-navigation"
        >
          {navigationItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
              }
              end={item.to === "/"}
              key={item.to}
              onClick={() => setIsMenuOpen(false)}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <ButtonLink className="site-header__cta" to="/cv" variant="primary">
          CV
        </ButtonLink>
      </div>
    </header>
  );
}
