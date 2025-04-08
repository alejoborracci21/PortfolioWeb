import ProjectDetails from "@/components/project-detail";
import { projects } from "../page";

export default function Wearfashion() {
  const project = projects[1];

  return (
    <div className="flex flex-col items-center w-full mb-10 bg-transparent text-foreground py-12 space-y-8">
      {/* Componente de detalles del proyecto */}
      <ProjectDetails
        title={project.title}
        imageUrl={project.imageUrl}
        projectLink={project.projectLink}
      />

      {/* Título de la sección */}
      <h1 className="text-3xl font-bold">What is this project about?</h1>

      {/* Contenedor para limitar el ancho del párrafo */}
      <div className="max-w-3xl text-center">
        <p className="text-lg leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}