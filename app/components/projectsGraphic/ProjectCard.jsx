import React, { Fragment } from "react";

const ProjectCard = props => {
  const { project } = props;
  return (
    <Fragment>
      <label>{project.name}</label>
      <p>{project.description}</p>
    </Fragment>
  );
};

export default ProjectCard;
