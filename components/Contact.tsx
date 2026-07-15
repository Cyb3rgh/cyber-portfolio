import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

const contacts = [
  {
    type: "Email",
    value: "Fayyad.dh95@gmail.com",
    icon: <FaEnvelope className="text-4xl text-red-400" />,
    link: "mailto:Fayyad.dh95@gmail.com",
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/fayyaddahweesh",
    icon: <FaLinkedin className="text-4xl text-blue-500" />,
    link: "https://www.linkedin.com/in/fayyaddahweesh/",
  },
  {
    type: "GitHub",
    value: "github.com/Cyb3rgh",
    icon: <FaGithub className="text-4xl text-white" />,
    link: "https://github.com/Cyb3rgh",
  },
  {
    type: "Resume",
    value: "View Resume",
    icon: <FaFilePdf className="text-4xl text-red-500" />,
    link: "/Fayyad_Dahweesh_Technical_Support.pdf",
  },
  {
    type: "WhatsApp",
    value: "+961 71 70 66 12",
    icon: <FaWhatsapp className="text-4xl text-green-500" />,
    link: "https://wa.me/96171706612",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          📬 Contact
        </p>

        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Let's Connect
        </h2>

        <p className="mb-12 max-w-3xl text-gray-400">
          Open to IT Support, Technical Support, and Cybersecurity opportunities.
          Feel free to reach out through any of the channels below.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.type}
              href={contact.link}
              target={
                contact.type === "Email"
                  ? undefined
                  : "_blank"
              }
              rel={
                contact.type === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div>{contact.icon}</div>

              <h3 className="mt-4 text-xl font-semibold">
                {contact.type}
              </h3>

              <p className="mt-2 text-gray-400">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}