import { site } from "@/data/profile";
import { navItems } from "@/data/nav";
import { Container } from "@/components/ui/Container";

function socials() {
  return [
    site.contact.email
      ? { label: "Email", href: `mailto:${site.contact.email}` }
      : null,
    site.contact.linkedin
      ? { label: "LinkedIn", href: site.contact.linkedin }
      : null,
    site.contact.github ? { label: "GitHub", href: site.contact.github } : null,
  ].filter((item): item is { label: string; href: string } => Boolean(item));
}

export function Footer() {
  const links = socials();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 print:hidden">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-mist-50">{site.name}</p>
          <p className="mt-1 text-sm text-mist-400">{site.title}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-mist-400">
            {navItems.slice(1, 6).map((item) => (
              <li key={item.id}>
                <a href={item.href} className="hover:text-mist-50">
                  {item.label}
                </a>
              </li>
            ))}
            {links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-mist-50"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-mist-500">
          © {year} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
