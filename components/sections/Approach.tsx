import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { approach } from "@/data/content";

export function Approach() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Approach"
            title="How the work is done."
            body="A practical engineering stance: architecture that lasts, production constraints first, AI where it earns its place."
          />
        </Reveal>
        <ol className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {approach.map((item, index) => (
            <Reveal key={item.index} as="li" delayMs={index * 40}>
              <article className="grid gap-4 py-8 sm:grid-cols-[88px_minmax(0,1fr)] sm:gap-10">
                <p className="font-mono text-sm text-signal">{item.index}</p>
                <div>
                  <h3 className="text-xl font-medium text-mist-50">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-mist-400">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
