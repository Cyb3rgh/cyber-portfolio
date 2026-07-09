export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
        Cybersecurity Portfolio
      </p>

      <h1 className="text-4xl font-bold md:text-6xl">
        Fayyad Dahweesh
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-gray-300">
        Technical Support Specialist | IT Support Professional | Aspiring
        Cybersecurity Analyst
      </p>

      <p className="mt-6 max-w-3xl text-gray-400">
        Building hands-on experience in IT support, system administration,
        networking, and cybersecurity while continuously developing practical
        skills in security operations and infrastructure technologies.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="/Fayyad_Dahweesh_Technical_Support.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          View Resume
        </a>

        <a
          href="#contact"
          className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}