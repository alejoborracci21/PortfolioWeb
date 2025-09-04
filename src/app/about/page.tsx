import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Download, Linkedin, Github, Twitter } from "lucide-react"
import ExperienciaProfesional from "@/components/experience"

export const metadata: Metadata = {
  title: "Acerca de | Alejo Borracci",
  description:
    "Conoce más sobre Alejo Borracci, un desarrollador fullstack con experiencia en React, Next.js, Node.js y habilidades sólidas en liderazgo, comunicación y trabajo en equipo.",
}

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 bg-transparent animate__animated animate__fadeIn animate__delay-1s">
      <Card className="border-none shadow-none bg-transparent ">
        <CardContent className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Avatar className="h-40 w-40">
              <AvatarImage
                src="/images/profile.jpg"
                alt="Alejo Borracci"
                className="h-full w-full object-cover object-center"
              />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left space-y-3">
              <h1 className="text-4xl font-bold">Hola, soy Alejo 👋</h1>
              <p className="text-muted-foreground text-lg">
                Desarrollador Web Fullstack | Técnico en Computación
              </p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="gap-2" asChild>
                  <a href="/AlejoB.CV.html" download>
                    <Download className="h-4 w-4" />
                    Descargar CV
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/alejo-borracci-2323a6199/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/alejoborracci21?tab=overview&from=2024-12-01&to=2024-12-31"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://x.com/Alejoborracci21"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          <section className="space-y-4 text-base leading-relaxed text-justify">
            <p>
              Soy un desarrollador fullstack con una sólida base técnica y una
              pasión por crear soluciones que generen valor real. Estudié en{" "}
              <strong>Henry Bootcamp</strong>, donde completé más de 800 horas
              de formación intensiva enfocada en tecnologías web modernas,
              metodologías ágiles y trabajo en equipo. También tengo un título
              como Técnico en Computación de la Escuela Técnica 275.
            </p>
            <p>
              Me destaco por mis fortalezas en <strong>planificación</strong>,{" "}
              <strong>escucha activa</strong> y{" "}
              <strong>comunicación efectiva</strong>. Durante mi experiencia
              como Project Manager en <strong>BIMTRAZER</strong> (Oct 2024 - Feb
              2025), coordiné equipos multidisciplinarios, lideré reuniones
              semanales con clientes, planifiqué nuevas funcionalidades
              utilizando metodologías ágiles (Scrum) y aseguré la mejora
              continua del producto.
            </p>
            <p>
              Estoy buscando oportunidades para crecer como desarrollador
              fullstack, contribuyendo con mis conocimientos en tecnologías como{" "}
              <strong>
                React, Next.js, Node.js, Nest.js, TypeScript, TailwindCSS
              </strong>{" "}
              y bases de datos como <strong>PostgreSQL</strong> y{" "}
              <strong>Firebase</strong>.
            </p>
            <p>
              Me considero una persona <strong>proactiva</strong>,{" "}
              <strong>detallista</strong> y con{" "}
              <strong>habilidades de liderazgo</strong> desarrolladas a través
              del trabajo colaborativo y la coordinación de proyectos. Disfruto
              trabajar en equipo, aprender nuevas tecnologías y convertir ideas
              en realidad.
            </p>
          </section>

          <Separator />

          {/* Componente de Experiencia Profesional */}
          <ExperienciaProfesional />

          <Separator />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Proyectos Destacados</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-justify">
              <li>
                <strong>Servidor MU Online:</strong> Configuración e
                implementación completa de un servidor privado Season 6. Integré
                WebEngine CMS con SQL Server para visualizar datos en tiempo
                real. Desarrollé una tienda online que entrega ítems reales al
                baúl del personaje usando generación de códigos HEX, rankings
                dinámicos y conexión segura con la base del juego. El desafío
                principal fue mantener integridad de datos y compatibilidad
                entre cliente-servidor.
                <br /> <em>Stack:</em> PHP, SQL Server, WebEngine CMS.
              </li>

              <br />

              <li>
                <strong>Wearfashion:</strong> Proyecto final grupal en Henry.
                Integré pasarela de pagos (MercadoPago), desarrollé todo el
                flujo de autenticación con Firebase, incluyendo registro, login
                y manejo de sesiones. Implementé filtros avanzados por
                categoría, talla y precio para las prendas, y participé en
                vistas protegidas y rutas privadas. Además, lideré los sprints
                ágiles y el trabajo en equipo desde Trello.
                <br /> <em>Stack:</em> React, Redux, Firebase, Node.js, Express,
                Sequelize, PostgreSQL, MercadoPago.
              </li>

              <br />

              <li>
                <strong>SpeaklyAI:</strong> Plataforma para practicar inglés con diferentes niveles y sistema de ranking global. Implementé frontend con Next.js y TailwindCSS, backend con NestJS, autenticación con Firebase y persistencia en base SQL. Integré lógica de puntuación, tablas de clasificación y perfiles de usuario con historial de prácticas. Las preguntas se generan dinámicamente usando IA según nivel y temática.
                <br /> <em>Stack:</em> Next.js, NestJS, TypeScript, TailwindCSS, Firebase, SQL, Inteligencia Artificial.
              </li>

              <br />

              <li>
                <strong>ALK Software:</strong> Plataforma low-code para crear
                sitios web personalizados. Desarrollé el frontend completo con
                componentes dinámicos reutilizables, formularios interactivos y
                estructura pensada para usuarios sin conocimientos técnicos.
                <br /> <em>Stack:</em> TypeScript, Next.js, TailwindCSS.
              </li>

              <br />

              <li>
                <strong>Drivers:</strong> Proyecto individual. Creé la base de
                datos SQL para corredores personalizados, conecté una API
                externa como fuente para practicar la
                normalización. Desarrollé filtros, ordenamientos, formulario de
                creación y diseñé toda la interfaz desde cero.
                <br /> <em>Stack:</em> React, Redux, Express, PostgreSQL,
                Sequelize.
              </li>

              <br />

              <li>
                <strong>ContentAI:</strong> Plataforma de generación de
                artículos con inteligencia artificial. Desarrollé
                funcionalidades para redactar contenido con OpenAI, guardar
                artículos, ver historial, editarlos y exportarlos. Implementé
                autenticación, dashboard privado y consumo de API. Conectado a
                Firebase y alojado en Vercel.
                <br /> <em>Stack:</em> Next.js, TypeScript, TailwindCSS,
                Firebase, OpenAI API.
              </li>

              <br />

              <li>
                <strong>Cappsy:</strong> Aplicación web para influencers.
                Implementé autenticación, generador de ideas con IA (Hugging
                Face), calendario de publicaciones, sistema de etiquetas y
                guardado de contenido en Supabase. Cada función fue diseñada
                pensando en la experiencia del usuario y la reutilización del
                código.
                <br /> <em>Stack:</em> Next.js, Supabase, TailwindCSS,
                TypeScript, Hugging Face.
              </li>


            </ul>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-justify">
              Tecnologías y Herramientas
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Frontend: React, Next.js, TypeScript, TailwindCSS</li>
              <li>Backend: Node.js, Nest.js, Express</li>
              <li>Bases de Datos: PostgreSQL, Sequelize, Firebase, Supabase</li>
              <li>Control de Versiones: Git, GitHub</li>
              <li>Metodologías Ágiles: Scrum</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Idiomas</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Español (Nativo)</li>
              <li>Inglés (Intermedio)</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
