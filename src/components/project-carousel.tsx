"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  tag: string
  imageUrl: string
  type?: string
  detailsLink?: string
  projectLink?: string
  description?: string
}

interface ProjectCarouselProps {
  projects: Project[]
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
  showIndicators?: boolean
}

export default function ProjectCarousel({
  projects,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [projects.length, isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [projects.length, isTransitioning])

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  // Handle touch events for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, interval)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, interval, nextSlide])

  // Pause on hover
  const handleMouseEnter = () => {
    if (isPlaying && timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const handleMouseLeave = () => {
    if (isPlaying && !timerRef.current) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, interval)
    }
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 pointer-events-auto ml-2"
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Anterior</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 pointer-events-auto mr-2"
            onClick={nextSlide}
            disabled={isTransitioning}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Siguiente</span>
          </Button>
        </div>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                currentIndex === index ? "bg-accent w-6" : "bg-white/50 hover:bg-white/80",
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}

      {/* Play/Pause Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
        onClick={togglePlayPause}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        <span className="sr-only">{isPlaying ? "Pausar" : "Reproducir"}</span>
      </Button>
    </div>
  )
}
