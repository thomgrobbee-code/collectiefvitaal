import { Lock, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/content";

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

        <div className="mt-7 grid gap-5 min-[900px]:grid-cols-2">
          <div data-reveal className="flex flex-col gap-4 rounded-[1.75rem] bg-light-gray p-7">
            <div className="flex items-center gap-3 text-deep">
              <Lock aria-hidden className="size-7 shrink-0" />
              <h3 className="text-[1.3rem] font-extrabold">Jouw voortgang blijft van jou</h3>
            </div>
            <p>Wat jij doet en hoe het gaat, zie alleen jij. Je werkgever niet, je collega&apos;s niet, niemand.</p>
            <div aria-hidden className="grid gap-2.5 rounded-2xl bg-white p-4">
              <span className="text-xs font-extrabold tracking-widest text-gray uppercase">Voorbeeldweergave, alleen voor jou</span>
              {[
                ["Mijn kleine stap", "55%"],
                ["Deze week", "30%"],
              ].map(([label, w]) => (
                <div key={label} className="flex items-center gap-3 text-sm font-bold">
                  <span className="w-28 shrink-0">{label}</span>
                  <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-light-gray">
                    <span className="block h-full rounded-full bg-vital" style={{ width: w }} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal className="flex flex-col gap-4 rounded-[1.75rem] bg-deep p-7 text-white">
            <div className="flex items-center gap-3 text-mint">
              <Users aria-hidden className="size-7 shrink-0" />
              <h3 className="text-[1.3rem] font-extrabold !text-white">Alleen het collectief wordt zichtbaar</h3>
            </div>
            <div className="flex items-center gap-5">
              <svg viewBox="0 0 100 100" aria-hidden className="size-24 shrink-0">
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#34C37B" strokeWidth="12" strokeLinecap="round" strokeDasharray="251" strokeDashoffset="70" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#A8E6C2" strokeWidth="12" strokeLinecap="round" strokeDasharray="40 251" strokeDashoffset="-181" transform="rotate(-90 50 50)" />
              </svg>
              <p className="text-on-deep">
                Bijdragen tellen samen op tot één gedeeld resultaat. Er zijn geen namen, geen scores en geen ranglijsten.
              </p>
            </div>
            <ul className="grid gap-2">
              {["Geen openbare individuele scores", "Geen onderlinge competitie", "Geen prestatiedruk"].map((t) => (
                <li key={t} className="flex items-baseline gap-2.5 before:size-2.5 before:shrink-0 before:translate-y-[-1px] before:rounded-full before:bg-coral before:content-['']">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
