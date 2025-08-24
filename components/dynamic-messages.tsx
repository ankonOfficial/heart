"use client"

import { useState, useEffect } from "react"

const messages = [
  "My love for you is infinite, like the digits of π...",
  "You are the solution to every equation in my heart.",
  "In the geometry of love, you are my perfect constant.",
  "Our love story is written in parametric equations...",
  "You make my heart graph exponentially with joy.",
  "Every heartbeat follows the rhythm of sine waves.",
  "You are the x to my y, completing every coordinate.",
  "My love for you grows like a mathematical sequence.",
  "In the calculus of life, you are my derivative of happiness.",
  "You are the golden ratio of my existence.",
  "My favorite place in all dimensions is right next to you.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "Every love story is beautiful, but ours is my favorite.",
  "You are my today and all of my tomorrows.",
  "I didn't choose to fall in love with you; my heart did.",
  "I am completely, utterly, and irrevocably in love with you.",
  "You are the best thing that's ever been mine.",
  "Your smile is my favorite part of the day.",
]

export function DynamicMessages() {
  const [currentMessage, setCurrentMessage] = useState("")
  const [messageIndex, setMessageIndex] = useState(0)
  const [showLoveLetter, setShowLoveLetter] = useState(false)

  const typeMessage = (text: string) => {
    setCurrentMessage("")
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setCurrentMessage((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 40)
  }

  useEffect(() => {
    if (!showLoveLetter) {
      typeMessage(messages[messageIndex])
      const interval = setInterval(() => {
        setMessageIndex((prev) => (prev + 1) % messages.length)
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [messageIndex, showLoveLetter])

  useEffect(() => {
    if (!showLoveLetter) {
      typeMessage(messages[messageIndex])
    }
  }, [messageIndex, showLoveLetter])

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full text-left p-6">
        {!showLoveLetter ? (
          <p className="text-center text-gray-700 mb-6 px-4 font-serif italic text-lg h-24 sm:h-auto overflow-hidden transition-opacity duration-1000">
            {currentMessage}
          </p>
        ) : (
          <div className="ui-panel p-6">
            <h2 className="text-xl font-bold text-pink-500 mb-4">A Little Love Letter for You</h2>
            <p className="text-gray-700 font-serif leading-relaxed">
              My dearest love,
              <br />
              <br />
              Words cannot fully express how much you mean to me. You are the sun in my day, the moon in my night, and
              the stars in my sky. My love for you is as infinite as the digits of pi, and as constant as a mathematical
              truth. Every moment with you is a gift, a beautiful discovery that makes my heart beat faster. You are the
              missing piece I never knew I was looking for, the solution to every equation in my heart. Thank you for
              being you, for your kindness, your laughter, and your boundless love. You make my world a better place
              just by being in it. <br />
              <br />
              Forever and always,
              <br />
              Your loving partner ❤️
            </p>
          </div>
        )}
      </div>

      <button onClick={() => setShowLoveLetter(!showLoveLetter)} className="main-button text-sm mt-4">
        {showLoveLetter ? "Show Random Messages" : "Show Love Letter"}
      </button>
    </div>
  )
}
