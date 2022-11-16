import React from "react";
import "./project-card.styles.css";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from 'react-icons/bi';

export default function ProjectCard(props) {
  const{name,gitHubUrl,visitUrl,projectPhoto} = props.project
  const openInNewTab = (url) => {
    // setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${projectPhoto})` }}>
      <div
        className="icons-container">
        <div
          className="github-icon"
          onClick={() => {
            openInNewTab(gitHubUrl);
          }}
        >
          <AiFillGithub />
        </div>
        <div
          className="visit-icon"
          onClick={() => {
            openInNewTab(visitUrl);
          }}
        >
          <BiWorld />
        </div>
      </div>
      <div className="project-name">{name}</div>
    </div>
  );
}
