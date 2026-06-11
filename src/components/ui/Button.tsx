import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = PropsWithChildren<{
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
}>;

export function ButtonLink({
  to,
  href,
  variant = "primary",
  className = "",
  ariaLabel,
  children,
}: ButtonLinkProps) {
  const classNames = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        aria-label={ariaLabel}
        className={classNames}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} className={classNames} to={to ?? "/"}>
      {children}
    </Link>
  );
}

