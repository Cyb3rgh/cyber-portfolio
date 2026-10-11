const skillGroups = [
  {
    title: "IT Support & Systems",
    context: "Professional experience",
    icon: "🖥️",
    description:
      "Supporting users, troubleshooting endpoints, and working across enterprise IT, operating systems, and network environments.",
    skills: [
      "Technical Support & Troubleshooting",
      "Windows Support",
      "Hardware & Software Support",
      "Remote & On-Site Support",
      "Networking, TCP/IP, DNS & DHCP",
      "Active Directory & Group Policy",
    ],
  },
  {
    title: "Microsoft 365 & Endpoint Management",
    context: "Administration and security labs",
    icon: "☁️",
    description:
      "Administering cloud identities, endpoints, collaboration services, and security controls across Microsoft 365 environments.",
    skills: [
      "Microsoft 365 Administration",
      "Microsoft Entra ID",
      "Microsoft Intune",
      "Conditional Access & MFA",
      "Microsoft Defender for Business",
      "Exchange Online & SharePoint",
      "OneDrive",
      "Microsoft Graph & PowerShell",
    ],
  },
  {
    title: "Security Operations",
    context: "Detection and investigation labs",
    icon: "🔐",
    description:
      "Monitoring security events, investigating endpoint activity, and working with SIEM and defensive security technologies.",
    skills: [
      "Splunk SIEM",
      "Wazuh SIEM",
      "Windows Event Analysis",
      "Endpoint Investigation",
      "PowerShell Logging",
      "Network Security",
      "MITRE ATT&CK",
    ],
  },
  {
    title: "Security Testing & Analysis",
    context: "Training and practical labs",
    icon: "🛡️",
    description:
      "Using security testing and analysis tools in controlled environments to understand vulnerabilities, attack paths, and network activity.",
    skills: [
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Kali Linux",
      "Wireshark",
      "Vulnerability Assessment",
      "OSINT & Reconnaissance",
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
          Skills developed through professional IT support, Microsoft 365
          administration, cybersecurity projects, security investigations,
          and practical technical labs.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
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