import {
  ClevertechLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kevin Collazos",
  initials: "KC",
  location: "Cali, Colombia, COT",
  locationLink: "https://www.google.com/maps/place/Cali",
  about: "Software engineer",
  summary: `Software Engineer with over 3 years of experience specializing in Frontend development. Proficient in building modern, responsive web applications using technologies such as React.js, Next.js, Angular, and TypeScript. Skilled in translating UX/UI designs from Figma into accessible and SEO-optimized interfaces. Familiar with state management using Redux, unit testing with Jest, and backend integration through RESTful APIs. Experienced in applying CI/CD practices using tools like Jenkins, and version control with Git/GitHub. Committed to writing clean, maintainable code and contributing to collaborative, agile development environments.`,
  avatarUrl: "/kevin_collazos_foto.jpg",
  personalWebsiteUrl: "https://kevincollazos.com/",
  contact: {
    email: "hi@kcollazos.me",
    tel: "https://wa.me/573136415647",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/xKeCo",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kevcollazos/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/kcollazos_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Pontificia Universidad Javeriana Cali",
      degree: "Master in Software Engineering",
      start: "2024",
      end: "Present",
    },
    {
      school: "Pontificia Universidad Javeriana Cali",
      degree: "DevOps Certification",
      start: "2024",
      end: "2024",
    },
    {
      school: "Universidad Autónoma de Occidente",
      degree: "Bachelor's Degree in Computer Science Engineering",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Alliance Bioversity International - CIAT",
      link: "https://alliancebioversityciat.org/",
      badges: ["Hybrid"],
      title: "Frontend Developer",
      logo: ParabolLogo,
      start: "Aug. 2023",
      end: "Present",
      description: ` 
        Development and optimi zation of web applications for research data management in centers belonging to CG IAR, improving efficiency
        in research and results reporting. Technologies: Angular, TypeScript, PrimeNG, Jest, Git, GitHub.`,
    },
    {
      company: "Universidad Autónoma de Occidente",
      link: "https://www.uao.edu.co/",
      badges: ["Remote"],
      title: "Institutional internship | Software engineer",
      logo: ClevertechLogo,
      start: "Jan. 2023",
      end: "Dec. 2023",
      description:
        "Development of a software system for the management of activities that contribute to the high quality accreditation of the programs of the Faculty of Engineering of the Universidad Autónoma de Occidente. Technologies: Next.js, TypeScript, Redux.js, Node.js, Express.js, MongoDB, Figma, UI/UX, Git, GitHub.",
    },
    {
      company: "SARES Foundation",
      link: "https://sarescali.wixsite.com/fundacinsalvamentoyr",
      badges: ["Remote"],
      title: "Frontend Web Developer",
      logo: JojoMobileLogo,
      start: "Jan. 2023",
      end: "June. 2023",
      description:
        "Development of the web application for inventory and supplies management for the foundation. Technologies: Next.js, TypeScript, Redux.js, NestJS, MySQL, Amazon S3, Figma, UI/UX, Git, GitHub.",
    },
    {
      company: "Boreal Dental Clinic",
      link: "https://www.borealclinicadental.com/",
      badges: [],
      title: "Software engineer",
      logo: NSNLogo,
      start: "July. 2018",
      end: "Dec. 2022",
      description:
        "Freelance development of web applications for automation of daily clinic functions.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Angular",
    "React Native",
    "Jest",
    "Unit Testing",
    "Node.js",
    "NestJS",
    "Express.js",
    "Redux.js",
    "Prisma ORM",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Google Firebase",
    "Git",
    "GitHub",
    "Figma",
  ],
  projects: [
    {
      title: "MOSS - Dental Software",
      techStack: [
        "Side Project",
        "Work in Progress",
        "TypeScript",
        "Next.js",
        "Prisma ORM",
        "PostgreSQL",
        "Tailwind CSS",
        "Auth.js",
        "Figma",
      ],
      description:
        "The new way to keep digital medical records. Work in progress.",
      logo: ConsultlyLogo,
      link: {
        label: "MOSS",
        href: "https://mossdental.vercel.app/",
      },
    },
    {
      title: "AcrediX - UAO",
      techStack: [
        "Institutional internship",
        "TypeScript",
        "Next.js",
        "Redux.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      description:
        "A platform to manage activities that contribute to the high-quality accreditation.",
      logo: ConsultlyLogo,
      link: {
        label: "AcrediX",
        href: "https://www.kevincollazos.com/project/AcrediX%20-%20UAO",
      },
    },
    {
      title: "Interactive Map",
      techStack: [
        "Side Project",
        "Next.js",
        "Google Firebase",
        "Mapbox",
        "Material UI",
        "Figma",
      ],
      description:
        "A web application that allows people to find activities and events in their city.",
      logo: MonitoLogo,
      link: {
        label: "interactive-map",
        href: "https://www.kevincollazos.com/project/Parqueeventos",
      },
    },
    {
      title: "kevincollazos.com",
      techStack: [
        "Side Project",
        "Next.js",
        "TypeScript",
        "Framer Motion",
        "Firebase",
      ],
      description:
        "My personal website, where I share my projects, skills, and experience.",
      logo: JarockiMeLogo,
      link: {
        label: "kevincollazos.com",
        href: "https://www.kevincollazos.com/",
      },
    },
    {
      title: "Fitjoe Clothing",
      techStack: ["Side Project", "Next.js", "TypeScript", "Hygraph", "Figma"],
      description: "Official Product Portfolio Concept for FitJoe Clothing.",
      logo: Minimal,
      link: {
        label: "Fitjoe Clothing",
        href: "https://www.kevincollazos.com/project/Fitjoe%20Clothing",
      },
    },
  ],
} as const;
