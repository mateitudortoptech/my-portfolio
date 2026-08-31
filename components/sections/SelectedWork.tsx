import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { selectedWork } from "@/data/work";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Engineering highlights from production roles."
            body="The resume does not list named client projects. These are the strongest systems and initiatives from professional experience—SaaS platforms, AI in production, APIs, cloud-native delivery, and earlier trust systems."
          />
        </Reveal>
        <ol className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {selectedWork.map((item, index) => (
            <Reveal key={item.id} as="li" delayMs={index * 30}>
              <article className="group grid gap-6 py-10 lg:grid-cols-[140px_minmax(0,1fr)]">
                <p className="font-mono text-sm text-signal">{item.index}</p>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-mist-500">
                    {item.source}
                  </p>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight text-mist-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-mist-300">
                    {item.description}
                  </p>
                  <dl className="mt-6 grid gap-5 sm:grid-cols-3">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-mist-500">
                        Challenge
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-mist-400">
                        {item.challenge}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-mist-500">
                        What was built
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-mist-400">
                        {item.built}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-mist-500">
                        Architecture
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-mist-400">
                        {item.architecture}
                      </dd>
                    </div>
                  </dl>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-mist-400"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
