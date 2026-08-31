export type ExperienceRole = {
  id: string;
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  workMode: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceRole[] = [
  {
    id: "techama",
    company: "Techama",
    title: "Senior Full Stack Engineer",
    start: "Aug 2024",
    end: "Present",
    location: "Lugano, Switzerland",
    workMode: "Remote",
    summary:
      "Architecture and delivery of full-stack SaaS systems with an explicit AI layer—frontend, APIs, data, cloud, and LLM-powered product capabilities in one ownership path.",
    highlights: [
      "Architected and delivered scalable full-stack web and SaaS applications using TypeScript, React.js, Next.js, Node.js, Python, and FastAPI.",
      "Designed frontend architectures with React.js, Next.js App Router, TypeScript, Tailwind CSS, Redux, and Zustand.",
      "Engineered backend services with Node.js, NestJS, Fastify, Python, and FastAPI, including secure REST APIs and GraphQL services.",
      "Designed data architectures across PostgreSQL, MongoDB, Redis, Prisma, and Drizzle.",
      "Implemented microservices and event-driven architectures for production systems.",
      "Integrated AI/ML and LLM capabilities using OpenAI APIs, LangChain, RAG pipelines, vector databases, and prompt engineering.",
      "Deployed applications on AWS and Azure, with Docker and Kubernetes for containerization and orchestration.",
      "Improved runtime performance through SSR, code splitting, lazy loading, Redis caching, API optimization, and database query tuning.",
      "Implemented JWT and OAuth 2.0 authentication with secure application practices.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "LangChain",
      "RAG",
    ],
  },
  {
    id: "debut",
    company: "Debut Infotech",
    title: "Full Stack Engineer",
    start: "April 2018",
    end: "July 2024",
    location: "Oxford, United Kingdom",
    workMode: "Remote",
    summary:
      "Multi-year delivery of SaaS and enterprise web applications—growing from full-stack feature work into independent ownership of APIs, data, cloud deployment, and later AI/LLM integration.",
    highlights: [
      "Built and maintained full-stack SaaS and enterprise web applications with React, Next.js, and TypeScript on the frontend.",
      "Delivered backend services in Node.js, NestJS, Fastify, Python, and FastAPI, exposing REST and GraphQL APIs.",
      "Implemented data layers with PostgreSQL, MongoDB, and Redis, including schema design and query-conscious access patterns.",
      "Worked across microservices and event-driven architectures as systems expanded beyond a single application boundary.",
      "Integrated AI/ML and LLM capabilities into product workflows, including RAG and vector database usage where retrieval was required.",
      "Deployed and operated services on AWS and Azure, using Docker and Kubernetes in the delivery path.",
      "Focused on application performance and security as standing engineering practice rather than late-stage cleanup.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
    ],
  },
  {
    id: "moveris",
    company: "Moveris",
    title: "Software Engineer",
    start: "Aug 2016",
    end: "March 2018",
    location: "Lubbock, Texas, USA",
    workMode: "Hybrid",
    summary:
      "Foundation work on web applications and internal software around identity verification, fraud prevention, and digital trust workflows.",
    highlights: [
      "Developed web applications and internal software supporting identity verification, fraud prevention, and digital trust workflows.",
      "Built interfaces and application logic with JavaScript, HTML5, and CSS3, with backend work in Node.js and Python.",
      "Implemented REST APIs and third-party integrations against relational databases, including data migrations.",
      "Automated operational tasks with Python and Bash.",
      "Debugged, troubleshot, and maintained production systems using Git and testing practices.",
    ],
    stack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Node.js",
      "Python",
      "REST APIs",
      "Relational databases",
      "Git",
    ],
  },
];

export const careerPath = [
  {
    title: "Software Engineer",
    period: "2016 – 2018",
    company: "Moveris",
    note: "Web applications, identity workflows, APIs, and production maintenance.",
  },
  {
    title: "Full Stack Engineer",
    period: "2018 – 2024",
    company: "Debut Infotech",
    note: "SaaS and enterprise systems across frontend, backend, data, and cloud.",
  },
  {
    title: "Senior Full Stack Engineer",
    period: "2024 – Present",
    company: "Techama",
    note: "Architecture ownership for scalable SaaS, APIs, data, and cloud delivery.",
  },
  {
    title: "AI + Full-Stack Engineering",
    period: "Current focus",
    company: "Across recent roles",
    note: "LLMs, RAG, agents, and automation integrated into production stacks.",
  },
] as const;
