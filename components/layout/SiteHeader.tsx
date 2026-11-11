"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 960px)");
    const onMq = () => mq.matches && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return (
    <header
      className={`sticky top-[env(safe-area-inset-top,0px)] z-50 bg-cream/95 backdrop-blur transition-shadow ${
        scrolled || open ? "shadow-[0_1px_0_rgba(15,76,92,0.08),0_10px_30px_rgba(15,76,92,0.06)]" : ""
      }`}
    >
      <nav aria-label="Hoofdnavigatie" className="wrap flex min-h-19 items-center justify-between gap-5">
        <Logo />
        <ul className="hidden items-center gap-1 min-[960px]:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3.5 py-2.5 font-bold text-dark transition-colors hover:bg-light-green hover:text-deep"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <ButtonLink href="/#doe-mee" className="!px-5 !py-2.5">
              Doe mee
            </ButtonLink>
          </li>
        </ul>
        <button
          type="button"
          className="inline-flex size-12 items-center justify-center rounded-full bg-light-green text-deep min-[960px]:hidden"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </nav>
      <div
        id="mobiel-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-deep/10 bg-cream shadow-[0_18px_30px_rgba(15,76,92,0.08)] min-[960px]:hidden"
      >
        <ul className="wrap flex flex-col gap-0.5 pt-3 pb-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-3 py-3.5 text-lg font-bold hover:bg-light-green"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-3">
            <ButtonLink href="/#doe-mee" className="w-full" arrow onClick={() => setOpen(false)}>
              Doe mee
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
