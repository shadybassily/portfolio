import React from "react";
import "./projects.styles.css";
import ProjectCard from "./project-card/ProjectCard.component";
import crownClothingPhoto from "src/assets/images/projects/crown.svg";
import calculatorPhoto from "src/assets/images/projects/calculator.jpg";
import todoPhoto from "src/assets/images/projects/todo.jpg";
import reactImage from "src/assets/images/projects/react-icon.png";
import textEditor from "src/assets/images/projects/text-editor.png";
import quokka from "src/assets/images/projects/quokka.svg";
import resala from "src/assets/images/projects/resala.svg";
import ventx from "src/assets/images/projects/ventx.svg";
import callHealth from "src/assets/images/projects/callHealth.png";

import { Stack, Typography } from "@mui/material";

export default function Projects() {
  const projectsData = [
    {
      name: "Quokkapedia",
      projectPhoto: quokka,
      visitUrl: "https://preprod.www.quokkapedia.io/#/",
    },
    {
      name: "Resala",
      projectPhoto: resala,
      visitUrl: "https://resala.io/",
    },
    {
      name: "VentX",
      projectPhoto: ventx,
      visitUrl: "https://dashboardstaging.ventx-app.com/",
    },
    {
      name: "Call health",
      projectPhoto: callHealth,
      visitUrl: "http://second_clinet.dev.callhealth.care/login",
    },
    {
      name: "Crown-Clothing",
      projectPhoto: crownClothingPhoto,
      visitUrl: "https://crown-clothing-productio-c9da6.web.app/",
    },
    // {
    //   name: "Text Editor",
    //   projectPhoto: textEditor,
    //   visitUrl: "https://shadybassily.github.io/text-editor/",
    // },
    // {
    //   name: "Reusable React Components",
    //   projectPhoto: reactImage,
    //   visitUrl: "https://shadybassily.github.io/reusable-react-components/",
    // },
    // {
    //   name: "Calculator",
    //   projectPhoto: calculatorPhoto,
    //   visitUrl: "https://shadybassily.github.io/Calculator/",
    // },
    // {
    //   name: "Todo App",
    //   projectPhoto: todoPhoto,
    //   visitUrl: "https://shadybassily.github.io/todo-app/",
    // },
  ];
  return (
    <section className="section projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <Stack className="projects-container info-container ">
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {projectsData.map((project, i) => {
            return <ProjectCard key={i} project={project} />;
          })}
        </Stack>
      </Stack>
    </section>
  );
}
