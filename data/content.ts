export const approach = [
  {
    index: "01",
    title: "Scalable Architecture",
    body: "Design systems that remain maintainable as products and teams grow—clear service boundaries, explicit data models, and interfaces that can change without a rewrite.",
  },
  {
    index: "02",
    title: "Production-Ready Engineering",
    body: "Treat reliability, performance, security, testing, and operational stability as part of delivery, not a later phase.",
  },
  {
    index: "03",
    title: "AI Integration",
    body: "Use LLMs, RAG, agents, and automation to solve product problems: retrieval, orchestration, and model APIs connected to real application flows.",
  },
  {
    index: "04",
    title: "End-to-End Ownership",
    body: "Frontend, backend, APIs, databases, infrastructure, deployment, and optimization as one path—not a handoff between disconnected specialists.",
  },
  {
    index: "05",
    title: "Clean & Maintainable Code",
    body: "Structured architecture, code reviews, testing, and engineering practice that keep a codebase usable after the first release.",
  },
] as const;

export const education = {
  degree: "Bachelor of Science, Computer Science",
  school: "Texas Tech University",
  start: "Aug 2012",
  end: "May 2016",
  location: "Lubbock, Texas, USA",
} as const;

export const aiSection = {
  eyebrow: "AI Engineering",
  title: "AI Engineering & Intelligent Systems",
  lede:
    "AI is part of the production stack: model APIs, retrieval, agents, and automation connected to the same frontend, API, and data architecture as the rest of the product.",
  paragraphs: [
    "Across recent roles I have integrated AI/ML and LLM capabilities into full-stack applications—OpenAI APIs, LangChain, RAG pipelines, vector databases, and prompt engineering used as product infrastructure rather than isolated experiments.",
    "The pattern is consistent: a React/Next.js client talks to an API layer, Python or Node.js orchestrates model calls, retrieval runs against embeddings in a vector store, and business data remains in PostgreSQL, MongoDB, or Redis. Cloud infrastructure on AWS, Azure, and GCP, including AWS Bedrock and GCP Vertex AI, sits under that path. Claude, Gemini, and DeepSeek are part of the same model-layer work.",
  ],
  capabilities: [
    "LLMs",
    "AI Agents",
    "RAG",
    "Embeddings",
    "Vector Databases",
    "Prompt Engineering",
    "AI Automation",
    "OpenAI APIs",
    "LangChain",
    "Claude",
    "Gemini",
    "DeepSeek",
    "AWS Bedrock",
    "GCP Vertex AI",
  ],
  pipeline: [
    "User",
    "React / Next.js",
    "API Layer",
    "Python / FastAPI / Node.js",
    "AI Orchestration",
    "LLM",
    "RAG / Embeddings",
    "Vector Database",
    "Business Logic",
    "PostgreSQL / MongoDB / Redis",
    "Cloud Infrastructure",
  ],
} as const;

export const contactCopy = {
  eyebrow: "Contact",
  title: "Let’s build something intelligent.",
  body: "Open to conversations around AI engineering, full-stack development, SaaS platforms, automation, and scalable software systems.",
} as const;

export const resumeCta = {
  eyebrow: "Resume",
  title: "Want the full story?",
  body: "View my complete professional experience, technical skills, and career background.",
} as const;
