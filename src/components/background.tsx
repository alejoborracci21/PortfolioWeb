"use client"

import { useEffect, useRef } from "react"

export function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawNoise()
    }

    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255
        data[i] = noise // Rojo
        data[i + 1] = noise // Verde
        data[i + 2] = noise // Azul
        data[i + 3] = 60 // Alpha (más alto para más opacidad)
      }

      ctx.putImageData(imageData, 0, 0)
      animationFrameId.current = requestAnimationFrame(drawNoise) // Animación infinita
    }

    window.addEventListener("resize", resize)
    resize()
    drawNoise() // Iniciar animación

    return () => {
      window.removeEventListener("resize", resize)
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 bg-black z-[-2]" />
      <canvas ref={canvasRef} className="fixed inset-0 z-[-1] opacity-40" style={{ pointerEvents: "none" }} />
    </>
  )
}
