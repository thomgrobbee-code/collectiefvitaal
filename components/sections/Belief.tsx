import { Illustration } from "@/components/ui/Illustration";
import { Blob } from "@/components/ui/Blob";

export function Belief() {
  return (
    <section aria-labelledby="belief-title" className="band relative overflow-hidden max-[859px]:pb-16">
      <div className="wrap grid items-center gap-10 min-[860px]:grid-cols-[1.05fr_1fr] lg:gap-18">
        <div data-reveal>
          <p className="eyebrow">Onze overtuiging</p>
          <h2 id="belief-title" className="mt-3 text-[clamp(2.4rem,1.6rem+3.4vw,4.4rem)]">
            Kleine stappen. Grote impact.
          </h2>
          <p className="mt-5 max-w-[40ch] text-[clamp(1.15rem,1.05rem+0.4vw,1.4rem)]">
            Voor de een is dat een blokje om na het werk. Voor de ander een uur eerder naar bed, of een keer bellen met
            de buurvrouw. Iedereen draagt bij op zijn eigen niveau, en elke stap telt even zwaar mee.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[var(--radius-card)] bg-light-gray p-5 text-gray">
              <span className="mb-1.5 block text-sm font-extrabold tracking-widest uppercase line-through">Niet</span>
              <p className="font-bold">Vergelijken, scoren, presteren.</p>
            </div>
            <div className="rounded-[var(--radius-card)] bg-deep p-5 text-white">
              <span className="mb-1.5 block text-sm font-extrabold tracking-widest text-mint uppercase">Wel</span>
              <p className="font-bold">Verbinden, aanmoedigen, samen vooruit.</p>
            </div>
          </div>
        </div>
        <div className="relative" data-reveal>
          <Blob shape="b" className="top-1/2 left-0 w-full -translate-y-1/2 text-light-green" />
          <Illustration
            src="/illustrations/groeiboom.svg"
            alt="Een boom met veelkleurige bloesems, die elk staan voor een kleine bijdrage. Een vrouw geeft water, een kind plant een stekje en een oudere man met wandelstok kijkt vrolijk mee."
            width={640}
            height={440}
            className="relative"
          />
        </div>
      </div>
    </section>
  );
}
