"use client";

import React, { useState } from "react";
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
} from "@/components/ui/icons/SkillIcons";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  color: string; // Brand color for hover effects (hex or rgb)
  icon: React.ReactNode;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "tools">("all");

  const categories = [
    { id: "all", name: "all skills" },
    { id: "frontend", name: "frontend" },
    { id: "backend", name: "backend & db" },
    { id: "tools", name: "tools & devops" },
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

    // Tools & DevOps
    {
      name: "Git",
      category: "tools",
      color: "rgba(240, 80, 50, 0.4)",
      icon: <GitIcon />,
    },
    {
      name: "Docker",
      category: "tools",
      color: "rgba(36, 150, 237, 0.4)",
      icon: <DockerIcon />,
    },
    {
      name: "Linux",
      category: "tools",
      color: "rgba(252, 198, 36, 0.3)",
      icon: <LinuxIcon />,
    },
  ];

  const filteredSkills = activeTab === "all"
    ? skillsList
    : skillsList.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Section Header using Reusable Component */}
      <SectionHeader number="02" title="Skills & Technologies" />

      {/* Tabs Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 select-none">
        <div className="flex flex-wrap justify-center p-1.5 bg-surface/60 border border-[#ededed]/10 rounded-full backdrop-blur-md shadow-lg">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2.5 rounded-full font-mono text-sm tracking-wider uppercase transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-accent text-bg font-semibold shadow-md shadow-accent/20 scale-[1.02]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="group relative bg-surface/40 hover:bg-surface/75 border border-[#ededed]/10 hover:border-accent/40 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden select-none"
            style={
              {
                "--brand-glow": skill.color,
              } as React.CSSProperties
            }
          >
            {/* Soft Ambient Radial brand Glow on Hover */}
            <div
              className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
              style={{
                background: `radial-gradient(100px circle at center, ${skill.color}, transparent 80%)`,
              }}
            />

            {/* Skill Icon container */}
            <div className="w-16 h-16 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_12px_var(--brand-glow)]">
              {skill.icon}
            </div>

            {/* Skill Name */}
            <span className="font-body text-base font-medium text-zinc-400 group-hover:text-white transition-colors duration-300 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
