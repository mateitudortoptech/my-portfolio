import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroArchitecture } from "@/components/visuals/HeroArchitecture";
import { hero, heroStack, site } from "@/data/profile";

function SocialLinks() {
  const items = [
    site.contact.linkedin
      ? { label: "LinkedIn", href: site.contact.linkedin }
      : null,
    site.contact.github ? { label: "GitHub", href: site.contact.github } : null,
    site.contact.email
      ? { label: "Email", href: `mailto:${site.contact.email}` }
      : null,
  ].filter((item): item is { label: string; href: string } => Boolean(item));

  if (items.length === 0) return null;

  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-mist-400">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} className="hover:text-mist-50">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pt-10 sm:pt-16">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:gap-16">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
            {hero.kicker}
          </p>
          <p className="mt-5 text-sm text-mist-400">{site.name}</p>
          <h1 className="mt-2 max-w-3xl font-serif text-[2.35rem] leading-[1.12] tracking-tight text-mist-50 sm:text-5xl lg:text-[3.4rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">
            {hero.lede}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist-400 sm:text-base">
            {hero.supporting}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {hero.primaryCtas.map((cta, index) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={index === 0 ? "primary" : index === 1 ? "secondary" : "ghost"}
                download={"download" in cta && cta.download}
              >
                {cta.label}
              </Button>
            ))}
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Core technologies">
            {heroStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-mist-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <HeroArchitecture />
      </Container>
    </section>
  );
}
