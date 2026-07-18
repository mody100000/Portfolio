"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { EyeIcon } from "../ui/Icons";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-24 max-w-3xl mx-auto select-none">
      <span className="font-mono text-sm md:text-base text-accent tracking-widest mb-4 block">
        &lt; hello, i&apos;m &gt;
      </span>
      <h1 className="font-display text-5xl md:text-[64px] font-bold text-text tracking-tight mb-6 uppercase leading-none">
        MAHMOUD GOMAA.
      </h1>
      <p className="font-body text-zinc-400 text-base md:text-lg max-w-125 leading-relaxed mb-14">
        <span className="text-accent font-bold">Software Engineer</span> focused
        on <span className="text-accent font-bold">Frontend Development</span>,
        building fast, accessible, and scalable web applications with React,
        next.js, and TypeScript.
      </p>

      {/* Circular profile image container with glowing white moon shadow */}
      <div className="relative w-70 h-70 mb-16 group cursor-pointer">
        {/* Image wrapper with exact border, shadow, transition, and layout properties */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-[1.5px] border-[#ededed] bg-transparent flex items-center justify-center will-change-transform origin-center transition-all duration-500 ease-out shadow-[0_5px_20px_var(--hero-shadow)] group-hover:shadow-[0_10px_35px_var(--hero-shadow-hover)] group-hover:-translate-y-3 group-hover:scale-[1.03] motion-reduce:transition-none">
          <Image
            src="/images/Mahmoud Gomaa.webp"
            alt="Mahmoud Gomaa"
            fill
            priority
            sizes="280px"
            className="object-cover w-full h-full grayscale contrast-[1] transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:contrast-100 motion-reduce:transition-none"
          />
        </div>
      </div>

      {/* Action Buttons: Stack vertically on mobile, side-by-side on larger screens - lowercase */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
        <Button
          href="/Mahmoud-Mohamed-Gomaa-Software Engineer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline-accent"
          className="w-50 py-3.5 gap-2"
        >
          <EyeIcon className="w-4 h-4 " />
          View CV
        </Button>
        <Button
          href="#projects"
          variant="minimal-white"
          className="w-50 py-3.5"
        >
          view projects
        </Button>
      </div>
    </section>
  );
}
