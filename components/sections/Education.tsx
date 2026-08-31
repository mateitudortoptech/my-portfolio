import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/content";

export function Education() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-8 border border-white/10 p-6 sm:grid-cols-[200px_minmax(0,1fr)] sm:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
              Education
            </p>
            <div>
              <h2 className="text-2xl font-medium text-mist-50">{education.degree}</h2>
              <p className="mt-2 text-base text-mist-300">{education.school}</p>
              <p className="mt-1 text-sm text-mist-400">
                {education.start} – {education.end}
              </p>
              <p className="mt-1 text-sm text-mist-400">{education.location}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
