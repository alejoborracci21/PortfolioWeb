"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code2 } from 'lucide-react'

interface ExperienciaItem {
  empresa: string
  año: string
  puesto: string
  sitioWeb?: string
  descripcion: string
  tecnologias: string[]
}

const experiencias: ExperienciaItem[] = [
  {
    empresa: "BIMTRAZER",
    año: "2024",
    puesto: "Project Manager",
    sitioWeb: "bimtrazer.com",
    descripcion: "Gestión y coordinación de equipos multidisciplinarios en un entorno ágil. Planificación, priorización y seguimiento de nuevas funcionalidades del producto. Organización de sprints, reuniones con stakeholders y seguimiento continuo del avance mediante la herramienta Monday. Aplicación de metodologías ágiles (Scrum) para asegurar la mejora continua y la entrega de valor constante.",
    tecnologias: ["Scrum", "Monday", "Inteligencia artificial", "Microservicios", "Blockchain", "Planificacion"]
  }
]

export default function ExperienciaProfesional() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Experiencia Profesional</h2>

      <Accordion type="single" collapsible className="w-full">
        {experiencias.map((exp, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-zinc-800/40 rounded-xl mb-4 overflow-hidden bg-zinc-900/40 backdrop-blur-sm shadow-md"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-zinc-800/50 group rounded-t-xl">
              <div className="flex justify-between w-full items-center">
                <span className="font-medium text-lg">{exp.empresa}</span>
                <span className="text-muted-foreground">{exp.año}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2">
              <div className="space-y-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" />
                    <span className="font-medium">{exp.puesto}</span>
                  </div>

                  {exp.sitioWeb && (
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <a
                        href={`https://${exp.sitioWeb}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {exp.sitioWeb}
                      </a>
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground">{exp.descripcion}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tecnologias.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-zinc-800/60 text-zinc-300 border-zinc-700/50 hover:bg-zinc-800/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
