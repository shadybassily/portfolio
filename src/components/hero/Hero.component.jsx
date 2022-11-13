import React from "react";
import "./hero.styles.css";
import { motion } from "framer-motion";
import personalPhoto from "../../assets/images/personal-photo.png";
export default function Hero() {
  return (
    <motion.div className="hero-section">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        I<span className="green">'</span>m
        <span className="green"> Shady Bassily</span>, <br />
        a Web Developer, <br />
        and I Have a Thing For Sushi
        <motion.div
          initial={{ x: 5 }}
          animate={{ y: [-5, 0, -5] }}
          style={{ display: "inline-block" }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          &#127843;
        </motion.div>
      </motion.h1>
      <motion.div
        className="personal-photo-container"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <img src={personalPhoto} alt="avatar" />
      </motion.div>
    </motion.div>
  );
}
