import React from "react";

interface TimelineSubHeaderProps {
  title: string;
  className?: string;
}

export default function TimelineSubHeader({ title, className = "" }: TimelineSubHeaderProps) {
  return (
    <div className={`relative pl-16 md:pl-20 py-6 my-4 select-none ${className}`}>
      {/* Pulsing marker node on the timeline line */}
      <div className="absolute left-4.5 md:left-6.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-accent bg-bg z-10 shadow-[0_0_8px_rgba(25,249,216,0.35)]" />
      
      {/* Title with prompt prefix and horizontal line */}
      <div className="flex items-center gap-4">
        <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-white flex items-center">
          <span className="text-accent font-mono text-base md:text-lg mr-2 font-normal">
            - /
          </span>
          {title}
        </h3>
        <div className="h-px bg-linear-to-r from-accent/20 via-zinc-800/40 to-transparent grow" />
      </div>
    </div>
  );
}
