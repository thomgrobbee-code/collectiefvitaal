/**
 * Kennislaag per focusgebied.
 *
 * Regels voor deze inhoud:
 * - Alleen bronnen die we zelf hebben gecontroleerd (RIVM, CBS, Gezondheidsraad, WHO, peer-reviewed).
 * - Noem per bron wat voor document het is (richtlijn, expertconsensus, cijfers).
 * - Geef alleen een bewijslabel als de bron zelf iets zegt over de sterkte van het bewijs,
 *   en neem dan het oordeel van de bron over. Geen eigen classificatie.
 * - Geen persoonlijk medisch advies. Cijfers altijd met jaartal en doelgroep.
 * - Kan een bron niet worden geverifieerd? Gebruik dan `placeholder: true` en toon geen inhoudelijke claim.
 */

/** Wat voor document de hoofdbron is. Een richtlijn is een advies, geen bewijsniveau. */
export type SourceKind = "richtlijn" | "consensus";

/** Wat de bron zelf zegt over de sterkte van het bewijs. */
export type Evidence = "sterk" | "samenhang" | "beperkt";

export const kindLabels: Record<SourceKind, { label: string; uitleg: string }> = {
  richtlijn: {
    label: "Richtlijn",
    uitleg: "Een advies van een gezondheidsinstantie. Dat is geen bewijsniveau op zich.",
  },
  consensus: {
    label: "Expertconsensus",
    uitleg: "Een gezamenlijke aanbeveling van experts die het onderzoek hebben beoordeeld.",
  },
};

export const evidenceLabels: Record<Evidence, { label: string; uitleg: string; tone: string }> = {
  sterk: {
    label: "Sterk bewijs",
    uitleg: "Volgens de bron is het effect overtuigend aangetoond.",
    tone: "bg-light-green text-vital-text",
  },
  samenhang: {
    label: "Samenhang gevonden",
    uitleg: "Onderzoek ziet een samenhang, maar dat bewijst niet dat het een het ander veroorzaakt.",
    tone: "bg-light-blue text-deep",
  },
  beperkt: {
    label: "Beperkt bewijs",
    uitleg: "Er zijn aanwijzingen, maar de bron noemt de zekerheid laag.",
    tone: "bg-peach-soft text-[#8a4b12]",
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
  /** Samen bijdragen: een idee om het samen te doen, geen onderzoeksclaim */
  samen: string;
  kind: SourceKind;
  /** Alleen invullen als de bron zelf iets zegt over de bewijskracht. */
  evidence?: Evidence;
  evidenceNote: string;
  sources: Source[];
};

export const knowledge: KnowledgeItem[] = [
  {
    domainId: "beweging",
    wistJeDat:
      "De Gezondheidsraad adviseert volwassenen om minstens 150 minuten per week matig intensief te bewegen, zoals wandelen en fietsen, verspreid over diverse dagen. Daarnaast minstens twee keer per week spier- en botversterkende activiteiten. Volgens het CBS voldeed in 2022 44% van de volwassenen (18 jaar en ouder) aan deze beweegrichtlijnen.",
    watBetekentDit:
      "Je hoeft er niet voor te sporten: wandelen en fietsen tellen mee. Het advies van de Gezondheidsraad is kort samengevat: bewegen is goed, meer bewegen is beter. En voorkom veel stilzitten.",
    kleineStap: "Kies één vast moment in je week voor een kwartier wandelen of fietsen, bijvoorbeeld in je lunchpauze.",
    samen: "Spreek een vast beweegmoment af met collega's of buren, zodat je elkaar meeneemt.",
    kind: "richtlijn",
    evidenceNote: "Advies van de Gezondheidsraad voor volwassenen. Het percentage komt uit cijfers van het CBS over 2022.",
    sources: [
      {
        publisher: "Gezondheidsraad",
        title: "Beweegrichtlijnen 2017, samenvatting (publicatie 2017/08)",
        date: "2017",
        type: "Richtlijn",
        url: "https://www.sportenbewegenincijfers.nl/sites/default/files/2018-09/Gezondheidsraad_samenvatting_beweegrichtlijnen_2017.pdf",
      },
      {
        publisher: "CBS",
        title: "Ruim 4 op de 10 volwassenen bewegen voldoende",
        date: "12 september 2023",
        type: "Cijfers over 2022, volwassenen van 18 jaar en ouder",
        url: "https://www.cbs.nl/nl-nl/nieuws/2023/37/ruim-4-op-de-10-volwassenen-bewegen-voldoende",
      },
    ],
  },
  {
    domainId: "mentale-veerkracht",
    wistJeDat:
      "De WHO-richtlijn over mentale gezondheid op het werk zegt dat werkgevers kunnen overwegen om alle werkenden trainingen aan te bieden die helpen beter met stress om te gaan, bijvoorbeeld gebaseerd op mindfulness of cognitieve gedragstherapie. De WHO noemt dit een voorwaardelijke aanbeveling, met een lage zekerheid van bewijs.",
    watBetekentDit:
      "Omgaan met spanning is iets wat je kunt oefenen, maar het bewijs is nog beperkt en wat voor de een werkt, werkt niet voor iedereen. De richtlijn kijkt ook naar maatregelen in de organisatie zelf, niet alleen naar wat je als persoon kunt doen.",
    kleineStap: "Plan deze week één kort moment zonder scherm om even bij te komen, bijvoorbeeld een paar minuten buiten.",
    samen: "Spreek als team af dat even pauzeren normaal is, zodat niemand zich hoeft te verontschuldigen voor een rustmoment.",
    kind: "richtlijn",
    evidence: "beperkt",
    evidenceNote:
      "Aanbeveling 8A van de WHO voor werkenden in het algemeen: voorwaardelijk, met een lage zekerheid van bewijs.",
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
      "Twee wetenschappelijke slaaporganisaties uit de Verenigde Staten bevelen volwassenen van 18 tot 60 jaar aan om regelmatig 7 uur of meer per nacht te slapen, voor een optimale gezondheid.",
    watBetekentDit:
      "Dit is een algemene aanbeveling, geen norm voor iedereen. Volgens dezelfde experts verschilt de slaapbehoefte per persoon, door aanleg, gedrag, gezondheid en omgeving. Het onderzoek erachter laat vooral samenhang zien tussen korte slaap en gezondheid. Dat is nog geen bewezen oorzaak en gevolg.",
    kleineStap: "Kies voor doordeweekse dagen een vaste bedtijd en kijk een week lang hoe dat bevalt.",
    samen: "Spreek als team af dat je na werktijd geen berichten meer verwacht, zodat iedereen ruimte heeft om bij te komen.",
    kind: "consensus",
    evidence: "samenhang",
    evidenceNote:
      "Consensusverklaring van experts. Korte slaap gaat samen met gezondheidsproblemen; de experts geven aan dat de aanbeveling kan veranderen als er onderzoek komt dat het effect direct meet.",
    sources: [
      {
        publisher: "American Academy of Sleep Medicine & Sleep Research Society (Watson e.a.)",
        title:
          "Recommended Amount of Sleep for a Healthy Adult. Journal of Clinical Sleep Medicine, 11(6), 591–592",
        date: "2015",
        type: "Expertconsensus (peer-reviewed tijdschrift)",
        url: "https://www.aasm.org/resources/pdf/adultsleepdurationconsensus.pdf",
      },
    ],
  },
  {
    domainId: "voeding",
    wistJeDat:
      "Sinds december 2025 adviseert de Gezondheidsraad een meer plantaardig en minder dierlijk voedingspatroon. Vergeleken met hoe we nu eten, betekent dat vooral minder vlees en meer peulvruchten en noten. Het advies voor groente en fruit blijft: dagelijks ten minste 200 gram groente en 200 gram fruit.",
    watBetekentDit:
      "Het gaat om hoe je over langere tijd eet, niet om één maaltijd, een dieet of strenge regels. Concreet noemt de Gezondheidsraad onder meer 250 gram peulvruchten per week en 15 tot 30 gram ongezouten noten per dag.",
    kleineStap: "Probeer deze week één keer een maaltijd met bonen, linzen of kikkererwten.",
    samen: "Kook eens samen of deel een recept met je groep. Iets nieuws proberen is leuker met anderen.",
    kind: "richtlijn",
    evidence: "sterk",
    evidenceNote:
      "Volgens de Gezondheidsraad is het effect op chronische ziekten overtuigend aangetoond voor onder meer peulvruchten, noten en vis (en in 2015 voor groente en fruit), vooral op basis van cohortonderzoek gesteund door gerandomiseerde studies. Langlopende gerandomiseerde studies met ziekte als uitkomst zijn schaars.",
    sources: [
      {
        publisher: "Gezondheidsraad",
        title: "Richtlijnen goede voeding: eiwitbronnen en voedingspatronen 2025 (publicatie 2025/19)",
        date: "4 december 2025",
        type: "Richtlijn",
        url: "https://www.gezondheidsraad.nl/site/binaries/site-content/collections/documents/2025/12/04/advies-richtlijnen-goede-voeding-eiwitbronnen-en-voedingspatronen-2025/19-richtlijnen-goede-voeding-eiwitbronnen-en-voedingspatronen-2025-advies.pdf",
      },
      {
        publisher: "Gezondheidsraad",
        title: "Richtlijnen goede voeding 2015 (publicatie 2015/24), richtlijn groente en fruit",
        date: "2015, van kracht tot herziening",
        type: "Richtlijn",
        url: "https://www.voedingscentrum.nl/Assets/Uploads/voedingscentrum/Documents/Professionals/Schijf%20van%20Vijf/Richtlijnen%20goede%20voeding.pdf",
      },
    ],
  },
];
