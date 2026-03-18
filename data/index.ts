import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiVercel,
  SiJupyter,
  SiOpenai,
} from "react-icons/si";
import {
  FaDatabase,
  FaServer,
  FaLock,
  FaBrain,
  FaNetworkWired,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

export const siteConfig = {
  name: "Aditya",
  role: "Full Stack Developer & AI Enthusiast",
  description:
    "Developer portfolio focused on scalable full-stack products, AI-powered systems, and clean engineering execution.",
  resumeUrl: "/cv.pdf",
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
    { label: "Download CV", href: "/cv.pdf", external: true },
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
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, featured: true },
      { name: "React", icon: SiReact, featured: true },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Shadcn/UI", icon: SiReact },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, featured: true },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
      { name: "Authentication", icon: FaLock },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, featured: true },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: SiDocker, featured: true },
      { name: "CI/CD", icon: SiGithubactions, featured: true },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Linux", icon: SiLinux },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    category: "AI / Data Science",
    skills: [
      { name: "AI APIs", icon: FaBrain, featured: true },
      { name: "RAG", icon: FaNetworkWired },
      { name: "Prompt Engineering", icon: SiOpenai },
      { name: "Vector Databases", icon: FaDatabase },
      { name: "Jupyter", icon: SiJupyter },
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
