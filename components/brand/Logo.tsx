import Link from "next/link";

/** Beeldmerk: mensen onder een opkomende zon, samen in een boog. Nagetekend naar het styleboard. */
export function LogoMark({ className = "size-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g strokeLinecap="round" fill="none">
        <path d="M32 4v7M18 9l4 6M46 9l-4 6" stroke="#34C37B" strokeWidth="4" />
        <path d="M4 50a16 16 0 0 1 14-15" stroke="#34C37B" strokeWidth="6" />
        <path d="M60 50a16 16 0 0 0-14-15" stroke="#34C37B" strokeWidth="6" />
        <path d="M17 56a15 15 0 0 1 30 0" stroke="#0F4C5C" strokeWidth="8" />
      </g>
      <circle cx="32" cy="26" r="7" fill="#0F4C5C" />
      <circle cx="14" cy="28" r="5" fill="#34C37B" />
      <circle cx="50" cy="28" r="5" fill="#A8E6C2" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/#top"
      className={`flex items-center gap-3 no-underline ${inverted ? "text-white" : "text-deep"}`}
      aria-label="Collectief Vitaal, naar de startpagina"
    >
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-tight">Collectief Vitaal</span>
        <span className={`mt-1 text-sm font-extrabold ${inverted ? "text-mint" : "text-vital-text"}`}>10% beter.</span>
      </span>
    </Link>
  );
}
