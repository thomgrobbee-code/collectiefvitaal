import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { RevealOnScroll } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: ${site.tagline} ${site.promise}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: ["vitaliteit", "collectieve vitaliteit", "preventie", "werkgevers", "gemeenten", "zorg", "beweging", "gezondheid"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/",
    siteName: site.name,
    title: `${site.tagline} ${site.promise}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: `${site.name}: ${site.tagline}`, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#FFF8EE",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={nunito.variable}>
      <body>
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:font-bold"
        >
          Naar de inhoud
        </a>
        <SiteHeader />
        <main id="inhoud">{children}</main>
        <SiteFooter />
        <RevealOnScroll />
      </body>
    </html>
  );
}
