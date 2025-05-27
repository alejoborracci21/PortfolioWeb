import ProjectDetails from "@/components/project-detail";
import TechCarousel from "@/components/tech-carousel";
import ProjectFeatures from "@/components/project-features";
import { projects } from "../projects";

export default function ContentAIPage() {
  const project = projects.find((p) => p.title === "ContentAI - NoCountry");

  const technologies = [
    { name: "TypeScript", icon: "/images/typescript.svg" },
    { name: "Next.js", icon: "/images/next.svg" },
    { name: "NestJS", icon: "/images/nest.svg" },
    { name: "React", icon: "/images/react.svg" },
    { name: "Firebase", icon: "/images/firebase.svg" },
    { name: "PostgreSQL", icon: "/images/postgresql.svg" },
    { name: "IA", icon: "/images/openai.svg" },
  ];

  const features = [
    {
      title: "Generación de Artículos con IA",
      description: "Crea contenido automáticamente especificando el nicho, tema, longitud y formato del artículo. Usa dos modelos de IA para garantizar disponibilidad continua.",
    },
    {
      title: "Creación Manual de Contenido",
      description: "Permite a los usuarios redactar sus propios artículos desde cero mediante un editor amigable.",
    },
    {
      title: "Autenticación con Firebase",
      description: "Gestión segura de usuarios con login, registro y control de acceso mediante Firebase Auth.",
    },
    {
      title: "Foro Comunitario",
      description: "Sección pública donde los usuarios pueden publicar y explorar artículos creados por la comunidad.",
    },
    {
      title: "Dashboard Personal",
      description: "Vista personalizada para que cada usuario pueda ver y gestionar sus artículos generados o escritos manualmente.",
    },
    {
      title: "Desarrollo Express en 5 Días",
      description: "Proyecto intensivo desarrollado en equipo en solo 5 días como desafío en NoCountry, priorizando funcionalidades clave y una arquitectura escalable.",
    },
  ];

  if (!project) return <div className="p-6 text-center">Proyecto no encontrado</div>;

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-background to-background/95 text-foreground py-12 space-y-16">
      <ProjectDetails
        title={project.title}
        imageUrl={project.imageUrl}
        projectLink={project.projectLink}
        githubLink="https://github.com/alejoborracci21/ContentAI"
        category="Generador de Contenido con IA"
        date="2024"
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
