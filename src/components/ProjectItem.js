import React from "react";

function ProjectItem({ projects }) {
  return (
    <div className="project-item">
      <h3>{projects.name}</h3>
      <p>{projects.about}</p>
      <div className="technologies">
        <span>{projects.technologies}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
