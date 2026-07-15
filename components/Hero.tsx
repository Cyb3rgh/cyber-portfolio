export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Availability Badge */}
      <div className="mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
        🟢 Available for IT & Cybersecurity Opportunities
      </div>

      {/* Small Heading */}
      <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
        Cybersecurity Portfolio
      </p>

      {/* Name */}
      <h1 className="text-5xl font-bold md:text-7xl">
        Fayyad{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Dahweesh
        </span>
      </h1>

      {/* Title */}
      <p className="mt-6 max-w-3xl text-lg text-gray-300 md:text-xl">
        Technical Support Specialist
        <span className="mx-3 text-cyan-400">•</span>
        IT Support Professional
        <span className="mx-3 text-cyan-400">•</span>
        Aspiring Cybersecurity Analyst
      </p>

      {/* Description */}
      <p className="mt-6 max-w-3xl leading-8 text-gray-400">
        Building hands-on experience in IT support, system administration,
        networking, OSINT, and cybersecurity while continuously developing
        practical skills in security operations and infrastructure technologies.
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