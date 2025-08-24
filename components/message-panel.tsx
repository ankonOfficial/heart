"use client"

import type React from "react"

import { useState } from "react"

interface MessagePanelProps {
  show: boolean
  onClose: () => void
}

export function MessagePanel({ show, onClose }: MessagePanelProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <div
        className={`fixed bottom-0 right-4 w-11/12 max-w-md bg-white/90 backdrop-blur-md rounded-t-2xl p-6 shadow-2xl transition-transform duration-500 z-40 ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <svg className="h-16 w-16 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
          <p className="text-gray-600">Thanks for reaching out, Ankon will receive your message.</p>
          <button onClick={onClose} className="control-button w-full mt-4 bg-gray-600 hover:bg-gray-700">
            <i className="fas fa-times mr-1"></i> Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`fixed bottom-0 right-4 w-11/12 max-w-md bg-white/90 backdrop-blur-md rounded-t-2xl p-6 shadow-2xl transition-transform duration-500 z-40 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <h2 className="text-lg font-bold mb-4 text-center text-pink-500">
        <i className="fas fa-envelope mr-2"></i>Send a Message to Ankon
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Full Name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message here..."
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform disabled:opacity-50 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <h3 className="text-md font-semibold text-pink-500">Or Connect with Me</h3>
        <ul className="text-gray-600 text-sm mt-2 space-y-1">
          <li className="flex items-center justify-center gap-2">
            <i className="fas fa-envelope text-pink-400"></i>
            <a href="mailto:ankondasgourab@gmail.com" className="hover:underline">
              ankondasgourab@gmail.com
            </a>
          </li>
          <li className="flex items-center justify-center gap-2">
            <i className="fab fa-linkedin text-pink-400"></i>
            <a
              href="https://linkedin.com/in/ankonofficial"
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
            >
              /in/ankonofficial
            </a>
          </li>
          <li className="flex items-center justify-center gap-2">
            <i className="fab fa-github text-pink-400"></i>
            <a href="https://github.com/ankonOfficial" target="_blank" className="hover:underline" rel="noreferrer">
              /ankonOfficial
            </a>
          </li>
        </ul>
      </div>

      <button onClick={onClose} className="control-button w-full mt-4 bg-gray-600 hover:bg-gray-700">
        <i className="fas fa-times mr-1"></i> Close
      </button>
    </div>
  )
}
