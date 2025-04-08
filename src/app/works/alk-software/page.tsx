import ProjectDetails from "@/components/project-detail";
import TechCarousel from "@/components/tech-carousel";
// import ProjectFeatures from "@/components/project-features";
// import ProjectGallery from "@/components/project-gallery";
import { projects } from "../projects";

export default function ALKSoftware() {
  const project = projects[0];

  // Technology stack
  const technologies = [
    {
      name: "TypeScript",
      icon: "/images/typescript.svg",
    },
    {
      name: "Next.js",
      icon: "/images/next.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "/images/tailwind.svg",
    },
    {
      name: "React",
      icon: "/images/react.svg",
    },
    {
      name: "HTML",
      icon: "/images/html.svg",
    },
    {
      name: "CSS",
      icon: "/images/css.svg",
    },
  ];

  // Project features
  // const features = [
  //   {
  //     title: "Responsive Design",
  //     description: "Fully responsive interface that works seamlessly across desktop, tablet, and mobile devices.",
  //   },
  //   {
  //     title: "Real-time Updates",
  //     description: "Live data synchronization ensures all users see the most current information without refreshing.",
  //   },
  //   {
  //     title: "Advanced Analytics",
  //     description: "Comprehensive dashboards with visual representations of key performance metrics and trends.",
  //   },
  //   {
  //     title: "User Authentication",
  //     description: "Secure multi-factor authentication system with role-based access control.",
  //   },
  //   {
  //     title: "API Integration",
  //     description: "Seamless integration with third-party services and APIs for extended functionality.",
  //   },
  //   {
  //     title: "Performance Optimization",
  //     description: "Optimized for speed with efficient code splitting, lazy loading, and caching strategies.",
  //   },
  // ];

  // Gallery images
  // const galleryImages = [
  //   "/placeholder.svg?height=600&width=800",
  //   "/placeholder.svg?height=600&width=800",
  //   "/placeholder.svg?height=600&width=800",
  //   "/placeholder.svg?height=600&width=800",
  // ];

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-background to-background/95 text-foreground py-12 space-y-16">
      <ProjectDetails
        title={project.title}
        imageUrl={project.imageUrl}
        projectLink={project.projectLink}
        githubLink="https://github.com/alejoborracci21/ALK-Software"
        category="Enterprise Software"
        date="2023"
        client="ALK Software"
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
            This project revolutionized how we manage our internal processes,
            resulting in a 40% increase in team productivity.
          </blockquote>
          <p className="mt-4 font-medium">— Client Testimonial</p>
        </div>
      </div>

      {/* Technology carousel */}
      <TechCarousel technologies={technologies} />

      {/* Key features */}
      {/* <ProjectFeatures features={features} /> */}

      {/* Project gallery */}
      {/* <ProjectGallery images={galleryImages} title={project.title} /> */}

      {/* Call to action */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-10">
        <div className="p-8 rounded-xl bg-gradient-to-br from-accent/10 via-transparent to-accent/5 border border-border/40">
          <h2 className="text-2xl font-bold mb-4">
            Interested in a similar project?
          </h2>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss how we can create a custom solution tailored to your
            specific needs.
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