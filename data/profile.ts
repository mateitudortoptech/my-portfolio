export const site = {
  name: "Matei Tudor",
  title: "Senior AI & Full-Stack Engineer",
  professionalTitle: "Senior Full Stack Engineer",
  experienceYears: "12+",
  location: {
    city: "Bucharest",
    country: "Romania",
    display: "Bucharest, Romania",
  },
  languages: [
    {
      name: "English",
      level: "Advanced / Fully Working Proficient (C1)",
    },
  ],
  /**
   * Contact channels are rendered only when present on the resume.
   * Leave empty rather than inventing URLs or addresses.
   */
  contact: {
    email: "" as string,
    linkedin: "" as string,
    github: "" as string,
  },
  seo: {
    title: "Matei Tudor | Senior AI & Full-Stack Engineer",
    description:
      "Senior AI & Full-Stack Engineer with 12+ years of experience building production-ready software across AI/ML, AI automation, full-stack development, and cloud infrastructure. Work spans Python, FastAPI, Django, React, Next.js, TypeScript, Node.js, AWS, LLMs, and RAG.",
  },
  positioning:
    "I build intelligent, scalable, production-ready software by combining AI engineering with modern full-stack development, cloud infrastructure, and strong system architecture.",
} as const;

export const hero = {
  kicker: "Bucharest · Remote · 12+ years",
  headline: "Senior AI & Full-Stack Engineer",
  lede:
    "12+ years building scalable, production-ready applications across AI/ML, AI automation, full-stack development, web development, DevOps, and mobile development.",
  supporting:
    "Python, FastAPI, Django, React, Next.js, TypeScript, Node.js, and PostgreSQL on the product side. AWS, Azure, and GCP in production. LLMs, RAG, and AI agents where they solve a real system problem.",
  primaryCtas: [
    { label: "View Projects", href: "#work" },
    { label: "Contact Me", href: "#contact" },
    { label: "Download Resume", href: "/Matei-Tudor-Resume.txt", download: true },
  ],
} as const;

export const about = {
  eyebrow: "About",
  title: "End-to-end engineering for products that have to run.",
  paragraphs: [
    "I am a Senior Full Stack Engineer based in Bucharest, with 12+ years delivering software for teams in Switzerland, the United Kingdom, and the United States. The through-line is ownership: frontend architecture, APIs, data models, cloud delivery, and the AI capabilities that now sit inside production products.",
    "The work covers SaaS platforms, enterprise applications, and cloud-native systems—React and Next.js on the client, Python and Node.js on the server, PostgreSQL and related data stores underneath. I design APIs, data models, and distributed architectures that stay maintainable as products grow, then deploy and operate them on AWS, Azure, and GCP.",
    "Recent work includes integrating LLMs, RAG pipelines, vector databases, and AI automation into existing application stacks. The goal is practical: retrieval, agents, and model APIs wired into real product flows—not isolated prototypes.",
  ],
  facts: [
    { label: "Experience", value: "12+ years" },
    { label: "Based in", value: "Bucharest, Romania" },
    { label: "Current focus", value: "AI + full-stack systems" },
    { label: "English", value: "C1 — fully working proficient" },
  ],
} as const;

export const heroStack = [
  "Python",
  "FastAPI",
  "Django",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "LLMs",
  "RAG",
  "AI Agents",
] as const;
