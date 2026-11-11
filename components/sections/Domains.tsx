import { BrandIcon } from "@/components/brand/BrandIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wave } from "@/components/ui/Blob";
import { domains } from "@/lib/content";
import { KnowledgeLayer } from "@/components/sections/KnowledgeLayer";

export function Domains() {
  return (
    <section id="focusgebieden" aria-labelledby="domains-title">
      <Wave className="text-white" />
      <div className="band bg-white">
        <div className="wrap">
          <SectionHeading
            id="domains-title"
            eyebrow="Vier focusgebieden"
            title="Vitaliteit is meer dan sporten."
            intro="Je kunt op vier manieren een kleine stap zetten. Kies wat nu bij je past. Verbondenheid is geen apart vak: het zit in hoe we alles samen doen."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {domains.map((d, i) => (
              <li
                key={d.title}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`${d.tone} group flex flex-col gap-3 rounded-[1.75rem] p-7 transition-transform duration-300 hover:-translate-y-1.5`}
              >
                <span className="mb-1.5 grid size-16 place-items-center rounded-[1.25rem] bg-white text-deep shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:rotate-[-6deg]">
                  <BrandIcon name={d.icon} className="size-9" />
                </span>
                <h3 className="text-[1.35rem] font-extrabold">{d.title}</h3>
                <p>{d.text}</p>
                <p className="mt-auto pt-2 text-sm font-bold text-deep">
                  <span className="sr-only">Voorbeelden: </span>
                  {d.example}
                </p>
              </li>
            ))}
          </ul>
          <KnowledgeLayer />
        </div>
      </div>
      <Wave className="text-white" flip />
    </section>
  );
}
