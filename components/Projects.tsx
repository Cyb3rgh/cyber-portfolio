const projects = [
  {
    title: "OSINT Intelligence Dashboard",
    description:
      "Built an interactive OSINT dashboard that displays GeoIP intelligence, browser and device information, ISP and ASN data, privacy indicators, and a basic security posture assessment.",
    tags: [
      "Next.js",
      "TypeScript",
      "OSINT",
      "GeoIP",
      "Browser Fingerprinting",
    ],
    liveUrl: "/osint-demo",
    githubUrl: "https://github.com/Cyb3rgh/cyber-portfolio",
    featured: true,
  },
  {
    title: "Cybersecurity Portfolio Platform",
    description:
      "Designed, developed, documented, and deployed a responsive cybersecurity portfolio to showcase projects, verified certifications, TryHackMe achievements, technical skills, and professional experience.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "Vercel",
    ],
    liveUrl: "https://fayyad-cyber-vert.vercel.app",
    githubUrl: "https://github.com/Cyb3rgh/cyber-portfolio",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-gray-900 bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Practical Cybersecurity Projects
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-gray-400">
          Hands-on technical projects demonstrating cybersecurity awareness,
          OSINT concepts, web development, version control, and deployment.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {project.featured && (
                <div className="absolute right-5 top-5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  Featured Project
                </div>
              )}

              <div className="pr-16">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                  Security Project
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>

              <p className="mt-5 flex-grow leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.liveUrl.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
                >
                  Live Demo →
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-4 py-2 text-sm font-semibold text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
                >
                  GitHub Repository →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-gray-800 bg-gray-900/20 p-6 text-center">
          <p className="text-gray-400">
            Future projects will include phishing analysis, Active Directory,
            Splunk investigations, and Wazuh monitoring.
          </p>
        </div>
      </div>
    </section>
  );
}