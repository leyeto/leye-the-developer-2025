import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  const threeProjects = projects.slice(0, 3);

  return (
    <section className="ProjectsSection ">
      <h4 className="ProjectsSection_Heading text-ld-teal text-center">
        PROJECTS
      </h4>
      <h3 className="ProjectsSection_Title">Our Projects</h3>
      <div className="ProjectsSection_List grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {threeProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
