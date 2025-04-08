"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Text, ExternalLink, ArrowRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  tag: string
  imageUrl: string
  type?: string
  detailsLink?: string
  projectLink?: string
  description?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  tag,
  imageUrl,
  type = "Web",
  detailsLink = "#",
  projectLink = "#",
  description = "No description available for this project.",
}) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TooltipProvider>
      <div
        className={cn(
          "w-full group relative rounded-xl overflow-hidden bg-card border border-border/40",
          "transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20",
          "flex flex-col h-full",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image with Gradient Overlay */}
        <div className="w-full aspect-video relative overflow-hidden">
          {/* Gradient overlay for better text contrast */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10",
              "opacity-70 transition-opacity duration-300",
              isHovered ? "opacity-40" : "opacity-70",
            )}
          />

          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className={cn(
              "object-cover transition-all duration-500",
              "group-hover:scale-105 brightness-90 group-hover:brightness-100",
            )}
          />

          {/* Project Type Badge - Top Left */}
          <div className="absolute top-3 left-3 z-20">
            <Badge variant="secondary" className="bg-black/50 hover:bg-black/60 backdrop-blur-sm text-xs font-medium">
              {type}
            </Badge>
          </div>

          {/* Action Buttons - Bottom Right */}
          <div className="absolute bottom-3 right-3 flex space-x-2 z-20">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={detailsLink}
                  className={cn(
                    "bg-black/50 hover:bg-accent text-white p-2 rounded-full",
                    "transition-all duration-300 backdrop-blur-sm",
                    "transform hover:scale-105 hover:rotate-3",
                  )}
                  onMouseEnter={() => setActiveTooltip("details")}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <Text size={16} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" hidden={activeTooltip !== "details"}>
                <p>View Details</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "bg-black/50 hover:bg-accent text-white p-2 rounded-full",
                    "transition-all duration-300 backdrop-blur-sm",
                    "transform hover:scale-105 hover:rotate-3",
                  )}
                  onMouseEnter={() => setActiveTooltip("website")}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <ExternalLink size={16} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" hidden={activeTooltip !== "website"}>
                <p>Visit Website</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Title Overlay - Bottom Left */}
          <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
            <h3
              className={cn(
                "text-xl md:text-2xl font-bold text-white mb-1 line-clamp-1",
                "transition-transform duration-300",
                isHovered ? "transform translate-y-0" : "",
              )}
            >
              {title}
            </h3>
            <p className="text-white/80 text-sm font-medium">{tag}</p>
          </div>
        </div>

        {/* Project Description */}
        <div className="p-4 flex-grow flex flex-col">
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">{description}</p>

          <Link
            href={detailsLink}
            className={cn(
              "text-sm font-medium text-accent flex items-center gap-1",
              "transition-all duration-300 hover:gap-2 group/link",
            )}
          >
            Learn more
            <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </TooltipProvider>
  )
}

export default ProjectCard
