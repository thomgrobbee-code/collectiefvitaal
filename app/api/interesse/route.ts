import { NextResponse } from "next/server";
import { validateInterest, type InterestResult } from "@/lib/interest";

/**
 * Ontvangt aanmeldingen van het interesseformulier.
 *
 * Tijdelijke implementatie: er is nog geen database of mailkoppeling.
 * - Is INTEREST_WEBHOOK_URL gezet, dan sturen we de aanmelding als JSON door naar die URL.
 * - Zo niet, dan antwoorden we eerlijk met "not-configured" en wordt er niets opgeslagen.
 * Zie docs/interesseformulier.md voor de opties om dit definitief te koppelen.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<InterestResult>({ status: "error" }, { status: 400 });
  }

  // Simpele honeypot tegen bots: dit veld is onzichtbaar voor mensen.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json<InterestResult>({ status: "sent" });
  }

  const result = validateInterest(body);
  if (!result.ok) {
    return NextResponse.json<InterestResult>({ status: "invalid", errors: result.errors }, { status: 422 });
  }

  const webhook = process.env.INTEREST_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json<InterestResult>({ status: "not-configured" }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...result.data,
        receivedAt: new Date().toISOString(),
        source: "website",
        // Gedeeld geheim zodat het Apps Script alleen aanmeldingen van deze site accepteert.
        token: process.env.INTEREST_WEBHOOK_SECRET ?? "",
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Webhook antwoordde ${res.status}`);
    const reply = (await res.json().catch(() => null)) as { ok?: boolean } | null;
    if (!reply?.ok) throw new Error("Webhook bevestigde de aanmelding niet");
    return NextResponse.json<InterestResult>({ status: "sent" });
  } catch (err) {
    console.error("[interesse] doorsturen mislukt", err);
    return NextResponse.json<InterestResult>({ status: "error" }, { status: 502 });
  }
}
