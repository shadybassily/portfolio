import React from "react";
import "./social-media.styles.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";

export default function SocialMedia() {
  return (
    <div className="social-media-container">
      <a className="icon" href="https://www.linkedin.com/in/shady-bassily-788686228/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a className="icon" href="https://github.com/shadybassily" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a className="icon" href="https://www.codewars.com/users/shadybassily" target="_blank" rel="noreferrer">
        <SiCodewars />
      </a>
    </div>
  );
}
