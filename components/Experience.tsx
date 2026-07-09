const experiences = [
  {
    year: "Current Focus",
    title: "Technical Support & IT Support",
    description:
      "Building practical experience in troubleshooting, user support, system administration, networking fundamentals, and supporting real-world IT environments.",
  },
  {
    year: "Cybersecurity Direction",
    title: "SOC & Cybersecurity Learning",
    description:
      "Developing hands-on cybersecurity skills through labs, TryHackMe rooms, SOC concepts, log analysis, SIEM fundamentals, and incident response practice.",
  },
  {
    year: "Professional Growth",
    title: "Infrastructure & Security Foundations",
    description:
      "Strengthening knowledge in Windows, Linux, networking, Active Directory concepts, and security fundamentals to support a transition into cybersecurity roles.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Experience
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          My Professional Journey
        </h2>

        <div className="space-y-6">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition hover:border-cyan-400"
            >
              <p className="text-sm text-cyan-400">{item.year}</p>

              <h3 className="mt-2 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}