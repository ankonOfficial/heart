"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface HeartCanvasProps {
  color: string
  speed: number
  size: number
  isPlaying: boolean
}

export function HeartCanvas({ color, speed, size, isPlaying }: HeartCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [mousePos, setMousePos] = useState({ x: 300, y: 250 })

  const heartModelX = (k: number) => 16 * Math.sin(k) ** 3
  const heartModelY = (k: number) => 13 * Math.cos(k) - 5 * Math.cos(2 * k) - 2 * Math.cos(3 * k) - Math.cos(4 * k)

  const lightenColor = (hex: string, lum: number) => {
    hex = String(hex).replace(/[^0-9a-f]/gi, "")
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }
    lum = lum / 100
    let rgb = "#"
    for (let i = 0; i < 3; i++) {
      let c = Number.parseInt(hex.substr(i * 2, 2), 16)
      c = Math.round(Math.min(255, Math.max(0, c + c * lum)))
      rgb += ("00" + c.toString(16)).substr(-2)
    }
    return rgb
  }

  const drawHeart = (time: number, mouseX: number, mouseY: number, heartColor: string) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.min(centerX, centerY))
    gradient.addColorStop(0, heartColor)
    gradient.addColorStop(0.7, lightenColor(heartColor, -30))
    gradient.addColorStop(1, lightenColor(heartColor, -50))

    const mouseDistance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2)
    const scaledDistance = Math.min(Math.max(centerX, centerY), mouseDistance)
    const interactionScale = 1 + (Math.max(centerX, centerY) - scaledDistance) / Math.max(centerX, centerY)
    const pulseScale = 1 + 0.1 * Math.sin(time * 0.003 * speed)
    const finalScale = size * 6 * pulseScale * interactionScale

    ctx.beginPath()
    for (let k = 0; k <= 2 * Math.PI; k += 0.01) {
      const x = centerX + heartModelX(k) * finalScale
      const y = centerY - heartModelY(k) * finalScale
      if (k === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.fillStyle = gradient
    ctx.shadowColor = heartColor
    ctx.shadowBlur = 20
    ctx.fill()
    ctx.shadowBlur = 0

    // Sparkles
    for (let i = 0; i < 20; i++) {
      const sparkleK = (time * 0.001 * speed + i * 0.3) % (2 * Math.PI)
      const sparkleX = centerX + heartModelX(sparkleK) * finalScale * 0.9
      const sparkleY = centerY - heartModelY(sparkleK) * finalScale * 0.9
      ctx.beginPath()
      ctx.arc(sparkleX, sparkleY, 2, 0, 2 * Math.PI)
      ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + 0.5 * Math.sin(time * 0.005 + i)})`
      ctx.fill()
    }
  }

  const animate = (time: number) => {
    if (!isPlaying) return
    drawHeart(time, mousePos.x, mousePos.y, color)
    animationRef.current = requestAnimationFrame(animate)
  }

  const resizeCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const maxWidth = Math.min(window.innerWidth - 48, 1200)
    const heightRatio = 0.85
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    canvas.style.width = maxWidth + "px"
    canvas.style.height = Math.round(maxWidth * heightRatio) + "px"
    canvas.width = Math.floor(maxWidth * dpr)
    canvas.height = Math.floor(maxWidth * heightRatio * dpr)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  useEffect(() => {
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate)
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, color, speed, size, mousePos])

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      className="heart-canvas border border-gray-200 z-10 rounded-xl shadow-lg max-w-full h-auto block"
    />
  )
}
