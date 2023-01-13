import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  let myProjects = projects.map ((project)=> {
    
    return <ProjectItem 
              key={project.id} 
              name = {project.name} 
              about = {project.about} 
              technologies= {project.technologies} 
            />
  });

  return (
    <div> 
      {myProjects} 
    </div>
  );
}

export default ProjectList;
