import {
  FaShieldAlt,
  FaNetworkWired,
  FaLinux,
  FaWindows,
  FaPython,
  FaMicrosoft,
} from "react-icons/fa";

import { SiWireshark } from "react-icons/si";

import { MdAdminPanelSettings } from "react-icons/md";

const skills = [
  { name: "Cybersecurity", icon: <FaShieldAlt /> },
  { name: "Networking", icon: <FaNetworkWired /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Windows Server", icon: <FaWindows /> },
  { name: "Active Directory", icon: <MdAdminPanelSettings /> },
  { name: "Azure", icon: <FaMicrosoft /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Wireshark", icon: <SiWireshark /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Technologies I Work With
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="text-4xl text-cyan-400">
                {skill.icon}
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}