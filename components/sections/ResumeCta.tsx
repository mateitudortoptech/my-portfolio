import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { resumeCta } from "@/data/content";

export function ResumeCta() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
                {resumeCta.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-medium text-mist-50 sm:text-3xl">
                {resumeCta.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist-400 sm:text-base">
                {resumeCta.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/Matei-Tudor-Resume.txt" download>
                Download Resume
              </Button>
              <Button href="/resume" variant="secondary">
                View Resume
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
