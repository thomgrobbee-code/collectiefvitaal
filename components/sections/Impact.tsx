import { Info } from "lucide-react";
import { Illustration } from "@/components/ui/Illustration";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wave } from "@/components/ui/Blob";

const scenes = [
  { where: "Op het werk", title: "Een team dat elkaar meeneemt", text: "Collega's die samen wandelen in de pauze, zonder dat iemand hoeft te winnen." },
  { where: "In de wijk", title: "Een buurt die elkaar kent", text: "Bewoners, de sportclub en de huisarts die werken aan hetzelfde gezamenlijke doel." },
  { where: "In Nederland", title: "Een land dat 10% beter wordt", text: "Heel veel kleine stappen die samen zichtbaar maken dat vitaliteit van ons allemaal is." },
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
            title="Stel je voor wat er gebeurt als we allemaal een beetje bijdragen."
            intro="Eén kleine stap lijkt weinig. Maar als mensen, werkgevers, zorg, gemeenten en verenigingen dezelfde kant op bewegen, ontstaat er iets wat niemand alleen kan bereiken."
          />
          <div className="mt-11 overflow-hidden rounded-[2.25rem]" data-reveal>
            <Illustration
              src="/illustrations/netwerk.svg"
              alt="Een woning, een kantoor, een gemeentehuis, een zorginstelling en een sportveld, met stippellijnen verbonden met een groep mensen in het midden."
              width={900}
              height={360}
              sizes="(max-width: 1180px) 100vw, 1140px"
            />
          </div>
          <ul className="mt-7 grid gap-5 min-[900px]:grid-cols-3">
            {scenes.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
                className="rounded-3xl border border-mint/25 bg-white/[0.07] p-6 transition-colors hover:bg-white/[0.11]"
              >
                <span className="mb-2 block text-sm font-extrabold tracking-widest text-peach uppercase">{s.where}</span>
                <h3 className="text-[1.3rem] font-extrabold !text-white">{s.title}</h3>
                <p className="mt-2 text-on-deep">{s.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-7 flex max-w-[70ch] items-start gap-3 text-sm text-on-deep">
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
