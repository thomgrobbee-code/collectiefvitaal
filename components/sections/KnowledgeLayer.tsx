"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { BookOpen, ExternalLink, Footprints, Lightbulb, Users } from "lucide-react";
import { BrandIcon } from "@/components/brand/BrandIcon";
import { domains } from "@/lib/content";
import { evidenceLabels, kindLabels, knowledge, type KnowledgeItem } from "@/lib/knowledge";

/**
 * Kennislaag: per focusgebied Begrijpen (Wist je dat? + Wat betekent dit?),
 * Toepassen (Kleine stap) en Samen bijdragen, met de wetenschappelijke bron eronder.
 */
export function KnowledgeLayer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    const jump = e.key === "Home" ? 0 : e.key === "End" ? knowledge.length - 1 : null;
    if (!delta && jump === null) return;
    e.preventDefault();
    const next = jump ?? (i + delta + knowledge.length) % knowledge.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div id="kennis" className="mt-16 rounded-[2.25rem] bg-cream p-[clamp(20px,4vw,48px)]" data-reveal>
      <div className="grid gap-4 min-[860px]:grid-cols-[1.2fr_1fr] min-[860px]:items-end">
        <div>
          <p className="eyebrow">Kennislaag</p>
          <h3 className="mt-2 text-[clamp(1.6rem,1.3rem+1.3vw,2.4rem)]">Niet zomaar een stap.</h3>
          <p className="mt-3 max-w-[52ch]">
            Elke kleine stap die we voorstellen, is gebaseerd op wat onderzoek en gezondheidsinstanties zeggen. En als het
            bewijs beperkt is, zeggen we dat ook.
          </p>
        </div>
        <ol aria-label="Van weten naar samen doen" className="flex flex-wrap gap-2 text-sm font-extrabold min-[860px]:justify-end">
          {[
            ["1", "Begrijpen"],
            ["2", "Toepassen"],
            ["3", "Samen bijdragen"],
          ].map(([n, label]) => (
            <li key={label} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-deep">
              <span aria-hidden className="grid size-5 place-items-center rounded-full bg-deep text-xs text-white">
                {n}
              </span>
              {label}
            </li>
          ))}
        </ol>
      </div>

      <div role="tablist" aria-label="Kies een focusgebied" className="mt-8 flex flex-wrap gap-2">
        {knowledge.map((k, i) => {
          const d = domains.find((x) => x.id === k.domainId)!;
          const selected = i === active;
          return (
            <button
              key={k.domainId}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`kennis-tab-${k.domainId}`}
              aria-controls={`kennis-panel-${k.domainId}`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 font-extrabold transition-colors ${
                selected ? "border-deep bg-deep text-white" : "border-light-gray bg-white text-dark hover:border-mint hover:bg-light-green"
              }`}
            >
              <BrandIcon name={d.icon} className={`size-5 ${selected ? "text-mint" : "text-deep"}`} />
              {d.title}
            </button>
          );
        })}
      </div>

      {knowledge.map((k, i) => (
        <KnowledgeCard key={k.domainId} item={k} hidden={i !== active} />
      ))}

      <p className="mt-6 text-sm text-gray">
        Dit is algemene informatie, geen persoonlijk medisch advies. Heb je klachten of twijfel je wat goed voor jou is?
        Overleg dan met je huisarts of een andere zorgverlener.
      </p>
    </div>
  );
}

export function KnowledgeCard({ item, hidden = false }: { item: KnowledgeItem; hidden?: boolean }) {
  const ev = item.evidence ? evidenceLabels[item.evidence] : null;
  const kind = kindLabels[item.kind];
  return (
    <div
      role="tabpanel"
      id={`kennis-panel-${item.domainId}`}
      aria-labelledby={`kennis-tab-${item.domainId}`}
      hidden={hidden}
      className="mt-5 grid animate-rise gap-4 min-[860px]:grid-cols-2"
    >
      <Block icon={<Lightbulb className="size-5" />} label="Wist je dat?" step="Begrijpen" className="bg-white">
        <p>{item.wistJeDat}</p>
      </Block>
      <Block icon={<BookOpen className="size-5" />} label="Wat betekent dit?" step="Begrijpen" className="bg-white">
        <p>{item.watBetekentDit}</p>
      </Block>
      <Block icon={<Footprints className="size-5" />} label="Kleine stap" step="Toepassen" className="bg-light-green">
        <p className="font-bold text-deep">{item.kleineStap}</p>
      </Block>
      <Block icon={<Users className="size-5" />} label="Samen" step="Samen bijdragen" className="bg-peach-soft">
        <p>{item.samen}</p>
      </Block>

      <div className="rounded-3xl border-2 border-light-gray bg-white p-5 min-[860px]:col-span-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h4 className="text-sm font-extrabold tracking-widest text-gray uppercase">Wetenschappelijke bron</h4>
          <span className="rounded-full border-2 border-light-gray px-2.5 py-0.5 text-xs font-extrabold text-deep">{kind.label}</span>
          {ev && <span className={`rounded-full px-2.5 py-1 text-xs font-extrabold ${ev.tone}`}>{ev.label}</span>}
        </div>
        <p className="mt-2 text-sm">{item.evidenceNote}</p>
        <p className="mt-1 text-sm text-gray">
          <strong className="font-bold">{kind.label}:</strong> {kind.uitleg}
          {ev && (
            <>
              {" "}
              <strong className="font-bold">{ev.label}:</strong> {ev.uitleg}
            </>
          )}
        </p>
        <ul className="mt-3 grid gap-2.5">
          {item.sources.map((s) => (
            <li key={s.url} className="text-sm">
              {s.placeholder ? (
                <span className="text-gray italic">Bron wordt nog gecontroleerd.</span>
              ) : (
                <>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-baseline gap-1 font-bold text-deep underline decoration-mint decoration-2 underline-offset-2 hover:decoration-deep"
                  >
                    {s.publisher}: {s.title}
                    <ExternalLink aria-hidden className="size-3.5 shrink-0 translate-y-0.5" />
                    <span className="sr-only">(opent in nieuw venster)</span>
                  </a>
                  <span className="block text-gray">
                    {s.date} · {s.type}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Block({
  icon,
  label,
  step,
  className,
  children,
}: {
  icon: ReactNode;
  label: string;
  step: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <div className={`${className} rounded-3xl p-5 sm:p-6`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <h4 className="flex items-center gap-2 text-[1.1rem] font-extrabold text-deep">
          <span aria-hidden className="text-vital-text">
            {icon}
          </span>
          {label}
        </h4>
        <span className="text-xs font-extrabold tracking-widest text-gray uppercase">{step}</span>
      </div>
      {children}
    </div>
  );
}
