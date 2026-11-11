import { EyeOff } from "lucide-react";
import { BrandIcon, type BrandIconName } from "@/components/brand/BrandIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConceptLabel, GroupPost } from "@/components/concept/ConceptUI";

const features: { icon: BrandIconName; title: string; text: string }[] = [
  { icon: "community", title: "Ontdek gezamenlijke initiatieven", text: "Van samen koken in de buurt tot vaste pauzes op het werk." },
  { icon: "connection", title: "Volg communities", text: "Blijf op de hoogte van je team, je vereniging of je buurt." },
  { icon: "calendar", title: "Deel groepsactiviteiten", text: "Een ontspanningsavond, een kookclub of een beweegmoment: laat zien wat jullie samen doen." },
  { icon: "notification", title: "Inspireer andere groepen", text: "Een goed idee van de ene groep kan de volgende op weg helpen." },
  { icon: "heart", title: "Geef collectieve waardering", text: "Waardering gaat naar een initiatief of groep, nooit naar één persoon." },
];

export function Social() {
  return (
    <section id="platform" aria-labelledby="social-title" className="band relative overflow-hidden">
      <div className="wrap grid items-start gap-12 min-[960px]:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="social-title"
            eyebrow="Het platform"
            title="Social media die mensen samenbrengt."
            intro="Op veel sociale platforms draait het om individuele aandacht, volgers en likes. Wij geloven dat het anders kan. Bij Collectief Vitaal draait het niet om wie de meeste waardering krijgt, maar om wat we samen bereiken."
          />
          <ul className="mt-9 grid gap-3">
            {features.map((f, i) => (
              <li
                key={f.title}
                data-reveal
                style={{ transitionDelay: `${i * 60}ms` }}
                className="grid grid-cols-[auto_1fr] items-start gap-4 rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)]"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-light-green text-deep">
                  <BrandIcon name={f.icon} className="size-6" />
                </span>
                <p>
                  <strong className="block text-deep">{f.title}</strong>
                  <span className="text-gray">{f.text}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5 min-[960px]:sticky min-[960px]:top-28" data-reveal>
          <figure className="relative">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[3rem] bg-lavender-soft sm:-inset-6" />
            <div className="mb-3 flex justify-end">
              <ConceptLabel />
            </div>
            <GroupPost
              org="Gemeente Voorbeeldstad"
              orgIcon="home"
              orgTone="bg-light-blue"
              time="2 uur geleden"
              title="Wandelchallenge ‘Rondje Wijk’ is van start"
              text="Deze maand wandelen bewoners, collega's en de sportvereniging samen door de wijk. Iedereen loopt in eigen tempo mee, elke ronde telt."
              tag="Beweging"
              stat="Samen gewandeld deze week: 312 km"
              appreciations={86}
              large
            />
            <figcaption className="mt-4 text-sm text-gray">
              Voorbeeld van een update van een organisatie. Namen en cijfers zijn verzonnen voorbeeldgegevens.
            </figcaption>
          </figure>
          <div className="rounded-3xl bg-deep p-6 text-white">
            <p className="flex items-center gap-2.5 font-extrabold text-mint">
              <EyeOff aria-hidden className="size-5" />
              Wat je hier níet ziet
            </p>
            <ul className="mt-3 grid gap-1.5 text-on-deep">
              <li>Geen likes voor personen of persoonlijke prestaties.</li>
              <li>Geen volgers of populariteitsscores per persoon.</li>
              <li>Geen openbare individuele voortgang. Die blijft altijd privé.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
