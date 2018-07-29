import React from "react";
import BarChart from "../charts/BarChart";

const ProjectCard = props => {
  const { project } = props;
  return (
    <div>
      <label>{project.name}</label>
      <p>{project.description}</p>
      <BarChart {...props}/>
    </div>
  );
};

export default ProjectCard;
