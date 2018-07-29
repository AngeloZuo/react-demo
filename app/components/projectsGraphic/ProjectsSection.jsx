import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = props => {
  return props.projects.map((project, key) => (
    <ProjectCard key={key} productKey={key} project={project} />
  ));
};

export default ProjectsSection;
