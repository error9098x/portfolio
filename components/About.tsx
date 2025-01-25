export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            I'm a Computer Science and Cybersecurity student at National Forensic Sciences University, New Delhi. My
            passion lies in the intersection of AI and cybersecurity, where I'm constantly exploring innovative ways to
            enhance digital security through advanced technologies.
          </p>
          <p className="text-lg mb-6">
            With a strong foundation in programming, data science, and security principles, I'm dedicated to
            contributing to the ever-evolving field of technology and making a positive impact in the digital world.
          </p>
          <p className="text-lg">
            I regularly share my journey and insights on my{" "}
            <a
              href="https://avijourney.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              blog
            </a>
            , where I write about my experiences in technology, cybersecurity, and artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}

