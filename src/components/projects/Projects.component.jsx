import React from "react";
import "./projects.styles.css";
import ProjectCard from "./project-card/ProjectCard.component";
export default function Projects() {
  return (
    <div className="section projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container info-container ">
        <ProjectCard />
      </div>
    </div>
  );
}
