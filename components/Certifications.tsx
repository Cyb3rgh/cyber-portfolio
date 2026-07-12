const certifications = [
  {
    name: "eJPTv2",
    issuer: "INE • Penetration Testing",
    icon: "🎯",
    verifyUrl:
      "https://certs.ine.com/2b36714c-0c67-4d6f-a52f-c6321ffaf944#acc.S7RVxqEs",
    skills: [
      "Network Enumeration",
      "Vulnerability Assessment",
      "Web App Testing",
      "Exploitation",
      "Privilege Escalation",
      "Metasploit",
      "Burp Suite",
      "Nmap",
    ],
  },
  {
    name: "Practical Help Desk",
    issuer: "TCM Security • IT Support",
    icon: "🖥️",
    certificateImage: "/certificates/practical-help-desk.jpg",
    skills: [
      "Windows Troubleshooting",
      "Ticket Management",
      "Customer Support",
      "Remote Support",
      "Documentation",
      "Hardware Diagnostics",
      "IT Operations",
    ],
  },
  {
    name: "Network+",
    issuer: "ITPro • Networking",
    icon: "🌐",
    certificateImage: "/certificates/network-plus.jpg",
    skills: [
      "TCP/IP",
      "Routing",
      "Switching",
      "DNS",
      "DHCP",
      "VLANs",
      "Subnetting",
      "Network Security",
    ],
  },
  {
    name: "OSINT",
    issuer: "TCM Security • Intelligence Gathering",
    icon: "🔎",
    certificateImage: "/certificates/osint.jpg",
    skills: [
      "Open Source Intelligence",
      "Reconnaissance",
      "Metadata Analysis",
      "Search Operators",
      "Infrastructure Discovery",
      "Digital Footprinting",
    ],
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google • IT Support",
    icon: "💻",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/32TZHA3ZWGKC",
    skills: [
      "Technical Support",
      "System Administration",
      "Windows",
      "Linux",
      "Networking",
      "Troubleshooting",
      "Active Directory",
    ],
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google • Cybersecurity",
    icon: "🛡️",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/WVQ882LLFLDY",
    skills: [
      "SIEM",
      "Incident Response",
      "Linux",
      "SQL",
      "Python",
      "Threat Analysis",
      "Network Security",
      "Risk Management",
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Certifications
        </p>

        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Professional Certifications
        </h2>

        <p className="mb-12 max-w-3xl text-gray-400">
          Completed certifications and hands-on training across IT support,
          networking, offensive security, OSINT, and cybersecurity operations.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">{cert.icon}</div>

                <div>
                  <h3 className="text-2xl font-semibold">{cert.name}</h3>
                  <p className="text-cyan-400">{cert.issuer}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-lg border border-cyan-500 px-4 py-2 text-sm font-medium text-cyan-400 transition duration-300 hover:bg-cyan-500 hover:text-black"
                  >
                    Verify Credential →
                  </a>
                )}

                {cert.certificateImage && (
                  <a
                    href={cert.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-lg border border-purple-500 px-4 py-2 text-sm font-medium text-purple-400 transition duration-300 hover:bg-purple-500 hover:text-black"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}