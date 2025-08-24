"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", "d7aa8b75-fcfc-4c07-9405-eb7e0bd450fe")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
      const result = await response.json()
      if (result.success) {
        setSubmitMessage("Thank you for your message. We will get back to you soon!")
        ;(event.target as HTMLFormElement).reset()
      } else {
        setSubmitMessage("There was an error submitting your message. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">Feel free to reach out to me for any inquiries or opportunities.</p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="mr-2 text-cyan-400" />
                <span>procodecavi[at]gmail[dot]com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 text-cyan-400" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-2 bg-gray-700 rounded text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-2 bg-gray-700 rounded text-white"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full p-2 bg-gray-700 rounded text-white"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitMessage && (
                <p className={`mt-2 ${submitMessage.includes("error") ? "text-red-400" : "text-green-400"}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

