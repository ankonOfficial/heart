"use client"

interface FloatingButtonsProps {
  onCustomize: () => void
  onMessage: () => void
  onGallery: () => void
  onFullscreen: () => void
}

export function FloatingButtons({ onCustomize, onMessage, onGallery, onFullscreen }: FloatingButtonsProps) {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
      <button
        onClick={onGallery}
        className="bg-gradient-to-r from-purple-400 to-pink-500 text-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform"
        title="View saved hearts gallery"
      >
        <i className="fas fa-images text-xl"></i>
      </button>

      <button
        onClick={onFullscreen}
        className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform"
        title="Enter fullscreen mode"
      >
        <i className="fas fa-expand text-xl"></i>
      </button>

      <button
        onClick={onMessage}
        className="bg-gradient-to-r from-pink-400 to-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform"
        title="Send a message"
      >
        <i className="fas fa-envelope text-xl"></i>
      </button>

      <button
        onClick={onCustomize}
        className="bg-gradient-to-r from-pink-400 to-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform"
        title="Customize the heart"
      >
        <i className="fas fa-cog text-xl"></i>
      </button>
    </div>
  )
}
