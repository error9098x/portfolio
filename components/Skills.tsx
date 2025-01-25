import { FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaGitAlt, FaLinux, FaAws, FaMicrosoft } from "react-icons/fa"
import { DiCssdeck } from "react-icons/di"
import {
  SiCplusplus,
  SiRuby,
  SiDart,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiVuedotjs,
  SiFlutter,
  SiUnity,
  SiFigma,
  SiAdobephotoshop,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiGooglecloud,
} from "react-icons/si"
import { FaCode, FaTools, FaLaptopCode, FaServer, FaUserTie } from "react-icons/fa"

export default function Skills() {
  const skills = {
    Languages: [
      { name: "Python", icon: <FaPython /> },
      { name: "C#", icon: <DiCssdeck /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Ruby", icon: <SiRuby /> },
      { name: "Dart", icon: <SiDart /> },
    ],
    Frameworks: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "Flutter", icon: <SiFlutter /> },
    ],
    Tools: [
      { name: "Unity", icon: <SiUnity /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQLite", icon: <SiSqlite /> },
    ],
    Platforms: [
      { name: "Linux", icon: <FaLinux /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
      { name: "Azure", icon: <FaMicrosoft /> },
      { name: "AWS", icon: <FaAws /> },
    ],
    "Soft Skills": [
      "Leadership",
      "Collaboration",
      "Adaptability",
      "Event Management",
      "Writing",
      "Public Speaking",
      "Time Management",
    ],
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                {category === "Languages" && <FaCode className="mr-2 text-cyan-400" />}
                {category === "Frameworks" && <FaLaptopCode className="mr-2 text-cyan-400" />}
                {category === "Tools" && <FaTools className="mr-2 text-cyan-400" />}
                {category === "Platforms" && <FaServer className="mr-2 text-cyan-400" />}
                {category === "Soft Skills" && <FaUserTie className="mr-2 text-cyan-400" />}
                {category}
              </h3>
              <ul className="space-y-2">
                {Array.isArray(skillList)
                  ? skillList.map((skill, index) => (
                      <li key={index} className="flex items-center space-x-2 hover-glow">
                        {skill.icon && <span className="text-cyan-400">{skill.icon}</span>}
                        <span>{skill.name || skill}</span>
                      </li>
                    ))
                  : Object.entries(skillList).map(([skill, level], index) => (
                      <li key={index} className="flex items-center space-x-2 hover-glow">
                        <span>{skill}</span>
                        <span className="text-cyan-400">({level})</span>
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

