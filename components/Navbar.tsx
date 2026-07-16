"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "TryHackMe", href: "#tryhackme" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeMenuWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeMenuWithEscape);

    return () => {
      window.removeEventListener("keydown", closeMenuWithEscape);
    };
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed left-0 top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-end py-3 md:justify-center md:py-4">
          {/* Desktop navigation */}
          <ul className="hidden items-center gap-8 text-base text-gray-300 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-sm transition hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-700 px-4 text-gray-200 transition hover:border-cyan-400 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 md:hidden"
          >
            <span className="text-sm font-medium">
              {isOpen ? "Close" : "Menu"}
            </span>

            {isOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          hidden={!isOpen}
          className="border-t border-gray-800 pb-3 md:hidden"
        >
          <ul className="flex flex-col pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-gray-900 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}