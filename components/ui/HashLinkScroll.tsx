"use client";

import { useEffect } from "react";

/**
 * Laat links naar een sectie op dezelfde pagina (bijv. "/#doe-mee") altijd scrollen,
 * ook als de URL al op dat anker staat. Next.js doet dan niets, de browser ook niet.
 */
export function HashLinkScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!el) return;
      e.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      if (location.hash !== url.hash) history.pushState(null, "", url.hash);
      // Toetsenbordgebruikers: focus naar de sectie verplaatsen zonder opnieuw te scrollen.
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    };
    // Capture-fase: vóór de klik-afhandeling van Next.js <Link>.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
