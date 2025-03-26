"use client"

import { useEffect, useRef } from "react"

export function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar el canvas al tamaño de la ventana
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawNoise()
    }

    // Crear el efecto de ruido
    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        // Valor de ruido muy sutil (casi imperceptible)
        const noise = Math.random() * 5

        // Valores RGB muy bajos para mantener el fondo casi negro
        data[i] = noise // R
        data[i + 1] = noise // G
        data[i + 2] = noise // B
        data[i + 3] = 10 // Alpha (muy transparente)
      }

      ctx.putImageData(imageData, 0, 0)
    }

    window.addEventListener("resize", resize)
    resize()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 bg-background z-[-2]" />
      <canvas ref={canvasRef} className="fixed inset-0 z-[-1] opacity-30" style={{ pointerEvents: "none" }} />
    </>
  )
}

