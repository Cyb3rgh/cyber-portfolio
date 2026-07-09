export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
  href="#home"
  className="text-xl font-bold text-cyan-400 transition hover:text-cyan-300"
>
  Fayyad
</a>

        <ul className="flex gap-4 text-gray-300 text-sm md:text-base">
          <li>
            <a
              href="#home"
              className="cursor-pointer transition hover:text-cyan-400"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="cursor-pointer transition hover:text-cyan-400"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="cursor-pointer transition hover:text-cyan-400"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="cursor-pointer transition hover:text-cyan-400"
            >
              Projects
            </a>
          </li>
<li>
  <a
    href="#experience"
    className="cursor-pointer transition hover:text-cyan-400"
  >
    Experience
  </a>
</li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer transition hover:text-cyan-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}