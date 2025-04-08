import ProjectDetails from "@/components/project-detail";
import TechCarousel from "@/components/tech-carousel";
import { projects } from "../projects";
import ProjectFeatures from "@/components/project-features";

export default function Wearfashion() {
  const project = projects[1];

  // Technology stack
  const technologies = [
    {
      name: "Node.js",
      icon: "/images/nodejs.svg",
    },
    {
      name: "React",
      icon: "/images/react.svg",
    },
    {
      name: "Redux",
      icon: "/images/redux.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/images/postgresql.svg",
    },
    {
      name: "Sequelize",
      icon: "/images/sequelize.svg",
    },
    {
      name: "Express",
      icon: "/images/expressjs.svg",
    },
    {
      name: "Firebase",
      icon: "/images/firebase.svg",
    },
  ];

  const features = [
    {
      title: "Team Collaboration & Leadership",
      description:
        "Led the team throughout the project, organized daily meetings, coordinated development sprints, and encouraged technical discussions.",
    },
    {
      title: "E-commerce Functionality",
      description:
        "Implemented product listings, user registration/login, shopping cart logic, and order handling for a complete buying experience.",
    },
    {
      title: "User Authentication",
      description:
        "Enabled secure user registration and login using Firebase, including role-based access for different sections of the app.",
    },
    {
      title: "State Management with Redux",
      description:
        "Used Redux to manage application-wide state for products, users, and shopping cart, ensuring consistent and reactive behavior.",
    },
    {
      title: "Database Integration",
      description:
        "Synchronized backend data with the frontend using Sequelize and PostgreSQL for reliable product and user data management.",
    },
    {
      title: "Clean & Responsive UI",
      description:
        "Developed with React and custom CSS, ensuring mobile-first responsive design and a clear, engaging shopping interface.",
    },
  ];
  

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-background to-background/95 text-foreground py-12 space-y-16">
      {/* Hero section with project details */}
      <ProjectDetails
        title={project.title}
        imageUrl={project.imageUrl}
        projectLink={project.projectLink}
        githubLink="https://github.com/DanielJulianCardenasMora/proyecto_grupal_henry"
        category="E-commerce"
        date="2023"
        client="Wearfashion"
      />
      {/* About section */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-accent rounded-full" />
          <h2 className="text-3xl font-bold mb-6">About This Project</h2>
        </div>
        <p className="text-lg leading-relaxed">{project.description}</p>
        <div className="mt-8 p-6 bg-card/30 border border-border/40 rounded-xl">
          <blockquote className="italic text-muted-foreground">
            “Alejo stood out as a natural leader during the development of this
            project. He consistently led our daily stand-ups, proposed new
            features, initiated technical discussions, and supported the entire
            team with strong communication and collaboration skills. He also
            wrote a significant portion of the code and confidently presented
            the project to our reviewers. His teammates were proud to work with
            him and praised his supportive and professional attitude.”
          </blockquote>
          <p className="mt-4 font-medium">— Final Project Reviewer, SoyHenry</p>
        </div>
      </div>

      {/* Technology carousel */}
      <TechCarousel technologies={technologies} />

      {/* Key features */}
      <ProjectFeatures features={features} />

      {/* Call to action */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-20">
        <div className="p-8 rounded-xl bg-gradient-to-br from-accent/10 via-transparent to-accent/5 border border-border/40">
          <h2 className="text-2xl font-bold mb-4">
            Interested in a similar project?
          </h2>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss how we can create a custom solution tailored to
            your specific needs.
          </p>
          <a
            href="mailto:alejotrabajo2001@hotmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}