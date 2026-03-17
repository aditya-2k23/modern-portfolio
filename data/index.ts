export const siteConfig = {
  name: "Aditya",
  role: "Full Stack Developer & AI Enthusiast",
  description:
    "Developer portfolio focused on scalable full-stack products, AI-powered systems, and clean engineering execution.",
  resumeUrl: "/resume.pdf",
  domain: "aditya-modern-portfolio.vercel.app",
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Arsenal", link: "#arsenal" },
  { name: "Projects", link: "#projects" },
  { name: "Credentials", link: "#credentials" },
  { name: "Contact", link: "#contact" },
];

export const heroData = {
  eyebrow: "B.Tech CSE Student Building for Production",
  heading: "Hi, I'm Aditya - Full Stack Developer & AI Enthusiast",
  subheading:
    "I build real-world, scalable web applications with a strong focus on developer experience, performance, and AI-powered workflows.",
  ctas: [
    { label: "View Projects", href: "#projects" },
    { label: "Download Resume", href: "/resume.pdf", external: true },
    { label: "Contact Me", href: "#contact" },
  ],
  quickFacts: [
    { label: "Location", value: "Punjab, India" },
    {
      label: "Degree",
      value: "B.Tech Computer Science and Engineering",
    },
    { label: "Experience", value: "Multiple real-world full stack projects" },
    { label: "Focus Areas", value: "Full Stack + AI + DevOps" },
  ],
};

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "Python", icon: "PY" },
      { name: "C++", icon: "C++" },
      { name: "SQL", icon: "SQL" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: "NX", featured: true },
      { name: "React", icon: "RE", featured: true },
      { name: "Tailwind CSS", icon: "TW" },
      { name: "Framer Motion", icon: "FM" },
      { name: "Shadcn/UI", icon: "UI" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "ND", featured: true },
      { name: "Express.js", icon: "EX" },
      { name: "REST APIs", icon: "API" },
      { name: "Authentication", icon: "AUTH" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: "MG", featured: true },
      { name: "PostgreSQL", icon: "PG" },
      { name: "Redis", icon: "RD" },
      { name: "Firebase", icon: "FB" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "DK", featured: true },
      { name: "CI/CD", icon: "CI", featured: true },
      { name: "GitHub Actions", icon: "GH" },
      { name: "Linux", icon: "LX" },
      { name: "Vercel", icon: "VC" },
    ],
  },
  {
    category: "AI / Data Science",
    skills: [
      { name: "AI APIs", icon: "AI", featured: true },
      { name: "RAG", icon: "RAG" },
      { name: "Prompt Engineering", icon: "PR" },
      { name: "Vector Databases", icon: "VD" },
      { name: "Jupyter", icon: "JP" },
    ],
  },
];

export const featuredProjects = [
  {
    id: "moody",
    title: "Moody",
    image: "/p1.svg",
    description:
      "AI-assisted mood tracking experience with rich emotional insights, trend visualization, and behavior analytics.",
    techStack: ["Next.js", "React", "Firebase", "Redis", "Docker"],
    features: [
      "Daily and weekly mood journaling",
      "AI-generated reflective insights",
      "Interactive mood history dashboards",
      "Containerized production deployment",
    ],
    outcome:
      "Improved consistency in user journaling with a simple habit loop and insight-first UX.",
    liveUrl: "https://aditya-modern-portfolio.vercel.app",
    sourceUrl: "https://github.com/aditya-2k23",
  },
  {
    id: "livedocs",
    title: "LiveDocs",
    image: "/p2.svg",
    description:
      "Collaborative markdown workspace engineered for real-time editing, role-based collaboration, and team productivity.",
    techStack: ["Next.js", "React", "TypeScript", "Liveblocks", "Clerk"],
    features: [
      "Real-time multi-user collaboration",
      "Threaded comments and mentions",
      "Role-based access control",
      "Consistent editor performance under activity",
    ],
    outcome:
      "Reduced content bottlenecks for teams by enabling instant collaborative editing.",
    liveUrl: "https://aditya-modern-portfolio.vercel.app",
    sourceUrl: "https://github.com/aditya-2k23",
  },
  {
    id: "store-it",
    title: "Store It",
    image: "/p3.svg",
    description:
      "Secure cloud file hub with search, sharing, and optimized storage workflows for modern web teams.",
    techStack: ["Next.js", "TypeScript", "Appwrite", "Tailwind CSS", "Vercel"],
    features: [
      "Secure authentication and uploads",
      "Rich file preview and sharing",
      "Fast search for recent assets",
      "Responsive dashboard experience",
    ],
    outcome:
      "Improved file discovery and sharing speed for project collaborators.",
    liveUrl: "https://aditya-modern-portfolio.vercel.app",
    sourceUrl: "https://github.com/aditya-2k23",
  },
];

export const credentialsData = {
  education: [
    {
      title: "B.Tech Computer Science and Engineering",
      institute: "Lovely Professional University",
      score: "CGPA: 8.45",
      year: "2022 - Present",
    },
    {
      title: "Intermediate",
      institute: "Sant Raghbir Singh Aims Sr. Sec. School",
      score: "Percentage: 70.2%",
      year: "2021",
    },
    {
      title: "Matriculation",
      institute: "Sant Raghbir Singh Aims Sr. Sec. School",
      score: "Percentage: 85.4%",
      year: "2019",
    },
  ],
  certifications: [
    {
      name: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      link: "https://www.oracle.com",
    },
    {
      name: "Introduction to Machine Learning",
      issuer: "NPTEL",
      link: "https://nptel.ac.in",
    },
  ],
  achievements: [
    "Hackathon finalist in a national-level competition",
    "Participated in multiple cloud and DevOps workshops",
    "Maintains coding consistency through daily problem solving",
  ],
};

export const contactData = {
  email: "holaaditya123@gmail.com",
  github: "https://github.com/aditya-2k23",
  linkedin: "https://linkedin.com/in/aditya-2k23",
  phone: "+91-6284219106",
};
