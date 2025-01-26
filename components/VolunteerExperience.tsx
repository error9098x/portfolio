export default function VolunteerExperience() {
    const experiences = [
      {
        title: "APrIGF 2024 Session Organizer",
        description:
          'Organized the session "Is Asia-Pacific Ready for AI? Balancing Innovation, Ethical Governance, and Marginalized Needs" held in Taipei, Taiwan.',
        link: "https://forms.for.asia/proposal/?proposalform=NjYyMTNkNGU5MWM5NC8vMzQvLzE5MzIvLzA=",
      },
      {
        title: "IGF 2024 Session Organizer",
        description:
          'Organized the selected proposal "WS #75 An Open and Democratic Internet in the Digitization Era" held in Riyadh, Saudi Arabia.',
        link: "https://intgovforum.org/en/content/igf-2024-ws-75-an-open-and-democratic-internet-in-the-digitization-era",
      },
      {
        title: "GDSC Event Organizer",
        description:
          "As the Google Developer Student Club Lead, organized technology-focused events on web development, open source, and cloud computing, impacting over 300 students on campus.",
      },
      {
        title: "Speaker at Mathematics Workshop",
        description:
          "Presented a mathematical workshop session on Fractals as a speaker among 300+ students at IIT Madras.",
      },
      {
        title: "Open Source Contributor",
        description: "Contributed to Open Source Projects: Cloudinary, Interledger, Microsoft's Contonso.",
        links: [
          { name: "Cloudinary", url: "https://github.com/cloudinary-community/cloudinary-examples/pull/86" },
          { name: "Interledger", url: "https://github.com/interledger/rafiki/pull/1976" },
          { name: "Microsoft's Contonso", url: "https://github.com/Azure-Samples/contoso-real-estate/pull/286" },
        ],
      },
    ]
  
    return (
      <section id="volunteer" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Volunteer Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                      {exp.title}
                    </a>
                  ) : (
                    exp.title
                  )}
                </h3>
                <p className="text-gray-300 mb-2">{exp.description}</p>
                {exp.links && (
                  <div className="flex flex-wrap gap-2">
                    {exp.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cyan-400 hover:text-cyan-300 underline"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  