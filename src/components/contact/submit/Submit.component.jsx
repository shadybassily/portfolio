import React, { useEffect, useState } from "react";
import { BsCheck2Square } from "react-icons/bs";
import { motion } from "framer-motion";
import "./submit.styles.css";
export default function Submit(props) {
  const {disable} = props
  const [isSubmit, setIsSubmit] = useState(false);

  const toggleSubmit = () => {
    setIsSubmit(true)
  };

  useEffect(()=>{
    if(isSubmit){
       setTimeout(() => {
        setIsSubmit(false)
       }, 1500);
    }
  },[isSubmit])

  const submitButton = {
    clicked:{y: [0, -75, -75, 0,],borderRadius:50},
    notClicked :{}
  }
  return (
    <div className="submit-container">
      <motion.div
        onClick={toggleSubmit}
        variants={submitButton}
        animate={isSubmit ? "clicked" : "notClicked"}
        transition={{ duration: 1.5 }}
      >
        <input type="submit" value="send" disabled={disable}/>
        <div className="checked">
          <BsCheck2Square />
        </div>
      </motion.div>
    </div>
  );
}
