export const personalInfo = {
  name: "Tan Jian Jie",
  title: "Full-Stack Developer",
  tagline: "AI/ML Systems | Real-Time Graphics | Cloud Solutions",
  email: "jianjie.sg@gmail.com",
  phone: "+65-92236361",
  linkedin: "https://www.linkedin.com/in/jianjie/",
  github: "https://github.com/Gunner814",
  location: "Singapore",
  resumeUrl: "/Tan_JianJie_Resume.pdf",
  availability: "Open to New Opportunities",
};

export const about = {
  summary: `Final-year Computer Science student at DigiPen specializing in Real-Time Interactive Simulation. I build production AI systems, cross-platform applications, and game engines.`,
  highlight: "My RAG chatbot reduced 45-minute manual searches to under 10 seconds with page-level citations.",
  traits: [
    "Production deployment experience",
    "Strong problem-solver",
    "Thrives in collaborative environments",
    "Independently delivers production-ready solutions",
  ],
};

export const skills = {
  languages: {
    title: "Languages",
    icon: "Code",
    items: ["Python", "C++", "HTML/CSS", "Dart", "TypeScript", "JavaScript"],
    color: "#06b6d4",
  },
  frameworks: {
    title: "Frameworks",
    icon: "Layers",
    items: ["React", "Next.js", "FastAPI", "Flutter"],
    color: "#a855f7",
  },
  aiml: {
    title: "AI / RAG",
    icon: "Brain",
    items: ["Semantic Search", "RAG Systems", "Gemini API", "NLP", "ChromaDB", "Zilliz", "Embeddings"],
    color: "#3b82f6",
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: "Cloud",
    items: ["GCP (Cloud Run)", "AWS (S3, Cognito, IAM)", "Docker", "CI/CD", "Firebase"],
    color: "#10b981",
  },
  tools: {
    title: "Tools & Auth",
    icon: "Wrench",
    items: ["Git/GitHub", "Firebase Auth (RBAC)", "Firestore", "VS Code", "WSL"],
    color: "#f59e0b",
  },
};

export const projects = [
  {
    id: 1,
    title: "Sunflower Childcare AI Chatbot",
    role: "Full-Stack Developer (Intern)",
    company: "Sunflower Childcare Group",
    period: "May 2025 – Present",
    description: "Production RAG chatbot that cut per-question manual PDF search from ~45 minutes to <10 seconds with page-level citations.",
    impact: "45min → 5s search time",
    tech: ["FastAPI", "Gemini API", "Flutter", "Firebase", "GCP Cloud Run", "ChromaDB", "Zilliz"],
    highlights: [
      "Sole developer on production system serving 38 centers",
      "5.1s median response time with 100% uptime in testing",
      "Led 25-sprint solo Agile delivery integrating 7+ services",
      "Hybrid vector-store architecture with automated CI/CD",
    ],
    videoUrl: "#", // Replace with actual YouTube link
    color: "#06b6d4",
  },
  {
    id: 2,
    title: "CloudShare Web",
    role: "Programmer",
    company: "DigiPen Institute of Technology",
    period: "Feb 2025 – Apr 2025",
    description: "Serverless cloud-storage SPA with JWT-based auth and short-lived federated credentials.",
    impact: "Secure serverless file management",
    tech: ["React", "AWS S3", "Amazon Cognito", "React Router", "React Dropzone"],
    highlights: [
      "Direct browser→S3 uploads using AWS SDK",
      "Per-user path isolation (users/{id}/)",
      "Responsive file manager with folder hierarchy",
      "Real-time upload progress tracking",
    ],
    videoUrl: "#", // Replace with actual YouTube link
    color: "#a855f7",
  },
  {
    id: 3,
    title: "Witch Way Up",
    role: "Programmer",
    company: "DigiPen Institute of Technology",
    period: "Sep 2023 – Apr 2024",
    description: "Custom C++ content browser and development tools for game development.",
    impact: "50% faster asset search",
    tech: ["C++", "Custom Engine", "ImGui"],
    highlights: [
      "Custom content browser reducing asset search time by 50%",
      "Copy-paste functionality eliminating repetitive setup",
      "Undo-redo system for instant revision",
      "Cut design iteration time by ~50%",
    ],
    videoUrl: "#", // Replace with actual YouTube link
    color: "#3b82f6",
  },
  {
    id: 4,
    title: "Anotter World: The Otter Side",
    role: "Tech Lead / Programmer",
    company: "DigiPen Institute of Technology",
    period: "Sep 2021 – Apr 2022",
    description: "ECS-based game engine with robust architecture for intricate puzzle mechanics.",
    impact: "25% faster feature integration",
    tech: ["C++", "ECS Architecture", "Custom Audio System"],
    highlights: [
      "Architected robust ECS-based engine from scratch",
      "Integrated responsive sound system",
      "Refined core puzzle logic",
      "Streamlined feature integration by ~25%",
    ],
    videoUrl: "#", // Replace with actual YouTube link
    color: "#10b981",
  },
];

export const experience = [
  {
    title: "Full-stack Developer Intern",
    company: "Sunflower Childcare Group",
    location: "Singapore",
    period: "May 2025 – Present",
    description: [
      "Digitalized 3 critical HR workflows (KPI reviews, appraisals, deployment/promotions) from paper to automated Google Sheets with Apps Script",
      "Developed enterprise-wide productivity tools including Gmail signature generator and namecard designer",
      "Built end-to-end D&D Attendance & Lucky Draw System with NRIC scanning and WhatsApp integration",
    ],
    color: "#06b6d4",
  },
  {
    title: "IT Intern",
    company: "Metta Welfare Association",
    location: "Singapore",
    period: "Sep 2016 – Dec 2016",
    description: [
      "Recommended and implemented targeted hardware and software upgrades, increasing system responsiveness by 60%",
      "Troubleshot and resolved network issues, stabilizing operations across the organization",
    ],
    color: "#a855f7",
  },
  {
    title: "Level Designer & Project Manager",
    company: "Institute of Technical Education College West",
    location: "Singapore",
    period: "Nov 2013 – Jan 2014",
    description: [
      "Led Final Year Project to raise engagement in complex networking concepts",
      "Managed 4-person team to build interactive educational game, delivered 1 week early",
      "Received media coverage in The Straits Times",
    ],
    color: "#3b82f6",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    field: "Real-Time Interactive Simulation",
    school: "Singapore Institute of Technology & DigiPen Institute of Technology",
    period: "Sep 2020 – Dec 2025",
    details: "Relevant: C++ programming, data structures, operating systems, software engineering, machine learning",
  },
  {
    degree: "Diploma in Engineering Informatics",
    field: "",
    school: "Nanyang Polytechnic",
    period: "Apr 2014 – Mar 2017",
    details: "Distinction in Operating Systems, A's in IT Fundamentals & Project, Data Structures",
  },
];

export const awards = [
  {
    year: "2024",
    title: "Commendation Award & 10-Year Long Service Award",
    organization: "Singapore Red Cross",
    description: "For enduring contributions to the organization",
  },
  {
    year: "2023",
    title: "Outstanding Youth-Led Project Award",
    organization: "Singapore Red Cross",
    description: "Recognition for exceptional youth leadership",
  },
  {
    year: "2016",
    title: "ITE Educational Project Recognition",
    organization: "The Straits Times",
    description: "Media coverage for innovative educational game project",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
