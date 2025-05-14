import ProjectGrid from "@/components/project-grid";
import { projects } from "./projects"; 

const categories = ["Frontend", "Fullstack", "Backend"];

export default function Works() {
  return (
    <div className="container mx-auto py-12 mb-16">
      <h1 className="text-4xl font-bold mb-8">Proyectos</h1>
      <ProjectGrid projects={projects} categories={categories} />
    </div>
  );
}