import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertise } from "@/data/expertise";

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="A stack built for production systems, not slide decks."
            body="AI systems, full-stack product engineering, data architecture, and cloud delivery—used together, not as disconnected specialties."
          />
        </Reveal>
        <div className="mt-12 border-t border-white/10">
          {expertise.map((group, index) => (
            <Reveal key={group.title} delayMs={index * 40}>
              <article className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
                <h3 className="text-lg font-medium text-mist-50">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[13px] text-mist-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
