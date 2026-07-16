const experiences = [
  {
    period: "2023 – Present",
    role: "Technical Support",
    company: "SamaLink",
    highlights: [
      "Technical Support",
      "System Troubleshooting",
      "Software Deployment",
      "Network Connectivity",
    ],
  },
  {
    period: "2022 – 2023",
    role: "IT Service Desk Specialist",
    company: "AUBMC",
    highlights: [
      "1200+ Tickets Resolved",
      "800 Workstations Deployed",
      "Epic EHR Rollout",
      "TeamDynamix",
    ],
  },
  {
    period: "2025 – Present",
    role: "Cybersecurity Development",
    company: "Labs & Certifications",
    highlights: [
      "eJPTv2 Certified",
      "TryHackMe Top 5%",
      "OSINT Projects",
      "Security Labs",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          💼 Experience
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Professional Journey
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {experiences.map((experience) => (
            <div
              key={experience.role}
              className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <p className="text-sm text-cyan-400">
                {experience.period}
              </p>

              <h3 className="mt-3 text-xl font-bold">
                {experience.role}
              </h3>

              <p className="mt-1 text-gray-400">
                {experience.company}
              </p>

              <div className="mt-6 space-y-3">
                {experience.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}