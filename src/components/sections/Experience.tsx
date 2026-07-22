"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

interface ExperienceItem {
  company: string;
  role: string;
  employmentType: string;
  location: string;
  dates: string;
  duration: string;
  logo: string;
  companyDescription?: string;
  bullets: string[];
  skills: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "LAUNCH WORKZ (B2B with TeleShield)",
      role: "Front-End Developer",
      employmentType: "Full-time",
      location: "Remote",
      dates: "Mar 2025 – Mar 2026",
      duration: "1 yr", // Based on current date Jul 2026
      logo: "/images/experience/Launch Workz.jpeg",
      companyDescription:
        "TeleShield is a Telecom Expense Management (TEM) leader with 30+ years of experience, helping enterprises and mid-market businesses simplify, optimize, and gain real-time visibility into telecom orders, inventory, invoices, and expenses.",
      bullets: [
        "Developed and maintained enterprise dashboards, web applications, and internal systems using Next.js, React, TypeScript, and Tailwind CSS, delivering scalable, reliable frontends.",
        "Containerized apps with Docker for smoother deployment and collaboration.",
        "Designed responsive UIs ensuring cross-device compatibility and usability for enterprise clients.",
        "Worked in agile teams, delivering features on time and boosting productivity through documentation and task tracking.",
      ],
      skills: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind",
        "Docker",
        "Git",
        "Agile",
      ],
    },
    {
      company: "Future Comprehensive Solutions (FCS)",
      role: "Full-Stack Developer",
      employmentType: "Contract-Based",
      location: "Saudi Arabia (Riyadh) / Remote",
      dates: "Jul 2025 – Dec 2025",
      duration: "6 mos",
      logo: "/images/experience/FCS.png",
      companyDescription:
        "FCS is a Saudi company specializing in workspace solutions, educational furniture, and commercial interior fit-out projects.",
      bullets: [
        "Developed a bilingual commercial website and a secure role-based Admin Dashboard with full English/Arabic (RTL/LTR) localization using React, TypeScript, and React Router.",
        "Built an end-to-end consultation booking system with real-time scheduling, availability management, and automated booking validation.",
        "Integrated Google OAuth authentication and implemented an automated email workflow using Spring Boot, Microsoft SMTP, and HTML templates, generating Google Calendar, Outlook, and ICS meeting invitations for bookings.",
        "Developed analytics dashboards with interactive charts to monitor bookings, user activity, and visitor statistics.",
        "Integrated live customer support through Tawk.to and Crisp Chat while containerizing the application with Docker and Nginx for production deployment.",
      ],
      skills: [
        "React.js",
        "TypeScript",
        "React Router",
        "Spring Boot",
        "OAuth",
        "SMTP",
        "Recharts",
        "i18next",
        "Docker",
        "Nginx",
      ],
    },
    {
      company: "NUMU",
      role: "Front-End Developer",
      employmentType: "Contract-Based",
      location: "UAE / Remote",
      dates: "Jan 2025 – Jun 2025",
      duration: "6 mos",
      logo: "/images/experience/numu.png",
      companyDescription:
        "Numu is an educational platform for the UAE Ministry of Education to manage schools, teachers, experts, classes, materials, and facilities.",
      bullets: [
        "Built a scalable admin dashboard powered by React, Apollo Client (GraphQL), Redux, and Tailwind CSS, providing real-time statistics and centralized management of teachers, experts, materials, schools, and classrooms.",
        "Implemented AWS S3 file upload & management with integrated video streaming (plyr-react), enabling schools to store, access, and deliver educational content easily.",
        "Handled large data tables with efficient filtering, sorting, and searching for administrators.",
        "Integrated localization (Arabic & English) and Firebase Cloud Messaging for real-time multilingual notifications.",
        "Implemented secure auth with server cookies and refresh tokens for reliable session management.",
      ],
      skills: [
        "React.js",
        "Apollo Client",
        "GraphQL",
        "Redux",
        "Tailwind",
        "AWS S3",
        "Firebase",
        "Web Cookies",
      ],
    },
    {
      company: "Galaxy Spies",
      role: "Front-End Developer",
      employmentType: "Full-time",
      location: "Egypt / OnSite",
      dates: "May 2024 – May 2025",
      duration: "1 yr",
      logo: "/images/experience/Galaxy Spies.jpeg",
      bullets: [
        "Developed and maintained web applications using React.js, ensuring optimal performance and responsiveness.",
        "Collaborated with cross-functional teams including UI designers, backend developers, and product managers to deliver high-quality features and improvements.",
        "Wrote clean, modular, and reusable code, adhering to best practices and coding standards.",
      ],
      skills: [
        "React.js",
        "JavaScript",
        "CSS3",
        "RESTful APIs",
        "Git",
        "Collaboration",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-6 md:px-12 mx-auto scroll-mt-24"
    >
      <div className="px-0 lg:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader number="02" title="Experience" />

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto mt-16 md:mt-24">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-0.5 bg-linear-to-b from-accent/50 via-zinc-800 to-transparent pointer-events-none" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
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
                      {/* Job Title */}
                      <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-accent transition-colors duration-300">
                        {exp.role}
                      </h3>
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
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-mono text-zinc-400 bg-zinc-900/40 border border-zinc-800/60 rounded-full hover:border-accent/40 hover:text-accent transition-all duration-200 select-none"
                      >
                        {skill}
                      </span>
                    ))}
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
