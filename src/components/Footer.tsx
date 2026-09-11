import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061511] px-6 py-10 text-white">

      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>

          <Link
            href="/"
            className="text-lg font-bold tracking-wide"
          >
            CHEBAHI ISLAM
            <span className="ml-1 text-[#d6ad69]">
              DEV
            </span>
          </Link>

          <p className="mt-2 text-sm text-gray-400">
            Full Stack Developer
          </p>

        </div>


        <div className="flex flex-wrap gap-6 text-sm text-gray-400">

          <a
            href="/#about"
            className="transition hover:text-[#d6ad69]"
          >
            About
          </a>

          <a
            href="/#projects"
            className="transition hover:text-[#d6ad69]"
          >
            Projects
          </a>

          <a
            href="/#skills"
            className="transition hover:text-[#d6ad69]"
          >
            Skills
          </a>

          <a
            href="/#contact"
            className="transition hover:text-[#d6ad69]"
          >
            Contact
          </a>

        </div>


        <div className="flex gap-4">

          <a
            href="https://github.com/IslamCHEBAHI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition hover:text-[#d6ad69]"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/islam-chebahi-374961238/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition hover:text-[#d6ad69]"
          >
            LinkedIn
          </a>

        </div>

      </div>


      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CHEBAHI ISLAM DEV. All rights reserved.
      </div>

    </footer>
  );
}