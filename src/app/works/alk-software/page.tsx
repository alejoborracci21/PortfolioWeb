import ProjectDetails from "@/components/project-detail";
import TechCarousel from "@/components/tech-carousel";
import ProjectFeatures from "@/components/project-features";
import { projects } from "../projects";

export default function ALKSoftware() {
  const project = projects[0];

  const technologies = [
    { name: "TypeScript", icon: "/images/typescript.svg" },
    { name: "Next.js", icon: "/images/next.svg" },
    { name: "Tailwind CSS", icon: "/images/tailwind.svg" },
    { name: "React", icon: "/images/react.svg" },
    { name: "HTML", icon: "/images/html.svg" },
    { name: "CSS", icon: "/images/css.svg" },
  ];

  const features = [
    { title: "Interfaz Responsiva", description: "Diseño adaptable a todos los dispositivos, ofreciendo una experiencia fluida en móvil, tablet y escritorio." },
    { title: "Arquitectura Basada en Componentes", description: "UI modular construida con componentes React reutilizables y escalables para un desarrollo más rápido y mantenible." },
    { title: "Estilo Moderno con Tailwind CSS", description: "Estilización eficiente utilizando clases utilitarias de Tailwind CSS, asegurando un diseño consistente y rápida iteración." },
    { title: "Rendimiento Optimizado", description: "Páginas pre-renderizadas con Next.js para mejorar el SEO, tiempos de carga rápidos y navegación fluida." },
    { title: "Presentación Clara de Servicios", description: "Diseño estructurado estratégicamente para comunicar los servicios web, móviles y de marketing de ALK Software." },
    { title: "Navegación Intuitiva", description: "Sistema de menú diseñado para guiar a los usuarios a través de la plataforma sin esfuerzo." },
  ];

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-background to-background/95 text-foreground py-12 space-y-16">
      <ProjectDetails
        title={project.title}
        imageUrl={project.imageUrl}
        projectLink={project.projectLink}
        githubLink="https://github.com/alejoborracci21/ALK-Software"
        category="Software Empresarial"
        date="2023"
        client="ALK Software"
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