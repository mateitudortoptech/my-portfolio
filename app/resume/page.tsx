import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { education } from "@/data/content";
import { about, heroStack, site } from "@/data/profile";
import { expertise } from "@/data/expertise";

export const metadata: Metadata = {
  title: "Resume",
  description: `Professional resume for ${site.name}, ${site.title}.`,
  robots: { index: false, follow: true },
};

export default function ResumePage() {
  return (
    <main id="main" className="bg-mist-50 text-ink-950">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16 print:py-0">
        <p className="text-sm text-ink-700 print:hidden">
          <a href="/" className="underline-offset-4 hover:underline">
            ← Back to portfolio
          </a>
        </p>
        <header className="mt-8 border-b border-ink-950/10 pb-6">
          <h1 className="text-4xl font-medium tracking-tight">{site.name}</h1>
          <p className="mt-2 text-lg">{site.title}</p>
          <p className="mt-2 text-sm text-ink-700">
            {site.location.display} · {site.experienceYears} years · English C1
          </p>
        </header>

        <section className="mt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-700">
            Profile
          </h2>
          <p className="mt-3 text-sm leading-relaxed">{about.paragraphs[0]}</p>
          <p className="mt-3 text-sm leading-relaxed">{about.paragraphs[1]}</p>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-700">
            Core stack
          </h2>
          <p className="mt-3 text-sm">{heroStack.join(" · ")}</p>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-700">
            Experience
          </h2>
          <div className="mt-4 space-y-8">
            {experience.map((role) => (
              <article key={role.id}>
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <h3 className="text-base font-medium">
                    {role.title} — {role.company}
                  </h3>
                  <p className="text-sm text-ink-700">
                    {role.start} – {role.end}
                  </p>
                </div>
                <p className="text-sm text-ink-700">
                  {role.location} · {role.workMode}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-700">
            Skills
          </h2>
          <div className="mt-4 space-y-3">
            {expertise.map((group) => (
              <p key={group.title} className="text-sm leading-relaxed">
                <span className="font-medium">{group.title}: </span>
                {group.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-700">
            Education
          </h2>
          <p className="mt-3 text-sm font-medium">{education.degree}</p>
          <p className="text-sm">
            {education.school} · {education.start} – {education.end}
          </p>
          <p className="text-sm text-ink-700">{education.location}</p>
        </section>
      </div>
    </main>
  );
}
