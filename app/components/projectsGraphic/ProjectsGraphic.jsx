import React from "react";
import FetchProjects from "../../containers/projectsGraphic/FetchProjects";
import ProjectsSection from "./ProjectsSection";

const ProjectsGraphic = () => {
  return (
    <FetchProjects>
      {({ loading, projects, error }) => {
        if (loading) {
          return <div>Loading</div>;
        }
        if (error) {
          return <div>Error</div>;
        }

        return <ProjectsSection projects={projects} />;
      }}
    </FetchProjects>
  );
};

export default ProjectsGraphic;
