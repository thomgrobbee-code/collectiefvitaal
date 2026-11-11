/**
 * Collectief Vitaal: ontvanger voor het interesseformulier.
 *
 * Plak dit in de Google Sheet "Aanmeldingen website Collectief Vitaal":
 *   Extensies → Apps Script → vervang de inhoud van Code.gs door dit bestand.
 *
 * Script-eigenschappen (Projectinstellingen → Script-eigenschappen):
 *   SECRET        lange willekeurige tekst, gelijk aan INTEREST_WEBHOOK_SECRET in Vercel
 *   NOTIFY_EMAIL  adres dat een melding krijgt bij elke aanmelding, bijv. info@collectiefvitaal.nl
 *
 * Implementeren → Nieuwe implementatie → Type: Web-app
 *   Uitvoeren als: Ik      Toegang: Iedereen
 * Kopieer de web-app-URL naar INTEREST_WEBHOOK_URL in Vercel.
 */

var ROLE_LABELS = {
  individu: 'Individu',
  werkgever: 'Werkgever',
  zorgorganisatie: 'Zorgorganisatie',
  gemeente: 'Gemeente',
  partner: 'Partner',
};

function doPost(e) {
  var props = PropertiesService.getScriptProperties();
  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json({ ok: false, error: 'invalid-json' });
  }

  var secret = props.getProperty('SECRET');
  if (!secret || data.token !== secret) {
    return json({ ok: false, error: 'unauthorized' });
  }

  var clean = function (v, max) {
    // Voorkom dat tekst als formule wordt uitgevoerd in Sheets.
    var s = String(v || '').slice(0, max);
    return /^[=+\-@]/.test(s) ? "'" + s : s;
  };

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      new Date(data.receivedAt || new Date()),
      clean(data.name, 120),
      clean(data.email, 200),
      ROLE_LABELS[data.role] || clean(data.role, 40),
      clean(data.organisation, 160),
      clean(data.message, 2000),
      clean(data.source, 40),
      'Nieuw',
    ]);
  } finally {
    lock.releaseLock();
  }

  var notify = props.getProperty('NOTIFY_EMAIL');
  if (notify) {
    try {
      MailApp.sendEmail({
        to: notify,
        replyTo: String(data.email || ''),
        subject: 'Nieuwe aanmelding: ' + (ROLE_LABELS[data.role] || data.role) + ', ' + data.name,
        body:
          'Er is een nieuwe aanmelding via collectiefvitaal.nl.\n\n' +
          'Naam: ' + data.name + '\n' +
          'E-mail: ' + data.email + '\n' +
          'Rol: ' + (ROLE_LABELS[data.role] || data.role) + '\n' +
          'Organisatie: ' + (data.organisation || '-') + '\n\n' +
          'Bericht:\n' + (data.message || '-') + '\n\n' +
          'Alle aanmeldingen: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
      });
    } catch (err) {
      // De aanmelding staat al in de sheet; een mislukte melding mag de aanmelding niet laten falen.
      console.error('Melding versturen mislukt', err);
    }
  }

  return json({ ok: true });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
