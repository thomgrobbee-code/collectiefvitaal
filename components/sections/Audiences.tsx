"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Check } from "lucide-react";
import { BrandIcon } from "@/components/brand/BrandIcon";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wave } from "@/components/ui/Blob";
import { audiences } from "@/lib/content";

export function Audiences() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    const jump = e.key === "Home" ? 0 : e.key === "End" ? audiences.length - 1 : null;
    if (!delta && jump === null) return;
    e.preventDefault();
    const next = jump ?? (i + delta + audiences.length) % audiences.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="voor-organisaties" aria-labelledby="who-title">
      <Wave className="text-white" />
      <div className="band bg-white">
        <div className="wrap">
          <SectionHeading
            id="who-title"
            eyebrow="Voor wie"
            title="Iedereen kan meedoen. Iedereen draagt bij."
            intro="Mensen, werkgevers, zorgorganisaties, gemeenten en verenigingen versterken elkaar. Kies wat bij jou past."
          />
          <div role="tablist" aria-label="Kies wie je bent" className="mt-10 flex flex-wrap gap-2">
            {audiences.map((a, i) => {
              const selected = i === active;
              return (
                <button
                  key={a.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  type="button"
                  id={`tab-${a.id}`}
                  aria-controls={`panel-${a.id}`}
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2.5 font-extrabold transition-colors ${
                    selected
                      ? "border-deep bg-deep text-white"
                      : "border-light-gray bg-white text-dark hover:border-mint hover:bg-light-green"
                  }`}
                >
                  <BrandIcon name={a.icon} className={`size-5.5 ${selected ? "text-mint" : "text-deep"}`} />
                  {a.tab}
                </button>
              );
            })}
          </div>
          {audiences.map((a, i) => (
            <div
              key={a.id}
              role="tabpanel"
              id={`panel-${a.id}`}
              aria-labelledby={`tab-${a.id}`}
              hidden={i !== active}
              className="mt-5 grid animate-rise gap-6 rounded-[2rem] bg-cream p-[clamp(24px,4vw,48px)] min-[860px]:grid-cols-2 min-[860px]:gap-14"
            >
              <div>
                <h3 className="text-[clamp(1.55rem,1.3rem+1.1vw,2.2rem)]">{a.title}</h3>
                <p className="mt-3.5 text-[1.2rem]">{a.intro}</p>
                <ButtonLink
                  href="/#doe-mee"
                  arrow
                  className="mt-7"
                  onClick={() => window.dispatchEvent(new CustomEvent("cv:kies-rol", { detail: a.role }))}
                >
                  {a.cta}
                </ButtonLink>
              </div>
              <ul className="grid content-start gap-3">
                {a.points.map((p) => (
                  <li key={p} className="grid grid-cols-[auto_1fr] items-start gap-3 rounded-2xl bg-white px-4.5 py-4 font-semibold">
                    <span className="mt-0.5 grid size-5.5 place-items-center rounded-full bg-vital text-white">
                      <Check aria-hidden className="size-3.5" strokeWidth={3.5} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Wave className="bg-white text-deep" />
    </section>
  );
}
