"use client";

import { useEffect } from "react";

/**
 * Subtiele in-beeld-animatie voor elementen met `data-reveal`.
 * Zonder JavaScript of met 'reduced motion' blijft alles gewoon zichtbaar.
 */
export function RevealOnScroll() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.setAttribute("data-shown", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-shown", "");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => {
      // Wat al in beeld staat bij het laden, direct tonen (geen flits).
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.setAttribute("data-shown", "");
      else io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
