import type { PropsWithChildren } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>
      <Header />
      <main className="page-main" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
