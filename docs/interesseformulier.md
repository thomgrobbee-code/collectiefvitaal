# Interesseformulier: huidige status en koppelen

## Wat het nu doet
- Het formulier (`components/forms/InterestForm.tsx`) valideert in de browser en stuurt de aanmelding naar `POST /api/interesse`.
- De route (`app/api/interesse/route.ts`) valideert opnieuw (`lib/interest.ts`), filtert bots met een onzichtbaar honeypot-veld en doet dan één van twee dingen:
  - **`INTEREST_WEBHOOK_URL` is niet gezet** (huidige situatie): er wordt niets opgeslagen of verstuurd. De bezoeker krijgt de melding dat de aanmelding **niet** is verstuurd omdat het formulier nog niet gekoppeld is. Er is dus geen nepverzending.
  - **`INTEREST_WEBHOOK_URL` is gezet**: de aanmelding gaat als JSON naar die URL. Alleen als die URL met 2xx antwoordt, ziet de bezoeker "verstuurd".

Verstuurde velden: `name`, `email`, `role` (`individu | werkgever | zorgorganisatie | gemeente | partner`), `organisation` (verplicht behalve bij individu), `message` (optioneel), `receivedAt`, `source`.

## Opties om het definitief te maken
| Optie | Werk | Geschikt voor |
| --- | --- | --- |
| Google Apps Script-webhook die een rij toevoegt aan een Google Sheet | ±30 min, gratis | Eerste pilots, weinig aanmeldingen |
| Zapier / Make-webhook naar Sheet, CRM of mailbox | ±30 min, betaald abonnement | Als je al zo'n tool gebruikt |
| Transactionele mail (bijv. Resend, Postmark) vanuit de route | ±1–2 uur, API-sleutel nodig | Bevestigingsmail naar de aanmelder |
| Database (bijv. Supabase, later) | Onderdeel van het platform | Zodra er accounts komen |

Voor een webhook-optie: zet `INTEREST_WEBHOOK_URL` in de omgevingsvariabelen van de hosting (bijv. Vercel → Project → Settings → Environment Variables) en deploy opnieuw.

## Voordat het live gaat
- Definitieve privacyverklaring op `/privacy` (nu een voorlopige tekst).
- Bewaartermijn en verwerker(s) vastleggen (AVG), zeker als gegevens in een externe tool landen.
- Eventueel een bevestigingsmail naar de aanmelder.
