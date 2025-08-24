import { HeartCanvas } from "./heart-canvas"
import { DynamicMessages } from "./dynamic-messages"
import { LoveCalculator } from "./love-calculator"
import { SaveButtons } from "./save-buttons"

interface MainContentProps {
  heartColor: string
  animationSpeed: number
  heartSize: number
  isPlaying: boolean
  audioStarted: boolean
  isFullscreen: boolean
}

export function MainContent({
  heartColor,
  animationSpeed,
  heartSize,
  isPlaying,
  audioStarted,
  isFullscreen,
}: MainContentProps) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 ${isFullscreen ? "fixed inset-0 bg-black z-40" : ""}`}
    >
      {!isFullscreen && <SaveButtons />}

      <div className="w-full flex flex-col items-center justify-center">
        {!isFullscreen && (
          <div className="ui-panel content-panel p-8 md:p-12 mb-8 text-center w-full max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-4 font-serif">Hello, My Dearest ❤️</h1>
            <p className="text-xl md:text-2xl text-gray-700 font-serif">
              This page is a small reflection of the joy you bring into my life.
            </p>
          </div>
        )}

        <div className="flex flex-col items-center justify-center w-full max-w-6xl relative">
          {!isFullscreen && <DynamicMessages />}

          <div
            className={`ui-panel content-panel p-4 mt-6 w-full flex items-center justify-center ${isFullscreen ? "bg-transparent border-none shadow-none" : ""}`}
          >
            <HeartCanvas
              color={heartColor}
              speed={animationSpeed}
              size={isFullscreen ? heartSize * 1.5 : heartSize}
              isPlaying={isPlaying}
            />
          </div>

          {audioStarted && !isFullscreen && (
            <p className="mt-4 text-sm text-gray-500 text-center font-serif">
              Move your mouse over the heart to interact...
            </p>
          )}

          {!isFullscreen && <LoveCalculator />}
        </div>
      </div>
    </div>
  )
}
