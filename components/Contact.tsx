import { FaWhatsapp } from "react-icons/fa";

const contacts = [
  {
    type: "Email",
    value: "Fayyad.dh95@gmail.com",
    icon: "📧",
    link: "mailto:Fayyad.dh95@gmail.com",
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/fayyaddahweesh",
    icon: "💼",
    link: "https://www.linkedin.com/in/fayyaddahweesh/",
  },
  {
    type: "Resume",
    value: "View Resume",
    icon: "📄",
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
          Contact
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Let's Connect
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.type}
              href={contact.link}
              target={
                contact.type === "LinkedIn" ||
                contact.type === "WhatsApp" ||
                contact.type === "Resume"
                  ? "_blank"
                  : undefined
              }
              rel={
                contact.type === "LinkedIn" ||
                contact.type === "WhatsApp" ||
                contact.type === "Resume"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
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