"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { CircleCheck, CircleAlert, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { roles, type Role } from "@/lib/content";
import { validateInterest, type InterestPayload, type InterestResult } from "@/lib/interest";

type Errors = Partial<Record<keyof InterestPayload, string>>;
type State = "idle" | "sending" | "sent" | "not-configured" | "error";

const field =
  "w-full rounded-2xl border-2 border-light-gray bg-cream px-4 py-3 text-dark transition " +
  "focus:border-vital focus:shadow-[0_0_0_4px_var(--color-light-green)] focus:outline-none " +
  "aria-[invalid=true]:border-coral";

export function InterestForm() {
  const uid = useId();
  const [role, setRole] = useState<Role>("individu");
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<State>("idle");

  // Een CTA elders op de pagina kan de rol alvast kiezen.
  useEffect(() => {
    const onRole = (e: Event) => {
      const r = (e as CustomEvent<Role>).detail;
      if (roles.some((x) => x.value === r)) setRole(r);
    };
    window.addEventListener("cv:kies-rol", onRole);
    return () => window.removeEventListener("cv:kies-rol", onRole);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const check = validateInterest(values);
    if (!check.ok) {
      setErrors(check.errors);
      const first = Object.keys(check.errors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    setState("sending");
    try {
      const res = await fetch("/api/interesse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as InterestResult;
      if (data.status === "invalid") {
        setErrors(data.errors);
        setState("idle");
      } else {
        setState(data.status);
        if (data.status === "sent") form.reset();
      }
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="flex gap-3 rounded-2xl bg-light-green p-5 font-bold text-deep">
        <CircleCheck aria-hidden className="mt-0.5 size-6 shrink-0 text-vital-text" />
        <p>Dank je wel, je aanmelding is verstuurd. We nemen contact met je op.</p>
      </div>
    );
  }

  const id = (n: string) => `${uid}-${n}`;
  const err = (n: keyof InterestPayload) =>
    errors[n] ? (
      <p id={id(`${n}-err`)} className="text-sm font-bold text-[#B23B2A]">
        {errors[n]}
      </p>
    ) : null;
  const aria = (n: keyof InterestPayload) => ({
    "aria-invalid": errors[n] ? true : undefined,
    "aria-describedby": errors[n] ? id(`${n}-err`) : undefined,
  });
  const label = "text-sm font-extrabold text-deep";

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4">
      <fieldset className="grid gap-2">
        <legend className={`${label} mb-2`}>Ik doe mee als</legend>
        <div className="flex flex-wrap gap-2">
          {roles.map((r) => (
            <label
              key={r.value}
              className="cursor-pointer rounded-full border-2 border-light-gray px-3.5 py-2 text-sm font-extrabold transition-colors hover:border-mint has-[:checked]:border-deep has-[:checked]:bg-deep has-[:checked]:text-white has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-coral"
            >
              <input
                type="radio"
                name="role"
                value={r.value}
                checked={role === r.value}
                onChange={() => setRole(r.value)}
                className="sr-only"
              />
              {r.label}
            </label>
          ))}
        </div>
        {err("role")}
      </fieldset>

      <div className="grid gap-1.5">
        <label htmlFor={id("name")} className={label}>Naam</label>
        <input id={id("name")} name="name" autoComplete="name" className={field} {...aria("name")} />
        {err("name")}
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={id("email")} className={label}>E-mailadres</label>
        <input id={id("email")} name="email" type="email" autoComplete="email" className={field} {...aria("email")} />
        {err("email")}
      </div>
      {role !== "individu" && (
        <div className="grid gap-1.5">
          <label htmlFor={id("organisation")} className={label}>Organisatie</label>
          <input id={id("organisation")} name="organisation" autoComplete="organization" className={field} {...aria("organisation")} />
          {err("organisation")}
        </div>
      )}
      <div className="grid gap-1.5">
        <label htmlFor={id("message")} className={label}>
          Wat wil je ons vertellen? <span className="font-semibold text-gray">(optioneel)</span>
        </label>
        <textarea id={id("message")} name="message" rows={4} className={`${field} resize-y`} />
      </div>

      {/* honeypot */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>
          Laat dit veld leeg
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Button type="submit" arrow disabled={state === "sending"}>
        {state === "sending" ? "Bezig met versturen…" : "Bouw met ons mee"}
      </Button>

      <div aria-live="polite">
        {state === "not-configured" && (
          <div className="flex gap-3 rounded-2xl bg-peach-soft p-4 text-sm font-bold text-dark">
            <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-deep" />
            <p>
              Je aanmelding is <u>niet</u> verstuurd. Het formulier is nog niet gekoppeld aan onze mailbox. Dat regelen
              we binnenkort. Probeer het dan nog eens.
            </p>
          </div>
        )}
        {state === "error" && (
          <div className="flex gap-3 rounded-2xl bg-peach-soft p-4 text-sm font-bold text-dark">
            <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0 text-[#B23B2A]" />
            <p>Er ging iets mis bij het versturen, je aanmelding is niet aangekomen. Probeer het over een paar minuten opnieuw.</p>
          </div>
        )}
      </div>

      <p className="text-sm text-gray">
        We gebruiken je gegevens alleen om contact met je op te nemen over Collectief Vitaal.{" "}
        <a href="/privacy" className="font-bold text-deep underline underline-offset-2">Privacy</a>
      </p>
    </form>
  );
}
