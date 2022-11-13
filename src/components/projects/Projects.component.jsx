import React from "react";
import "./projects.styles.css";
import ProjectCard from "./project-card/ProjectCard.component";
import crownClothingPhoto from '../../assets/images/projects/crown.svg'
import tetrisPhoto from '../../assets/images/projects/tetris.jpeg'
export default function Projects() {
  const projectsData = [
    {
      id: 1,
      name: "Crown-Clothing",
      projectPhoto:crownClothingPhoto,
      gitHubUrl: "https://github.com/shadybassily/crwn-clothing",
      visitUrl: "https://crown-clothing-productio-c9da6.web.app/",
    },
    {
      id: 2,
      name: "Tetris",
      projectPhoto:tetrisPhoto,
      gitHubUrl: "https://github.com/shadybassily/tetris",
      visitUrl: "https://shadybassily.github.io/tetris/",
    },
  ];
  return (
    <div className="section projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container info-container ">
      {
        projectsData.map(project => {
          return <ProjectCard key={project.id} project={project}/>
        })
      }
        
      </div>
    </div>
  );
}
