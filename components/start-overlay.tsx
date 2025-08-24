"use client"

interface StartOverlayProps {
  onStart: () => void
}

export function StartOverlay({ onStart }: StartOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-rose-100">
      <div className="ui-panel home-panel max-w-lg w-11/12 p-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-pink-600 mb-4 font-serif">A Special Gift for You ❤️</h1>
        <p className="text-lg md:text-xl text-gray-700 font-serif mb-8">
          This is a little page I created just for you. It's filled with love and a bit of math magic!
        </p>
        <div className="text-4xl mb-4">🌹</div>
        <button onClick={onStart} className="main-button flex items-center justify-center gap-2 mx-auto">
          <i className="fas fa-heart"></i> Open My Heart
        </button>
        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href="https://github.com/ankonOfficial"
            target="_blank"
            className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
            rel="noreferrer"
          >
            <i className="fab fa-github text-4xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/ankonofficial"
            target="_blank"
            className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin text-4xl"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
