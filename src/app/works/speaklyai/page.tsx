import ProjectDetails from "@/components/project-detail";
import TechCarousel from "@/components/tech-carousel";
import ProjectFeatures from "@/components/project-features";
import { projects } from "../projects";

export default function SpeaklyAI() {
  const project = projects[5]

  const technologies = [
    { name: "TypeScript", icon: "/images/typescript.svg" },
    { name: "Next.js", icon: "/images/next.svg" },
    { name: "NestJS", icon: "/images/nest.svg" },
    { name: "Firebase", icon: "/images/firebase.svg" },
    { name: "SQL", icon: "/images/postgresql.svg" },
    { name: "IA (OpenAI)", icon: "/images/openai.svg" },
    { name: "Tailwind CSS", icon: "/images/tailwind.svg" },
  ];

  const features = [
    {
      title: "Práctica Adaptativa por Nivel",
      description: "Generación de preguntas dinámicas por IA según el nivel (Principiante, Intermedio, Avanzado) y la temática seleccionada."
    },
    {
      title: "Sistema de Ranking Global",
      description: "Tabla de posiciones en tiempo real que muestra a los mejores usuarios según su puntuación acumulada."
    },
    {
      title: "Autenticación y Perfiles",
      description: "Registro e inicio de sesión seguros con Firebase, perfiles de usuario con historial de prácticas y estadísticas personales."
    },
    {
      title: "Preguntas Temáticas",
      description: "Permite escoger temáticas (viajes, tecnología, negocios, etc.) para enfocar las prácticas en vocabulario y estructuras relevantes."
    },
    {
      title: "Interfaz Responsiva",
      description: "Diseño móvil y desktop fluido con Tailwind CSS, garantizando accesibilidad y usabilidad en cualquier dispositivo."
    },
    {
      title: "Landing y Dashboard",
      description: "Página de bienvenida con descripción del servicio y panel de control para navegar entre prácticas, ranking y ajustes de cuenta."
    },
  ];

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-background to-background/95 text-foreground py-12 space-y-16">
      <ProjectDetails
        title={project.title}
        imageUrl={project.imageUrl}
        projectLink={project.projectLink}
        githubLink="https://github.com/alejoborracci21/SpeaklyAI"
        category="Educación / Práctica de Inglés"
        date="2025"
        client="NoCountry"
      />
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Acerca de Este Proyecto</h2>
        <p className="text-lg leading-relaxed text-justify">{project.description}</p>
      </div>
      <TechCarousel technologies={technologies} />
      <ProjectFeatures features={features} />
    </div>
  );
}
