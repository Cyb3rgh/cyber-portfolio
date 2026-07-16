import TryHackMe from "@/components/TryHackMe";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <TryHackMe />
      <Skills />
      <Certifications />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}