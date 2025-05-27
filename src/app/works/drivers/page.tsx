import ProjectDetails from "@/components/project-detail";
import TechCarousel from "@/components/tech-carousel";
import ProjectFeatures from "@/components/project-features";
import { projects } from "../projects";

export default function Drivers() {
  const project = projects[2];

  const technologies = [
    { name: "Node.js", icon: "/images/nodejs.svg" },
    { name: "React", icon: "/images/react.svg" },
    { name: "Redux", icon: "/images/redux.svg" },
    { name: "Express", icon: "/images/expressjs.svg" },
    { name: "PostgreSQL", icon: "/images/postgresql.svg" },
  ];

  const features = [
    { title: "Integración con API Externa", description: "Conexión a una API pública de Fórmula 1 para obtener datos en tiempo real de pilotos." },
    { title: "Base de Datos Personalizada con Sequelize", description: "Almacena pilotos personalizados creados por los usuarios en una base de datos PostgreSQL." },
    { title: "Funcionalidad CRUD Completa", description: "Los usuarios pueden crear, leer, actualizar y eliminar entradas de pilotos." },
    { title: "Sistema de Filtrado y Ordenamiento", description: "Opciones de filtrado por nombre, equipo y edad para mejorar la experiencia del usuario." },
    { title: "Aplicación de Página Única (SPA)", description: "Construida completamente con React, proporcionando navegación fluida sin recargas." },
    { title: "Diseño Limpio y Responsivo", description: "Diseño estructurado con HTML y CSS para garantizar claridad y adaptabilidad móvil." },
  ];

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-background to-background/95 text-foreground py-12 space-y-16">
      <ProjectDetails
        title={project.title}
        imageUrl={project.imageUrl}
        projectLink={project.projectLink}
        githubLink="https://github.com/alejoborracci21/PI-Drivers"
        category="Proyecto Individual"
        date="2023"
        client="Drivers"
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