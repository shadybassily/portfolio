import React, { useEffect, useState } from "react";
import "./nav-menu.styles.css";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
export default function NavMenu() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  const navMenuItems = (
    <>
      <li className="link underline-on-hover">home</li>
      <li className="link underline-on-hover">about</li>
      <li className="link underline-on-hover">projects</li>
      <li className="link underline-on-hover">contact</li>
    </>
  );

  const menuAnimation = {
    visible: { scale: 1,height:"fit-content" },
    hidden: { scale: 0,height:0},

  };

  return (
    <ul className="nav-links">
      {screenWidth > 700 ? (
        navMenuItems
      ) : (
        <div
          onMouseEnter={() => {
            setIsMenuVisible(true);
          }}
          onMouseLeave={() => {
            setIsMenuVisible(false);
          }}
        >
          <span className="menu-icon"><AiOutlineMenu /></span>
          <motion.div
            className="animated-menu"
            variants={menuAnimation}
            initial="hidden"
            animate={isMenuVisible ? "visible" : "hidden"}
            transition={{duration:0.3}}
          >
            {navMenuItems}
          </motion.div>
        </div>
      )}
    </ul>
  );
}
