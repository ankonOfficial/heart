"use client"

import { useState } from "react"

export function LoveCalculator() {
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const [result, setResult] = useState("")
  const [message, setMessage] = useState("")

  const calculateLove = () => {
    const cleanName1 = name1.toLowerCase().replace(/[^a-z]/g, "")
    const cleanName2 = name2.toLowerCase().replace(/[^a-z]/g, "")

    if (cleanName1.length === 0 || cleanName2.length === 0) {
      setResult("Please enter both names.")
      setMessage("")
      return
    }

    const loveLetters = "truelove"
    let score = 0

    for (let i = 0; i < loveLetters.length; i++) {
      const char = loveLetters[i]
      score += (cleanName1.match(new RegExp(char, "g")) || []).length
      score += (cleanName2.match(new RegExp(char, "g")) || []).length
    }

    let tempScore = score * 13
    while (tempScore > 100) {
      tempScore = Math.floor(tempScore / 2) + (tempScore % 10)
    }

    const finalScore = Math.min(100, tempScore + Math.floor(Math.random() * 20))
    let loveMessage = ""

    if (finalScore >= 80) loveMessage = "A perfect match made in the stars! Your love is a masterpiece."
    else if (finalScore >= 60) loveMessage = "A beautiful connection! There's a lot of love here to grow."
    else if (finalScore >= 40) loveMessage = "A strong bond with great potential. Keep nurturing this love!"
    else loveMessage = "A unique blend of personalities! Opposites attract, after all."

    setResult(`${finalScore}% Compatibility 😂`)
    setMessage(loveMessage)
  }

  return (
    <div className="ui-panel content-panel p-6 w-full max-w-2xl mt-8">
      <h3 className="text-lg font-semibold mb-4 text-center text-pink-600">
        <i className="fas fa-calculator mr-2"></i>Heart Equation & Love Calculator
      </h3>

      <div className="equation-display text-center bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500 mb-4">
        <div className="mb-2">
          <strong>x(t) = 16sin³(t)</strong>
        </div>
        <div>
          <strong>y(t) = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)</strong>
        </div>
      </div>

      <p className="text-sm mt-3 opacity-80 text-center mb-6">
        This parametric equation creates the perfect mathematical heart shape!
      </p>

      <div className="mt-6 flex flex-col items-center">
        <h4 className="text-md font-bold mb-2 text-pink-500">Love Compatibility Test</h4>
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          <input
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="Your Name"
            className="w-full sm:w-auto flex-grow px-4 py-2 border rounded-md text-gray-700"
          />
          <i className="fas fa-heart text-red-500"></i>
          <input
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Your Partner's Name"
            className="w-full sm:w-auto flex-grow px-4 py-2 border rounded-md text-gray-700"
          />
        </div>
        <button onClick={calculateLove} className="control-button mt-4">
          <i className="fas fa-percent mr-1"></i>Calculate Love
        </button>
        {result && (
          <>
            <p className="mt-4 text-center font-bold text-xl text-gray-800">{result}</p>
            <p className="mt-2 text-center text-sm text-gray-600">{message}</p>
          </>
        )}
      </div>
    </div>
  )
}
