import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechEcosystem } from "@/components/visuals/TechEcosystem";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A connected engineering ecosystem."
            body="Python and TypeScript at the core. FastAPI, Django, React, and Next.js on the product surface. PostgreSQL, MongoDB, and Redis underneath. AWS, Azure, Docker, and Kubernetes in delivery. LLMs, RAG, and agents where the product needs them."
          />
        </Reveal>
        <Reveal className="mt-10">
          <TechEcosystem />
        </Reveal>
      </Container>
    </section>
  );
}
