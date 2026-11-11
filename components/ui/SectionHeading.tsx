import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  id: string;
  intro?: ReactNode;
  inverted?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, id, intro, inverted = false, className = "" }: Props) {
  return (
    <div className={`max-w-3xl ${className}`} data-reveal>
      <p className={`eyebrow ${inverted ? "!text-mint" : ""}`}>{eyebrow}</p>
      <h2 id={id} className={`mt-3 text-[clamp(2rem,1.5rem+2.3vw,3.4rem)] ${inverted ? "!text-white" : ""}`}>
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 text-[clamp(1.15rem,1.05rem+0.4vw,1.4rem)] ${inverted ? "text-on-deep" : "text-gray"}`}>{intro}</p>
      ) : null}
    </div>
  );
}
