import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { contactCopy } from "@/data/content";
import { site } from "@/data/profile";

export function Contact() {
  const links = [
    site.contact.email
      ? { label: site.contact.email, href: `mailto:${site.contact.email}` }
      : null,
    site.contact.linkedin
      ? { label: "LinkedIn", href: site.contact.linkedin }
      : null,
    site.contact.github ? { label: "GitHub", href: site.contact.github } : null,
  ].filter((item): item is { label: string; href: string } => Boolean(item));

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
            {contactCopy.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-mist-50 sm:text-5xl">
            {contactCopy.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-400 sm:text-lg">
            {contactCopy.body}
          </p>
        </Reveal>
        <Reveal className="mt-8">
          {links.length > 0 ? (
            <ul className="flex flex-wrap gap-3">
              {links.map((item) => (
                <li key={item.href}>
                  <Button href={item.href} variant="secondary">
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-wrap gap-3">
              <Button href="/resume" variant="secondary">
                View professional background
              </Button>
              <Button href="/Matei-Tudor-Resume.txt" download variant="ghost">
                Download resume
              </Button>
            </div>
          )}
          <p className="mt-6 text-sm text-mist-500">
            {site.location.display} · English C1 · Open to US, EU, and international teams
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
