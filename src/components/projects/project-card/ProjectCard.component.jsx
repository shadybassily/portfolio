import React from "react";
import "./project-card.styles.css";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
const card = {
  hovered: {
    filter: "brightness(75%)",
    backgroundSize: "60% 45%",
  },
  notHovered: {
    filter: "brightness(100%)",
  },
};

const iconsContainer = {
  hovered: {
    y: 5,
  },
  notHovered: {
    y: -50,
  },
};
export default function ProjectCard(props) {
  const{name,gitHubUrl,visitUrl,projectPhoto} = props.project
  console.log(projectPhoto)
  const openInNewTab = (url) => {
    // setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <motion.div
      className="card"
      style={{ backgroundImage: `url(${projectPhoto})` }}
      variants={card}
      initial="notHovered"
      whileHover="hovered"
      whileTap="hovered"
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="icons-container"
        variants={iconsContainer}
        transition={{ duration: 0.3 }}
      >
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
          visit
        </div>
      </motion.div>
      <div className="project-name">{name}</div>
    </motion.div>
  );
}
