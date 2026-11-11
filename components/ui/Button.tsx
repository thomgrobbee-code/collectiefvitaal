import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "soft" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-deep text-white hover:bg-deep-hover",
  soft: "bg-light-green text-deep hover:bg-mint",
  light: "bg-white text-deep hover:bg-light-green",
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 font-extrabold leading-tight " +
  "transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] active:translate-y-0";

type Common = { variant?: Variant; arrow?: boolean; children: ReactNode; className?: string };

export function ButtonLink({
  href,
  variant = "primary",
  arrow = false,
  children,
  className = "",
  ...rest
}: Common & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />}
    </Link>
  );
}

export function Button({
  variant = "primary",
  arrow = false,
  children,
  className = "",
  ...rest
}: Common & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={`${base} ${styles[variant]} disabled:opacity-60 disabled:hover:translate-y-0 ${className}`} {...rest}>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />}
    </button>
  );
}
