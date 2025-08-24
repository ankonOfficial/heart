"use client"

import { useState, useEffect, useRef } from "react"
import { StartOverlay } from "@/components/start-overlay"
import { MainContent } from "@/components/main-content"
import { FloatingButtons } from "@/components/floating-buttons"
import { CustomizePanel } from "@/components/customize-panel"
import { MessagePanel } from "@/components/message-panel"
import { ConfettiContainer } from "@/components/confetti-container"
import { GalleryModal } from "@/components/gallery-modal"

export default function RomanticHeartPage() {
  const [showStartOverlay, setShowStartOverlay] = useState(true)
  const [audioStarted, setAudioStarted] = useState(false)
  const [showCustomizePanel, setShowCustomizePanel] = useState(false)
  const [showMessagePanel, setShowMessagePanel] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [heartColor, setHeartColor] = useState("#e53e3e")
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [heartSize, setHeartSize] = useState(1)
  const [confettiEnabled, setConfettiEnabled] = useState(true)
  const [stardustBackground, setStardustBackground] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((e) => console.log("Audio playback failed:", e))
    }
    setShowStartOverlay(false)
    setAudioStarted(true)
  }

  const toggleCustomizePanel = () => {
    setShowMessagePanel(false)
    setShowGallery(false)
    setShowCustomizePanel(!showCustomizePanel)
  }

  const toggleMessagePanel = () => {
    setShowCustomizePanel(false)
    setShowGallery(false)
    setShowMessagePanel(!showMessagePanel)
  }

  const toggleGallery = () => {
    setShowCustomizePanel(false)
    setShowMessagePanel(false)
    setShowGallery(!showGallery)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    setShowCustomizePanel(false)
    setShowMessagePanel(false)
    setShowGallery(false)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
    }
  }

  const resetSettings = () => {
    setHeartColor("#e53e3e")
    setAnimationSpeed(1)
    setHeartSize(1)
    setStardustBackground(false)
    setConfettiEnabled(true)
  }

  useEffect(() => {
    if (stardustBackground) {
      document.body.classList.add("stardust-bg")
    } else {
      document.body.classList.remove("stardust-bg")
    }
  }, [stardustBackground])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [isFullscreen])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <audio ref={audioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/music-3MzPr6KpNVbsa48e7W6l2cAxvMnelk.mp3" loop />

      <ConfettiContainer enabled={confettiEnabled && audioStarted} />

      {showStartOverlay && <StartOverlay onStart={handleStart} />}

      {!showStartOverlay && (
        <>
          <MainContent
            heartColor={heartColor}
            animationSpeed={animationSpeed}
            heartSize={heartSize}
            isPlaying={isPlaying}
            audioStarted={audioStarted}
            isFullscreen={isFullscreen}
          />

          {!isFullscreen && (
            <FloatingButtons
              onCustomize={toggleCustomizePanel}
              onMessage={toggleMessagePanel}
              onGallery={toggleGallery}
              onFullscreen={toggleFullscreen}
            />
          )}

          {isFullscreen && (
            <button
              onClick={toggleFullscreen}
              className="fixed top-8 right-8 z-50 bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              title="Exit fullscreen (ESC)"
            >
              <i className="fas fa-compress text-xl"></i>
            </button>
          )}

          <CustomizePanel
            show={showCustomizePanel}
            onClose={() => setShowCustomizePanel(false)}
            heartColor={heartColor}
            onHeartColorChange={setHeartColor}
            animationSpeed={animationSpeed}
            onAnimationSpeedChange={setAnimationSpeed}
            heartSize={heartSize}
            onHeartSizeChange={setHeartSize}
            confettiEnabled={confettiEnabled}
            onConfettiToggle={setConfettiEnabled}
            stardustBackground={stardustBackground}
            onStardustToggle={setStardustBackground}
            isPlaying={isPlaying}
            onTogglePlayPause={togglePlayPause}
            onReset={resetSettings}
          />

          <MessagePanel show={showMessagePanel} onClose={() => setShowMessagePanel(false)} />

          <GalleryModal show={showGallery} onClose={() => setShowGallery(false)} />
        </>
      )}
    </div>
  )
}
