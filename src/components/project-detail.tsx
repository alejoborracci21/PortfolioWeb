import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectDetailsProps {
  title: string
  imageUrl: string
  projectLink?: string
  githubLink?: string
  category?: string
  date?: string
  client?: string
}

export default function ProjectDetails({
  title,
  imageUrl,
  projectLink,
  githubLink,
  category = "Web Development",
  date = "2023",
  client = "ALK Software",
}: ProjectDetailsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header with title and links */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <Badge variant="outline" className="mb-2">
            {category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          <div className="flex gap-4 mt-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-sm">Cliente:</span>
              <span className="text-sm font-medium text-foreground">{client}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Año:</span>
              <span className="text-sm font-medium text-foreground">{date}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          {githubLink && (
            <Button variant="outline" size="sm" asChild>
              <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={16} />
                <span>Codigo</span>
              </Link>
            </Button>
          )}

          {projectLink && (
            <Button size="sm" asChild>
              <Link href={projectLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span>Sitio web</span>
                <ArrowUpRight size={16} />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Main image with gradient border */}
      <div className="relative rounded-xl overflow-hidden border border-border/40 bg-gradient-to-br from-accent/10 to-transparent p-1 shadow-xl mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-50 rounded-xl" />
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        </div>
      </div>
    </div>
  )
}
