"use client"

import { useState, useEffect } from "react"

interface GalleryModalProps {
  show: boolean
  onClose: () => void
}

export function GalleryModal({ show, onClose }: GalleryModalProps) {
  const [savedHearts, setSavedHearts] = useState<string[]>([])

  useEffect(() => {
    // Load saved hearts from localStorage
    const saved = localStorage.getItem("savedHearts")
    if (saved) {
      setSavedHearts(JSON.parse(saved))
    }
  }, [show])

  const saveCurrentHeart = () => {
    const canvas = document.querySelector("canvas") as HTMLCanvasElement
    if (canvas) {
      const dataUrl = canvas.toDataURL("image/png")
      const newHearts = [...savedHearts, dataUrl]
      setSavedHearts(newHearts)
      localStorage.setItem("savedHearts", JSON.stringify(newHearts))
    }
  }

  const deleteHeart = (index: number) => {
    const newHearts = savedHearts.filter((_, i) => i !== index)
    setSavedHearts(newHearts)
    localStorage.setItem("savedHearts", JSON.stringify(newHearts))
  }

  const downloadHeart = (dataUrl: string, index: number) => {
    const link = document.createElement("a")
    link.href = dataUrl
    link.download = `saved-heart-${index + 1}.png`
    link.click()
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-pink-600">
            <i className="fas fa-images mr-2"></i>Heart Gallery
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="mb-4">
          <button
            onClick={saveCurrentHeart}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            <i className="fas fa-plus mr-2"></i>Save Current Heart
          </button>
        </div>

        {savedHearts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <i className="fas fa-heart text-6xl mb-4 opacity-30"></i>
            <p className="text-lg">No saved hearts yet</p>
            <p className="text-sm">Save your current heart to start your collection!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {savedHearts.map((heartUrl, index) => (
              <div key={index} className="relative group">
                <img
                  src={heartUrl || "/placeholder.svg"}
                  alt={`Saved heart ${index + 1}`}
                  className="w-full h-48 object-contain bg-gray-100 rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                  <button
                    onClick={() => downloadHeart(heartUrl, index)}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                    title="Download"
                  >
                    <i className="fas fa-download"></i>
                  </button>
                  <button
                    onClick={() => deleteHeart(index)}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                    title="Delete"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
