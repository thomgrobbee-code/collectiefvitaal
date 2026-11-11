import { Plus } from "lucide-react";
import { BrandIcon } from "@/components/brand/BrandIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section id="pijlers" aria-labelledby="pillars-title" className="pb-[clamp(64px,9vw,120px)]">
      <div className="wrap">
        <SectionHeading
          id="pillars-title"
          eyebrow="Waar we op bouwen"
          title="Drie pijlers, één beweging."
          intro="Wat jij doet voor je eigen vitaliteit wordt sterker in een groep. En wat groepen samen doen, maakt het verschil voor iedereen."
        />
        <ol className="relative mt-12 grid gap-5 min-[900px]:grid-cols-3 min-[900px]:gap-8">
          {pillars.map((p, i) => (
            <li
              key={p.title}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`${p.tone} relative flex flex-col gap-3 rounded-[2rem] p-7 sm:p-8`}
            >
              <span className={`grid size-16 place-items-center rounded-[1.25rem] bg-white shadow-[var(--shadow-soft)] ${p.iconTone}`}>
                <BrandIcon name={p.icon} className="size-9" />
              </span>
              <h3 className="mt-2 text-[1.45rem] font-extrabold">{p.title}</h3>
              <p>{p.text}</p>
              {i < pillars.length - 1 && (
                <span
                  aria-hidden
                  className="absolute z-10 grid size-10 place-items-center rounded-full bg-deep text-white shadow-[var(--shadow-soft)] max-[899px]:-bottom-[30px] max-[899px]:left-1/2 max-[899px]:-translate-x-1/2 min-[900px]:top-1/2 min-[900px]:-right-[36px] min-[900px]:-translate-y-1/2"
                >
                  <Plus className="size-5" strokeWidth={3} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
