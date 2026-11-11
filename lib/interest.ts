/** De twee manieren om mee te doen. Deze waarde komt zo in de Google Sheet (kolom Rol). */
export const signupTypes = ["Individu", "Organisatie"] as const;
export type SignupType = (typeof signupTypes)[number];

export type InterestPayload = {
  name: string;
  email: string;
  role: SignupType;
  organisation?: string;
  message?: string;
};

export type InterestResult =
  | { status: "sent" }
  | { status: "not-configured" }
  | { status: "invalid"; errors: Partial<Record<keyof InterestPayload, string>> }
  | { status: "error" };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Gedeelde validatie voor client en server. */
export function validateInterest(input: Record<string, unknown>):
  | { ok: true; data: InterestPayload }
  | { ok: false; errors: Partial<Record<keyof InterestPayload, string>> } {
  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const data = {
    name: str(input.name, 120),
    email: str(input.email, 200),
    role: str(input.role, 40) as SignupType,
    organisation: str(input.organisation, 160) || undefined,
    message: str(input.message, 2000) || undefined,
  };
  const errors: Partial<Record<keyof InterestPayload, string>> = {};
  if (!data.name) errors.name = "Vul je naam in.";
  if (!emailRe.test(data.email)) errors.email = "Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.";
  if (!(signupTypes as readonly string[]).includes(data.role)) errors.role = "Kies hoe je mee wilt doen.";
  if (data.role === "Organisatie" && !data.organisation) errors.organisation = "Vul de naam van je organisatie in.";
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}
