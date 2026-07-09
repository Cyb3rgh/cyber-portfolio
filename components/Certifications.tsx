const certifications = [
  {
    name: "Google Cybersecurity Certificate",
    status: "Planned",
    icon: "🛡️",
  },
  {
    name: "CompTIA Security+",
    status: "Planned",
    icon: "🔐",
  },
  {
    name: "eJPT / INE Labs",
    status: "Learning",
    icon: "🎯",
  },
  {
    name: "TryHackMe / Hack The Box",
    status: "Practice",
    icon: "🧪",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Certifications
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Learning & Certification Goals
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <p className="text-4xl">{cert.icon}</p>
              <h3 className="mt-4 text-xl font-semibold">{cert.name}</h3>
              <p className="mt-2 text-cyan-300">{cert.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}