"use client"

import { useState } from "react"

export function SaveButtons() {
  const [saveFormat, setSaveFormat] = useState<"png" | "jpg" | "svg">("png")
  const [customFilename, setCustomFilename] = useState("")
  const [showOptions, setShowOptions] = useState(false)

  const saveHeart = () => {
    const canvas = document.querySelector("canvas") as HTMLCanvasElement
    if (canvas) {
      const link = document.createElement("a")
      const filename = customFilename || "my-mathematical-heart"

      if (saveFormat === "svg") {
        // For SVG, we'd need to recreate the heart as SVG (simplified for now)
        link.download = `${filename}.svg`
        link.href = canvas.toDataURL("image/png") // Fallback to PNG for now
      } else {
        const mimeType = saveFormat === "jpg" ? "image/jpeg" : "image/png"
        link.download = `${filename}.${saveFormat}`
        link.href = canvas.toDataURL(mimeType, 0.9)
      }
      link.click()
    }
  }

  const shareToSocial = (platform: string) => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent("Check out this beautiful mathematical heart! 💖")

    let shareUrl = ""
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
        break
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${text}%20${url}`
        break
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }
  }

  return (
    <div className="fixed top-8 right-8 z-50">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
          title="Save options"
        >
          <i className="fas fa-download"></i> Save Heart
        </button>

        {showOptions && (
          <div className="bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl border">
            <div className="mb-3">
              <label className="block text-xs font-medium text-gray-700 mb-1">Filename:</label>
              <input
                type="text"
                value={customFilename}
                onChange={(e) => setCustomFilename(e.target.value)}
                placeholder="my-mathematical-heart"
                className="w-full px-2 py-1 text-sm border rounded"
              />
            </div>

            <div className="mb-3">
              <label className="block text-xs font-medium text-gray-700 mb-1">Format:</label>
              <select
                value={saveFormat}
                onChange={(e) => setSaveFormat(e.target.value as "png" | "jpg" | "svg")}
                className="w-full px-2 py-1 text-sm border rounded"
              >
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="svg">SVG</option>
              </select>
            </div>

            <button
              onClick={saveHeart}
              className="w-full bg-pink-500 text-white px-3 py-2 rounded text-sm hover:bg-pink-600 transition-colors mb-3"
            >
              <i className="fas fa-download mr-1"></i> Download
            </button>

            <div className="border-t pt-3">
              <p className="text-xs text-gray-600 mb-2">Share:</p>
              <div className="flex gap-2">
                <button
                  onClick={() => shareToSocial("twitter")}
                  className="flex-1 bg-blue-400 text-white px-2 py-1 rounded text-xs hover:bg-blue-500"
                  title="Share on Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  onClick={() => shareToSocial("facebook")}
                  className="flex-1 bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700"
                  title="Share on Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </button>
                <button
                  onClick={() => shareToSocial("whatsapp")}
                  className="flex-1 bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600"
                  title="Share on WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
