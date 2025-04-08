"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Technology {
  name: string
  icon: string
}

interface TechCarouselProps {
  technologies: Technology[]
}

export default function TechCarousel({ technologies }: TechCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-rotate through technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % technologies.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [technologies.length])

  return (
    <div className="relative py-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-50" />

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Technologies Used
        </h2>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={cn(
                "relative flex flex-col items-center transition-all duration-700 px-4 py-2",
                activeIndex === index ? "scale-110" : "scale-90 opacity-70"
              )}
              animate={{
                y: activeIndex === index ? -10 : 0,
              }}
              whileHover={{ scale: 1.1, y: -10 }}
            >
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium">{tech.name}</span>

              {activeIndex === index && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  layoutId="activeIndicator"
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut", 
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                activeIndex === index ? "bg-accent w-4" : "bg-gray-400/30"
              )}
              aria-label={`Go to technology ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
