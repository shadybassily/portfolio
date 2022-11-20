import React, {useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { motion } from "framer-motion";
import "./animating-btn.styles.css";

export default function AnimatingBtn(props) {
  const { disable, type } = props;
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 1500);
    }
  }, [isClicked]);

  const btnAnimation = {
    clicked: { y: [0, -50, -50, 0] },
    notClicked: {},
  };
  return (
    <div
      className="animating-btn-container"
      onClick={() => {
        setIsClicked(true);
      }}
    >
      <motion.div
        variants={btnAnimation}
        // if clicked, and not errors then allow the animation
        animate={isClicked & !disable && "clicked"}
        transition={{ duration: 1.2 }}
      >
        <button type={type} className="animating-btn" disabled={disable}>
          {props.children}
        </button>
        <div className="checked">
          <AiOutlineCheck />
        </div>
      </motion.div>
    </div>
  );
}
