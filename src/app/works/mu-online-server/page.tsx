import ProjectDetails from "@/components/project-detail";
import TechCarousel from "@/components/tech-carousel";
import ProjectFeatures from "@/components/project-features";
import { projects } from "../projects";

export default function MuOnlineServer() {
  const project = projects.find(p => p.title === "MU Online S6 - Servidor Privado");

  const technologies = [
    { name: "PHP", icon: "/images/php.svg" },
    { name: "SQL Server", icon: "/images/sqlserver.svg" },
    { name: "WebEngine CMS", icon: "/images/webengine.png" },
    { name: "HTML", icon: "/images/html.svg" },
    { name: "CSS", icon: "/images/css.svg" },
    { name: "cPanel", icon: "/images/cpanel.svg" },
  ];

  const features = [
    {
      title: "Servidor Privado MU Online S6",
      description: "Instalación y configuración completa del servidor Season 6 con conexión funcional a la base de datos del juego."
    },
    {
      title: "Integración con WebEngine CMS",
      description: "Configuración del CMS para habilitar registro de usuarios, login, rankings y visualización de personajes desde la base del juego."
    },
    {
      title: "Tienda con Ítems Reales",
      description: "Desarrollo de un módulo personalizado para entregar ítems reales al baúl de personajes usando códigos HEX."
    },
    {
      title: "Ranking Dinámico",
      description: "Implementación de rankings conectados directamente con las tablas reales del juego, con generación manual o automática del cache."
    },
    {
      title: "Solución de Errores Críticos",
      description: "Resolución de errores 403 y permisos denegados mediante configuración avanzada de .htaccess y directorios protegidos."
    },
    {
      title: "Plantilla Personalizada",
      description: "Adaptación visual y funcional del CMS para ajustarse al estilo del servidor, con ajustes en HTML y CSS."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-background to-background/95 text-foreground py-12 space-y-16">
      <ProjectDetails
        title={project?.title || "MU Online S6 - Servidor Privado"}
        imageUrl={project?.imageUrl || "/images/muonline.png"}
        projectLink={project?.projectLink}
        githubLink={undefined} // No aplica si no es open source
        category="Proyecto Freelance"
        date="2025"
        client="Cliente particular"
      />
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Acerca de Este Proyecto</h2>
        <p className="text-lg leading-relaxed">{project?.description}</p>
      </div>
      <TechCarousel technologies={technologies} />
      <ProjectFeatures features={features} />
    </div>
  );
}
