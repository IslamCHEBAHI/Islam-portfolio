"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#081c18]/85 backdrop-blur-xl">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        {/* LOGO */}

        <Link
          href="/"
          onClick={closeMenu}
          className="text-lg font-bold tracking-wide text-white"
        >
          CHEBAHI ISLAM
          <span className="ml-1 text-[#d6ad69]">DEV</span>
        </Link>


        {/* DESKTOP MENU */}

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">

          <a
            href="/#about"
            className="transition hover:text-[#d6ad69]"
          >
            About
          </a>

          <a
            href="/#skills"
            className="transition hover:text-[#d6ad69]"
          >
            Skills
          </a>

          <a
            href="/#projects"
            className="transition hover:text-[#d6ad69]"
          >
            Projects
          </a>

          <a
            href="/#contact"
            className="transition hover:text-[#d6ad69]"
          >
            Contact
          </a>

        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#d6ad69]/50 md:hidden"
        >

          <div className="flex w-5 flex-col gap-1.5">

            <span
              className={`block h-0.5 w-full bg-white transition ${
                menuOpen
                  ? "translate-y-2 rotate-45"
                  : ""
              }`}
            />

            <span
              className={`block h-0.5 w-full bg-white transition ${
                menuOpen
                  ? "opacity-0"
                  : ""
              }`}
            />

            <span
              className={`block h-0.5 w-full bg-white transition ${
                menuOpen
                  ? "-translate-y-2 -rotate-45"
                  : ""
              }`}
            />

          </div>

        </button>

      </div>


      {/* MOBILE MENU */}

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#081c18]/95 transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="mx-auto flex max-w-6xl flex-col px-6 py-5">

          <a
            href="/"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-gray-300 transition hover:text-[#d6ad69]"
          >
            Home
          </a>

          <a
            href="/#about"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-gray-300 transition hover:text-[#d6ad69]"
          >
            About
          </a>

          <a
            href="/#skills"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-gray-300 transition hover:text-[#d6ad69]"
          >
            Skills
          </a>

          <a
            href="/#projects"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-gray-300 transition hover:text-[#d6ad69]"
          >
            Projects
          </a>

          <a
            href="/#contact"
            onClick={closeMenu}
            className="py-4 text-gray-300 transition hover:text-[#d6ad69]"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}