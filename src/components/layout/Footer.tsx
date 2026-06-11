import { Link } from "react-router-dom";

import { navigationItems } from "../../data/navigation";
import { profile } from "../../data/profile";
import { socials } from "../../data/socials";
import { hasValidExternalUrl } from "../../utils/placeholders";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="eyebrow">Portfolio</p>
          <h2>{profile.name}</h2>
          <p>{profile.summary}</p>
        </div>

        <div className="site-footer__columns">
          <div>
            <h3>Navigation</h3>
            <ul>
              {navigationItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Réseaux</h3>
            <ul>
              {socials.map((social) => (
                <li key={social.label}>
                  {hasValidExternalUrl(social.url) ? (
                    <a href={social.url} rel="noreferrer" target="_blank">
                      {social.label}
                    </a>
                  ) : (
                    <span>{social.label} - lien à ajouter</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Portfolio.</span>
        <span>Construit avec React, TypeScript et Vite.</span>
      </div>
    </footer>
  );
}
