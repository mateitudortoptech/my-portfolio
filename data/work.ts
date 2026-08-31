export type SelectedWork = {
  id: string;
  index: string;
  title: string;
  source: string;
  description: string;
  challenge: string;
  built: string;
  architecture: string;
  technologies: string[];
};

/**
 * Engineering highlights drawn from professional experience.
 * These are not named client projects — the resume has no dedicated projects list.
 */
export const selectedWork: SelectedWork[] = [
  {
    id: "saas-platforms",
    index: "01",
    title: "Scalable SaaS and full-stack platforms",
    source: "Techama · Senior Full Stack Engineer",
    description:
      "Architecture and delivery of production web and SaaS applications spanning the client, API, and data layers.",
    challenge:
      "Ship product surfaces that remain coherent as frontend, backend, and data models evolve independently.",
    built:
      "Full-stack applications using TypeScript, React.js, Next.js, Node.js, Python, and FastAPI, with frontend architectures based on Next.js App Router, Tailwind CSS, Redux, and Zustand.",
    architecture:
      "Client applications on React/Next.js, service layer in Node.js and Python, shared contracts over REST and GraphQL.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "FastAPI",
      "Tailwind CSS",
    ],
  },
  {
    id: "llm-rag",
    index: "02",
    title: "Production LLM and RAG integration",
    source: "Techama · AI/ML in product systems",
    description:
      "LLM capabilities wired into existing application architectures—retrieval, prompting, and model APIs as product features.",
    challenge:
      "Add model-backed behavior without isolating AI from the rest of the stack or treating it as a demo surface.",
    built:
      "AI/ML and LLM integrations using OpenAI APIs, LangChain, RAG pipelines, vector databases, and prompt engineering.",
    architecture:
      "Application API → orchestration → LLM → RAG/embeddings → vector store → business logic and primary databases.",
    technologies: [
      "OpenAI APIs",
      "LangChain",
      "RAG",
      "Vector Databases",
      "Prompt Engineering",
      "Python",
      "FastAPI",
    ],
  },
  {
    id: "api-data",
    index: "03",
    title: "API platforms and data architecture",
    source: "Techama · Backend & data",
    description:
      "Secure service interfaces and data models for applications that need more than a single database behind a monolith.",
    challenge:
      "Keep API contracts, persistence, and caching aligned as services and access patterns multiply.",
    built:
      "REST and GraphQL services, with data architectures across PostgreSQL, MongoDB, Redis, Prisma, and Drizzle.",
    architecture:
      "API layer over relational, document, and cache stores; ORM-backed access with explicit caching where it reduced load.",
    technologies: [
      "REST",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Drizzle",
    ],
  },
  {
    id: "distributed-cloud",
    index: "04",
    title: "Distributed systems and cloud-native delivery",
    source: "Techama · Infrastructure",
    description:
      "Service decomposition, event-driven flows, and containerized delivery onto AWS and Azure.",
    challenge:
      "Move beyond a single deployable without losing operational clarity around performance and security.",
    built:
      "Microservices and event-driven architectures, deployed with Docker and Kubernetes, with JWT/OAuth 2.0 authentication and performance work across SSR, splitting, caching, and query tuning.",
    architecture:
      "Containerized services on Kubernetes; cloud on AWS and Azure; caching and SSR used to keep product latency in check.",
    technologies: [
      "Microservices",
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Redis",
      "OAuth 2.0",
      "JWT",
    ],
  },
  {
    id: "enterprise-saas",
    index: "05",
    title: "Enterprise and SaaS application engineering",
    source: "Debut Infotech · Full Stack Engineer",
    description:
      "Six years of full-stack delivery on SaaS and enterprise web applications, from interface to cloud.",
    challenge:
      "Sustain long-running product systems as frontend frameworks, backend services, and data stores change underneath them.",
    built:
      "React/Next.js/TypeScript frontends, Node.js and Python backends, REST/GraphQL APIs, and data layers on PostgreSQL, MongoDB, and Redis—later including AI/ML, LLM, RAG, and vector database work.",
    architecture:
      "Full-stack SaaS and enterprise applications evolving toward microservices, event-driven design, and cloud deployment on AWS and Azure.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
  },
  {
    id: "trust-systems",
    index: "06",
    title: "Identity, trust, and internal platforms",
    source: "Moveris · Software Engineer",
    description:
      "Early-career systems work on identity verification, fraud prevention, and digital trust workflows.",
    challenge:
      "Connect user-facing flows to verification and trust logic through APIs, third-party integrations, and reliable data stores.",
    built:
      "Web applications and internal software with JavaScript, HTML5, CSS3, Node.js, and Python; REST APIs; relational databases and migrations; Python and Bash automation.",
    architecture:
      "Web clients talking to REST services and relational data, with operational automation around maintenance and migrations.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Python",
      "REST APIs",
      "Relational databases",
      "Bash",
      "Git",
    ],
  },
];
