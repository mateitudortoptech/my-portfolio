import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AiArchitecture } from "@/components/visuals/AiArchitecture";
import { aiSection } from "@/data/content";

export function AiEngineering() {
  return (
    <section id="ai" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.85fr)]">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow={aiSection.eyebrow}
                title={aiSection.title}
                body={aiSection.lede}
              />
            </Reveal>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-mist-300">
              {aiSection.paragraphs.map((paragraph) => (
                <Reveal key={paragraph.slice(0, 28)}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <ul className="mt-8 flex flex-wrap gap-2">
                {aiSection.capabilities.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-iris/20 bg-iris/10 px-3 py-1 text-[13px] text-mist-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal>
            <AiArchitecture />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
