"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
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

interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  color: string; // Brand color for hover effects (hex or rgb)
  icon: React.ReactNode;
  badge?: string;
  featured?: boolean;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<
    "all" | "frontend" | "backend" | "tools"
  >("all");

  const categories = [
    { id: "all", name: "all" },
    { id: "frontend", name: "frontend" },
    { id: "backend", name: "backend" },
    { id: "tools", name: "tools" },
  ] as const;

  const skillsList: Skill[] = [
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
    {
      name: "Firebase",
      category: "backend",
      color: "rgba(255, 202, 40, 0.4)",
      icon: <FirebaseIcon />,
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

  const filteredSkills =
    activeTab === "all"
      ? skillsList
      : skillsList.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-6 md:px-12 mx-auto scroll-mt-24"
    >
      {/* Section Header using Reusable Component */}
      <div className="px-0 lg:px-12 max-w-7xl mx-auto">
        <SectionHeader number="03" title="Skills" />
      </div>

      {/* Animated Category Tabs Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 select-none">
        <div className="flex flex-wrap justify-center p-1.5 bg-surface/60 border border-[#ededed]/10 rounded-full backdrop-blur-md shadow-lg relative">
          {categories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-6 py-2.5 rounded-full font-mono text-sm tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "text-bg font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-accent rounded-full shadow-md shadow-accent/30"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Animated Skills Grid with Staggered Wave Cascade */}
      <motion.div
        key={activeTab}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.04,
              delayChildren: 0.02,
            },
          },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.75,
                  y: 35,
                  filter: "blur(10px)",
                },
                show: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    type: "spring",
                    stiffness: 320,
                    damping: 22,
                    mass: 0.7,
                  },
                },
                exit: {
                  opacity: 0,
                  scale: 0.7,
                  y: -25,
                  filter: "blur(8px)",
                  transition: {
                    duration: 0.15,
                    ease: "easeIn",
                  },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              whileTap={{ scale: 0.96 }}
              className={`group relative bg-surface/40 hover:bg-surface/80 border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-colors duration-300 overflow-hidden select-none cursor-pointer backdrop-blur-sm ${
                skill.featured
                  ? "border-[#1793D1]/50 shadow-[0_0_25px_rgba(23,147,209,0.25)] bg-surface/60 hover:border-[#1793D1]"
                  : "border-[#ededed]/10 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              }`}
              style={
                {
                  "--brand-glow": skill.color,
                } as React.CSSProperties
              }
            >
              {/* Highlight top border beam on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Optional Badge (e.g. "i use arch btw") */}
              {skill.badge && (
                <span className="absolute top-2 right-2 px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold text-[#1793D1] bg-[#1793D1]/15 border border-[#1793D1]/40 rounded-full shadow-[0_0_10px_rgba(23,147,209,0.3)] backdrop-blur-md animate-pulse tracking-tight z-10">
                  {skill.badge}
                </span>
              )}

              {/* Soft Ambient Radial brand Glow on Hover & Resting for featured */}
              <div
                className={`absolute -inset-px rounded-2xl transition-opacity duration-500 pointer-events-none -z-10 ${
                  skill.featured
                    ? "opacity-60 group-hover:opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
                style={{
                  background: `radial-gradient(140px circle at center, ${skill.color}, transparent 80%)`,
                }}
              />

              {/* Skill Icon container */}
              <div
                className={`w-16 h-16 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 ${
                  skill.featured
                    ? "filter drop-shadow-[0_0_14px_rgba(23,147,209,0.7)] group-hover:drop-shadow-[0_0_20px_rgba(23,147,209,0.9)]"
                    : "group-hover:filter group-hover:drop-shadow-[0_0_14px_var(--brand-glow)]"
                }`}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <span
                className={`font-body text-base font-medium transition-colors duration-300 text-center ${
                  skill.featured
                    ? "text-white font-semibold"
                    : "text-zinc-400 group-hover:text-white"
                }`}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
