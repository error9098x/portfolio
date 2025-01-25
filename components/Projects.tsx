import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Skin Lesion Image Classification",
      description: "Used deep learning models to classify skin lesions with 93% accuracy.",
      tech: "TensorFlow, PyTorch, FastAI, Gradio, HuggingFace",
      github: "https://github.com/error9098x/Skin-Lesion-Classification",
      demo: null,
    },
    {
      title: "Planetary Tourism Office",
      description: "An interactive space travel website with AI-powered itinerary creation.",
      tech: "React, Vite, TailwindCSS, PALM AI",
      github: "https://github.com/error9098x/Planet_Tourism_Office",
      demo: null,
    },
    {
      title: "The Green Footprint",
      description:
        "A sustainability platform leveraging AI for energy consumption analysis and product sustainability scoring.",
      tech: "HTML5, CSS3, JavaScript, Python, Streamlit, TensorFlow.js, Pandas, NumPy, Matplotlib, Gemini, BERT",
      github: "https://github.com/Trident09/SDG-SustainX",
      demo: null,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="text-sm text-cyan-300 mb-4">{project.tech}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

