import ProjectCard from "@/components/project-card";

export const projects = [
  {
    title: "ALK Software",
    tag: "Frontend Development",
    imageUrl: "/images/ALKSoftware.png",
    type: "Web",
    detailsLink: "/works/alk-software",
    projectLink: "https://alk-software.vercel.app/",
    description: "My role in this project was to develop the ALK Software website from scratch. It uses Next.js, TypeScript, React, TailwindCSS, HTML, and CSS to create a professional and functional online presence.\n\nThe goal is to showcase ALK's services, enhance the user experience, and optimize the site's performance and SEO. The development stages include project setup, site design and layout, implementation of interactive features, and optimization and deployment on a suitable hosting platform."
  },
  {
    title: "WearFashion",
    tag: "Fullstack Development",
    imageUrl: "/images/Wearfashion.png",
    type: "Ecommerce",
    detailsLink: "/works/wearfashion",
    projectLink: "https://wearfashion.vercel.app/",
    description: "We developed an urban clothing e-commerce where I took on a leadership role, working on both the backend and frontend.\n\nOn the backend, I created routes and models, implemented a payment gateway, and managed user registration on the website. On the frontend, I integrated the database with various products and users, developed components for an intuitive and visually appealing user interface, and handled user registration and login—from the creation of the page to storing user data in the database and managing permissions within the site.\n\nThis project included the development of a product management system, shopping carts, and an efficient payment process, ensuring a smooth and enjoyable user experience."
  },
  {
    title: "Drivers",
    tag: "Fullstack Development",
    imageUrl: "/images/henry.jpg",
    type: "API Integration",
    detailsLink: "/works/drivers",
    projectLink: "https://github.com/alejoborracci21/PI-Drivers",
    description: "Drivers was an individual project I developed at SoyHenry. Upon entering, the first thing we see is the landing page. Then, we navigate to the main page, where the different drivers stored in the database are displayed.\n\nUsers can filter these drivers by team, age, and name. Additionally, new drivers can be added through a form. Finally, there is an 'About Me' section, where a brief description of the project and myself as a developer is presented."
  },
];

export default function Works() {
  return (
    <div className="w-full min-h-screen bg-transparent text-foreground px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-16 text-center">
          Works
        </h1>
        <div className="space-y-8 bg-transparent">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
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