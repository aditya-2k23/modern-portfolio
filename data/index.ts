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
  SiThreedotjs,
  SiFigma,
  SiSupabase,
  SiAppwrite,
  SiGooglegemini,
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
  { name: "Arsenal", link: "#arsenal" },
  { name: "Projects", link: "#projects" },
  { name: "Training", link: "#training" },
  { name: "Credentials", link: "#credentials" },
  { name: "Co-Curricular", link: "#co-curricular" },
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
      { name: "Three.js", icon: SiThreedotjs, color: "#ffffff" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
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
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Appwrite", icon: SiAppwrite, color: "#F23131" },
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
      tags: ["OCI", "Cloud", "Security"],
    },
    {
      name: "Introduction to Machine Learning",
      issuer: "NPTEL",
      link: "https://nptel.ac.in",
      img: "/nptel.png",
      date: "Apr 2025",
      description:
        "In-depth study of supervised and unsupervised learning algorithms, neural network architectures, model evaluation metrics, ensemble methods, and reinforcement learning fundamentals with practical implementations.",
      tags: ["ML", "Modeling", "Data"],
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

export const trainingData = {
  title: "MERN Full Stack Developer",
  company: "Gokboru Tech Pvt. Ltd",
  date: "Jun' 25",
  certificateLink: "/Training-cert.png",
  bullets: [
    "Completed a six-week industrial training program focused on full-stack web development using modern frameworks like React, NextJS, TailwindCSS and best practices with Git & GitHub.",
    "Gained practical experience in building dynamic UIs, developing secure RESTful APIs, and integrating databases using Firebase for end-to-end application development.",
    "Learned deployment workflows, authentication, basic CI/CD setups for production applications.",
  ],
  techStack: [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Gemini", icon: SiGooglegemini, color: "#4285F4" },
    { name: "Vercel", icon: SiVercel },
  ],
};

export const certificatesData = [
  {
    id: 1,
    title: "Google I/O Jalandhar",
    issuer: "Google Developer Groups Jalandhar",
    date: "Aug 2024",
    image: "/certificates/cert1.png",
    description:
      "This event was a local Google I/O Extended 2024 meetup in Jalandhar, focused on updates to Google technologies (Android, Web, Cloud, AI, etc.) and community networking for developers.",
    tags: ["#GDG", "#GoogleIO2024", "#AI", "#GoogleCloud", "#GoogleUpdates"],
  },
  {
    id: 2,
    title: "AWS Student Community Day Workshop",
    issuer: "AWS Cloud Clubs",
    date: "Nov 2025",
    image: "/certificates/cert2.png",
    description:
      "Participated in a hands-on workshop at the AWS Student Community Day in Jalandhar. The event provided practical exposure to Amazon Web Services (AWS) fundamentals and modern cloud computing concepts.",
    tags: ["#AWS", "#CloudComputing", "#CloudInfrastructure", "#Architecture"],
  },
  {
    id: 3,
    title: "TECH-A-ZON: A Session on Git and GitHub",
    issuer: "Changemakers of Amazon Club",
    date: "Not Specified",
    image: "/certificates/cert3.jpg",
    description:
      "Participated in 'TECH-A-ZON', a dedicated session focused on Git and GitHub organized by the Changemakers of Amazon Club. Acquired practical knowledge in version control systems, efficient repository management, and collaborative software development workflows.",
    tags: ["#Git", "#GitHub", "#VersionControl", "#SoftwareDevelopment"],
  },
  {
    id: 4,
    title: "Code Off Duty - Web Hackathon",
    issuer: "Coding Wise",
    date: "Mar 2024",
    image: "/certificates/cert4.png",
    description:
      "Participated in an intensive two-day web hackathon. Collaborated under a tight deadline to develop innovative web solutions, demonstrating strong problem-solving skills, creativity, and effective teamwork.",
    tags: ["#Hackathon", "#WebDevelopment", "#ProblemSolving", "#Teamwork"],
  },
  {
    id: 5,
    title: "CODE STORM 36-Hour Hackathon",
    issuer: "Microsoft Learn Student Ambassadors & Spirit Organisation",
    date: "Aug 2024",
    image: "/certificates/cert5.png",
    description:
      "Participated in the CODE STORM hackathon, engaging in 36 hours of intensive, non-stop coding. Demonstrated rapid problem-solving, creativity, and innovation to build tech solutions under pressure.",
    tags: ["#Hackathon", "#MicrosoftLearn", "#Innovation", "#Coding"],
  },
  {
    id: 6,
    title: "Google AI Essentials",
    issuer: "Google (via Coursera)",
    date: "Jul 2024",
    image: "/certificates/cert6.png",
    description:
      "Successfully completed the Google AI Essentials course. Acquired fundamental knowledge in artificial intelligence and learned how to practically apply generative AI tools to enhance productivity and streamline workflows.",
    tags: [
      "#ArtificialIntelligence",
      "#GenerativeAI",
      "#Google",
      "#Productivity",
    ],
  },
  {
    id: 7,
    title: "Dark Code Derby",
    issuer: "Capgemini Students Club 'Techgem Sphere'",
    date: "Apr 2024",
    image: "/certificates/cert7.png",
    description:
      "An intensive competitive coding event. Applied strong knowledge of data structures and algorithms using only python to solve complex challenges under time constraints, further sharpening my competitive programming skills.",
    tags: [
      "#CompetitiveCoding",
      "#DataStructures",
      "#Algorithms",
      "#ProblemSolving",
    ],
  },
  {
    id: 8,
    title: "Google AI Essentials",
    issuer: "Google (via Coursera)",
    date: "Jul 2024",
    image: "/certificates/cert8.png",
    description:
      "Earned the Google AI Essentials certification, demonstrating a foundational understanding of artificial intelligence. Gained practical experience in utilizing generative AI tools to streamline workflows, improve efficiency, and enhance overall productivity.",
    tags: [
      "#ArtificialIntelligence",
      "#GenerativeAI",
      "#Google",
      "#Productivity",
    ],
  },
  {
    id: 9,
    title: "Hackatron Finalist - Infotsav'25",
    issuer: "ABV-IIITM Gwalior",
    date: "Oct 2025",
    image: "/certificates/cert9.jpg",
    description:
      "Achieved a finalist position at the Infotsav'25 Hackatron with team 'PSUEDOCODERS'. Recognized for demonstrating strong technical skills, perseverance, and remarkable performance during the competitive hackathon.",
    tags: ["#Hackathon", "#Infotsav25", "#Finalist", "#Teamwork"],
  },
  {
    id: 10,
    title: "JavaScript Algorithms and Data Structures (Beta)",
    issuer: "freeCodeCamp",
    date: "Aug 2024",
    image: "/certificates/cert10.png",
    description:
      "Successfully completed a rigorous 300-hour developer certification focused on JavaScript. Mastered core programming fundamentals, algorithmic thinking, and efficient data handling techniques.",
    tags: ["#JavaScript", "#DataStructures", "#Algorithms", "#freeCodeCamp"],
  },
];
