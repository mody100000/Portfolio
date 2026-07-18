"use client";

export default function SectionDivider() {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-16 md:my-24 flex items-center justify-center px-4 select-none pointer-events-none">
      {/* Glow effect behind the divider line */}
      <div className="absolute inset-0 bg-radial from-accent/5 to-transparent blur-md h-12 w-full" />

      {/* Main horizontal line with modern gradient fading to transparent at the ends */}
      <div className="w-full h-[1.5px] bg-linear-to-r from-transparent via-[#ededed]/15 to-transparent relative">
        {/* Underlay glow in accent color */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent/35 to-transparent blur-[1px]" />
      </div>

      {/* Center glowing element */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
        {/* Outer glowing pulsing aura */}
        <div className="absolute w-7 h-7 bg-accent/10 border border-accent/25 rounded-full animate-ping opacity-75 duration-1000" />

        {/* Inner rotating diamond frame */}
        <div className="absolute w-5 h-5 bg-bg border border-accent/40 rotate-45 flex items-center justify-center shadow-[0_0_10px_rgba(25,249,216,0.2)]">
          {/* Inner core solid glowing diamond */}
          <div className="w-1.5 h-1.5 bg-accent rounded-[1px]" />
        </div>
      </div>
    </div>
  );
}
