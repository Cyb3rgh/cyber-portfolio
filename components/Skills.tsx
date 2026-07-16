const skillGroups = [
  {
    title: "IT Support & Systems",
    context: "Professional experience",
    icon: "🖥️",
    description:
      "Supporting users, diagnosing technical issues, and working across operating systems and network environments.",
    skills: [
      "Technical troubleshooting",
      "Windows support",
      "Networking and TCP/IP",
      "Linux fundamentals",
    ],
  },
  {
    title: "Security Analysis & OSINT",
    context: "Projects and investigations",
    icon: "🔎",
    description:
      "Collecting, validating, and analyzing publicly available and network-based information.",
    skills: [
      "OSINT investigations",
      "Reconnaissance",
      "Information gathering and enumeration",
      "Wireshark traffic analysis",
    ],
  },
  {
    title: "Security Testing",
    context: "Training and practical labs",
    icon: "🛡️",
    description:
      "Applying offensive-security tools in controlled environments to understand vulnerabilities and attack paths.",
    skills: [
      "Nmap network scanning",
      "Burp Suite web testing",
      "Metasploit lab exercises",
      "Kali Linux tooling",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          🛡️ Skills
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Technical Capabilities
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-gray-400">
          Skills organized by how they have been applied through professional
          IT support, cybersecurity projects, investigations, training, and
          practical labs.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="text-4xl">
                  {group.icon}
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-cyan-400">
                    {group.context}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 leading-7 text-gray-400">
                {group.description}
              </p>

              <ul className="mt-6 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span aria-hidden="true" className="mt-1 text-cyan-400">
                      ▹
                    </span>

                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}