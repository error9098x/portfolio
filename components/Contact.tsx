import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">Feel free to reach out to me for any inquiries or opportunities.</p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="mr-2 text-cyan-400" />
                <a href="mailto:procodecavi@gmail.com" className="hover:text-cyan-300">
                  procodecavi@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-cyan-400" />
                <span>+91-7017-863-452</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 text-cyan-400" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
          <div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 bg-gray-700 rounded" />
              <input type="email" placeholder="Your Email" className="w-full p-2 bg-gray-700 rounded" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-2 bg-gray-700 rounded"></textarea>
              <button
                type="submit"
                className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

