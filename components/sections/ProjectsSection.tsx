import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export default function ProjectsSection() {
  const threeProjects = projects.slice(0, 3);

  return (
    <section className="ProjectsSection">
      <h4 className="ProjectsSection_Heading text-ld-teal text-center">
        PROJECTS
      </h4>
      <h3 className="ProjectsSection_Title text-center text-[58px]">
        Our Projects
      </h3>
      <h4 className="ProjectsSection_SubHeading text-[24px] text-center mb-10">
        Our projects showcase the latest innovations and insights
      </h4>
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
