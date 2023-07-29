import React from 'react';
import './projects.styles.css';
import ProjectCard from './project-card/ProjectCard.component';
import crownClothingPhoto from '../../assets/images/projects/crown.svg';
import calculatorPhoto from '../../assets/images/projects/calculator.jpg';
import todoPhoto from '../../assets/images/projects/todo.jpg';
import reactImage from '../../assets/images/projects/react-icon.png';
import textEditor from '../../assets/images/projects/text-editor.png';

export default function Projects() {
   const projectsData = [
      {
         id: 1,
         name: 'Text Editor',
         projectPhoto: textEditor,
         gitHubUrl: 'https://github.com/shadybassily/text-editor/',
         visitUrl: 'https://shadybassily.github.io/text-editor/',
      },
      {
         id: 2,
         name: 'Reusable React Components',
         projectPhoto: reactImage,
         gitHubUrl: 'https://github.com/shadybassily/reusable-react-components',
         visitUrl: 'https://shadybassily.github.io/reusable-react-components/',
      },
      {
         id: 3,
         name: 'Crown-Clothing',
         projectPhoto: crownClothingPhoto,
         gitHubUrl: 'https://github.com/shadybassily/crwn-clothing',
         visitUrl: 'https://crown-clothing-productio-c9da6.web.app/',
      },

      {
         id: 4,
         name: 'Calculator',
         projectPhoto: calculatorPhoto,
         gitHubUrl: 'https://github.com/shadybassily/Calculator',
         visitUrl: 'https://shadybassily.github.io/Calculator/',
      },
      {
         id: 5,
         name: 'Todo App',
         projectPhoto: todoPhoto,
         gitHubUrl: 'https://github.com/shadybassily/todo-app/',
         visitUrl: 'https://shadybassily.github.io/todo-app/',
      },
   ];
   return (
      <section className="section projects" id="projects">
         <h2 className="section-title">Projects</h2>
         <div className="projects-container info-container ">
            {projectsData.map((project) => {
               return <ProjectCard key={project.id} project={project} />;
            })}
         </div>
      </section>
   );
}
