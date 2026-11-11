import type { SVGProps } from "react";

/**
 * Lijniconen uit het Collectief Vitaal brand asset pack (icons/*.svg),
 * omgezet naar één React-component. Kleur volgt `currentColor`.
 */
const paths = {
  "calendar": (
    <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 4h2m4 0h2m-8 3h2"/></>
  ),
  "challenge": (
    <><path d="M8 4h8v4a4 4 0 0 1-8 0z"/><path d="M8 6H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 0v5m-4 3h8m-6-3h4"/></>
  ),
  "community": (
    <><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8m-8 4h5"/></>
  ),
  "connection": (
    <><circle cx="12" cy="8" r="3"/><circle cx="5" cy="10" r="2.2"/><circle cx="19" cy="10" r="2.2"/><path d="M6 20v-2a6 6 0 0 1 12 0v2zM1.5 19v-1a3.5 3.5 0 0 1 3.5-3.5m17.5 4.5v-1a3.5 3.5 0 0 0-3.5-3.5"/></>
  ),
  "heart": (
    <><path d="M20.8 8.8c0 5-8.8 11-8.8 11s-8.8-6-8.8-11A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8z"/></>
  ),
  "help": (
    <><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 1 1 4.5 1.8c-1.1 1-2 1.3-2 3m0 3h.01"/></>
  ),
  "home": (
    <><path d="m3 11 9-8 9 8v10h-6v-6H9v6H3z"/></>
  ),
  "mental-resilience": (
    <><path d="M12 21c-5-3-8-7-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 4-3 8-8 11z"/><path d="M12 8v8m-4-4h8"/></>
  ),
  "movement": (
    <><path d="M3 15c3-1 5-3 7-7l3 2 3-3 5 2-2 4-5-1-3 4H5z"/><path d="M7 19h12"/></>
  ),
  "notification": (
    <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12a2 2 0 0 0 4 0"/></>
  ),
  "nutrition": (
    <><path d="M12 7.5c-2-1.6-6.2-1.3-7.2 2.4C3.8 13.7 6 19 9 20c1.3.4 2-.3 3-.3s1.7.7 3 .3c3-1 5.2-6.3 4.2-10.1-1-3.7-5.2-4-7.2-2.4z"/><path d="M12 7.5c0-2 1-3.6 3-4.5"/></>
  ),
  "profile": (
    <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>
  ),
  "progress": (
    <><path d="M4 20V12h4v8M10 20V7h4v13m2 0V3h4v17"/></>
  ),
  "settings": (
    <><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.6-1.4-2.4 1.4-1.1a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.6 1.4 2.4-1.4 1.1a8 8 0 0 1 0 2z"/></>
  ),
  "sleep-recovery": (
    <><path d="M19 15A8 8 0 0 1 9 5a8 8 0 1 0 10 10z"/><path d="M16 4v4m-2-2h4M20 9v3m-1.5-1.5h3"/></>
  ),
  "team": (
    <><circle cx="12" cy="8" r="3"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/><path d="M5 20v-2a7 7 0 0 1 14 0v2z"/></>
  ),
} as const;

export type BrandIconName = keyof typeof paths;

type Props = SVGProps<SVGSVGElement> & { name: BrandIconName; title?: string };

export function BrandIcon({ name, title, className = "size-7", ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
