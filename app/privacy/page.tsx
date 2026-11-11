import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Hoe Collectief Vitaal omgaat met je gegevens.",
  alternates: { canonical: "/privacy" },
};

// TODO: definitieve privacyverklaring laten opstellen en controleren (AVG) voordat de site live gaat.
export default function PrivacyPage() {
  return (
    <section className="band">
      <div className="wrap max-w-3xl">
        <p className="eyebrow">Privacy</p>
        <h1 className="mt-3 text-[clamp(2rem,1.5rem+2.3vw,3.4rem)]">Jouw gegevens zijn van jou.</h1>
        <div className="mt-6 grid gap-4 text-[1.1rem]">
          <p>
            Persoonlijke voortgang blijft privé. Dat is een van onze uitgangspunten, en dat geldt ook voor deze website.
          </p>
          <p>
            Via het interesseformulier vragen we alleen je naam, e-mailadres, hoe je wilt meedoen en eventueel je
            organisatie. Die gegevens gebruiken we alleen om contact met je op te nemen over Collectief Vitaal. We
            verkopen ze niet en delen ze niet met anderen.
          </p>
          <p className="rounded-2xl bg-peach-soft p-4 text-base font-bold">
            Dit is een voorlopige tekst. De volledige privacyverklaring volgt voordat het platform van start gaat.
          </p>
          <p>
            <Link href="/" className="font-bold text-deep underline underline-offset-4">Terug naar de startpagina</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
