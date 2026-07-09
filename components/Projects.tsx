const projects = [
  {
    title: "Cybersecurity Portfolio Website",
    description:
      "Designed and developed a responsive portfolio website using Next.js, React, and Tailwind CSS to showcase technical skills, projects, certifications, and professional experience.",
    tags: ["Next.js", "React", "Tailwind CSS", "Git"],
  },
  {
    title: "TryHackMe Cybersecurity Labs",
    description:
      "Completed hands-on cybersecurity labs covering networking, Linux, Windows, web security, and security fundamentals through practical exercises and simulated environments.",
    tags: ["TryHackMe", "Linux", "Windows", "Networking"],
  },
  {
    title: "SOC Analyst Practice",
    description:
      "Developed practical experience with security monitoring, alert triage, log analysis, and incident investigation concepts through SOC-focused learning platforms and exercises.",
    tags: ["SOC", "SIEM", "Logs", "Incident Response"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Practical Work & Learning Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-500/40 px-3 py-1 text-sm text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}