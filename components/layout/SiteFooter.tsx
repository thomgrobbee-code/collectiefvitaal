import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  const links = [
    { href: "/#ons-verhaal", label: "Ons verhaal" },
    { href: "/#doe-mee", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
    ...(site.linkedin ? [{ href: site.linkedin, label: "LinkedIn", external: true }] : []),
  ] as { href: string; label: string; external?: boolean }[];

  return (
    <footer className="bg-dark pt-16 pb-10 text-[#C9D3DC]">
      <div className="wrap">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="max-w-sm">
            <Logo inverted />
            <p className="mt-5 text-xl font-extrabold text-white">{site.promise}</p>
            <p className="mt-2 italic">{site.motto}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-bold underline-offset-4 hover:text-white hover:underline"
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 border-t border-white/10 pt-5 text-sm">
          © {new Date().getFullYear()} {site.name}. {site.tagline}
        </p>
      </div>
    </footer>
  );
}
