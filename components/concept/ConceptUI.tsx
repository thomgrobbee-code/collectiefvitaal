import type { ReactNode } from "react";
import { Heart } from "lucide-react";
import { BrandIcon, type BrandIconName } from "@/components/brand/BrandIcon";

/** Markeert een weergave als concept: geen werkende functionaliteit. */
export function ConceptLabel({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-gray/40 bg-white px-3 py-1 text-xs font-extrabold tracking-wider text-gray uppercase ${className}`}
    >
      Conceptweergave
    </span>
  );
}

/** Collectieve waardering: hoort bij een initiatief of groep, nooit bij een persoon. */
export function Appreciation({ count, compact = false }: { count: number; compact?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-3 ${compact ? "text-xs" : "text-sm"}`}>
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-peach-soft font-extrabold text-deep ${compact ? "px-2.5 py-1" : "px-3.5 py-2"}`}
      >
        <Heart aria-hidden className={`${compact ? "size-3.5" : "size-4.5"} fill-coral text-coral`} />
        Waardeer dit initiatief
      </span>
      <span className="font-bold text-gray">
        {count} collectieve waarderingen
      </span>
    </div>
  );
}

export function GroupPost({
  org,
  orgIcon,
  orgTone,
  time,
  title,
  text,
  tag,
  stat,
  appreciations,
  large = false,
}: {
  org: string;
  orgIcon: BrandIconName;
  orgTone: string;
  time: string;
  title: string;
  text?: string;
  tag: string;
  stat?: string;
  appreciations: number;
  large?: boolean;
}) {
  return (
    <article className={`rounded-[1.5rem] bg-white shadow-[var(--shadow-soft)] ${large ? "p-6" : "p-3.5"}`}>
      <header className="flex items-center gap-3">
        <span className={`${orgTone} grid shrink-0 place-items-center rounded-xl text-deep ${large ? "size-11" : "size-8"}`}>
          <BrandIcon name={orgIcon} className={large ? "size-6" : "size-4.5"} />
        </span>
        <div className="min-w-0 leading-tight">
          <p className={`truncate font-extrabold text-deep ${large ? "" : "text-xs"}`}>{org}</p>
          <p className={`text-gray ${large ? "text-sm" : "text-[0.65rem]"}`}>{time} · groepsupdate</p>
        </div>
        {large && (
          <span className="ml-auto shrink-0 rounded-full bg-light-green px-3 py-1 text-xs font-extrabold text-vital-text">{tag}</span>
        )}
      </header>
      {!large && (
        <span className="mt-2.5 inline-block rounded-full bg-light-green px-2 py-0.5 text-[0.6rem] font-extrabold text-vital-text">{tag}</span>
      )}
      <p className={`${large ? "mt-3 text-[1.2rem]" : "mt-1 text-[0.8rem] leading-snug"} font-extrabold text-dark`}>{title}</p>
      {text && <p className={`mt-1.5 text-gray ${large ? "" : "text-[0.7rem] leading-snug"}`}>{text}</p>}
      {stat && (
        <p className={`mt-3 rounded-xl bg-cream font-bold text-deep ${large ? "px-4 py-3" : "px-2.5 py-1.5 text-[0.7rem]"}`}>{stat}</p>
      )}
      <div className={large ? "mt-4" : "mt-2.5"}>
        <Appreciation count={appreciations} compact={!large} />
      </div>
    </article>
  );
}

/** Eenvoudig telefoonframe voor conceptschermen. */
export function Phone({ title, label, children }: { title: string; label: string; children: ReactNode }) {
  return (
    <figure className="flex flex-col items-center gap-4">
      <div className="w-full max-w-[290px] rounded-[2.6rem] bg-deep p-2.5 shadow-[var(--shadow-lift)]">
        <div className="flex h-[580px] flex-col overflow-hidden rounded-[2.1rem] bg-cream">
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[0.65rem] font-extrabold text-deep" aria-hidden>
            <span>9:41</span>
            <span className="h-1.5 w-14 rounded-full bg-deep/15" />
            <span>●●●</span>
          </div>
          <div className="px-4 pt-2 pb-3">
            <p className="text-[0.6rem] font-extrabold tracking-widest text-vital-text uppercase">Collectief Vitaal</p>
            <p className="text-[1.15rem] font-black text-deep">{title}</p>
          </div>
          <div className="relative flex flex-1 flex-col gap-2.5 overflow-hidden px-3 pb-3">
            {children}
            <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-cream to-transparent" />
          </div>
          <nav aria-hidden className="mt-2 grid grid-cols-3 border-t border-light-gray bg-white px-2 py-2 text-center text-[0.6rem] font-extrabold text-gray">
            {(["Tijdlijn", "Community", "Impact"] as const).map((t) => (
              <span key={t} className={`flex flex-col items-center gap-0.5 ${t === title || title.startsWith(t) ? "text-deep" : ""}`}>
                <BrandIcon
                  name={t === "Tijdlijn" ? "community" : t === "Community" ? "connection" : "progress"}
                  className="size-4.5"
                />
                {t}
              </span>
            ))}
          </nav>
        </div>
      </div>
      <figcaption className="text-center">
        <span className="block font-extrabold text-deep">{label}</span>
        <ConceptLabel className="mt-2" />
      </figcaption>
    </figure>
  );
}
