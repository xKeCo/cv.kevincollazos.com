import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kevin Collazos",
  initials: "KC",
  location: "Cali, Colombia, COT",
  locationLink: "https://www.google.com/maps/place/Cali",
  about: "Software engineer",
  summary:
    "Software Engineer with 4+ years of experience in web and mobile application development. I also have a strong background in SQL and NoSQL database design, as well as skills in UX/UI design, Figma, accessibility, SEO, and related areas. I have theoretical knowledge and practical experience, providing a comprehensive set of skills to tackle diverse challenges.",
  avatarUrl: "/kevin_collazos_foto.jpg",
  personalWebsiteUrl: "https://kevincollazos.com/",
  contact: {
    email: "kevcollazos@gmail.com",
    tel: "+573136415647",
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
      description:
        "Design and development of web applications to optimize data management for the research centers that are part of CGIAR, enhancing efficiency in research and reporting of results. Technologies: Angular, TypeScript, PrimeNG, Jest, Git, GitHub.",
    },
    {
      company: "Universidad Autónoma de Occidente",
      link: "https://www.uao.edu.co/",
      badges: ["Remote"],
      title: "Institutional internship | Software engineer",
      logo: ClevertechLogo,
      start: "Feb. 2023",
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
        "Development of web and desktop applications that allow and speed up the automation of daily functions such as: Web application for inventory management, medical records management and billing administration. In addition to the maintenance and design of the official website of the company.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React Native",
    "Angular",
    "Redux.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Google Firebase",
    "Git",
    "GitHub",
    "Figma",
    "Jest",
    "Unit Testing",
  ],
  projects: [
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
