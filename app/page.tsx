import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Publications from "@/components/Publications"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Awards from "@/components/Awards"
import VolunteerExperience from "@/components/VolunteerExperience"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Publications />
      <Projects />
      <Skills />
      <Awards />
      <VolunteerExperience />
      <Contact />
    </main>
  )
}

