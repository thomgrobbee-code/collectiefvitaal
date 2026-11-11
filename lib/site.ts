export const site = {
  name: "Collectief Vitaal",
  tagline: "10% beter.",
  promise: "Samen maken we Nederland vitaler.",
  description:
    "Collectief Vitaal is een maatschappelijke beweging en platform dat mensen, werkgevers, zorgorganisaties, gemeenten en communities samenbrengt rondom vitaliteit. Kleine stappen, samen een groot verschil.",
  motto: "Alleen ga je harder, maar samen kom je verder.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://collectiefvitaal.nl",
  // Algemeen contactadres; ontvangt ook meldingen van het interesseformulier (via Apps Script).
  email: "info@collectiefvitaal.nl",
  // Alleen tonen als er een LinkedIn-pagina is. Vul de URL in om de link zichtbaar te maken.
  linkedin: null as string | null,
};

export const navItems = [
  { href: "/#ons-verhaal", label: "Ons verhaal" },
  { href: "/#hoe-het-werkt", label: "Hoe het werkt" },
  { href: "/#voor-organisaties", label: "Voor organisaties" },
  { href: "/#onze-impact", label: "Onze impact" },
] as const;
