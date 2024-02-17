import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavHashLink } from "react-router-hash-link";
import "./nav-menu.styles.css";

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
      <NavHashLink to="portfolio/#about" smooth>
        <li className="link underline-on-hover">about</li>
      </NavHashLink>
      <NavHashLink to="portfolio/#projects" smooth>
        <li className="link underline-on-hover">projects</li>
      </NavHashLink>
      <NavHashLink to="portfolio/#contact" smooth>
        <li className="link underline-on-hover">contact</li>
      </NavHashLink>
    </>
  );

  const menuAnimation = {
    visible: { scaleY: 1 },
    hidden: { scaleY: 0, transformOrigin: "top" },
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
          <span className="menu-icon">
            <AiOutlineMenu />
          </span>
          <motion.div
            className="animated-menu"
            variants={menuAnimation}
            initial="hidden"
            animate={isMenuVisible ? "visible" : "hidden"}
            transition={{ duration: 0.3 }}
          >
            {navMenuItems}
          </motion.div>
        </div>
      )}
    </ul>
  );
}
