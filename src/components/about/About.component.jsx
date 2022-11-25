import { motion } from "framer-motion";
import React from "react";
import AnimatingBtn from "../animating-btn/AnimatingBtn.component";
import "./about.styles.css";
import cv from "../../assets/cv/SHADY_BASSILY_CV.pdf";
export default function About() {
  const windowWidth = window.screen.width;

  return (
      <section className="section about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="info-container">
        <motion.div
          className="info"
          initial={windowWidth > 800 ? { x: "-100%" } : { y: "-100%" }}
          whileInView={windowWidth > 800 ? { x: 0 } : { y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            a highly motivated and self-drived web developer, who's in love with
            coding, building things is a passion for me.
          </p>
          <p>
            joined the information technology institute <strong>(ITI)</strong>{" "}
            Django & ReactJS full stack intensive course.
          </p>

          <a href={cv} download className="download-cv">
            <AnimatingBtn>Download CV</AnimatingBtn>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
