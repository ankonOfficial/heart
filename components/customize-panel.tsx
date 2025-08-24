"use client"

import type React from "react"

interface CustomizePanelProps {
  show: boolean
  onClose: () => void
  heartColor: string
  onHeartColorChange: (color: string) => void
  animationSpeed: number
  onAnimationSpeedChange: (speed: number) => void
  heartSize: number
  onHeartSizeChange: (size: number) => void
  confettiEnabled: boolean
  onConfettiToggle: (enabled: boolean) => void
  stardustBackground: boolean
  onStardustToggle: (enabled: boolean) => void
  isPlaying: boolean
  onTogglePlayPause: () => void
  onReset: () => void
}

export function CustomizePanel({
  show,
  onClose,
  heartColor,
  onHeartColorChange,
  animationSpeed,
  onAnimationSpeedChange,
  heartSize,
  onHeartSizeChange,
  confettiEnabled,
  onConfettiToggle,
  stardustBackground,
  onStardustToggle,
  isPlaying,
  onTogglePlayPause,
  onReset,
}: CustomizePanelProps) {
  const colorPresets = [
    { name: "Classic Red", color: "#ff1744" },
    { name: "Pink Love", color: "#e91e63" },
    { name: "Purple Dream", color: "#9c27b0" },
    { name: "Blue Ocean", color: "#2196f3" },
    { name: "Green Nature", color: "#4caf50" },
    { name: "Golden Sunset", color: "#ff9800" },
  ]

  const applyPreset = (color: string) => {
    onHeartColorChange(color)
  }

  const exportSettings = () => {
    const settings = {
      heartColor,
      animationSpeed,
      heartSize,
      confettiEnabled,
      stardustBackground,
    }
    const blob = new Blob([JSON.stringify(settings, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "heart-settings.json"
    link.click()
    URL.revokeObjectURL(url)
  }

  const importSettings = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const settings = JSON.parse(e.target?.result as string)
          onHeartColorChange(settings.heartColor || heartColor)
          onAnimationSpeedChange(settings.animationSpeed || animationSpeed)
          onHeartSizeChange(settings.heartSize || heartSize)
          onConfettiToggle(settings.confettiEnabled ?? confettiEnabled)
          onStardustToggle(settings.stardustBackground ?? stardustBackground)
        } catch (error) {
          console.error("Failed to import settings:", error)
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div
      className={`fixed bottom-0 right-4 w-11/12 max-w-md bg-white/95 backdrop-blur-md rounded-t-2xl p-6 shadow-2xl transition-transform duration-500 z-40 max-h-[80vh] overflow-y-auto ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <h2 className="text-lg font-bold mb-4 text-center text-pink-500">
        <i className="fas fa-sliders-h mr-2"></i>Customize Your Heart
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Color Presets:</label>
          <div className="grid grid-cols-3 gap-2">
            {colorPresets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset.color)}
                className="flex items-center gap-2 p-2 rounded border hover:bg-gray-50 text-xs"
                title={preset.name}
              >
                <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: preset.color }}></div>
                <span className="truncate">{preset.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Custom Heart Color:</label>
          <input
            type="color"
            value={heartColor}
            onChange={(e) => onHeartColorChange(e.target.value)}
            className="w-full h-12 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Animation Speed: {animationSpeed.toFixed(1)}x
          </label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={animationSpeed}
            onChange={(e) => onAnimationSpeedChange(Number.parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Heart Size: {heartSize.toFixed(1)}x</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={heartSize}
            onChange={(e) => onHeartSizeChange(Number.parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={confettiEnabled}
            onChange={(e) => onConfettiToggle(e.target.checked)}
            className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
          />
          <label className="ml-2 block text-sm font-medium text-gray-700 select-none">Enable Confetti Hearts</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={stardustBackground}
            onChange={(e) => onStardustToggle(e.target.checked)}
            className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
          />
          <label className="ml-2 block text-sm font-medium text-gray-700 select-none">Stardust Background</label>
        </div>

        <div className="border-t pt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Settings:</label>
          <div className="flex gap-2">
            <button
              onClick={exportSettings}
              className="flex-1 bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors"
            >
              <i className="fas fa-download mr-1"></i>Export
            </button>
            <label className="flex-1 bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-600 transition-colors cursor-pointer text-center">
              <i className="fas fa-upload mr-1"></i>Import
              <input type="file" accept=".json" onChange={importSettings} className="hidden" />
            </label>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <button onClick={onTogglePlayPause} className="control-button">
            <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"} mr-1`}></i>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={onReset} className="control-button">
            <i className="fas fa-refresh mr-1"></i>Reset
          </button>
          <button onClick={onClose} className="control-button bg-gray-600 hover:bg-gray-700">
            <i className="fas fa-times mr-1"></i>Close
          </button>
        </div>
      </div>
    </div>
  )
}
