import { BrandIcon } from "@/components/brand/BrandIcon";
import { Illustration } from "@/components/ui/Illustration";
import { InterestForm } from "@/components/forms/InterestForm";
import { seeking } from "@/lib/content";
import { site } from "@/lib/site";

export function Join() {
  return (
    <section id="doe-mee" aria-labelledby="build-title" className="band">
      <div className="wrap grid items-start gap-10 min-[900px]:grid-cols-2 lg:gap-16">
        <div data-reveal>
          <p className="eyebrow">Samen bouwen</p>
          <h2 id="build-title" className="mt-3 text-[clamp(2rem,1.5rem+2.3vw,3.4rem)]">
            We zijn een beweging in ontwikkeling.
          </h2>
          <p className="mt-4 max-w-[40ch] text-[clamp(1.15rem,1.05rem+0.4vw,1.4rem)]">
            En we bouwen hem niet alleen. We zoeken mensen en organisaties die vanaf het begin willen meedoen.
          </p>
          <ul className="mt-7 grid gap-2.5">
            {seeking.map((s) => (
              <li key={s.text} className="flex items-center gap-3.5 rounded-2xl bg-white px-4.5 py-3.5 font-bold transition-transform hover:translate-x-1">
                <BrandIcon name={s.icon} className="size-6.5 shrink-0 text-deep" />
                {s.text}
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-8 max-w-sm motion-safe:animate-float">
            <Illustration
              src="/illustrations/samen-bouwen.svg"
              alt="Drie mensen zetten samen een wegwijzer neer met het woord Samen."
              width={440}
              height={360}
              sizes="380px"
            />
          </div>
        </div>
        <div data-reveal className="rounded-[2rem] bg-white p-[clamp(24px,4vw,40px)] shadow-[var(--shadow-soft)] min-[900px]:sticky min-[900px]:top-28">
          <h3 className="text-[clamp(1.55rem,1.3rem+1.1vw,2.2rem)]">Bouw met ons mee.</h3>
          <p className="mt-2.5 text-gray">Laat weten wie je bent. We nemen contact op zodra er een plek voor je is.</p>
          <InterestForm />
          <p className="mt-6 border-t border-light-gray pt-5 text-sm text-gray">
            Liever direct contact? Mail naar{" "}
            <a href={`mailto:${site.email}`} className="font-bold text-deep underline underline-offset-2">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
