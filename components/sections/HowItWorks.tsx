import { Lock, ShieldCheck, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/content";

const personal = ["Eigen doelen", "Voortgang", "Activiteiten", "Inzicht"];
const collective = ["Gezamenlijke deelname", "Groepsinitiatieven", "Collectieve waardering", "Gezamenlijke impact"];

const numTone = ["bg-deep text-white", "bg-vital-text text-white", "bg-vital text-deep"];

export function HowItWorks() {
  return (
    <section id="hoe-het-werkt" aria-labelledby="how-title" className="band">
      <div className="wrap">
        <SectionHeading id="how-title" eyebrow="Hoe het werkt" title="In drie stappen onderdeel van iets groters." />

        <ol className="mt-12 grid gap-5 min-[900px]:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className="relative rounded-[1.75rem] bg-white p-7 shadow-[var(--shadow-soft)]"
            >
              <span aria-hidden className={`${numTone[i]} mb-5 grid size-12 place-items-center rounded-full text-xl font-black`}>
                {i + 1}
              </span>
              <h3 className="text-[1.3rem] font-extrabold">{s.title}</h3>
              <p className="mt-2">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 max-w-3xl" data-reveal>
          <p className="eyebrow">Privacy by design</p>
          <h3 className="mt-2 text-[clamp(1.6rem,1.3rem+1.3vw,2.4rem)]">Wat van jou is, blijft van jou.</h3>
        </div>
        <div className="mt-7 grid gap-5 min-[900px]:grid-cols-2">
          <div data-reveal className="flex flex-col gap-4 rounded-[1.75rem] bg-light-gray p-7">
            <div className="flex items-center gap-3 text-deep">
              <Lock aria-hidden className="size-7 shrink-0" />
              <h4 className="text-[1.3rem] font-extrabold tracking-wide uppercase">Persoonlijk</h4>
            </div>
            <p>Alleen jij ziet dit. Je werkgever niet, je collega&apos;s niet, je groep niet.</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {personal.map((t) => (
                <li key={t} className="flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2.5 font-bold">
                  <Lock aria-hidden className="size-4 shrink-0 text-gray" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="flex flex-col gap-4 rounded-[1.75rem] bg-deep p-7 text-white">
            <div className="flex items-center gap-3 text-mint">
              <Users aria-hidden className="size-7 shrink-0" />
              <h4 className="text-[1.3rem] font-extrabold tracking-wide !text-white uppercase">Collectief</h4>
            </div>
            <p className="text-on-deep">Dit wordt zichtbaar, altijd samengevoegd. Zonder namen, scores of ranglijsten.</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {collective.map((t) => (
                <li key={t} className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-2.5 font-bold">
                  <Users aria-hidden className="size-4 shrink-0 text-mint" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div data-reveal className="mt-5 flex items-start gap-3 rounded-[1.5rem] border-2 border-dashed border-mint bg-white p-5">
          <ShieldCheck aria-hidden className="mt-0.5 size-6 shrink-0 text-vital-text" />
          <p>
            <strong className="text-deep">Ook niet via een omweg.</strong> Collectieve cijfers tonen we alleen als een
            groep groot genoeg is, zodat niemand eruit te herleiden is. En er komen geen overzichten van wie wat heeft
            gedaan, ook niet voor organisaties.
          </p>
        </div>
      </div>
    </section>
  );
}
