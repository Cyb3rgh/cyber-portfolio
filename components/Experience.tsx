const professionalExperience = [
  {
    period: "2023 – Present",
    role: "Technical Support",
    company: "SamaLink",
    highlights: [
      "Provide end-user technical support across systems and applications.",
      "Diagnose and resolve operating-system and software issues.",
      "Support software deployment across user environments.",
      "Investigate network connectivity problems and restore user access.",
    ],
  },
  {
    period: "2022 – 2023",
    role: "IT Service Desk Specialist",
    company: "AUBMC",
    highlights: [
      "Resolved more than 1,200 support tickets using TeamDynamix.",
      "Deployed 800 workstations across the organization.",
      "Supported the Epic EHR rollout and workstation deployment process.",
    ],
  },
];

const professionalDevelopment = {
  period: "2025 – Present",
  title: "Cybersecurity Development",
  description:
    "Building practical offensive-security and investigation skills alongside professional IT support experience.",
  highlights: [
    "Earned the eJPTv2 certification.",
    "Reached the top 5% on TryHackMe.",
    "Built hands-on OSINT projects.",
    "Completed practical security labs.",
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          💼 Experience
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Experience & Development
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-gray-400">
          Professional IT support experience backed by measurable service-desk
          results and ongoing hands-on cybersecurity development.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {professionalExperience.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="rounded-2xl border border-gray-800 bg-gray-900/50 p-7"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-lg text-gray-400">
                    {experience.company}
                  </p>
                </div>

                <p className="shrink-0 text-sm font-medium text-cyan-400">
                  {experience.period}
                </p>
              </div>

              <ul className="mt-7 space-y-4">
                {experience.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 leading-7 text-gray-300"
                  >
                    <span aria-hidden="true" className="mt-1 text-cyan-400">
                      ▹
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="mt-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-7">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                Professional Development
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {professionalDevelopment.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {professionalDevelopment.period}
              </p>

              <p className="mt-5 leading-7 text-gray-300">
                {professionalDevelopment.description}
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {professionalDevelopment.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gray-800 bg-black/30 p-4 text-gray-300"
                >
                  <span aria-hidden="true" className="text-cyan-400">
                    ✓
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}