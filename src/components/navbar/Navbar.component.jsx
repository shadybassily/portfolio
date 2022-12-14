import React, { useEffect, useState } from "react";
import "./navbar.styles.css";
import { motion, useScroll } from "framer-motion";
import logo from "../../assets/images/logo.png";
import ProgressBar from "../progress-bar/ProgressBar.component";
import NavMenu from "./navmenu/NavMenu.component";
export default function Navbar() {
  const { scrollY } = useScroll();
  const [currentScroll, setCurrentScroll] = useState(0);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setCurrentScroll(latest);
    });
  }, []);

  return (
    <motion.nav
      animate={{
        paddingTop: currentScroll > 50 ? 0 : 5,
        paddingBottom: currentScroll > 50 ? 0 : 5,
      }}
      transition={{ duration: 0.3 }}>
      <motion.div
        className="logo-container"
        animate={{ rotate: currentScroll > 50 ? 90 : 0 }}
        transition={{ duration: 0.3 }}>
        <img className="logo" src={logo} alt="logo" />
      </motion.div>

      <NavMenu />
      <ProgressBar />
    </motion.nav>
  );
}
