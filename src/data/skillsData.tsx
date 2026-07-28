import React from "react";
import {
  HTML5Icon,
  CSS3Icon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextjsIcon,
  ReduxIcon,
  TailwindIcon,
  BootstrapIcon,
  NodeIcon,
  ExpressIcon,
  RestApiIcon,
  GraphQLIcon,
  MongoDBIcon,
  GitIcon,
  DockerIcon,
  LinuxIcon,
  ArchLinuxIcon,
  GitHubIcon,
  FirebaseIcon,
  AzureIcon,
  PrismaIcon,
  NestJSIcon,
  ThreejsIcon,
  VercelIcon,
  AWSIcon,
} from "@/components/ui/icons/SkillIcons";

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  color: string; // Brand color for hover effects (hex or rgb)
  icon: React.ReactNode;
  badge?: string;
  featured?: boolean;
}

export const skillsList: Skill[] = [
  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    color: "rgba(227, 79, 38, 0.4)",
    icon: <HTML5Icon />,
  },
  {
    name: "CSS3",
    category: "frontend",
    color: "rgba(21, 114, 182, 0.4)",
    icon: <CSS3Icon />,
  },
  {
    name: "JavaScript/ES6",
    category: "frontend",
    color: "rgba(247, 223, 30, 0.3)",
    icon: <JavaScriptIcon />,
  },
  {
    name: "TypeScript",
    category: "frontend",
    color: "rgba(49, 120, 198, 0.4)",
    icon: <TypeScriptIcon />,
  },
  {
    name: "React.js",
    category: "frontend",
    color: "rgba(97, 218, 251, 0.4)",
    icon: <ReactIcon />,
  },
  {
    name: "Next.js",
    category: "frontend",
    color: "rgba(255, 255, 255, 0.2)",
    icon: <NextjsIcon />,
  },
  {
    name: "Three.js",
    category: "frontend",
    color: "rgba(255, 255, 255, 0.3)",
    icon: <ThreejsIcon />,
  },
  {
    name: "Redux",
    category: "frontend",
    color: "rgba(118, 74, 188, 0.4)",
    icon: <ReduxIcon />,
  },
  {
    name: "Tailwind",
    category: "frontend",
    color: "rgba(6, 182, 212, 0.4)",
    icon: <TailwindIcon />,
  },
  {
    name: "Bootstrap",
    category: "frontend",
    color: "rgba(121, 82, 179, 0.4)",
    icon: <BootstrapIcon />,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    color: "rgba(51, 153, 51, 0.4)",
    icon: <NodeIcon />,
  },
  {
    name: "Express.js",
    category: "backend",
    color: "rgba(237, 237, 237, 0.2)",
    icon: <ExpressIcon />,
  },
  {
    name: "NestJS",
    category: "backend",
    color: "rgba(224, 35, 78, 0.4)",
    icon: <NestJSIcon />,
  },
  {
    name: "RESTful APIs",
    category: "backend",
    color: "rgba(0, 150, 136, 0.4)",
    icon: <RestApiIcon />,
  },
  {
    name: "GraphQL",
    category: "backend",
    color: "rgba(225, 0, 152, 0.4)",
    icon: <GraphQLIcon />,
  },
  {
    name: "MongoDB",
    category: "backend",
    color: "rgba(71, 162, 72, 0.4)",
    icon: <MongoDBIcon />,
  },
  {
    name: "Prisma",
    category: "backend",
    color: "rgba(45, 212, 191, 0.4)",
    icon: <PrismaIcon />,
  },
  // Tools & DevOps
  {
    name: "Git",
    category: "tools",
    color: "rgba(240, 80, 50, 0.4)",
    icon: <GitIcon />,
  },
  {
    name: "GitHub",
    category: "tools",
    color: "rgba(255, 255, 255, 0.3)",
    icon: <GitHubIcon />,
  },
  {
    name: "Docker",
    category: "tools",
    color: "rgba(36, 150, 237, 0.4)",
    icon: <DockerIcon />,
  },
  {
    name: "Azure",
    category: "tools",
    color: "rgba(0, 120, 212, 0.4)",
    icon: <AzureIcon />,
  },
  {
    name: "AWS",
    category: "tools",
    color: "rgba(255, 153, 0, 0.4)",
    icon: <AWSIcon />,
  },
  {
    name: "Firebase",
    category: "backend",
    color: "rgba(255, 202, 40, 0.4)",
    icon: <FirebaseIcon />,
  },
  {
    name: "Vercel",
    category: "tools",
    color: "rgba(255, 255, 255, 0.3)",
    icon: <VercelIcon />,
  },
  {
    name: "Linux",
    category: "tools",
    color: "rgba(252, 198, 36, 0.3)",
    icon: <LinuxIcon />,
  },
  {
    name: "ARCH",
    category: "tools",
    color: "rgba(23, 147, 209, 0.7)",
    icon: <ArchLinuxIcon />,
    badge: "btw",
    featured: true,
  },
];
