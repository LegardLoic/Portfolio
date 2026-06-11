import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}>;

export function Section({
  eyebrow,
  title,
  description,
  className = "",
  children,
}: SectionProps) {
  return (
    <section className={`section ${className}`.trim()}>
      <div className="section__header">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

