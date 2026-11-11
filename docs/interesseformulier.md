# Interesseformulier: huidige status en koppelen

## Wat het nu doet
- Het formulier (`components/forms/InterestForm.tsx`) valideert in de browser en stuurt de aanmelding naar `POST /api/interesse`.
- De route (`app/api/interesse/route.ts`) valideert opnieuw (`lib/interest.ts`), filtert bots met een onzichtbaar honeypot-veld en doet dan één van twee dingen:
  - **`INTEREST_WEBHOOK_URL` is niet gezet** (huidige situatie): er wordt niets opgeslagen of verstuurd. De bezoeker krijgt de melding dat de aanmelding **niet** is verstuurd omdat het formulier nog niet gekoppeld is. Er is dus geen nepverzending.
  - **`INTEREST_WEBHOOK_URL` is gezet**: de aanmelding gaat als JSON naar die URL. Alleen als die URL met 2xx antwoordt, ziet de bezoeker "verstuurd".

Verstuurde velden: `name`, `email`, `role` (`individu | werkgever | zorgorganisatie | gemeente | partner`), `organisation` (verplicht behalve bij individu), `message` (optioneel), `receivedAt`, `source`.

## Gekozen koppeling: Google Sheet + Apps Script
Aanmeldingen komen in de Google Sheet **Aanmeldingen website Collectief Vitaal** (Drive → Collectief Vitaal → 05 Partners & pilots). Bij elke aanmelding gaat er een melding naar `NOTIFY_EMAIL`, met de aanmelder als reply-to.

Eenmalig instellen (±10 minuten):
1. Open de Sheet → **Extensies → Apps Script**.
2. Vervang de inhoud van `Code.gs` door [`integrations/google-apps-script.gs`](../integrations/google-apps-script.gs) en sla op.
3. **Projectinstellingen (tandwiel) → Script-eigenschappen**, voeg toe:
   - `SECRET`: een lange willekeurige tekst (bijv. uit een wachtwoordgenerator)
   - `NOTIFY_EMAIL`: het contactadres, bijv. `info@collectiefvitaal.nl`
4. **Implementeren → Nieuwe implementatie → Web-app**. Uitvoeren als: *Ik*. Toegang: *Iedereen*. Geef toestemming als Google erom vraagt.
5. Kopieer de web-app-URL.
6. Vercel → project `collectiefvitaal` → Settings → Environment Variables (Production):
   - `INTEREST_WEBHOOK_URL` = de web-app-URL
   - `INTEREST_WEBHOOK_SECRET` = dezelfde tekst als `SECRET`
7. Redeploy (of push naar `main`).

Pas je later het script aan, kies dan bij **Implementeren → Implementaties beheren** een nieuwe versie van dezelfde implementatie, zodat de URL gelijk blijft.

## Later uitbreiden
- Bevestigingsmail naar de aanmelder (kan in hetzelfde Apps Script, of via Resend/Postmark).
- Database zodra er accounts komen (bijv. Supabase).

## Voordat er veel aanmeldingen binnenkomen
- Definitieve privacyverklaring op `/privacy`.
- Bewaartermijn vastleggen (AVG) en de Sheet alleen delen met wie het nodig heeft.
