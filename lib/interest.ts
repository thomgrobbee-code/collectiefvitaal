import { roles, type Role } from "@/lib/content";

export type InterestPayload = {
  name: string;
  email: string;
  role: Role;
  organisation?: string;
  message?: string;
};

export type InterestResult =
  | { status: "sent" }
  | { status: "not-configured" }
  | { status: "invalid"; errors: Partial<Record<keyof InterestPayload, string>> }
  | { status: "error" };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const roleValues = roles.map((r) => r.value) as string[];

/** Gedeelde validatie voor client en server. */
export function validateInterest(input: Record<string, unknown>):
  | { ok: true; data: InterestPayload }
  | { ok: false; errors: Partial<Record<keyof InterestPayload, string>> } {
  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const data = {
    name: str(input.name, 120),
    email: str(input.email, 200),
    role: str(input.role, 40) as Role,
    organisation: str(input.organisation, 160) || undefined,
    message: str(input.message, 2000) || undefined,
  };
  const errors: Partial<Record<keyof InterestPayload, string>> = {};
  if (!data.name) errors.name = "Vul je naam in.";
  if (!emailRe.test(data.email)) errors.email = "Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.";
  if (!roleValues.includes(data.role)) errors.role = "Kies hoe je mee wilt doen.";
  if (data.role !== "individu" && !data.organisation) errors.organisation = "Vul de naam van je organisatie in.";
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}
