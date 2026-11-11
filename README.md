# Collectief Vitaal: website

Landingspagina van Collectief Vitaal. **10% beter. Samen maken we Nederland vitaler.**

Gebouwd met Next.js (App Router), TypeScript, Tailwind CSS v4 en Lucide-iconen.

## Starten
```bash
npm install
cp .env.example .env.local   # optioneel, zie docs/interesseformulier.md
npm run dev                  # http://localhost:3000
```
Overige scripts: `npm run build`, `npm start`, `npm run lint`, `npm run typecheck`.

## Structuur
```
app/
  layout.tsx            Nunito, metadata/SEO, header en footer
  page.tsx              Landingspagina: zet de secties onder elkaar
  privacy/page.tsx      Voorlopige privacypagina
  api/interesse/        Ontvangt het interesseformulier (zie docs)
  sitemap.ts robots.ts opengraph-image.tsx icon.svg
  globals.css           Tailwind + merktokens (@theme)
components/
  brand/                Logo en BrandIcon (iconen uit het brand asset pack)
  layout/               SiteHeader (responsive menu), SiteFooter
  sections/             Eén bestand per sectie (Hero, Why, Belief, Domains, HowItWorks, Audiences, Impact, Join)
  forms/                InterestForm
  ui/                   Button, SectionHeading, Illustration, Blob/Wave, Reveal
lib/
  site.ts               Naam, tagline, URL, LinkedIn (alleen tonen als ingevuld)
  content.ts            Teksten: domeinen, stappen, doelgroepen, rollen
  interest.ts           Gedeelde validatie formulier
public/illustrations/   Flat illustraties (SVG)
docs/                   Documentatie
```

## Merkregels in de code
- Kleuren staan als tokens in `app/globals.css` (`bg-deep`, `text-vital-text`, `bg-light-green` …). Gebruik voor tekst `vital-text` in plaats van `vital` (contrast).
- Iconen voor de vier domeinen komen uit het brand asset pack (`BrandIcon`). Lucide wordt gebruikt voor UI-iconen (menu, pijl, slot, check).
- Geen ranglijsten, scores of verzonnen impactcijfers op de site.
- Animaties zijn subtiel en vallen weg bij `prefers-reduced-motion`.

## Deploy (GitHub + Vercel)
1. Push deze map naar een GitHub-repository.
2. Vercel → Add New → Project → importeer de repository. Framework: Next.js, geen extra instellingen nodig.
3. Environment Variables: `NEXT_PUBLIC_SITE_URL=https://collectiefvitaal.nl` en later `INTEREST_WEBHOOK_URL`.
4. Vercel → Project → Settings → Domains: voeg `collectiefvitaal.nl` toe (primair) en `www.collectiefvitaal.nl` (redirect naar het primaire domein).
5. Zet bij je domeinregistrar de DNS-records die Vercel toont (A-record voor het hoofddomein, CNAME voor www).
Elke push naar `main` gaat daarna automatisch live; pull requests krijgen een preview-URL.

## Open punten
- Officieel logobestand (het beeldmerk is nu nagetekend in `components/brand/Logo.tsx`).
- LinkedIn-URL in `lib/site.ts` zodra beschikbaar.
- Formulier koppelen: zie `docs/interesseformulier.md`.
