"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TimelineSubHeader from "@/components/ui/TimelineSubHeader";
import { GraduationCapIcon, LinkedinIcon } from "@/components/ui/icons/Icons";
import { education } from "@/data/educationData";
import { div } from "framer-motion/client";

export default function Education() {
  // SVG circular GPA progress circle details
  const gpaValue = 3.54;
  const maxGpa = 4.0;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (gpaValue / maxGpa) * circumference;

  return (
    <section
      id="education"
      className="pt-0 pb-20 md:pb-28 px-6 md:px-12 mx-auto scroll-mt-24"
    >
      <div className="px-0 lg:px-12 max-w-7xl mx-auto">
        {/* Timeline SubHeader */}
        <TimelineSubHeader title="Education" />

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto mt-8">
          {/* Vertical Timeline Line fading out to transparent at the bottom */}
          <div className="absolute left-6 md:left-8 top-0 bottom-4 w-0.5 bg-linear-to-b from-zinc-800 to-transparent pointer-events-none" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16 pb-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col md:flex-row gap-6 md:gap-8 pl-16 md:pl-20"
              >
                {/* Logo Node centered on the timeline line */}
                <div className="absolute left-0 md:left-1 w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border border-zinc-800 bg-surface flex items-center justify-center z-10 transition-all duration-300 shadow-md group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(25,249,216,0.2)]">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} Logo`}
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Card Content */}
                <div className="w-full bg-surface/30 hover:bg-surface/50 border border-zinc-800/40 hover:border-accent/20 rounded-2xl p-6 md:p-8 backdrop-blur-xs transition-all duration-300 shadow-xs hover:shadow-[0_10px_30px_-10px_rgba(25,249,216,0.05)]">
                  {/* Content Layout split into Main details and GPA Gauge */}
                  <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">
                    {/* Left/Main Column: Text & Bullets */}
                    <div className="flex-1 w-full">
                      {/* Header details */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                        <div>
                          {/* Degree & Links */}
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-accent transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            {edu.links?.linkedin && (
                              <a
                                href={edu.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 hover:text-accent text-white bg-blue-500 hover:bg-zinc-900/90 border border-zinc-800 hover:border-accent/40 rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-md hover:shadow-[0_0_15px_rgba(25,249,216,0.15)] group/link"
                                title="LinkedIn School Page"
                              >
                                <LinkedinIcon className="w-4 h-4" />
                              </a>
                            )}
                          </div>

                          {/* Institution & Department */}
                          <div className="text-base md:text-lg font-body text-zinc-300 font-semibold mt-1">
                            {edu.institution}
                            {edu.department && (
                              <span className="text-zinc-500 font-normal">
                                {" "}
                                · {edu.department}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Bullets List */}
                      <ul className="space-y-3 mb-6">
                        {edu.bullets.map((bullet, bIndex) => (
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
                    </div>

                    {/* Right/Secondary Column: GPA Circle Gauge */}
                    <div>
                      {/* Dates & Location */}
                      <div className="flex flex-col items-center text-zinc-400 font-mono text-xs md:text-sm shrink-0 mb-6">
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
                          <span>{edu.dates}</span>
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
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="w-full lg:w-48 flex flex-row lg:flex-col items-center justify-center gap-4 bg-zinc-900/35 border border-zinc-800/60 rounded-xl p-4 shrink-0 self-stretch lg:self-start">
                        <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="48"
                              cy="48"
                              r={radius}
                              className="stroke-zinc-800"
                              strokeWidth="6"
                              fill="transparent"
                            />
                            <motion.circle
                              cx="48"
                              cy="48"
                              r={radius}
                              className="stroke-accent"
                              strokeWidth="6"
                              fill="transparent"
                              strokeDasharray={circumference}
                              initial={{ strokeDashoffset: circumference }}
                              animate={{ strokeDashoffset }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute flex flex-col items-center justify-center text-center">
                            <span className="text-xl font-bold font-display text-white">
                              {edu.gpa}
                            </span>
                            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                              GPA
                            </span>
                          </div>
                        </div>
                        <div className="text-left lg:text-center">
                          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                            Academic Standings
                          </div>
                          <span className="inline-block text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full font-semibold">
                            Excellent
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coursework pills & Cert Button */}
                  <div className="mt-6 pt-5 border-t border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">
                        Key Courses:
                      </span>
                      {edu.courses?.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs font-mono text-zinc-400 bg-zinc-900/40 border border-zinc-800/60 rounded-lg hover:border-accent/40 hover:text-accent transition-all duration-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>

                    {edu.certificateUrl && (
                      <button className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono text-accent bg-accent/5 hover:bg-accent/15 border border-accent/25 hover:border-accent/45 rounded-lg transition-all duration-300 shrink-0 cursor-pointer shadow-sm hover:shadow-[0_4px_12px_rgba(25,249,216,0.1)] active:scale-[0.98]">
                        <GraduationCapIcon className="w-3.5 h-3.5" />
                        View Certificate
                      </button>
                    )}
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
