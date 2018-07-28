import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = props => {
  return props.projects.map((project, key) => (
    <ProjectCard key={key} project={project} />
  ));
};

export default ProjectsSection;
