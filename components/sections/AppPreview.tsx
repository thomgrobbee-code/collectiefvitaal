import { Lock, ShieldCheck } from "lucide-react";
import { BrandIcon } from "@/components/brand/BrandIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wave } from "@/components/ui/Blob";
import { GroupPost, Phone } from "@/components/concept/ConceptUI";

const areas = [
  { name: "Beweging", groups: 24, w: "80%" },
  { name: "Mentale veerkracht", groups: 11, w: "40%" },
  { name: "Herstel & slaap", groups: 9, w: "33%" },
  { name: "Voeding", groups: 14, w: "52%" },
];

export function AppPreview() {
  return (
    <section aria-labelledby="app-title">
      <Wave className="text-light-green" />
      <div className="band bg-light-green">
        <div className="wrap">
          <SectionHeading
            id="app-title"
            eyebrow="Een eerste blik"
            title="Zo zou het platform kunnen voelen."
            intro="We bouwen het platform samen met de eerste deelnemers en partners. Deze schermen laten de richting zien. Het zijn conceptweergaven met verzonnen voorbeeldgegevens, nog geen werkende app."
          />

          <div tabIndex={0} role="region" aria-label="Drie conceptschermen, scroll zijwaarts" className="-mx-5 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 min-[1000px]:mx-0 min-[1000px]:grid min-[1000px]:grid-cols-3 min-[1000px]:overflow-visible min-[1000px]:px-0">
            <div className="w-[min(290px,78vw)] shrink-0 snap-center min-[1000px]:w-auto" data-reveal>
              <Phone title="Tijdlijn" label="Collectieve tijdlijn">
                <GroupPost
                  org="Zorggroep De Linde"
                  orgIcon="heart"
                  orgTone="bg-lavender-soft"
                  time="1 u"
                  title="Elke vrijdag samen tien minuten ontspannen, voor iedereen die wil"
                  tag="Mentale veerkracht"
                  appreciations={42}
                />
                <GroupPost
                  org="Voorbeeld BV, afdeling Service"
                  orgIcon="calendar"
                  orgTone="bg-light-blue"
                  time="gisteren"
                  title="Teamafspraak: na 18.00 uur geen werkberichten meer"
                  tag="Herstel & slaap"
                  appreciations={19}
                />
                <GroupPost
                  org="Sportvereniging Vooruit"
                  orgIcon="team"
                  orgTone="bg-peach-soft"
                  time="3 u"
                  title="Na de training samen koken: wie schuift aan?"
                  tag="Voeding"
                  appreciations={27}
                />
              </Phone>
            </div>

            <div className="w-[min(290px,78vw)] shrink-0 snap-center min-[1000px]:w-auto" data-reveal style={{ transitionDelay: "100ms" }}>
              <Phone title="Community" label="Community">
                <div className="rounded-[1.25rem] bg-white p-3.5 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-10 place-items-center rounded-xl bg-light-green text-deep">
                      <BrandIcon name="community" className="size-5.5" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-extrabold text-deep">Vitaal in de Wijk Oost</p>
                      <p className="text-[0.65rem] text-gray">Open groep · iedereen welkom</p>
                    </div>
                  </div>
                  <p className="mt-2.5 text-[0.72rem] leading-snug text-gray">
                    Samen bewegen, koken en ontspannen in de wijk. Bewoners, collega&apos;s en de sportvereniging doen mee.
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[0.7rem] font-extrabold">
                    <span className="rounded-full bg-deep py-1.5 text-center text-white">Doe mee</span>
                    <span className="rounded-full bg-light-green py-1.5 text-center text-deep">Volgen</span>
                  </div>
                </div>
                <p className="mt-1 px-1 text-[0.65rem] font-extrabold tracking-widest text-gray uppercase">Groepsactiviteiten</p>
                {[
                  ["Wo", "19:30", "Ontspanningsavond in het buurthuis"],
                  ["Do", "12:15", "Lunchwandeling, ook met rollator"],
                  ["Za", "11:00", "Samen koken met peulvruchten"],
                ].map(([day, time, what]) => (
                  <div key={what} className="flex items-center gap-3 rounded-2xl bg-white p-2.5">
                    <span className="grid w-11 shrink-0 rounded-xl bg-peach-soft py-1 text-center leading-tight">
                      <span className="text-[0.6rem] font-extrabold text-gray uppercase">{day}</span>
                      <span className="text-xs font-black text-deep">{time}</span>
                    </span>
                    <span className="text-[0.72rem] leading-snug font-bold text-dark">{what}</span>
                  </div>
                ))}
                <div className="rounded-2xl bg-white p-2.5 text-[0.7rem] leading-snug text-gray">
                  <strong className="text-deep">Geïnspireerd door jullie:</strong> Buurt Noord start ook een kookavond.
                </div>
              </Phone>
            </div>

            <div className="w-[min(290px,78vw)] shrink-0 snap-center min-[1000px]:w-auto" data-reveal style={{ transitionDelay: "200ms" }}>
              <Phone title="Impact" label="Impact (alleen samengevoegd)">
                <div className="rounded-[1.25rem] bg-deep p-4 text-white">
                  <p className="text-[0.65rem] font-extrabold tracking-widest text-mint uppercase">Samen in Voorbeeldstad</p>
                  <p className="mt-1 text-[1.6rem] leading-none font-black">58 groepen</p>
                  <p className="mt-1 text-[0.7rem] text-on-deep">zetten deze maand samen kleine stappen</p>
                </div>
                <div className="rounded-[1.25rem] bg-white p-3.5">
                  <p className="text-[0.65rem] font-extrabold tracking-widest text-gray uppercase">Actieve groepen per focusgebied</p>
                  <ul className="mt-2 grid gap-2">
                    {areas.map((a) => (
                      <li key={a.name} className="text-[0.7rem] font-bold text-dark">
                        <span className="flex justify-between">
                          {a.name}
                          <span className="text-gray">{a.groups}</span>
                        </span>
                        <span className="mt-1 block h-2 overflow-hidden rounded-full bg-light-gray">
                          <span className="block h-full rounded-full bg-vital" style={{ width: a.w }} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start gap-2 rounded-2xl bg-white p-2.5 text-[0.68rem] leading-snug text-gray">
                  <ShieldCheck aria-hidden className="size-4 shrink-0 text-vital-text" />
                  Alleen samengevoegde cijfers, en alleen als genoeg mensen meedoen. Nooit per persoon.
                </div>
                <div className="flex items-start gap-2 rounded-2xl bg-light-gray p-2.5 text-[0.68rem] leading-snug text-gray">
                  <Lock aria-hidden className="size-4 shrink-0 text-deep" />
                  Jouw eigen voortgang staat in je privé-overzicht. Alleen jij ziet die.
                </div>
              </Phone>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray">
            Alle namen, organisaties en cijfers in deze schermen zijn verzonnen voorbeeldgegevens.
          </p>
        </div>
      </div>
      <Wave className="text-light-green" flip />
    </section>
  );
}
