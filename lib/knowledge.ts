/**
 * Kennislaag per focusgebied.
 *
 * Regels voor deze inhoud:
 * - Alleen bronnen die we zelf hebben gecontroleerd (RIVM, Gezondheidsraad, WHO, peer-reviewed).
 * - Geef per bron het type onderzoek en hoe sterk het bewijs is.
 * - Geen persoonlijk medisch advies. Als het bewijs beperkt is, zeggen we dat.
 * - Kan een bron niet worden geverifieerd? Gebruik dan `placeholder: true` en toon geen inhoudelijke claim.
 */

export type Evidence = "sterk" | "verband" | "beperkt" | "aanname";

export const evidenceLabels: Record<Evidence, { label: string; uitleg: string; tone: string }> = {
  sterk: {
    label: "Sterk onderbouwd",
    uitleg: "Verschillende soorten onderzoek wijzen dezelfde kant op, ook wat oorzaak en gevolg betreft.",
    tone: "bg-light-green text-vital-text",
  },
  verband: {
    label: "Verband",
    uitleg: "Onderzoek ziet een samenhang, maar dat bewijst nog niet dat het een het ander veroorzaakt.",
    tone: "bg-light-blue text-deep",
  },
  beperkt: {
    label: "Beperkt bewijs",
    uitleg: "Er zijn aanwijzingen, maar de zekerheid is laag. Meer onderzoek is nodig.",
    tone: "bg-peach-soft text-[#8a4b12]",
  },
  aanname: {
    label: "Ons uitgangspunt",
    uitleg: "Een aanname van Collectief Vitaal, die we in pilots willen toetsen. Nog niet bewezen.",
    tone: "bg-lavender-soft text-deep",
  },
};

export type Source = {
  publisher: string;
  title: string;
  date: string;
  type: string;
  url: string;
  placeholder?: boolean;
};

export type KnowledgeItem = {
  domainId: string;
  /** Begrijpen */
  wistJeDat: string;
  watBetekentDit: string;
  /** Toepassen */
  kleineStap: string;
  /** Samen bijdragen (altijd ons uitgangspunt, geen onderzoeksclaim) */
  samen: string;
  evidence: Evidence;
  evidenceNote: string;
  sources: Source[];
};

export const knowledge: KnowledgeItem[] = [
  {
    domainId: "beweging",
    wistJeDat:
      "De Gezondheidsraad adviseert volwassenen om minstens 150 minuten per week matig intensief te bewegen, zoals wandelen en fietsen, verspreid over meerdere dagen. In 2023 voldeed 44% van de volwassenen in Nederland aan de beweegrichtlijnen.",
    watBetekentDit:
      "Je hoeft er niet voor te sporten: wandelen en fietsen tellen mee. Het advies van de Gezondheidsraad is kort samengevat: bewegen is goed, meer bewegen is beter.",
    kleineStap: "Kies één vast moment in je week voor een kwartier wandelen of fietsen, bijvoorbeeld in je lunchpauze.",
    samen: "Een vaste lunchwandeling met collega's of buren maakt het makkelijker om het vol te houden.",
    evidence: "sterk",
    evidenceNote: "Richtlijn op basis van een systematische beoordeling van wetenschappelijk onderzoek.",
    sources: [
      {
        publisher: "Gezondheidsraad",
        title: "Beweegrichtlijnen 2017 (publicatie 2017/08)",
        date: "2017",
        type: "Advies / richtlijn",
        url: "https://www.sportenbewegenincijfers.nl/sites/default/files/2018-09/Gezondheidsraad_samenvatting_beweegrichtlijnen_2017.pdf",
      },
      {
        publisher: "RIVM",
        title: "Deel Nederlanders beweegt voldoende, maar te weinig verspreid over week",
        date: "17 december 2024",
        type: "Cijfers uit de Gezondheidsenquête / Leefstijlmonitor 2023",
        url: "https://www.rivm.nl/nieuws/deel-nederlanders-beweegt-voldoende-maar-te-weinig-verspreid-over-week",
      },
    ],
  },
  {
    domainId: "mentale-veerkracht",
    wistJeDat:
      "De WHO raadt werkgevers aan om te overwegen alle medewerkers trainingen aan te bieden die helpen om met stress om te gaan. De WHO noemt het bewijs daarvoor zelf beperkt: het is een voorwaardelijke aanbeveling met een lage zekerheid van bewijs.",
    watBetekentDit:
      "Omgaan met spanning is iets wat je kunt oefenen. Tegelijk is nog veel onzeker, en wat voor de een werkt, werkt voor de ander niet. Ook de werkomgeving zelf speelt een grote rol.",
    kleineStap: "Plan deze week één kort moment zonder scherm om even bij te komen, bijvoorbeeld een paar minuten buiten.",
    samen: "Een team dat rustmomenten normaal maakt, maakt het voor iedereen makkelijker om ze te nemen.",
    evidence: "beperkt",
    evidenceNote: "Internationale richtlijn; aanbeveling 8A is voorwaardelijk, met een lage zekerheid van bewijs.",
    sources: [
      {
        publisher: "World Health Organization (WHO)",
        title: "Guidelines on mental health at work",
        date: "28 september 2022",
        type: "Internationale richtlijn",
        url: "https://www.who.int/publications/i/item/9789240053052",
      },
    ],
  },
  {
    domainId: "herstel-slaap",
    wistJeDat:
      "Twee wetenschappelijke slaaporganisaties stellen samen dat volwassenen voor een optimale gezondheid regelmatig 7 uur of meer per nacht zouden moeten slapen.",
    watBetekentDit:
      "Dit is een algemene richtlijn, opgesteld door experts die het onderzoek hebben beoordeeld. Veel van dat onderzoek laat verbanden zien, en hoeveel slaap jij nodig hebt kan verschillen.",
    kleineStap: "Kies voor doordeweekse dagen een vaste bedtijd en kijk een week lang hoe dat bevalt.",
    samen: "Als een team geen berichten meer stuurt na werktijd, krijgt iedereen meer ruimte om bij te komen.",
    evidence: "verband",
    evidenceNote: "Consensusverklaring van experts, vooral gebaseerd op onderzoek naar verbanden.",
    sources: [
      {
        publisher: "American Academy of Sleep Medicine & Sleep Research Society (Watson e.a.)",
        title:
          "Recommended Amount of Sleep for a Healthy Adult. Journal of Clinical Sleep Medicine, 11(6), 591–592",
        date: "2015",
        type: "Consensusverklaring (peer-reviewed tijdschrift)",
        url: "https://www.aasm.org/resources/pdf/adultsleepdurationconsensus.pdf",
      },
    ],
  },
  {
    domainId: "voeding",
    wistJeDat:
      "De Gezondheidsraad adviseert om dagelijks ten minste 200 gram groente en 200 gram fruit te eten. Volgens het RIVM at in 2012–2014 ongeveer 15% van de volwassenen de aanbevolen hoeveelheid groente.",
    watBetekentDit:
      "Het gaat niet om een dieet of om wat je allemaal niet mag. Iets meer groente of fruit op een dag is al een stap in de richting van het advies.",
    kleineStap: "Doe bij één maaltijd per dag een handje groente extra, of neem een stuk fruit mee voor onderweg.",
    samen: "Samen koken of een fruitschaal op het werk maakt de gezonde keuze vanzelf wat makkelijker.",
    evidence: "sterk",
    evidenceNote:
      "Volgens de Gezondheidsraad is het verband tussen groente en fruit en minder hart- en vaatziekten overtuigend aangetoond, op basis van RCT's en cohortonderzoek.",
    sources: [
      {
        publisher: "Gezondheidsraad",
        title: "Richtlijnen goede voeding 2015 (publicatie 2015/24)",
        date: "2015",
        type: "Advies / richtlijn",
        url: "https://www.voedingscentrum.nl/Assets/Uploads/voedingscentrum/Documents/Professionals/Schijf%20van%20Vijf/Richtlijnen%20goede%20voeding.pdf",
      },
      {
        publisher: "RIVM (Van Rossum e.a.)",
        title: "Voedselconsumptie in 2012-2014 vergeleken met de Richtlijnen goede voeding 2015",
        date: "30 juni 2017",
        type: "Voedselconsumptiepeiling (rapport 2017-0095)",
        url: "https://www.rivm.nl/publicaties/voedselconsumptie-in-2012-2014-vergeleken-met-richtlijnen-goede-voeding-2015",
      },
    ],
  },
];
