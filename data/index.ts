import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiGreensock,
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
  SiShadcnui,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiMicrosoftexcel,
  SiPowerbi,
  SiTensorflow,
} from "react-icons/si";
import {
  FaDatabase,
  FaLock,
  FaBrain,
  FaNetworkWired,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";

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
  heading: "Hi, I'm Aditya - Aspiring Full Stack Developer & AI Enthusiast",
  subheading:
    "I build real-world, scalable web applications with a strong focus on developer experience, performance, and AI-powered workflows.",
  ctas: [
    { label: "View Projects", href: "#projects" },
    { label: "Download CV", href: "/cv.pdf", external: true },
    { label: "Contact Me", href: "#contact" },
  ],
  quickFacts: [
    { label: "Location", value: "Jalandhar, Punjab, India" },
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
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#FFD43B" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, featured: true },
      { name: "React", icon: SiReact, featured: true, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Shadcn/UI", icon: SiShadcnui },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, featured: true, color: "#339933" },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: TbApi, color: "#0096D6" },
      { name: "Authentication", icon: FaLock, color: "#F05032" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, featured: true, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: SiDocker, featured: true, color: "#2496ED" },
      {
        name: "CI/CD",
        icon: SiGithubactions,
        featured: true,
        color: "#2088FF",
      },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    category: "AI/ML Integration",
    skills: [
      { name: "AI APIs", icon: FaBrain, featured: true, color: "#10A37F" },
      {
        name: "Prompt Engineering",
        icon: SiOpenai,
        featured: true,
        color: "#FFFFFF",
      },
      {
        name: "TensorFlow",
        icon: SiTensorflow,
        color: "#FF6F00",
      },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "RAG", icon: FaNetworkWired, color: "#4479A1" },
      { name: "Vector Databases", icon: FaDatabase, color: "#00D6B1" },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Pandas", icon: SiPandas, featured: true, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
      { name: "Matplotlib", icon: FaChartLine, color: "#11557c" },
      { name: "Seaborn", icon: FaChartBar, color: "#4c72B0" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "Power BI", icon: SiPowerbi, color: "#F2C811" },
      { name: "MS Excel", icon: SiMicrosoftexcel, color: "#217346" },
    ],
  },
];

export const featuredProjects = [
  {
    id: "moody",
    title: "Moody",
    image: "/moody.png",
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
    liveUrl: "https://moody-adi.netlify.app",
    sourceUrl: "https://github.com/aditya-2k23/moody",
  },
  {
    id: "livedocs",
    title: "LiveDocs",
    image: "/livedocs.png",
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
    liveUrl: "https://livedocs-14leiajkd-aditya-2k23s-projects.vercel.app/",
    sourceUrl: "https://github.com/aditya-2k23/livedocs",
  },
  {
    id: "store-it",
    title: "Store It",
    image: "/store-it.png",
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
    liveUrl: "https://store-it-adi.vercel.app",
    sourceUrl: "https://github.com/aditya-2k23/store-it",
  },
];

export const credentialsData = {
  education: [
    {
      title: "B.Tech Computer Science and Engineering",
      institute: "Lovely Professional University",
      score: "CGPA: 8.45",
      year: "2023 - Present",
    },
    {
      title: "Intermediate",
      institute: "Sant Raghbir Singh Aims Sr. Sec. School",
      score: "Percentage: 86.2%",
      year: "2022 - 2023",
    },
    {
      title: "Matriculation",
      institute: "Sant Raghbir Singh Aims Sr. Sec. School",
      score: "Percentage: 85.4%",
      year: "2020 - 2021",
    },
  ],
  certifications: [
    {
      name: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      link: "https://www.oracle.com",
      img: "/oracle.png",
      date: "Oct 2025",
      description:
        "Comprehensive understanding of cloud computing fundamentals, database architecture, and OCI services. Hands-on experience with cloud infrastructure configuration, database querying, security protocols, and cost optimization strategies.",
    },
    {
      name: "Introduction to Machine Learning",
      issuer: "NPTEL",
      link: "https://nptel.ac.in",
      img: "/nptel.png",
      date: "Apr 2025",
      description:
        "In-depth study of supervised and unsupervised learning algorithms, neural network architectures, model evaluation metrics, ensemble methods, and reinforcement learning fundamentals with practical implementations.",
    },
  ],
  achievements: [
    {
      title: "Top 100 Hackathon Finalist",
      description:
        "Selected among top 100 teams in a national-level programming competition showcasing innovative problem-solving skills.",
    },
    {
      title: "Cloud & DevOps Workshops",
      description:
        "Active participant in multiple hands-on workshops focusing on containerization, CI/CD pipelines, and cloud infrastructure.",
    },
    {
      title: "Competitive Programmer",
      description:
        "Solved 500+ problems across leading programming platforms including LeetCode, HackerRank, and CodeChef.",
    },
  ],
};

export const contactData = {
  email: "holaaditya123@gmail.com",
  github: "https://github.com/aditya-2k23",
  linkedin: "https://linkedin.com/in/aditya-2k23",
  phone: "+91-6284219106",
};
