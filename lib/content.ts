import type { BrandIconName } from "@/components/brand/BrandIcon";

/** Doelgroep van een tab in "Voor wie". In het formulier wordt dit Individu of Organisatie. */
export type Role = "individu" | "werkgever" | "zorgorganisatie" | "gemeente" | "partner";

export const domains: {
  id: string;
  title: string;
  icon: BrandIconName;
  text: string;
  example: string;
  tone: string;
}[] = [
  {
    id: "beweging",
    title: "Beweging",
    icon: "movement",
    text: "Meer bewegen in je gewone dag, in je eigen tempo en op je eigen manier.",
    example: "De trap nemen, fietsen naar je werk, een rondje wandelen in de pauze.",
    tone: "bg-light-green",
  },
  {
    id: "mentale-veerkracht",
    title: "Mentale veerkracht",
    icon: "mental-resilience",
    text: "Ruimte maken voor rust in je hoofd en beter omgaan met spanning.",
    example: "Even ademhalen tussen twee afspraken, je telefoon een avond weg.",
    tone: "bg-lavender-soft",
  },
  {
    id: "herstel-slaap",
    title: "Herstel & slaap",
    icon: "sleep-recovery",
    text: "Je lichaam en hoofd de tijd geven om bij te komen.",
    example: "Vaste bedtijden, een echte lunchpauze, schermvrij het laatste uur.",
    tone: "bg-light-blue",
  },
  {
    id: "voeding",
    title: "Voeding",
    icon: "nutrition",
    text: "Eten dat je energie geeft en dat je met plezier eet. Zonder dieet, zonder strenge regels.",
    example: "Een handje groente extra bij het avondeten, fruit mee naar je werk, samen koken.",
    tone: "bg-peach-soft",
  },
];

export const steps = [
  {
    title: "Kies jouw kleine stap.",
    text: "Kies iets uit een van de vier focusgebieden dat haalbaar is in jouw leven van nu. Klein is precies goed.",
  },
  {
    title: "Doe mee op jouw manier.",
    text: "Alleen, met je team, je vereniging of je buurt. Je bepaalt zelf het tempo. Een dag overslaan mag.",
  },
  {
    title: "Maak deel uit van een groter collectief resultaat.",
    text: "Jouw stap telt mee in het gezamenlijke resultaat van je organisatie, je gemeente en heel Nederland.",
  },
];

export type Audience = {
  id: string;
  tab: string;
  icon: BrandIconName;
  title: string;
  intro: string;
  points: string[];
  cta: string;
  role: Role;
};

export const audiences: Audience[] = [
  {
    id: "individuen",
    tab: "Individuen",
    icon: "profile",
    title: "Voor jou",
    intro: "Je hoeft niets te bewijzen. Je kiest een stap die bij jouw leven past en je doet mee met mensen om je heen.",
    points: [
      "Begin waar jij staat, ook als dat bij nul is.",
      "Jouw voortgang is van jou en blijft privé.",
      "Je ziet wat jouw kleine stap samen met die van anderen oplevert.",
      "Geen ranglijsten en geen vergelijking met anderen.",
    ],
    cta: "Meld je aan als deelnemer",
    role: "individu",
  },
  {
    id: "werkgevers",
    tab: "Werkgevers",
    icon: "team",
    title: "Voor werkgevers",
    intro: "Vitaliteit stimuleren zonder dat het voelt als een verplicht programma of een wedstrijd tussen collega's.",
    points: [
      "Een gezamenlijk doel dat teams verbindt, in plaats van een individuele challenge.",
      "Toegankelijk voor iedere medewerker, ongeacht functie, leeftijd of conditie.",
      "Inzicht in collectieve deelname, nooit in individuele gegevens van medewerkers.",
      "Je organisatie draagt zichtbaar bij aan een vitaler Nederland.",
    ],
    cta: "Start een pilot met je teams",
    role: "werkgever",
  },
  {
    id: "zorg",
    tab: "Zorgorganisaties",
    icon: "heart",
    title: "Voor zorgorganisaties",
    intro: "Preventie en leefstijl dichter bij mensen brengen, met een aanpak die uitgaat van ieders eigen mogelijkheden.",
    points: [
      "Een laagdrempelige plek om naar door te verwijzen.",
      "Kleine stappen die passen bij mensen met een beperking of chronische aandoening.",
      "Een netwerk van werkgevers, gemeenten en verenigingen rondom dezelfde mensen.",
      "Meedenken over hoe het platform zorgvuldig en veilig wordt ingericht.",
    ],
    cta: "Denk mee als zorgpartner",
    role: "zorgorganisatie",
  },
  {
    id: "gemeenten",
    tab: "Gemeenten",
    icon: "home",
    title: "Voor gemeenten",
    intro: "Een gezamenlijke beweging in je gemeente of regio, die inwoners, bedrijven en organisaties verbindt.",
    points: [
      "Een positief, gezamenlijk verhaal over gezondheid in de wijk.",
      "Bereik van inwoners die niet vanzelf naar een sportschool of sportclub gaan.",
      "Samenwerking tussen lokale partners rond één collectief doel.",
      "Aansluiting op bestaand beleid voor preventie en gezondheid.",
    ],
    cta: "Verken een pilot in je gemeente",
    role: "gemeente",
  },
  {
    id: "verenigingen",
    tab: "Verenigingen & partners",
    icon: "connection",
    title: "Voor verenigingen, communities en maatschappelijke partners",
    intro: "Jullie brengen mensen al samen. Collectief Vitaal maakt zichtbaar wat jullie samen bijdragen.",
    points: [
      "Een gezamenlijk doel voor leden, vrijwilligers en buurtbewoners.",
      "Ruimte voor iedereen, ook voor wie niet competitief sport.",
      "Verbinding met andere verenigingen, werkgevers en de gemeente.",
      "Nieuwe mensen leren jullie club of community kennen.",
      "Als maatschappelijk partner bouw je mee aan een beweging die verder gaat dan één organisatie.",
    ],
    cta: "Word partner of sluit je aan",
    role: "partner",
  },
];

export const seeking: { text: string; icon: BrandIconName }[] = [
  { text: "Organisaties die willen deelnemen aan pilots", icon: "calendar" },
  { text: "Werkgevers die vitaliteit collectief willen stimuleren", icon: "team" },
  { text: "Zorgorganisaties die willen meedenken", icon: "heart" },
  { text: "Partners die maatschappelijke impact willen realiseren", icon: "connection" },
  { text: "Mensen die onderdeel willen worden van de beweging", icon: "profile" },
];

export const pillars: { title: string; icon: BrandIconName; text: string; tone: string; iconTone: string }[] = [
  {
    title: "Vitaliteit",
    icon: "movement",
    text: "Kleine, haalbare stappen in vier focusgebieden: beweging, mentale veerkracht, herstel & slaap en voeding.",
    tone: "bg-light-green",
    iconTone: "text-vital-text",
  },
  {
    title: "Community",
    icon: "connection",
    text: "Samen met je team, je buurt of je vereniging. Verbondenheid is wat ons bindt: elkaar aanmoedigen in plaats van vergelijken.",
    tone: "bg-peach-soft",
    iconTone: "text-deep",
  },
  {
    title: "Collectieve impact",
    icon: "progress",
    text: "Al die stappen tellen op tot één gedeeld resultaat. Voor organisaties, voor gemeenten en voor Nederland.",
    tone: "bg-lavender-soft",
    iconTone: "text-deep",
  },
];
