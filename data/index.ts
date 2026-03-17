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
  heading: "Hi, I\'m Aditya — Full Stack Developer & AI Enthusiast",
  subheading:
    "I build real-world, scalable web applications with a strong focus on developer experience, performance, and AI-powered workflows.",
  about:
    "Computer Science and Engineering student who loves turning ideas into robust products, from API design to polished user interfaces and reliable deployment pipelines.",
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

export const personalInfo = {
  name: "Aditya",
  title: siteConfig.role,
  location: "Punjab, India",
  email: "holaaditya123@gmail.com",
  phone: "+91-6284219106",
  github: "https://github.com/aditya-2k23",
  linkedin: "https://linkedin.com/in/aditya-2k23",
  portfolio: `https://${siteConfig.domain}`,
  about: heroData.about,
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

export const skills = {
  languages: skillCategories[0].skills.map((item) => item.name),
  frontend: skillCategories[1].skills.map((item) => item.name),
  backend: skillCategories[2].skills.map((item) => item.name),
  databases: skillCategories[3].skills.map((item) => item.name),
  devops: skillCategories[4].skills.map((item) => item.name),
  ai: skillCategories[5].skills.map((item) => item.name),
  data: ["Power BI", "Excel"],
};

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

export const projects = featuredProjects.map((project, index) => ({
  id: index + 1,
  title: project.title,
  des: project.description,
  img: project.image,
  iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
  link: project.liveUrl,
}));

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
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      link: "https://www.freecodecamp.org",
    },
  ],
  achievements: [
    "Hackathon finalist in a national-level competition",
    "Participated in multiple cloud and DevOps workshops",
    "Maintains coding consistency through daily problem solving",
  ],
};

export const education = credentialsData.education.map((item) => ({
  degree: item.title,
  institute: item.institute,
  score: item.score,
}));

export const certifications = credentialsData.certifications;
export const achievements = credentialsData.achievements;

export const contactData = {
  email: personalInfo.email,
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
  phone: personalInfo.phone,
};

export const gridItems: Array<{
  id: number;
  title: string;
  description: string;
  className: string;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
}> = [];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Development",
    desc: "Building robust web apps with modern stacks.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI Engineering",
    desc: "Integrating AI APIs and practical automation systems.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Developer Tooling",
    desc: "Crafting workflow-first solutions for developers.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    desc: "Deployment, CI/CD, and reliability-oriented practices.",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  { id: 1, img: "/git.svg", url: personalInfo.github },
  { id: 2, img: "/link.svg", url: personalInfo.linkedin },
  { id: 3, img: "/wha.svg", url: `https://wa.me/${personalInfo.phone}` },
];

export const languages = [
  { id: 1, name: "JavaScript", img: "/javascript.png", nameImg: "/js.png" },
  {
    id: 2,
    name: "Python",
    img: "/python-logo-only.png",
    nameImg: "/python-logo-name.png",
  },
  { id: 3, name: "React", img: "/react.png", nameImg: "/re.svg" },
  {
    id: 4,
    name: "Tailwind",
    img: "/tailwindcss.png",
    nameImg: "/tailwindcss-name.png",
  },
];
