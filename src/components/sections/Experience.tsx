"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/data/experienceData";
import { experienceSkillsIcons } from "@/data/experienceSkillsData";
import {
  LinkedinIcon,
  ExternalLinkIcon,
  PlayIcon,
} from "@/components/ui/icons/Icons";

function getSkillIcon(skillName: string): React.ReactNode | null {
  return experienceSkillsIcons[skillName] || null;
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="pt-20 md:pt-28 pb-0 px-6 md:px-12 mx-auto scroll-mt-24"
    >
      <div className="px-0 lg:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader number="03" title="Experience" />

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto mt-16 md:mt-24">
          {/* Vertical Timeline Line extending to bottom-0 */}
          <div className="absolute left-6 md:left-8 top-4 bottom-0 w-0.5 bg-linear-to-b from-accent/50 via-zinc-800 to-zinc-800 pointer-events-none" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16 pb-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col md:flex-row gap-6 md:gap-8 pl-16 md:pl-20"
              >
                {/* Company Logo Node centered on the timeline line */}
                <div className="absolute left-0 md:left-1 w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border border-zinc-800 bg-surface flex items-center justify-center z-10 transition-all duration-300 shadow-md group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(25,249,216,0.2)]">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Experience Card Content */}
                <div className="w-full bg-surface/30 hover:bg-surface/50 border border-zinc-800/40 hover:border-accent/20 rounded-2xl p-6 md:p-8 backdrop-blur-xs transition-all duration-300 shadow-xs hover:shadow-[0_10px_30px_-10px_rgba(25,249,216,0.05)]">
                  {/* Header details */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                    <div>
                      {/* Job Title & Links */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-accent transition-colors duration-300">
                          {exp.role}
                        </h3>
                        {(exp.links || exp.videoDemoUrl) && (
                          <div className="flex items-center gap-2">
                            {exp.links?.linkedin && (
                              <a
                                href={exp.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 hover:text-accent text-white bg-blue-500 hover:bg-zinc-900/90 border border-zinc-800 hover:border-accent/40 rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-md hover:shadow-[0_0_15px_rgba(25,249,216,0.15)] group/link"
                                title="LinkedIn Page"
                              >
                                <LinkedinIcon className="w-4 h-4" />
                              </a>
                            )}
                            {exp.links?.production && (
                              <a
                                href={exp.links.production}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 text-white hover:text-accent bg-blue-600 hover:bg-zinc-900/90 border border-zinc-800 hover:border-accent/40 rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-md hover:shadow-[0_0_15px_rgba(25,249,216,0.15)] group/link"
                                title="Live Website"
                              >
                                <ExternalLinkIcon className="w-4.5 h-4.5" />
                              </a>
                            )}
                            {exp.videoDemoUrl && (
                              <a
                                href={exp.videoDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-zinc-300 hover:text-accent bg-zinc-900 hover:bg-zinc-900/90 border border-zinc-800 hover:border-accent/40 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-[0_0_15px_rgba(25,249,216,0.15)] group/link"
                                title="Watch Demo"
                              >
                                <PlayIcon className="w-3.5 h-3.5 text-accent" />
                                Demo
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                      {/* Company Name & Employment Type */}
                      <div className="text-base md:text-lg font-body text-zinc-300 font-semibold mt-1">
                        {exp.company}
                        <span className="text-zinc-500 font-normal">
                          {" "}
                          · {exp.employmentType}
                        </span>
                      </div>
                    </div>

                    {/* Dates & Location */}
                    <div className="flex flex-col md:items-end text-zinc-400 font-mono text-xs md:text-sm shrink-0">
                      <div className="flex items-center gap-1.5">
                        <svg
                          className="w-4 h-4 text-zinc-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{exp.dates}</span>
                        <span className="text-zinc-600 font-body">|</span>
                        <span className="text-accent/80 font-semibold">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1.5 md:justify-end text-zinc-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Company/Project Description (Optional) */}
                  {exp.companyDescription && (
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4 border-l-2 border-accent/20 pl-4 italic bg-white/1 py-1">
                      {exp.companyDescription}
                    </p>
                  )}

                  {/* Bullets List */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li
                        key={bIndex}
                        className="text-zinc-400 text-sm md:text-base leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-accent mt-1.5 shrink-0">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tag List */}
                  <div className="mt-6 pt-5 border-t border-zinc-800/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">
                      Skills:
                    </span>
                    {exp.skills.map((skill) => {
                      const icon = getSkillIcon(skill);
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-zinc-400 bg-zinc-900/40 border border-zinc-800/60 rounded-full hover:border-accent/40 hover:text-accent transition-all duration-200 select-none"
                        >
                          {icon && (
                            <span className="flex items-center justify-center shrink-0">
                              {icon}
                            </span>
                          )}
                          <span>{skill}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
