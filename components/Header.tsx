"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = element.offsetTop - 80 // Account for header height
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  const NavLink = ({ href, children }) => {
    const sectionId = href.replace("#", "")
    return (
      <a
        href={href}
        onClick={(e) => scrollToSection(e, sectionId)}
        className="block text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        {children}
      </a>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-3 border-b-2 border-cyan-400">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-cyan-400">
            AK
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#awards">Awards</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <button className="md:hidden text-cyan-400" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#awards">Awards</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

