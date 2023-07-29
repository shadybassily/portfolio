import { motion } from 'framer-motion';
import React from 'react';
import AnimatingBtn from '../animating-btn/AnimatingBtn.component';
import './about.styles.css';
import cv from '../../assets/cv/Shady_Bassily_CV.docx';
export default function About() {
   const windowWidth = window.screen.width;

   return (
      <section className="section about" id="about">
         <h2 className="section-title">About Me</h2>
         <div className="info-container">
            <motion.div
               className="info"
               initial={windowWidth > 800 ? { x: '-100%' } : { y: '-100%' }}
               whileInView={windowWidth > 800 ? { x: 0 } : { y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <p>
                  • A highly motivated and self-drived web developer, who's in love with coding, and
                  building things is a passion for me, with experience in specializing in web
                  development, user interface design, HTML, and ReactJS. Adept at identifying
                  opportunities to enhance front-end design and improve the user experience.
               </p>
               <p>
                  • It all started when I had created my first HTML page saying hello world, not too
                  long after I joined the Information Technology Institutie - <strong>ITI </strong>
                  where I enrolled in the Full Stack Development using Django and ReactJS Diploma.
               </p>
               <p>
                  • After falling in love with JavaScript and its beauty, I decided to focus more on
                  front-end developement, specialized in ReactJS and its libraries, learning more
                  and more, and open to new technologies as well.
               </p>
               <a href={cv} download className="download-cv">
                  <AnimatingBtn>Download CV</AnimatingBtn>
               </a>
            </motion.div>
         </div>
      </section>
   );
}
