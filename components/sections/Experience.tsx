import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CareerPath } from "@/components/visuals/CareerPath";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="A clear line from application engineering to AI-aware systems."
            body="Roles are listed as they appear in the professional history. Titles changed with companies; the work accumulated toward architecture, cloud, and AI integration."
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {experience.map((role, index) => (
            <Reveal key={role.id} delayMs={index * 40}>
              <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                      {role.company}
                    </p>
                    <h3 className="mt-2 text-2xl font-medium text-mist-50">
                      {role.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist-400">
                      {role.summary}
                    </p>
                  </div>
                  <div className="shrink-0 text-sm text-mist-400 sm:text-right">
                    <p>
                      {role.start} – {role.end}
                    </p>
                    <p className="mt-1">
                      {role.location} · {role.workMode}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-mist-300">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {role.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-mist-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-mist-500">
            Career progression
          </p>
          <CareerPath />
        </Reveal>
      </Container>
    </section>
  );
}
