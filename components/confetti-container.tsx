"use client"

import { useEffect } from "react"

interface ConfettiContainerProps {
  enabled: boolean
}

export function ConfettiContainer({ enabled }: ConfettiContainerProps) {
  useEffect(() => {
    if (!enabled) return

    const createConfetti = () => {
      const confetti = document.createElement("div")
      confetti.className = "fixed top-0 text-2xl pointer-events-none select-none z-10"
      confetti.textContent = "❤️"
      confetti.style.left = `${Math.random() * 100}vw`
      confetti.style.animationName = "fall-and-rotate"
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`
      confetti.style.animationDelay = `${Math.random() * 1}s`
      confetti.style.animationTimingFunction = "linear"
      confetti.style.animationIterationCount = "infinite"

      document.body.appendChild(confetti)

      setTimeout(() => {
        confetti.remove()
      }, 6000)
    }

    const interval = setInterval(createConfetti, 120)
    return () => clearInterval(interval)
  }, [enabled])

  return null
}
