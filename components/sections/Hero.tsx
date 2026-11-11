import { ButtonLink } from "@/components/ui/Button";
import { Illustration } from "@/components/ui/Illustration";
import { Blob } from "@/components/ui/Blob";

const forWhom = [
  { label: "Voor jezelf.", tone: "bg-light-green" },
  { label: "Voor elkaar.", tone: "bg-peach-soft" },
  { label: "Voor de zorg.", tone: "bg-lavender-soft" },
  { label: "Voor de samenleving.", tone: "bg-light-blue" },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
      <Blob shape="a" className="-top-24 -right-40 w-[38rem] text-light-green max-[860px]:hidden" />
      <div className="wrap relative grid items-center gap-10 min-[860px]:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="animate-rise">
          <h1 className="text-[clamp(2.3rem,1.5rem+3.6vw,4.6rem)] leading-[1.04]">
            <span className="relative inline-block">
              10% beter.
              <svg
                viewBox="0 0 120 20"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-[0.18em] left-[4%] h-[0.24em] w-[92%] text-vital"
              >
                <path d="M4 4 Q60 26 116 4" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="mt-[0.18em] block">Samen maken we Nederland vitaler.</span>
          </h1>
          <p className="mt-6 max-w-[38ch] text-[clamp(1.15rem,1.05rem+0.4vw,1.4rem)]">
            We hoeven niet allemaal topsporter te worden. Als we allemaal op onze eigen manier een kleine stap zetten,
            maken we samen een groot verschil.
          </p>
          <ul aria-label="Voor wie" className="mt-6 flex flex-wrap gap-2">
            {forWhom.map((f) => (
              <li key={f.label} className={`${f.tone} rounded-full px-3.5 py-1.5 text-sm font-extrabold text-deep`}>
                {f.label}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/#doe-mee" arrow>
              Word onderdeel van de beweging
            </ButtonLink>
            <ButtonLink href="/#ons-verhaal" variant="soft">
              Ontdek ons verhaal
            </ButtonLink>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-soft)] max-[860px]:order-first">
          <Illustration
            src="/illustrations/samen-op-weg.svg"
            alt="Een diverse groep mensen van verschillende leeftijden, onder wie iemand in een rolstoel, staat arm in arm in een Nederlands landschap met molens en een stad op de achtergrond."
            width={760}
            height={560}
            priority
          />
        </div>
      </div>
    </section>
  );
}
