import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/expertise";

export function Capabilities() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What I can actually deliver."
            body="The same ownership path from interface to infrastructure: architecture, frontend, backend, AI, data, cloud, and security."
          />
        </Reveal>
        <Reveal>
          <div className="mt-12 grid border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((group) => (
              <article
                key={group.title}
                className="border-white/10 p-6 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 border-b last:border-b-0"
              >
                <h3 className="text-base font-medium text-mist-50">{group.title}</h3>
                <ul className="mt-4 space-y-1.5 text-sm text-mist-400">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
