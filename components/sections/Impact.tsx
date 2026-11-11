import { Info } from "lucide-react";
import { BrandIcon, type BrandIconName } from "@/components/brand/BrandIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wave } from "@/components/ui/Blob";

type Actor = { name: string; icon: BrandIconName; brengt: string; krijgt: string; tone: string; area: string; radius: string };

/** Vijf partijen rond één gedeeld doel. Op desktop staan ze in een netwerk rond het midden. */
const actors: Actor[] = [
  {
    name: "Individuen",
    icon: "profile",
    brengt: "Een kleine stap die past bij hun leven.",
    krijgt: "Steun van een groep die meebeweegt.",
    tone: "bg-mint",
    area: "min-[960px]:[grid-area:a]",
    radius: "rounded-[2.2rem_2.2rem_2.2rem_0.8rem]",
  },
  {
    name: "Werkgevers",
    icon: "team",
    brengt: "Tijd en ruimte op het werk.",
    krijgt: "Teams die samen in beweging komen.",
    tone: "bg-peach",
    area: "min-[960px]:[grid-area:b]",
    radius: "rounded-[2.2rem_2.2rem_0.8rem_2.2rem]",
  },
  {
    name: "Zorgorganisaties",
    icon: "heart",
    brengt: "Kennis over gezondheid en preventie.",
    krijgt: "Een plek om mensen naar door te verwijzen.",
    tone: "bg-lavender",
    area: "min-[960px]:[grid-area:c]",
    radius: "rounded-[2.2rem_0.8rem_2.2rem_2.2rem]",
  },
  {
    name: "Gemeenten",
    icon: "home",
    brengt: "Lokale verbinding en openbare ruimte.",
    krijgt: "Een gezamenlijke aanpak in de wijk.",
    tone: "bg-light-blue",
    area: "min-[960px]:[grid-area:d]",
    radius: "rounded-[0.8rem_2.2rem_2.2rem_2.2rem]",
  },
  {
    name: "Verenigingen & partners",
    icon: "connection",
    brengt: "Activiteiten en een plek om samen te komen.",
    krijgt: "Nieuwe mensen en zichtbare bijdrage.",
    tone: "bg-coral",
    area: "min-[960px]:[grid-area:e]",
    radius: "rounded-[2.2rem]",
  },
];

export function Impact() {
  return (
    <section id="onze-impact" aria-labelledby="impact-title">
      <div className="band overflow-hidden bg-deep text-white">
        <div className="wrap">
          <SectionHeading
            id="impact-title"
            inverted
            eyebrow="Collectieve impact"
            title="Samen versterken we elkaar."
            intro="Eén kleine stap lijkt weinig. Maar als mensen, werkgevers, zorg, gemeenten en verenigingen dezelfde kant op bewegen, ontstaat er iets wat niemand alleen kan bereiken."
          />

          <div className="relative mt-12">
            {/* Verbindingslijnen (desktop): van het midden naar elke partij */}
            <svg
              aria-hidden
              viewBox="0 0 300 300"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 hidden size-full min-[960px]:block"
            >
              {[
                [50, 50],
                [250, 50],
                [50, 150],
                [250, 150],
                [150, 250],
              ].map(([x, y]) => (
                <line
                  key={`${x}-${y}`}
                  x1="150"
                  y1="150"
                  x2={x}
                  y2={y}
                  stroke="#A8E6C2"
                  strokeOpacity="0.8"
                  strokeWidth="3"
                  strokeDasharray="2 9"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            {/* Verbindingslijn (mobiel) */}
            <span
              aria-hidden
              className="absolute top-10 bottom-10 left-[38px] border-l-[3px] border-dotted border-mint/50 min-[960px]:hidden"
            />

            <ul className="relative grid gap-5 min-[960px]:auto-rows-fr min-[960px]:grid-cols-3 min-[960px]:gap-x-10 min-[960px]:gap-y-8 min-[960px]:[grid-template-areas:'a_._b'_'c_hub_d'_'._e_.']">
              <li
                aria-hidden
                className="flex items-center gap-4 min-[960px]:flex-col min-[960px]:justify-center min-[960px]:[grid-area:hub]"
              >
                <span className="relative grid size-[78px] shrink-0 place-items-center min-[960px]:size-44">
                  <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-[spin_60s_linear_infinite] text-vital">
                    <path
                      d="M164 52c26 36 22 92-12 122s-92 26-122-8S8 64 42 34s96-18 122 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="relative text-center text-sm leading-tight font-black text-deep min-[960px]:text-[1.6rem]">
                    Samen
                  </span>
                </span>
                <span className="relative text-on-deep min-[960px]:max-w-[22ch] min-[960px]:rounded-full min-[960px]:bg-deep min-[960px]:px-4 min-[960px]:py-1 min-[960px]:text-center">
                  Eén gedeeld doel: een vitaler Nederland.
                </span>
              </li>
              {actors.map((a, i) => (
                <li
                  key={a.name}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className={`${a.area} relative flex gap-4 min-[960px]:flex-col min-[960px]:gap-3`}
                >
                  <span
                    className={`${a.tone} ${a.radius} relative z-10 grid size-[78px] shrink-0 place-items-center text-deep shadow-[var(--shadow-lift)] min-[960px]:size-16`}
                  >
                    <BrandIcon name={a.icon} className="size-9 min-[960px]:size-8" />
                  </span>
                  <div className="flex-1 rounded-[1.5rem] bg-white/[0.08] p-5 backdrop-blur-[2px] transition-colors hover:bg-white/[0.12] min-[960px]:bg-[#13576a]">
                    <h3 className="text-[1.2rem] font-extrabold !text-white">{a.name}</h3>
                    <dl className="mt-2 grid gap-1.5 text-sm">
                      <div>
                        <dt className="inline font-extrabold text-mint">Brengt: </dt>
                        <dd className="inline text-on-deep">{a.brengt}</dd>
                      </div>
                      <div>
                        <dt className="inline font-extrabold text-peach">Krijgt: </dt>
                        <dd className="inline text-on-deep">{a.krijgt}</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 flex max-w-[70ch] items-start gap-3 text-sm text-on-deep">
            <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-mint" />
            We staan aan het begin. Zodra er echte resultaten zijn, laten we die hier zien. Tot die tijd beloven we geen
            cijfers die we nog niet hebben.
          </p>
        </div>
      </div>
      <Wave className="bg-deep text-cream" />
    </section>
  );
}
