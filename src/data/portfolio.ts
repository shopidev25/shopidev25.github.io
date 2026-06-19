import type { Candidate, Experience, Project, SkillCategory } from "@/types";

export const candidate: Candidate = {
  name: "Miki Sora",
  role: "FullStack Developer",
  location: "Kyoto, Japan",
  email: "mikisora.cro@gmail.com",
  github: "https://github.com/shopidev25",
  website: "https://github.com/shopidev25",
  tagline: "Building scalable web applications from frontend to backend",
};

export const professionalSummary = `Full-stack engineer with a passion for shipping end-to-end products that solve real business problems. I specialize in modern web applications, scalable backend systems, and cloud-native deployments — bridging the gap between product vision and production-ready code.

From designing RESTful and GraphQL APIs to crafting responsive, performant UIs, I take ownership across the entire stack. I thrive in collaborative environments where engineering decisions directly impact user experience and business outcomes.`;

export const aboutHighlights = [
  {
    title: "Full-Stack Mindset",
    description:
      "End-to-end ownership from database schema design to pixel-perfect UI — no handoffs, no silos.",
  },
  {
    title: "API & Data Integration",
    description:
      "Expert at connecting frontend experiences to robust backends with optimized queries and caching strategies.",
  },
  {
    title: "Performance & Scale",
    description:
      "Obsessed with latency, throughput, and clean architecture that grows with your user base.",
  },
  {
    title: "Real-World Products",
    description:
      "Focused on shipping features that move metrics — not just writing code that compiles.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Monitor",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
      "Authentication",
      "Microservices",
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    icon: "Cloud",
    skills: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Vercel", "Nginx"],
  },
  {
    title: "Tools & Practices",
    icon: "Wrench",
    skills: [
      "Git",
      "Agile",
      "Testing",
      "Postman",
      "API Design",
      "System Design",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    problem:
      "A B2B startup needed a unified dashboard for subscription management, user analytics, and billing — replacing fragmented spreadsheets and manual reporting.",
    solution:
      "Built a multi-tenant SaaS platform with JWT authentication, Stripe subscription webhooks, and real-time analytics powered by aggregated PostgreSQL views and Redis caching.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "AWS",
    ],
    architecture:
      "Next.js App Router frontend with server components for data fetching. Express API with role-based access control. Event-driven billing via Stripe webhooks. Materialized views for analytics with 5-minute cache TTL.",
    impact:
      "Reduced reporting time by 85%, onboarded 2,400+ users in 6 months, and cut dashboard load time from 3.2s to 420ms.",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    problem:
      "A retail brand required a custom storefront with inventory sync, payment processing, and an admin panel — without the limitations of off-the-shelf solutions.",
    solution:
      "Developed a headless commerce platform with a React storefront, admin CMS, Stripe payments, and automated inventory management with low-stock alerts.",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "AWS S3",
      "Docker",
    ],
    architecture:
      "Microservices: product catalog, order processing, and payment service. MongoDB for flexible product schemas. S3 for media assets. Admin panel with real-time inventory dashboard.",
    impact:
      "Processed $1.2M in GMV within the first year, achieved 99.7% uptime, and reduced cart abandonment by 23% through performance optimizations.",
    featured: true,
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    problem:
      "A remote team needed a lightweight, self-hosted messaging tool with channels, direct messages, and file sharing — without Slack's enterprise pricing.",
    solution:
      "Engineered a WebSocket-based chat app with persistent message history, typing indicators, read receipts, and S3-backed file uploads.",
    techStack: [
      "React",
      "Socket.io",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS S3",
    ],
    architecture:
      "Socket.io for bidirectional real-time communication. Redis pub/sub for horizontal scaling across multiple server instances. PostgreSQL for message persistence with cursor-based pagination.",
    impact:
      "Supports 10,000+ concurrent connections, message delivery under 80ms p99 latency, adopted by 15+ distributed teams.",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management System",
    problem:
      "A growing agency needed a collaborative project management tool with kanban boards, team assignments, and deadline tracking tailored to their workflow.",
    solution:
      "Created a full-featured task management app with drag-and-drop kanban, real-time collaboration, team permissions, and automated email notifications.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "tRPC",
      "Tailwind CSS",
    ],
    architecture:
      "tRPC for end-to-end type safety between client and server. Prisma ORM with optimized queries. Optimistic UI updates for drag-and-drop. Background job queue for email notifications.",
    impact:
      "Improved team productivity by 40%, reduced missed deadlines by 60%, and migrated 8 teams from legacy tools within 3 months.",
    featured: false,
  },
  {
    id: "api-platform",
    title: "Developer API Platform",
    problem:
      "A fintech startup needed a public API with rate limiting, API key management, usage analytics, and comprehensive documentation for third-party integrations.",
    solution:
      "Designed and built a developer portal with API key provisioning, tiered rate limiting, request logging, and interactive OpenAPI documentation.",
    techStack: [
      "Node.js",
      "Express",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Nginx",
    ],
    architecture:
      "API gateway with Redis-backed sliding window rate limiter. PostgreSQL for API keys and usage logs. Nginx reverse proxy with SSL termination. Swagger UI for interactive docs.",
    impact:
      "Onboarded 150+ third-party developers, handled 2M+ API requests/month with 99.9% uptime, and reduced support tickets by 45%.",
    featured: false,
  },
  {
    id: "devops-pipeline",
    title: "CI/CD Pipeline & Infrastructure",
    problem:
      "A startup's deployment process was manual, error-prone, and took 45+ minutes — blocking rapid iteration and increasing production incidents.",
    solution:
      "Architected a complete CI/CD pipeline with automated testing, Docker containerization, blue-green deployments, and infrastructure-as-code on AWS.",
    techStack: [
      "GitHub Actions",
      "Docker",
      "AWS ECS",
      "Terraform",
      "Jest",
      "Playwright",
    ],
    architecture:
      "GitHub Actions for CI with parallel test suites. Docker multi-stage builds for optimized images. ECS Fargate for container orchestration. Terraform for reproducible infrastructure.",
    impact:
      "Cut deployment time from 45 minutes to 8 minutes, reduced production incidents by 70%, and enabled 15+ daily deployments.",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "acquire-corp",
    company: "Acquire Corp.",
    workMode: "Remote",
    period: "02/2025 - 05/2026",
    location: "Tokyo, Japan",
  },
  {
    id: "yahoo-japan",
    company: "Yahoo! JAPAN",
    workMode: "Remote",
    period: "10/2023 - 01/2025",
    location: "Tokyo, Japan",
  },
  {
    id: "scipy-conference",
    company: "SciPy Conference",
    workMode: "Remote",
    period: "07/2021 - 11/2023",
    location: "Tacoma, US",
  },
  {
    id: "cloudbees",
    company: "CloudBees",
    workMode: "Remote",
    period: "04/2019 - 06/2021",
    location: "San Jose, US",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
