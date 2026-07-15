export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="hidden flex-shrink-0 text-xl font-bold text-cyan-400 transition hover:text-cyan-300 sm:block"
        >
          Fayyad
        </a>

        {/* Navigation */}
        <ul className="flex flex-1 justify-center gap-3 overflow-x-auto whitespace-nowrap text-xs text-gray-300 md:justify-end md:gap-8 md:text-base">
          <li>
            <a
              href="#home"
              className="transition hover:text-cyan-400"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="transition hover:text-cyan-400"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="transition hover:text-cyan-400"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="transition hover:text-cyan-400"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#certifications"
              className="transition hover:text-cyan-400"
            >
              Certifications
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="transition hover:text-cyan-400"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}