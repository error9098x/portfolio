export default function Awards() {
  const awards = [
    "1st place in the Capture The Flag event organized by Toyota Tsusho Systems US & India - February 2024",
    "1st place in the Impact-o-thon Hackathon at IIIT Delhi during ESummit 2024 - March 2024",
    "Selected as Google Developer Student Club Lead",
    "Selected as Delegate for the Harvard Project for Asian and International Relations - January 2023",
  ]

  const certifications = [
    {
      name: "Google Cloud Platform Skill Badges",
      details: "BigQuery, Kubernetes, Data Engineering, Cloud Run, Firebase, DevOps",
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
            <h3 className="text-2xl font-semibold mb-4">Awards</h3>
            <ul className="list-disc list-inside space-y-2">
              {awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    {cert.name}
                  </a>
                  <p className="text-sm text-gray-400">{cert.details}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

