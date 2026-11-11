import { Hero } from "@/components/sections/Hero";
import { Why } from "@/components/sections/Why";
import { Belief } from "@/components/sections/Belief";
import { Pillars } from "@/components/sections/Pillars";
import { Domains } from "@/components/sections/Domains";
import { Social } from "@/components/sections/Social";
import { AppPreview } from "@/components/sections/AppPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Audiences } from "@/components/sections/Audiences";
import { Impact } from "@/components/sections/Impact";
import { Join } from "@/components/sections/Join";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Why />
      <Belief />
      <Pillars />
      <Domains />
      <Social />
      <AppPreview />
      <HowItWorks />
      <Audiences />
      <Impact />
      <Join />
    </>
  );
}
