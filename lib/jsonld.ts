import { site } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/content";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.seo.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressCountry: "RO",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
    },
    knowsLanguage: "English",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Automation",
      "Full-Stack Development",
      "Python",
      "FastAPI",
      "Django",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AWS",
      "Large Language Models",
      "Retrieval Augmented Generation",
    ],
    worksFor: {
      "@type": "Organization",
      name: experience[0]?.company,
    },
  };
}
