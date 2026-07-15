export default function TryHackMe() {
  return (
    <section id="tryhackme" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Hands-On Practice
        </p>

        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          TryHackMe Achievements
        </h2>

        <p className="mb-12 max-w-3xl leading-7 text-gray-400">
          Continuous hands-on cybersecurity practice across networking, Linux,
          Windows security, web security, enumeration, offensive security, and
          defensive security.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
            <p className="text-4xl font-bold text-cyan-400">112</p>
            <p className="mt-3 text-gray-400">Completed Rooms</p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
            <p className="text-4xl font-bold text-cyan-400">Top 5%</p>
            <p className="mt-3 text-gray-400">Global Ranking</p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
            <p className="text-4xl font-bold text-cyan-400">18</p>
            <p className="mt-3 text-gray-400">Badges Earned</p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
            <p className="text-4xl font-bold text-cyan-400">46</p>
            <p className="mt-3 text-gray-400">Profile Level</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900/40 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Cyb3rgh0st95</h3>

              <p className="mt-2 text-gray-400">
                Practical cybersecurity training through labs, guided rooms,
                challenges, and security-focused learning paths.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "SOC Operations",
                  "Linux",
                  "Windows Security",
                  "Networking",
                  "Web Security",
                  "Enumeration",
                  "Incident Response",
                  "Defensive Security",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://tryhackme.com/p/Cyb3rgh0st95"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 justify-center rounded-lg border border-green-500 px-5 py-3 font-semibold text-green-400 transition duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-black"
            >
              View TryHackMe Profile →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}