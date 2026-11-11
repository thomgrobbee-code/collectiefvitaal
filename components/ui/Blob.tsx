/** Organische achtergrondvorm. Puur decoratief. */
const shapes = {
  a: "M421 312c-33 81-127 120-212 101S27 330 14 247 59 74 140 33s200-26 253 39 61 159 28 240Z",
  b: "M392 92c46 54 57 145 17 212s-129 109-213 96S29 324 13 247 40 84 113 41s233-3 279 51Z",
  c: "M438 238c-6 87-89 165-185 175S56 360 24 276 22 92 103 43s217-48 283 4 58 104 52 191Z",
};

export function Blob({ shape = "a", className = "" }: { shape?: keyof typeof shapes; className?: string }) {
  return (
    <svg viewBox="0 0 450 450" aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <path d={shapes[shape]} fill="currentColor" />
    </svg>
  );
}

/** Golvende overgang tussen twee banden. `className` bepaalt de kleur (text-*) van de onderliggende band. */
export function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path d="M0 48c160-30 330-44 520-20s330 46 520 30 280-46 400-40v62H0Z" fill="currentColor" />
    </svg>
  );
}
