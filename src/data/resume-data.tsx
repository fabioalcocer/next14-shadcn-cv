import { BarepapersLogo, Minimal } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fabio Alcocer",
  initials: "FA",
  location: "Cochabamba, Bolivia",
  locationLink: "https://www.google.com/maps/place/cochabamba",
  about:
    "Software Engineer focused on building products with extra attention to detail",
  summary:
    "As a Software Engineer, I've successfully contributed to the development of multiple products from 0 to 1. I contribute to teams effectively, ensuring an environment where people can do their best work. Currently, I work primarily with TypeScript, React, Angular and Firebase. I have more than 2 years of experience working remotely with companies from different parts of the world.",
  avatarUrl:
    "https://res.cloudinary.com/daobmfotr/image/upload/v1705626820/ubvrat7jwssfhibumpbw.webp",
  personalWebsiteUrl: "https://fabioalcocer.vercel.app/",
  contact: {
    email: "fabioalcocerdev@gmail.com",
    tel: "+59170767393",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/fabioAlcocer",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fabio-alcocer/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/fabioalcocer17",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Technical Institute of Continuing Education",
      degree: "Systems Analyst",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Wolivin Group",
      link: "https://wolivin.com/",
      badges: ["Cochabamba, Bolivia", "On-site"],
      title: "Software Engineer",
      // logo: WolivinLogo,
      start: "March 2023",
      end: "Present",
      description:
        "Develop, maintain and implement new features in different software products of the company. Technologies: React, TypeScript, Redux, Angular, Firebase, CI/CD",
    },
    {
      company: "Adtechnacity",
      link: "https://adtechnacity.com/",
      badges: ["Atlanta, Georgia", "Remote"],
      title: "Frontend Software Engineer",
      // logo: AdtechnacityLogo,
      start: "June 2023",
      end: "Present",
      description:
        "Contribute in the development, implement new features and functionalities for the company's main product. Technologies: Typescript, React, Strapi, Zustand, Tailwind",
    },
    {
      company: "OpenBootcamp SL",
      link: "https://open-bootcamp.com/",
      badges: ["Spain", "Remote"],
      title: "Fullstack Developer",
      // logo: OpenBootcampLogo,
      start: "April 2022",
      end: "March 2023",
      description:
        "Develop and manage the company's software, assuming various tasks such as the development of the company's of company websites and maintenance of its platform. Technologies: NextJS, React, Typescript, Tailwind, Redux, Chakra UI",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Redux",
    "Angular",
    "Firebase",
    "Node.js/Express",
    "Tailwind",
    "CI/CD",
    "MySQL",
  ],
  projects: [
    {
      title: "Zamu Extension",
      techStack: ["React", "TypeScript", "Zustand", "Strapi"],
      description:
        "Browser extension that records everything happening in a web application",
      // logo: ZamuLogo,
      link: {
        label: "zamu.dev",
        href: "https://zamu.com/",
      },
    },
    {
      title: "Propio (SaaS)",
      techStack: ["Side Project", "Next.js", "React", "Firebase"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      // logo: PropioLogo,
      link: {
        label: "propio.bo",
        href: "https://propio.bo/",
      },
    },
    {
      title: "Tengo (SaaS)",
      techStack: ["React", "Redux", "Typescript", "SASS"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      // logo: TengoLogo,
      link: {
        label: "tengo.bo",
        href: "https://tengo.bo/",
      },
    },
    {
      title: "Organizer Portal (SaaS)",
      techStack: [
        "React",
        "React hook form",
        "Typescript",
        "Firebase",
        "Node.js",
      ],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      // logo: OrganizerLogo,
      link: {
        label: "portal.clicket.bo",
        href: "https://portal.clicket.bo/",
      },
    },

    {
      title: "Clicket website",
      techStack: ["Next.js", "TypeScript", "React", "Node.js", "GraphQL"],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      // logo: ClicketLogo,
      link: {
        label: "clicket.bo",
        href: "https://clicket.bo/",
      },
    },
    {
      title: "Courses Platform",
      techStack: ["TypeScript", "React", "Node.js", "Tailwind"],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      // logo: CampusLogo,
      link: {
        label: "open-bootcamp.com",
        href: "https://campus.open-bootcamp.com/",
      },
    },
  ],
} as const;
