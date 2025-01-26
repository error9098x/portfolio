"use client"

import { Github, Linkedin, Mail, BookOpen } from "lucide-react"
import Image from "next/image"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"
import type { Engine } from "tsparticles-engine"

const iconData = [
  { href: "https://github.com/error9098x", icon: <Github size={24} />, label: "Github" },
  { href: "https://www.linkedin.com/in/codeavi", icon: <Linkedin size={24} />, label: "LinkedIn" },
  { href: "https://avijourney.vercel.app/", icon: <BookOpen size={24} />, label: "Blog" },
  { href: "mailto:procodecavi@gmail.com", icon: <Mail size={24} />, label: "Contact me" },
]

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section className="h-screen flex items-center justify-center relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#00FFFF",
            },
            links: {
              color: "#00FFFF",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10 text-center px-4">
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-400 overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XcHSxtvMeUD0T1eQ8NLjc6JJDx8gBD.png"
              alt="Aviral Kaintura"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-cyan-400">Aviral Kaintura</h1>
        <p className="text-lg sm:text-xl mb-8 hover-glow">Cybersecurity & AI Enthusiast | Computer Science Student</p>
        <div className="flex justify-center space-x-6 relative">
          {iconData.map((item, index) => (
            <div key={index} className="group relative pb-8">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors hover-glow"
              >
                {item.icon}
              </a>
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-24 text-center left-1/2 -translate-x-1/2 mt-2">
                <div className="relative">
                  <div className="bg-gray-800 text-cyan-400 px-2 py-1 rounded text-sm whitespace-nowrap">
                    {item.label}
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-gray-800 transform rotate-45"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

