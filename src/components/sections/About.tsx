"use client";

import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Section Header */}
      <SectionHeader number="01" title="About Me" />

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Context Text */}
        <div className="lg:col-span-6 font-body text-zinc-400 text-base md:text-lg leading-relaxed space-y-6">
          <p>
            <span className="block text-2xl md:text-3xl font-semibold text-accent">
              Hi 👋
            </span>
            <br /> I&apos;m{" "}
            <span className="text-accent font-semibold">
              Mahmoud Mohamed Gomaa
            </span>
            , a{" "}
            <span className="text-accent font-semibold">Software Engineer</span>{" "}
            specializing in{" "}
            <span className="text-accent font-semibold">
              Front-End development
            </span>{" "}
            with{" "}
            <span className="text-accent font-semibold">
              4+ years of experience
            </span>{" "}
            and a strong foundation in full-stack engineering. I&apos;m
            passionate about crafting modern, scalable, and user-centric web
            applications with clean, maintainable, and high-performance code.
          </p>
          <p>
            I work as a{" "}
            <span className="text-accent font-semibold">
              Front-End Developer at LAUNCH WORKZ
            </span>
            , where I develop and maintain enterprise-level applications using{" "}
            <span className="text-white font-semibold">
              Next.js, React, TypeScript, Redux, Tailwind CSS, and Docker
            </span>
            .
          </p>
          <p>
            My experience includes collaborating with{" "}
            <span className="text-accent font-semibold">NUMU</span> to build a
            comprehensive dashboard for the{" "}
            <span className="text-accent font-semibold">
              UAE Ministry of Education
            </span>{" "}
            using{" "}
            <span className="text-white font-semibold">
              React, GraphQL (Apollo), Redux, and AWS S3
            </span>
            .
          </p>
          <p>
            Previously, I worked as a Front-End Developer at{" "}
            <span className="text-accent font-semibold">Galaxy Spies</span> and
            completed the{" "}
            <span className="text-accent font-semibold">
              ITI MERN Stack Diploma
            </span>
            , where I strengthened my skills in backend tools like{" "}
            <span className="text-white font-semibold">
              Node.js, Express.js, and MongoDB
            </span>
            , building responsive, highly-optimized solutions across the entire
            development lifecycle.
          </p>
        </div>

        {/* Right Column: Image Container (Large Height) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="group relative w-full max-w-120 aspect-3/4 select-none">
            {/* Ambient Background Glow on Hover */}
            <div className="absolute -inset-1 rounded-lg bg-linear-to-tr from-accent to-[#ededed]/10 opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500" />

            {/* Offset Decorative Frame */}
            <div className="absolute inset-0 border-[1.5px] border-accent rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-all duration-300 ease-out -z-10" />

            {/* Main Image Frame */}
            <div className="relative w-full h-full rounded-lg overflow-hidden border border-[#ededed]/15 bg-transparent will-change-transform origin-center transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:-translate-x-1.5 shadow-[0_5px_25px_rgba(14,17,22,0.6)] group-hover:shadow-[0_15px_35px_rgba(25,249,216,0.15)]">
              <Image
                src="/images/about_me.webp"
                alt="Mahmoud Mohamed Gomaa"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover w-full h-full grayscale contrast-[1.05] brightness-90 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
              />
              {/* Subtle tint overlay */}
              <div className="absolute inset-0 bg-accent/5 mix-blend-screen group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
