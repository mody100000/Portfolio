"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TimelineSubHeader from "@/components/ui/TimelineSubHeader";
import { experienceSkillsIcons } from "@/data/experienceSkillsData";
import {
  AwardIcon,
  LinkedinIcon,
  GithubIcon,
  ExternalLinkIcon,
} from "@/components/ui/icons/Icons";
import { hackathons } from "@/data/hackathonsData";

function getSkillIcon(skillName: string): React.ReactNode | null {
  return experienceSkillsIcons[skillName] || null;
}

const PlayIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function Hackathons() {
  return (
    <section
      id="hackathons"
      className="py-0 px-6 md:px-12 mx-auto scroll-mt-24"
    >
      <div className="px-0 lg:px-12 max-w-7xl mx-auto">
        {/* Timeline SubHeader */}
        <TimelineSubHeader title="Hackathons" />

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto mt-8">
          {/* Vertical Timeline Line extending from top-0 to bottom-0 */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-zinc-800 pointer-events-none" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16 pb-6">
            {hackathons.map((hack, index) => (
              <motion.div
                key={hack.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col md:flex-row gap-6 md:gap-8 pl-16 md:pl-20"
              >
                {/* Logo Node centered on the timeline line */}
                <div className="absolute left-0 md:left-1 w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border border-zinc-800 bg-surface flex items-center justify-center z-10 transition-all duration-300 shadow-md group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(25,249,216,0.2)]">
                  <Image
                    src={hack.logo}
                    alt={`${hack.title} Logo`}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Card Content */}
                <div className="w-full relative bg-surface/30 hover:bg-surface/50 border border-zinc-800/40 hover:border-accent/20 rounded-2xl p-6 md:p-8 backdrop-blur-xs transition-all duration-300 shadow-xs hover:shadow-[0_10px_30px_-10px_rgba(25,249,216,0.05)]">
                  {/* Header details */}
                  <div className="flex flex-col md:block mb-4">
                    <div className="md:pr-64">
                      {/* Role & Links */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-accent transition-colors duration-300">
                          {hack.role}
                        </h3>
                        {hack.links && (
                          <div className="flex items-center gap-2">
                            {hack.links.linkedin && (
                              <a
                                href={hack.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 hover:text-accent text-white bg-blue-500 hover:bg-zinc-900/90 border border-zinc-800 hover:border-accent/40 rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-md hover:shadow-[0_0_15px_rgba(25,249,216,0.15)] group/link"
                                title="LinkedIn Page"
                              >
                                <LinkedinIcon className="w-4 h-4" />
                              </a>
                            )}
                            {hack.links.github && (
                              <a
                                href={hack.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 hover:text-accent text-white bg-zinc-900 hover:bg-zinc-900/90 border border-zinc-800 hover:border-accent/40 rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-md hover:shadow-[0_0_15px_rgba(25,249,216,0.15)] group/link"
                                title="GitHub Repository"
                              >
                                <GithubIcon className="w-4.5 h-4.5" />
                              </a>
                            )}
                            {hack.links.website && (
                              <a
                                href={hack.links.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 hover:text-accent text-white bg-zinc-900 hover:bg-zinc-900/90 border border-zinc-800 hover:border-accent/40 rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-md hover:shadow-[0_0_15px_rgba(25,249,216,0.15)] group/link"
                                title="Event Website"
                              >
                                <ExternalLinkIcon className="w-4.5 h-4.5" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Title / Organization & Location */}
                      <div className="text-base md:text-lg font-body text-zinc-300 font-semibold mt-1">
                        {hack.title}
                      </div>
                    </div>

                    {/* Dates & Location */}
                    <div className="flex flex-col static md:absolute md:top-8 md:right-8 md:items-end text-zinc-400 font-mono text-xs md:text-sm shrink-0 mt-4 md:mt-0">
                      <div className="flex items-center gap-1.5 justify-end">
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
                        <span>{hack.dates}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1.5 justify-end text-zinc-500">
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
                        <span>{hack.location}</span>
                      </div>
                      {hack.videoDemoUrl && (
                        <a
                          href={hack.videoDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 mt-3 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-accent bg-zinc-900/50 hover:bg-accent/10 border border-zinc-800 hover:border-accent/40 rounded-lg transition-all duration-300 shrink-0 cursor-pointer shadow-sm hover:shadow-[0_4px_12px_rgba(25,249,216,0.05)] active:scale-[0.98] w-full md:w-auto"
                        >
                          <PlayIcon className="w-3.5 h-3.5 text-accent" />
                          Watch Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bullets List */}
                  <ul className="space-y-3 mb-6">
                    {hack.bullets.map((bullet, bIndex) => (
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

                  {/* Skills Tag List & Action Buttons */}
                  <div className="mt-6 pt-5 border-t border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">
                        Skills:
                      </span>
                      {hack.skills.map((skill) => {
                        const icon = getSkillIcon(skill);
                        return (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-zinc-400 bg-zinc-900/40 border border-zinc-800/60 rounded-full hover:border-accent/40 hover:text-accent transition-all duration-200"
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

                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      {hack.certificateUrl && (
                        <a
                          href={hack.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono text-accent bg-accent/5 hover:bg-accent/15 border border-accent/25 hover:border-accent/45 rounded-lg transition-all duration-300 shrink-0 cursor-pointer shadow-sm hover:shadow-[0_4px_12px_rgba(25,249,216,0.1)] active:scale-[0.98]"
                        >
                          <AwardIcon className="w-3.5 h-3.5" />
                          View Certificate
                        </a>
                      )}
                    </div>
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
