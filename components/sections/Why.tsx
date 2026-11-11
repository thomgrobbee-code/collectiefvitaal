import { Illustration } from "@/components/ui/Illustration";
import { Wave } from "@/components/ui/Blob";

const points = [
  {
    title: "We leggen het vaak bij het individu.",
    text: "Beweeg meer, slaap beter, eet gezonder. Alsof het alleen een kwestie van willen is.",
    tone: "bg-light-gray",
  },
  {
    title: "Maar niet iedereen start op dezelfde plek.",
    text: "Werk, zorg voor anderen, geld, gezondheid en omgeving bepalen wat iemand kan.",
    tone: "bg-peach-soft",
  },
  {
    title: "Samen kom je verder.",
    text: "Als we elkaar stimuleren in plaats van vergelijken, wordt vitaliteit iets wat we met elkaar delen.",
    tone: "bg-mint",
  },
];

export function Why() {
  return (
    <section id="ons-verhaal" aria-labelledby="why-title">
      <Wave className="text-white" />
      <div className="band bg-white">
        <div className="wrap grid items-center gap-10 min-[860px]:grid-cols-2 lg:gap-18">
          <div data-reveal>
            <p className="eyebrow">Waarom Collectief Vitaal</p>
            <h2 id="why-title" className="mt-3 text-[clamp(2rem,1.5rem+2.3vw,3.4rem)]">
              Gezond leven is geen soloprestatie.
            </h2>
            <ol className="mt-8 grid gap-5">
              {points.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[auto_1fr] items-start gap-4">
                  <span className={`${p.tone} grid size-11 place-items-center rounded-2xl font-black text-deep`} aria-hidden>
                    {i + 1}
                  </span>
                  <p>
                    <strong className="block text-[1.25rem] leading-snug text-deep">{p.title}</strong>
                    {p.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div data-reveal>
            <Illustration
              src="/illustrations/alleen-of-samen.svg"
              alt="Links klimt één persoon alleen een steile heuvel op. Rechts lopen vier mensen samen een geleidelijke helling op."
              width={640}
              height={380}
            />
          </div>
        </div>
      </div>
      <Wave className="text-white" flip />
    </section>
  );
}
