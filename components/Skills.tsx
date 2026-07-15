const skills = [
  { name: "Cybersecurity", icon: "🛡️" },
  { name: "Networking", icon: "🌐" },
  { name: "Linux", icon: "🐧" },
  { name: "Windows", icon: "🪟" },
  { name: "Troubleshooting", icon: "🛠️" },
  { name: "OSINT", icon: "🔎" },
  { name: "Reconnaissance", icon: "🛰️" },
  {
    name: "Information Gathering & Enumeration",
    icon: "📋",
  },
  { name: "Wireshark", icon: "📡" },
  { name: "Nmap", icon: "🗺️" },
  { name: "Metasploit", icon: "💥" },
  { name: "Burp Suite", icon: "🕷️" },
  { name: "Kali Linux", icon: "🐉" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          🛡️ Skills
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Technologies & Areas of Expertise
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-gray-400">
          Hands-on experience gained through IT support, cybersecurity
          certifications, practical labs, OSINT investigations, and penetration
          testing training.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="text-5xl">{skill.icon}</div>

              <h3 className="mt-4 text-lg font-semibold text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}