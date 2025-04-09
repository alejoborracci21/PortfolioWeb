"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Galería del Proyecto</h2>

      <div className="relative rounded-xl overflow-hidden bg-black/5 aspect-video">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${title} screenshot ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="h-10 w-10 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Imagen anterior</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="h-10 w-10 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Siguiente imagen</span>
          </Button>
        </div>

        {/* Fullscreen button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
            >
              <Maximize2 className="h-4 w-4" />
              <span className="sr-only">Ver en pantalla completa</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl h-[80vh] p-0 bg-black/90">
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`${title} screenshot ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>

        {/* Thumbnail navigation */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
