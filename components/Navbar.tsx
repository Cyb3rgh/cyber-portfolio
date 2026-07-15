export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4">
        <ul className="flex w-full justify-start gap-3 overflow-x-auto whitespace-nowrap text-xs text-gray-300 sm:justify-center md:gap-8 md:text-base">
          <li>
            <a href="#home" className="transition hover:text-cyan-400">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#tryhackme" className="transition hover:text-cyan-400">
              TryHackMe
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
            <a href="#experience" className="transition hover:text-cyan-400">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}