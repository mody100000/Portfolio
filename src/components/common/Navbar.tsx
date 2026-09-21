"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  GmailIcon,
} from "@/components/ui/icons/Icons";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "experience", href: "#experience" },
  { name: "contributions", href: "#contributions" },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/mody100000",
    icon: <GithubIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mahmoud-gomma/",
    icon: <LinkedinIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mody_dev/",
    icon: <InstagramIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
  },
  {
    name: "Gmail",
    url: "mailto:mahmoud.m.gomaaa.dev@gmail.com",
    icon: <GmailIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-nav-bg/90 backdrop-blur-md shadow-nav"
            : "bg-transparent backdrop-blur-none shadow-none"
        }`}
      >
        <nav className="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24">
          {/* Left Side: Logo (responsive smaller size on mobile: 44px -> 48px -> 52px -> 64px) */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-16 lg:h-16 rounded-full overflow-hidden border border-[#ededed]/20 hover:border-accent hover:scale-105 transition-all duration-300 group shadow-md flex-shrink-0"
            >
              <Image
                src="/images/image.svg"
                alt="Logo"
                fill
                className="object-cover group-hover:rotate-6 transition-transform duration-300"
                sizes="(max-width: 640px) 44px, (max-width: 768px) 48px, (max-width: 1024px) 52px, 64px"
              />
            </Link>
          </div>

          {/* Middle: Page Links (Desktop & Mid-screens responsive spacing) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs md:text-sm lg:text-base xl:text-lg tracking-normal md:tracking-wide lg:tracking-wider hover:text-accent transition-colors duration-200 flex items-center"
              >
                <span className="text-accent text-[11px] md:text-xs lg:text-sm xl:text-base mr-1 font-semibold">
                  0{i + 1}.
                </span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side: Social Media Icons (Desktop & Mid-screens responsive) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-accent hover:-translate-y-0.5 transition-all duration-200 p-1"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger button (Right Side on Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg relative z-[55] text-text hover:text-accent hover:bg-white/5 active:scale-95 transition-all focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-5.5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-5.5 h-0.5 bg-current rounded-full my-1 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5.5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Drawer container (Slides from the right) */}
        <aside
          className={`absolute top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-surface/95 backdrop-blur-xl border-l border-[#ededed]/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top of drawer */}
          <div className="flex flex-col gap-8 mt-14 sm:mt-16">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-mono text-lg sm:text-xl tracking-wider hover:text-accent hover:translate-x-1 transition-all duration-200 block py-3 px-2 rounded-md hover:bg-white/5"
                >
                  <span className="text-accent text-sm sm:text-base mr-3 font-semibold">
                    0{i + 1}.
                  </span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom of drawer: Social links */}
          <div className="flex items-center justify-around py-4 border-t border-[#ededed]/10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-accent hover:scale-110 transition-all duration-200 p-2"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}

