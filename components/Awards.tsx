import { ExternalLink } from "lucide-react"

export default function Awards() {
  const awards = [
    {
      title: "1st place in Capture The Flag event",
      organization: "Toyota Tsusho Systems US & India",
      date: "February 2024",
      link: "https://www.linkedin.com/posts/codeavi_hey-everyone-just-to-let-you-know-i-have-activity-7168432146641080320-RyvS",
    },
    {
      title: "1st place in Impact-o-thon Hackathon",
      organization: "IIIT Delhi ESummit 2024",
      date: "March 2024",
      link: "https://www.linkedin.com/posts/codeavi_impactathon-sustainability-sdgs-activity-7176241712309186560-4CXf",
    },
    {
      title: "Fellow for APNIC 58",
      description: "Completed training in Network Security in Wellington, New Zealand",
      date: "August 2024",
      link: "https://conference.apnic.net/58/fellowship/fellows/index.html",
    },
    {
      title: "NextGen Fellow for ICANN 81",
      description: "Presented on DNS Security in Istanbul, Turkey",
      date: "November 2024",
      link: "https://www.icann.org/en/announcements/details/icann-announces-nextgenicann81-participants-15-07-2024-en",
    },
    {
      title: "Travel Grant Recipient",
      organization: "Apache Software Foundation",
      description: "Attended Community Over Code Asia 2024 in Hangzhou, China",
      date: "July 2024",
    },
    {
      title: "Google Developer Student Club Lead",
      description: "Representing My University on a global stage",
    },
    {
      title: "Delegate",
      organization: "Harvard Project for Asian and International Relations",
      date: "January 2023",
    },
  ]

  const certifications = [
    {
      name: "Google Cybersecurity Specialization",
      details:
        "Network security, threat detection and response, vulnerability assessment, risk management, Python automation, Linux, SQL, and cybersecurity job preparation.",
      link: "https://coursera.org/share/4e20b07ef5ea162e461fd0f7290ef48d",
    },
    {
      name: "Google Cloud Platform Skill Badges",
      details: "BigQuery, Kubernetes, Data Engineering, Cloud Run, Firebase, DevOps.",
      link: "https://www.cloudskillsboost.google/public_profiles/e69c7997-a1f0-4350-b268-a4a50549e464",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      details: "Azure, Cloud Networking, Cloud Security, Cloud Storage, Virtualization",
      link: "https://www.credly.com/badges/626ef5cb-f652-4c37-9415-bbc2821b0960/linked_in_profile",
    },
    {
      name: "CS406: Information Security",
      details: "Network security, Threat modeling, Security protocols, Vulnerability assessment",
      link: "https://learn.saylor.org/admin/tool/certificate/index.php?code=9948282426AK",
    },
  ]

  return (
    <section id="awards" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Honors, Awards & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Honors & Awards</h3>
            <ul className="space-y-4">
              {awards.map((award, index) => (
                <li key={index} className="border-l-2 border-cyan-400 pl-4">
                  <h4 className="font-semibold">
                    {award.link ? (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 flex items-center"
                      >
                        {award.title}
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    ) : (
                      award.title
                    )}
                  </h4>
                  {award.organization && <p className="text-sm text-gray-300">{award.organization}</p>}
                  {award.description && <p className="text-sm text-gray-400">{award.description}</p>}
                  {award.date && <p className="text-xs text-gray-500">{award.date}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="border-l-2 border-cyan-400 pl-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center"
                  >
                    {cert.name}
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                  <p className="text-sm text-gray-300">{cert.details}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

