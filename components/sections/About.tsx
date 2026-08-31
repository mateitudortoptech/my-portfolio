import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(240px,0.8fr)] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-mist-300 sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <dl className="grid border border-white/10 sm:grid-cols-2 lg:grid-cols-1">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-white/10 px-5 py-4 last:border-b-0 sm:odd:border-r lg:border-r-0"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-mist-500">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-mist-50">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
