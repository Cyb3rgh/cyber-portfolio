export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Terminal Banner */}
      <div className="mb-8 w-full max-w-2xl overflow-hidden rounded-xl border border-green-500/20 bg-gray-900/80 shadow-lg shadow-green-500/5 backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>

          <span className="ml-4 text-xs text-gray-500">
            terminal
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-5 font-mono text-left text-sm">
          <p className="text-green-400">
            root@fayyad:~$ ./portfolio.sh
          </p>

          <p className="mt-3 text-cyan-400">
            Welcome to Fayyad's Cybersecurity Portfolio
          </p>
        </div>
      </div>

      {/* Availability Badge */}
      <div className="mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
        🟢 Available for IT & Cybersecurity Opportunities
      </div>
      {/* Full Name */}
      <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
        Fayyad Dahweesh
      </h1>

      {/* Professional Titles */}
      <p className="mt-6 max-w-3xl text-lg font-medium text-gray-200 md:text-xl">
        Technical Support Specialist
        <span className="mx-3 text-cyan-400">•</span>
        IT Support Professional
        <span className="mx-3 text-cyan-400">•</span>
        Cybersecurity Analyst
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

      {/* Portfolio Statistics */}
      <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50">
          <h3 className="text-3xl font-bold text-cyan-400">112</h3>
          <p className="mt-2 text-sm text-gray-400">Rooms Completed</p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50">
          <h3 className="text-3xl font-bold text-cyan-400">Top 5%</h3>
          <p className="mt-2 text-sm text-gray-400">Global Ranking</p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50">
          <h3 className="text-3xl font-bold text-cyan-400">18</h3>
          <p className="mt-2 text-sm text-gray-400">Badges Earned</p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50">
          <h3 className="text-3xl font-bold text-cyan-400">6</h3>
          <p className="mt-2 text-sm text-gray-400">
            Credentials &amp; Training
          </p>
        </div>
      </div>
    </section>
  );
}