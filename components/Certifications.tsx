const certifications = [
  {
    name: "eJPTv2",
    issuer: "INE • Certification",
    type: "Certification",
    icon: "🎯",
    verifyUrl:
      "https://certs.ine.com/2b36714c-0c67-4d6f-a52f-c6321ffaf944#acc.S7RVxqEs",
    skills: [
      "Network Enumeration",
      "Vulnerability Assessment",
      "Web Application Testing",
      "Exploitation",
      "Privilege Escalation",
      "Metasploit",
      "Burp Suite",
      "Nmap",
    ],
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google • Professional Certificate",
    type: "Certificate",
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
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google • Professional Certificate",
    type: "Certificate",
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
    name: "Practical Help Desk",
    issuer: "TCM Security • Practical Training",
    type: "Training",
    icon: "🖥️",
    certificateImage: "/certificates/practical-help-desk.JPG",
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
    name: "Open-Source Intelligence (OSINT)",
    issuer: "TCM Security • Practical Training",
    type: "Training",
    icon: "🔎",
    certificateImage: "/certificates/osint.JPG",
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
    name: "Network+ Training",
    issuer: "ITPro • Networking Training",
    type: "Training",
    icon: "🌐",
    certificateImage: "/certificates/network-plus.JPG",
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
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          🏆 Certifications & Training
        </p>

        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Professional Certifications & Training
        </h2>

        <p className="mb-12 max-w-3xl leading-7 text-gray-400">
          Certifications and hands-on training across cybersecurity, IT
          support, networking, offensive security, OSINT, and security
          operations.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{cert.icon}</div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-cyan-400">
                    {cert.type}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {cert.name}
                  </h3>

                  <p className="mt-1 text-gray-400">
                    {cert.issuer}
                  </p>
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
                    className="inline-flex items-center rounded-lg border border-cyan-500 px-4 py-2 text-sm font-medium text-cyan-400 transition duration-300 hover:bg-cyan-500 hover:text-black"
                  >
                    Verify Credential →
                  </a>
                )}

                {cert.certificateImage && (
                  <a
                    href={cert.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg border border-purple-500 px-4 py-2 text-sm font-medium text-purple-400 transition duration-300 hover:bg-purple-500 hover:text-black"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}