"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { GithubIcon } from "@/components/ui/icons/Icons";

interface GithubContributionsProps {
  username?: string;
  className?: string;
}

export default function GithubContributions({
  username = "mody100000",
  className = "",
}: GithubContributionsProps) {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<number | "last">("last");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate year options from current year down to 2021
  const availableYears: (number | "last")[] = ["last"];
  for (let year = currentYear; year >= 2020; year--) {
    availableYears.push(year);
  }

  const customAccentTheme = {
    light: ["#ebedf0", "#a2f3e7", "#58e7d2", "#22ceb6", "#09a08c"],
    dark: ["#161b22", "#0d4940", "#117869", "#15b29c", "#19f9d8"],
  };

  return (
    <section
      id="contributions"
      className={`py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24 ${className}`}
    >
      {/* Section Header */}
      <SectionHeader number="03" title="GitHub Contributions" />

      {/* Subtitle / Description */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 -mt-6">
        <p className="text-zinc-400 font-body text-base max-w-2xl">
          An interactive overview of my open-source activity, commits, and code
          contributions fetched live from GitHub.
        </p>

        {/* GitHub Profile Button */}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 hover:bg-accent/15 text-accent text-sm font-mono transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:border-accent/60 shrink-0 w-fit"
        >
          <GithubIcon className="w-4 h-4" />
          <span>@{username}</span>
          <svg
            className="w-3.5 h-3.5 ml-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      {/* Year Filter Buttons & Container */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 select-none">
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-surface/80 border border-[#ededed]/10 rounded-2xl backdrop-blur-md shadow-lg">
          {availableYears.map((year) => {
            const isActive = selectedYear === year;
            const label = year === "last" ? "Last 12 Months" : year.toString();

            return (
              <motion.button
                key={year.toString()}
                onClick={() => setSelectedYear(year)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-4 py-2 rounded-xl font-mono text-xs md:text-sm transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "text-bg font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeYearTab"
                    className="absolute inset-0 bg-accent rounded-xl shadow-md shadow-accent/30"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Calendar Card Container */}
      <div className="relative w-fit mx-auto max-w-full border border-accent/20 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-xs shadow-2xl shadow-accent/5 hover:border-accent/40 transition-all duration-500">
        {/* Subtle accent glow line at the top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-accent to-transparent opacity-70" />

        {/* Client-Side Safe Hydration Wrapper */}
        {!mounted ? (
          <div className="w-full h-44 flex flex-col items-center justify-center gap-4 animate-pulse">
            <div className="w-full h-28 bg-white/5 rounded-lg border border-white/5" />
            <div className="flex items-center justify-between w-full text-xs text-zinc-500 font-mono">
              <div className="h-4 w-32 bg-white/5 rounded" />
              <div className="h-4 w-24 bg-white/5 rounded" />
            </div>
          </div>
        ) : (
          <div className="w-full overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedYear.toString()}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="min-w-187.5 w-max mx-auto flex justify-center p-1"
              >
                <GitHubCalendar
                  username={username}
                  year={selectedYear}
                  colorScheme="dark"
                  theme={customAccentTheme}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={13}
                  labels={{
                    totalCount: `{{count}} contributions in ${
                      selectedYear === "last" ? "the last year" : selectedYear
                    }`,
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
