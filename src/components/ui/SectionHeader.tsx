import React from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export default function SectionHeader({ number, title, className = "" }: SectionHeaderProps) {
  // Ensure the number ends with a dot if it doesn't already
  const formattedNumber = number.endsWith(".") ? number : `${number}.`;

  return (
    <div className={`flex items-center gap-4 mb-12 select-none ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-text flex items-center">
        <span className="text-accent font-mono text-xl md:text-2xl mr-2 font-normal">
          {formattedNumber}
        </span>
        {title}
      </h2>
      <div className="h-px bg-linear-to-r from-accent/25 via-[#ededed]/10 to-transparent grow" />
    </div>
  );
}
