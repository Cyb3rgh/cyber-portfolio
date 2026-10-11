const projects = [
  {
    title: "Microsoft 365 Enterprise Administration & Security Lab",
    category: "Microsoft 365 / Cloud Security",
    description:
      "Built a cloud-only Microsoft 365 Business Premium lab covering identity, endpoint management, collaboration, security, automation, and IT support workflows. Implemented Entra ID, Intune, Conditional Access, Defender for Business, MFA, compliance policies, security baselines, application deployment, Windows Update management, and Microsoft Graph PowerShell reporting.",
    tags: [
      "Microsoft 365",
      "Entra ID",
      "Intune",
      "Defender for Business",
      "Conditional Access",
      "Microsoft Graph",
      "PowerShell",
      "Endpoint Security",
    ],
    liveUrl:
      "https://github.com/Cyb3rgh/Microsoft-365-Enterprise-Security-Lab",
    liveLabel: "View Project",
  },
  {
    title: "CyberLab Enterprise — Active Directory & Splunk",
    category: "Enterprise Security Lab",
    description:
      "Built an isolated enterprise environment with Windows Server 2022, Active Directory, Group Policy, Windows auditing, PowerShell logging, centralized event monitoring with Splunk Enterprise, and Kali Linux for controlled security validation.",
    tags: [
      "Windows Server 2022",
      "Active Directory",
      "Group Policy",
      "Splunk Enterprise",
      "PowerShell Logging",
      "Windows Security",
      "Kali Linux",
    ],
    liveUrl: "https://github.com/Cyb3rgh/CyberLab-Enterprise",
    liveLabel: "View on GitHub",
  },
  {
    title: "Splunk SOC Incident Investigation",
    category: "SOC / Incident Investigation",
    description:
      "Investigated a simulated Windows account compromise using Splunk, identified brute-force attempts and unauthorized RDP activity, reconstructed the attack timeline, mapped findings to MITRE ATT&CK, and documented containment recommendations.",
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
    title: "Wazuh SIEM Detection Lab",
    category: "SIEM / Threat Detection",
    description:
      "Deployed a Wazuh SIEM environment with a Windows endpoint, configured File Integrity Monitoring, created and validated a custom detection rule, and built dashboards to investigate generated security events and alerts.",
    tags: [
      "Wazuh",
      "SIEM",
      "File Integrity Monitoring",
      "Windows Server",
      "Custom Detection Rules",
      "Security Monitoring",
    ],
    liveUrl:
      "https://github.com/Cyb3rgh/wazuh-siem-detection-lab/blob/main/Fayyad-Dahweesh-Wazuh-SIEM-Project-Report.pdf",
    githubUrl: "https://github.com/Cyb3rgh/wazuh-siem-detection-lab",
    liveLabel: "View PDF Report",
  },
  {
    title: "Phishing URL Analyzer",
    category: "Defensive Security Tool",
    description:
      "Built a defensive phishing-analysis application combining local URL inspection with live VirusTotal threat intelligence, automated risk scoring, report caching, and API quota protection.",
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
    category: "OSINT / Intelligence",
    description:
      "Built an interactive OSINT dashboard displaying GeoIP intelligence, browser and device information, ISP and ASN data, privacy indicators, and a basic security posture assessment.",
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
    category: "Web Development / Personal Branding",
    description:
      "Designed and deployed a responsive technical portfolio to showcase IT support experience, Microsoft 365 administration, cybersecurity projects, certifications, technical skills, and hands-on lab documentation.",
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
          Practical IT & Cybersecurity Projects
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-gray-400">
          Hands-on projects demonstrating Microsoft 365 administration,
          enterprise IT, identity and endpoint security, SIEM monitoring,
          incident investigation, threat detection, automation, OSINT, and
          defensive security.
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
                    {project.category}
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

                  {project.githubUrl &&
                    project.githubUrl !== project.liveUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-4 py-2 text-sm font-semibold text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
                      >
                        GitHub Repository &rarr;
                      </a>
                    )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}