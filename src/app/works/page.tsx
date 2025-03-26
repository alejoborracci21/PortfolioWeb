import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "ALK Software",
    projectName: "ALK Software",
    tag: "Frontend Development",
    imageUrl: "/ALKSoftware.png",
    type: "Web",
    detailsLink: "/projects/alk-software",
    projectLink: "https://alk-software.com",
    description: "A comprehensive software solution developed with modern frontend technologies, focusing on user experience and performance optimization."
  },
  {
    title: "WearFashion",
    projectName: "WearFashion",
    tag: "Fullstack Development",
    imageUrl: "/images/Wearfashion.png",
    type: "Web",
    detailsLink: "/projects/wear-fashion",
    projectLink: "https://wear-fashion.com",
    description: "An innovative e-commerce platform integrating frontend and backend technologies to create a seamless shopping experience."
  },
  {
    title: "Drivers",
    projectName: "Drivers",
    tag: "Fullstack Development",
    imageUrl: "/ALKSoftware.png",
    type: "Web",
    detailsLink: "/projects/drivers",
    projectLink: "https://drivers-app.com",
    description: "A web application designed to streamline driver management and tracking, with robust fullstack implementation."
  },
];

export default function Works() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-16 text-center">
          Works
        </h1>
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              projectName={project.projectName}
              tag={project.tag}
              imageUrl={project.imageUrl}
              type={project.type}
              detailsLink={project.detailsLink}
              projectLink={project.projectLink}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};