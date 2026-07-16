export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-12 text-center md:pt-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Terminal Banner */}
      <div className="mb-8 w-full max-w-2xl overflow-hidden rounded-xl border border-green-500/20 bg-gray-900/80 shadow-lg shadow-green-500/5 backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-xs text-gray-500">
            terminal
          </span>
        </div>

        <div className="p-5 text-left font-mono text-sm">
          <p className="text-green-400">
            root@fayyad:~$ ./portfolio.sh
          </p>

          <p className="mt-3 text-cyan-400">
            Welcome to Fayyad&apos;s Cybersecurity Portfolio
          </p>
        </div>
      </div>

      {/* Availability Badge */}
      <div className="mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
        🟢 Available for IT & Cybersecurity Opportunities
      </div>

      {/* Name */}
      <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
        Fayyad Dahweesh
      </h1>

      {/* Professional Titles */}
      <p className="mt-6 max-w-3xl text-lg font-medium text-gray-200 md:text-xl">
        Technical Support Specialist
        <span className="mx-3 text-cyan-400">•</span>
        IT Support Professional
        <span className="mx-3 text-cyan-400">•</span>
        Cybersecurity Professional
      </p>

      {/* Description */}
      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-500">
        Hands-on experience across IT Support, Networking, OSINT,
        Penetration Testing, and Security Operations.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="/Fayyad_Dahweesh_Technical_Support.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
        >
          View Resume
        </a>

        <a
          href="#contact"
          className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-black"
        >
          Contact Me
        </a>

        <a
          href="/osint-demo"
          className="rounded-lg border border-purple-500 px-6 py-3 font-semibold text-purple-400 transition duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:text-black"
        >
          OSINT Demo
        </a>
      </div>
    </section>
  );
}