import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  let myProjeccts = projects.map ((projos, ind)=> {
    return (
      <ProjectItem projects = {projos}></ProjectItem>
    )
  })

  // console.log (myProjos)


  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {myProjeccts}
      </div>
    </div>
  );
}

export default ProjectList;
