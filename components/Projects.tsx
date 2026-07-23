const projects = [
  {
    title: "Splunk SOC Incident Investigation",
    description:
      "Investigated a simulated Windows account compromise in Splunk, identified brute-force and unauthorized RDP activity, reconstructed the attack timeline, mapped findings to MITRE ATT&CK, and documented containment recommendations.",
    tags: [
      "Splunk",
      "SPL",
      "SOC Investigation",
      "Windows Security",
      "Incident Response",
      "MITRE ATT&CK",
    ],
    liveUrl: "https://github.com/Cyb3rgh/splunk-soc-investigation",
    githubUrl: "https://github.com/Cyb3rgh/splunk-soc-investigation",
    liveLabel: "View Case Study",
  },
  {
    title: "Phishing URL Analyzer",
    description:
      "Built a defensive phishing-analysis tool that combines local structural URL inspection with live VirusTotal threat intelligence, risk scoring, report caching, and API quota protection.",
    tags: [
      "Next.js",
      "TypeScript",
      "Phishing Analysis",
      "VirusTotal API",
      "Threat Intelligence",
      "Defensive Security",
    ],
    liveUrl: "https://phishing-url-analyzer-three.vercel.app",
    githubUrl: "https://github.com/Cyb3rgh/phishing-url-analyzer",
    liveLabel: "Live Demo",
  },
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
    liveLabel: "Live Demo",
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
    liveLabel: "Live Website",
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
          Hands-on projects demonstrating SOC investigation, threat
          intelligence, incident response, OSINT, secure web development,
          version control, and deployment.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const isExternalLink = project.liveUrl.startsWith("http");

            return (
              <article
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div>
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
                    target={isExternalLink ? "_blank" : undefined}
                    rel={isExternalLink ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
                  >
                    {project.liveLabel} &rarr;
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-4 py-2 text-sm font-semibold text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
                  >
                    GitHub Repository &rarr;
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-gray-800 bg-gray-900/20 p-6 text-center">
          <p className="text-gray-400">
            Future projects will include Active Directory security labs, Wazuh
            monitoring, additional Splunk investigations, and SOC case studies.
          </p>
        </div>
      </div>
    </section>
  );
}