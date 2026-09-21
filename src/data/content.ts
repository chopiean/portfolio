import type { FeaturedSkill, Habit, Project, TimelineEntry } from "./types";

/* All the words on the site live in this file. Edit them here. */

export const profile = {
  name: "Julie | An Le",
  email: "hongan101003@gmail.com",
  github: "https://github.com/chopiean",
  githubLabel: "github.com/chopiean",
  location: "Helsinki, Finland",
} as const;

export const nav = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
] as const;

export const headline =
  "I build React and TypeScript apps, and test them end to end.";

export const intro =
  "Third-year Business Information Technology student at Haaga-Helia in Helsinki, graduating in December 2026. Open for internships and junior roles in software development, frontend or full-stack.";

export const projects: Project[] = [
  {
    title: "SaveIt",
    badge: "In progress",
    description:
      "A receipt-management PWA with photo capture, OCR extraction and metadata-based search. Team project (Softala), August 2026 to now.",
    points: [
      "I own the React and TypeScript frontend, and the backend is Spring Boot.",
      "Built the login, receipt search and receipt detail pages on a reusable Tailwind design system.",
    ],
    stack:
      "React, TypeScript, TanStack Query, Tailwind CSS, shadcn/ui, Spring Boot",
    art: "receipt",
  },
  {
    title: "Meal Tracker",
    badge: "Team project",
    description:
      "A meal-tracking app where users log daily meals and follow their nutrition goals. March to May 2026.",
    points: [
      "Wrote end-to-end UI tests with Playwright and Robot Framework that cover the critical user flows.",
      "Contributed to Docker-based deployment and worked in Agile/Scrum sprints with pull requests.",
    ],
    stack:
      "React, TypeScript, Playwright, Robot Framework, Docker, GitHub Actions",
    art: "rings",
    // repo: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
  },
  {
    title: "Personal Finance Manager",
    badge: "Solo project",
    description:
      "A full-stack app for tracking spending, setting budgets and visualising transactions with real-time charts. November to December 2025.",
    points: [
      "Added JWT authentication and role-based access control with Spring Security.",
      "Took it from REST API design to an interactive dashboard, packaged with Docker.",
    ],
    stack:
      "Spring Boot, React, TypeScript, PostgreSQL, H2, JWT, Spring Security, Docker",
    art: "chart",
    // repo: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
  },
];

export const experience: TimelineEntry[] = [
  {
    monogram: "SW",
    org: "Softala, Haaga-Helia",
    orgNote:
      "Professional workplacement in the Paperiton kuitti project group, one of five teams in the programme.",
    title: "Frontend Developer, Professional Workplacement",
    date: "August 2026 – Now",
    points: [
      "Own the React and TypeScript frontend of SaveIt, a receipt-management PWA, and work alongside a Spring Boot backend team.",
      "Built the login page, the receipt search and receipt detail pages, and structured the frontend repository.",
      "Work through feature branches, pull requests and code review, and resolve merge conflicts as shared code changes.",
      "Keep a weekly learning diary covering problems, solutions and observations.",
    ],
  },
  {
    monogram: "NB",
    org: "Nordic Business Forum",
    orgNote: "Business event in Helsinki with international attendees.",
    title: "Customer Service Representative",
    date: "September 2025",
    points: [
      "Supported international attendees in a fast-paced event, resolving on-site issues through clear communication and quick problem-solving.",
      "Worked in a large, diverse team, showing professionalism and adaptability throughout the event.",
    ],
  },
  // To add your restaurant placement, copy one block above and change the text.
];

export const education: TimelineEntry[] = [
  {
    monogram: "HH",
    org: "Haaga-Helia University of Applied Sciences",
    orgNote:
      "Major in Software Architecture and Web Development. GPA 4.5 / 5.0.",
    title: "Bachelor of Business Information Technology",
    date: "January 2024 – December 2026 (expected)",
    points: [
      "Built full-stack and frontend projects with React, TypeScript, Spring Boot, PostgreSQL and Docker, alone and in Agile/Scrum teams.",
      "Learned automated end-to-end testing with Playwright and Robot Framework.",
      "Writing a product-based thesis that documents my Personal Finance Manager web app.",
    ],
  },
  {
    monogram: "CH",
    org: "IT Seminar 2026, Switzerland",
    orgNote:
      "International technology seminar with students from Finland, Switzerland and Spain.",
    title: "Exchange programme",
    date: "April 2026",
    points: [
      "Applied cloud service concepts in hands-on workshops and built ESP32-based IoT solutions.",
      "Worked with LLMs, token management and the Ollama API.",
    ],
  },
  {
    monogram: "CE",
    org: "Certificates",
    orgNote: "Short courses I completed alongside my degree.",
    title: "Courses and certificates",
    date: "Completed",
    certs: [
      { name: "TypeScript with React & Next.js 15", issuer: "Udemy" },
      { name: "Networking Basics", issuer: "Cisco" },
      { name: "JavaScript Programming", issuer: "Full Stack F8" },
      { name: "HTML & CSS", issuer: "Full Stack F8" },
    ],
  },
];

export const featuredSkills: FeaturedSkill[] = [
  { mono: "Re", name: "React", kind: "Frontend" },
  { mono: "TS", name: "TypeScript", kind: "Language" },
  { mono: "SB", name: "Spring Boot", kind: "Backend" },
  { mono: "Pg", name: "PostgreSQL", kind: "Database" },
  { mono: "Pw", name: "Playwright", kind: "Testing" },
];

export const otherSkills =
  "Next.js, JavaScript, HTML, CSS, Tailwind CSS, TanStack Query, Java, Python, SQL, H2, REST APIs, JWT, Spring Security, Robot Framework, Git, GitHub Actions, Maven, Agile/Scrum.";

export const habits: Habit[] = [
  {
    icon: "check",
    title: "I test what I build",
    text: "On Meal Tracker I wrote end-to-end suites in Playwright and Robot Framework that cover the critical user flows.",
  },
  {
    icon: "team",
    title: "I work well in a team",
    text: "Agile/Scrum sprints, issues, pull requests and code review on two team projects. On SaveIt I own the frontend.",
  },
  {
    icon: "layers",
    title: "I take a feature end to end",
    text: "Personal Finance Manager goes from REST API design and PostgreSQL to an interactive dashboard, secured with JWT.",
  },
  {
    icon: "chat",
    title: "I communicate under pressure",
    text: "At Nordic Business Forum I helped international attendees resolve issues on site, as part of a large, diverse team.",
  },
];
