"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { education, EducationItem } from "@/data/educationData";
import { LinkedinIcon, ExternalLinkIcon, CloseIcon } from "@/components/ui/icons/Icons";

const GraduationCapIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
  </svg>
);

const AwardIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<EducationItem | null>(null);

  // SVG circular GPA progress circle details
  const gpaValue = 3.54;
  const maxGpa = 4.0;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (gpaValue / maxGpa) * circumference;

  return (
    <section
      id="education"
      className="py-20 md:py-28 px-6 md:px-12 mx-auto scroll-mt-24"
    >
      <div className="px-0 lg:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader number="04" title="Education" />

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto mt-16 md:mt-24">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-0.5 bg-linear-to-b from-accent/50 via-zinc-800 to-transparent pointer-events-none" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
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
                    className="object-contain w-full h-full p-1"
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
                              <span className="text-zinc-500 font-normal"> · {edu.department}</span>
                            )}
                          </div>
                        </div>

                        {/* Dates & Location */}
                        <div className="flex flex-col md:items-end text-zinc-400 font-mono text-xs md:text-sm shrink-0">
                          <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{edu.dates}</span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-1.5 md:justify-end text-zinc-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Bullets List */}
                      <ul className="space-y-3 mb-6">
                        {edu.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="text-zinc-400 text-sm md:text-base leading-relaxed flex items-start gap-3">
                            <span className="text-accent mt-1.5 shrink-0">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right/Secondary Column: GPA Circle Gauge */}
                    {edu.gpa && (
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
                            <span className="text-xl font-bold font-display text-white">{edu.gpa}</span>
                            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">GPA</span>
                          </div>
                        </div>
                        <div className="text-left lg:text-center">
                          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Academic Standings</div>
                          <span className="inline-block text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full font-semibold">
                            Excellent
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Coursework pills & Cert Button */}
                  <div className="mt-6 pt-5 border-t border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">Key Courses:</span>
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
                      <button
                        onClick={() => setSelectedCert(edu)}
                        className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono text-accent bg-accent/5 hover:bg-accent/15 border border-accent/25 hover:border-accent/45 rounded-lg transition-all duration-300 shrink-0 cursor-pointer shadow-sm hover:shadow-[0_4px_12px_rgba(25,249,216,0.1)]"
                      >
                        <AwardIcon className="w-3.5 h-3.5" />
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

      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-3xl bg-surface border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-zinc-800 bg-zinc-950/40">
                <div className="flex items-center gap-2.5">
                  <GraduationCapIcon className="text-accent w-5 h-5" />
                  <h3 className="text-base md:text-lg font-bold font-display text-white">
                    {selectedCert.institution} Academic Proof
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all"
                  aria-label="Close modal"
                >
                  <CloseIcon className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-zinc-950/20">
                <div className="w-full relative border border-zinc-800/80 rounded-2xl bg-zinc-900/30 p-8 text-center overflow-hidden shadow-inner flex flex-col items-center justify-center min-h-[300px] border-dashed">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                  <GraduationCapIcon className="w-16 h-16 text-accent/80 mb-5 animate-pulse" />
                  <h4 className="text-xl md:text-2xl font-bold font-display text-white mb-2">
                    {selectedCert.degree}
                  </h4>
                  <p className="text-zinc-400 text-sm md:text-base max-w-md mb-6 leading-relaxed">
                    This certifies the academic records, courses, and standings for studies completed at{" "}
                    <span className="text-white font-semibold">{selectedCert.institution}</span> during{" "}
                    <span className="text-accent font-mono text-sm">{selectedCert.dates}</span>, graduating with a GPA of{" "}
                    <span className="text-white font-bold">{selectedCert.gpa}</span>.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                    <a
                      href={selectedCert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold text-accent bg-accent/10 border border-accent/35 hover:bg-accent/20 rounded-xl transition-all duration-300"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      View CV Document (Credential Proof)
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-zinc-800 bg-zinc-950/40 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-850 rounded-lg transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
