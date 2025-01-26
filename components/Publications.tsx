import { ExternalLink, FileAudio } from "lucide-react"

export default function Publications() {
  const publications = [
    {
      title: "ORAssistant: A Custom RAG-based Conversational Assistant for OpenROAD",
      authors: "Aviral Kaintura, Palaniappan R, Shui Song Luar, Indira Iyer Almeida",
      link: "https://arxiv.org/abs/2410.03845",
      podcastLink: "https://notebooklm.google.com/notebook/cf9fa998-508c-496d-a3fd-9f6db35af283/audio",
      abstract:
        "Open-source Electronic Design Automation (EDA) tools are rapidly transforming chip design by addressing key barriers of commercial EDA tools such as complexity, costs, and access. Recent advancements in Large Language Models (LLMs) have further enhanced efficiency in chip design by providing user assistance across a range of tasks like setup, decision-making, and flow automation. This paper introduces ORAssistant, a conversational assistant for OpenROAD, based on Retrieval-Augmented Generation (RAG). ORAssistant aims to improve the user experience for the OpenROAD flow, from RTL-GDSII by providing context-specific responses to common user queries, including installation, command usage, flow setup, and execution, in prose format. Currently, ORAssistant integrates OpenROAD, OpenROAD-flow-scripts, Yosys, OpenSTA, and KLayout. The data model is built from publicly available documentation and GitHub resources. The proposed architecture is scalable, supporting extensions to other open-source tools, operating modes, and LLM models. We use Google Gemini as the base LLM model to build and test ORAssistant. Early evaluation results of the RAG-based model show notable improvements in performance and accuracy compared to non-fine-tuned LLMs.",
    },
  ]

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Publications</h2>
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                  {pub.title}
                </a>
              </h3>
              <p className="text-gray-400 mb-2">{pub.authors}</p>
              <p className="text-sm text-gray-300 mb-4">{pub.abstract}</p>
              <div className="flex space-x-4">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center"
                >
                  <ExternalLink size={16} className="mr-1" />
                  View Publication
                </a>
                <a
                  href={pub.podcastLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center"
                >
                  <FileAudio size={16} className="mr-1" />
                  Listen to Podcast
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

