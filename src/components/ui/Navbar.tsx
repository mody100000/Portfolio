"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    url: "mailto:mahmoud.gomaa.dev@gmail.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xs shadow-nav transition-all duration-300">
        <nav className="w-full px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
          {/* Left Side: Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="relative w-14 md:w-16 h-16 rounded-full overflow-hidden border border-[#ededed]/20 hover:border-accent hover:scale-105 transition-all duration-300 group shadow-md"
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-cover group-hover:rotate-6 transition-transform duration-300"
                sizes="(max-width: 768px) 56px, 64px"
              />
            </Link>
          </div>

          {/* Middle: Page Links (Desktop only) */}
          <div className="hidden md:flex items-center gap-8 md:gap-10">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-base md:text-lg tracking-wider  hover:text-accent transition-colors duration-200"
              >
                <span className="text-accent text-[14px] md:text-base mr-1">
                  0{i + 1}.
                </span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side: Social Media Icons (Desktop only) */}
          <div className="hidden md:flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger button (Right Side on Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-55 text-text hover:text-accent focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current rounded-full my-1 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
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
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Drawer container (Slides from the right) */}
        <aside
          className={`absolute top-0 right-0 bottom-0 w-72 max-w-[80vw] bg-surface border-l border-[#ededed]/10 p-8 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top of drawer */}
          <div className="flex flex-col gap-12 mt-16">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-mono text-xl tracking-wider hover:text-accent transition-colors duration-200 block py-2"
                >
                  <span className="text-accent text-base mr-2">0{i + 1}.</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom of drawer: Social links */}
          <div className="flex items-center gap-6 py-4 border-t border-[#ededed]/10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors duration-200"
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
