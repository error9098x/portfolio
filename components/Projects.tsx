import { ExternalLink, Github, FileText, Mail } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "SentryAgent: AI-Driven Multi-Agent Threat Intelligence Platform",
      description:
        "A comprehensive security intelligence system leveraging autonomous AI agents to monitor, analyze, and respond to cybersecurity threats in real-time through coordinated threat detection workflows.",
      tech: "Next.js, TypeScript, React, ThreatFox API, NVD API, IP Geolocation Services",
      github: "https://github.com/error9098x/Threal-Intelligence",
      details: [
        "Real-time CVE Monitoring - Tracks vulnerabilities with automated severity assessment and intelligent prioritization using AI agents",
        "Multi-Agent Architecture - Specialized autonomous agents for IP threat analysis, IOC collection, and threat correlation working in coordination",
        "Resilient Intelligence Pipeline - Built-in caching, fallback mechanisms, and real-time data processing for uninterrupted threat monitoring",
      ],
    },
    {
      title: "AI-Powered Real-Time DNS Threat Detection Using LLM",
      description:
        "Developed a real-time DNS monitoring system with AI-powered threat detection, including domain risk assessment, rate limiting, and suspicious pattern detection.",
      tech: "FastAPI, Scapy, OpenAI GPT, WebSocket",
      github: "https://github.com/error9098x/Network-Analysis-using-LLMs",
      dissertation:
        "https://raw.githubusercontent.com/error9098x/Network-Analysis-using-LLMs/main/docs/Dissertation.pdf",
      demo: null,
      details: [
        "Presented on DNS Security and AI Potential at the ICANN 81 Conference in Turkey as a NextGen participant.",
        "Defended as a Minor Project and authored a dissertation.",
      ],
    },
    {
      title: "Planetary Tourism Office",
      description:
        "An interactive space travel website that allows users to explore planets, plan virtual space travel itineraries, and learn about our solar system.",
      tech: "React, Vite, TailwindCSS, Three.js, Flask, Custom AI, NASA API",
      github: "https://github.com/error9098x/Planet_Tourism_Office",
      demo: "https://tourismoffice.vercel.app/",
      email: "provantablack@gmail.com",
      details: [
        "Interactive 3D models of planets using Three.js",
        "Integration with NASA API for real-time planetary data",
        "Custom AI for personalized space travel recommendations",
        "Responsive design with immersive user experience",
      ],
    },
    {
      title: "Skin Lesion Image Classification",
      description: "Used deep learning models to classify skin lesions with 93% accuracy.",
      tech: "TensorFlow, PyTorch, FastAI, Gradio, HuggingFace",
      github: "https://github.com/error9098x/Skin-Lesion-Classification",
      demo: null,
      details: [
        "Leveraged ISIC dataset to train ResNet152, VGG19, DenseNet201, SqueezeNet1.1 models.",
        "Evaluated models using ROC curves, precision-recall curves, confusion matrices.",
        "Included a Hugging Face demo for user-friendly model testing.",
      ],
    },
    {
      title: "The Green Footprint",
      description:
        "A sustainability platform leveraging AI for energy consumption analysis and product sustainability scoring.",
      tech: "HTML5, CSS3, JavaScript, Python, Streamlit, TensorFlow.js, Pandas, NumPy, Matplotlib, Gemini, BERT",
      github: "https://github.com/Trident09/SDG-SustainX",
      demo: "https://thegreenfootprint.vercel.app/",
      details: [
        "Energy Consumption Analysis: Personalized dashboard to identify inefficient energy use.",
        "Amazon Product Sustainability Score: AI-driven scoring system for analyzing product sustainability.",
        "Brand Sustainability Profiles: Compiles data on corporate sustainability practices.",
        "Waste Classification Guide: Custom CNN to assist users with waste sorting and disposal.",
      ],
    },
    {
      title: "Ruby URL Shortener",
      description: "A simple and efficient URL shortener built with Ruby and Sinatra.",
      tech: "Ruby 2.7+, Sinatra, PStore, HTML/CSS, daisyUI",
      github: "https://github.com/error9098x/RubyURLShortner",
      demo: null,
      details: [
        "Unique shortened links with customizable link length",
        "Easy sharing and simple, clean interface",
        "Flexible deployment options",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="text-sm text-cyan-300 mb-4">{project.tech}</p>
              {project.details && (
                <ul className="list-disc list-inside mb-4">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-300">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                >
                  <Github size={16} className="mr-1" />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                )}
                {project.email && (
                  <a
                    href={`mailto:${project.email}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                  >
                    <Mail size={16} className="mr-1" />
                    Contact
                  </a>
                )}
                {project.dissertation && (
                  <a
                    href={project.dissertation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                  >
                    <FileText size={16} className="mr-1" />
                    Dissertation
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

