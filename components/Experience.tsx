export default function Experience() {
  const experiences = [
    {
      title: "Data Science/AI Intern",
      company: "IFAD (International Fund for Agricultural Development)",
      date: "August 2024 - Present",
      description: "Conducted evaluations, developed LLM applications, and implemented data automation strategies.",
    },
    {
      title: "Open Source Contributor",
      company: "GSOC UC Open Source Program Office",
      date: "May 2024 - August 2024",
      description:
        "Developed a chat assistant for OpenROAD, curated datasets, and collaborated with research teams at NYU and ASU.",
    },
    {
      title: "CyberSecurity Intern",
      company: "Bhumi iTech Pvt. Ltd",
      date: "May 2023 - July 2023",
      description:
        "Conducted research on SOAR technology, developed PoC, and integrated SOAR platform with security tools.",
    },
    {
      title: "Section Leader",
      company: "Code In Place - Stanford University",
      date: "May 2023 - June 2023",
      description: "Taught Python programming to 10+ students and provided guidance on project development.",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-cyan-400 pl-4">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-cyan-300">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

