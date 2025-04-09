import ProjectGrid from "@/components/project-grid";
import { projects } from "./projects"; 

const categories = ["Frontend Development", "Fullstack Development", "Backend Development"];

export default function Works() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <ProjectGrid projects={projects} categories={categories} />
    </div>
  );
}