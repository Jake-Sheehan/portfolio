import { getProjects } from "@/lib/mock-data";
import Project from "@/components/Project";

export default function Projects() {
  const projects = getProjects();

  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} data={project} />
      ))}
    </>
  );
}
