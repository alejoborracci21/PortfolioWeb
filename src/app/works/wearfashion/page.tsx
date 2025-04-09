import ProjectDetails from "@/components/project-detail";
import TechCarousel from "@/components/tech-carousel";
import ProjectFeatures from "@/components/project-features";
import { projects } from "../projects";

export default function Wearfashion() {
  const project = projects[1];

  const technologies = [
    { name: "Node.js", icon: "/images/nodejs.svg" },
    { name: "React", icon: "/images/react.svg" },
    { name: "Redux", icon: "/images/redux.svg" },
    { name: "PostgreSQL", icon: "/images/postgresql.svg" },
    { name: "Sequelize", icon: "/images/sequelize.svg" },
    { name: "Express", icon: "/images/expressjs.svg" },
    { name: "Firebase", icon: "/images/firebase.svg" },
  ];

  const features = [
    { title: "Colaboración en Equipo y Liderazgo", description: "Lideré el equipo durante el proyecto, organizando reuniones diarias, coordinando sprints de desarrollo y fomentando discusiones técnicas." },
    { title: "Funcionalidad de E-commerce", description: "Implementé listados de productos, registro/inicio de sesión de usuarios, lógica de carrito de compras y manejo de pedidos." },
    { title: "Autenticación de Usuarios", description: "Habilité registro e inicio de sesión seguro con Firebase, incluyendo acceso basado en roles." },
    { title: "Gestión de Estado con Redux", description: "Utilicé Redux para gestionar el estado global de productos, usuarios y carrito de compras, asegurando un comportamiento consistente." },
    { title: "Integración de Base de Datos", description: "Sincronización de datos del backend con el frontend utilizando Sequelize y PostgreSQL." },
    { title: "UI Limpia y Responsiva", description: "Diseño desarrollado con React y CSS personalizado, asegurando una experiencia móvil primero y una interfaz clara." },
  ];

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-background to-background/95 text-foreground py-12 space-y-16">
      <ProjectDetails
        title={project.title}
        imageUrl={project.imageUrl}
        projectLink={project.projectLink}
        githubLink="https://github.com/DanielJulianCardenasMora/proyecto_grupal_henry"
        category="E-commerce"
        date="2023"
        client="Wearfashion"
      />
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Acerca de Este Proyecto</h2>
        <p className="text-lg leading-relaxed">{project.description}</p>
      </div>
      <TechCarousel technologies={technologies} />
      <ProjectFeatures features={features} />
    </div>
  );
}