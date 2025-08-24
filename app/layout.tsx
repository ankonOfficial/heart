import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const merriweather = Merriweather({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "For My Dearest - A Mathematical Love Story",
  description: "A romantic interactive page with mathematical heart animations",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${merriweather.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className="bg-rose-100 min-h-screen">{children}</body>
    </html>
  )
}
