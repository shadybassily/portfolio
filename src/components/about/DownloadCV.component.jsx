import React, { useEffect, useState } from "react";
import cv from "../../assets/cv/Shady_Bassily_cv_front_end.pdf";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import { motion } from "framer-motion";
export default function DownloadCV() {
  const [isDownload, setIsDownload] = useState(false);
  const toggleSubmit = () => {
    setIsDownload(true);
  };

  useEffect(() => {
    if (isDownload) {
      setTimeout(() => {
        setIsDownload(false);
      }, 1500);
    }
  }, [isDownload]);

  const downloadButton = {
    clicked: { borderRadius: "45%", width: 40 },
    notClicked: {},
  };

  const downloadText = {
    clicked: { y: [0, -50, -50, -50, 0], x: [0, 0, 0, 0, 30] },
    notClicked: {},
  };
  const checked = {
    clicked: { y: [0, -33, -33, -33, 0] },
    notClicked: {},
  };
  return (
    <div className="download-btn-container">
      <motion.button
        className="download"
        onClick={toggleSubmit}
        variants={downloadButton}
        animate={isDownload ? "clicked" : "notClicked"}
        transition={{ duration: 0.3 }}
      >
        <motion.a
          href={cv}
          download
          variants={downloadText}
          transition={{ duration: 1 }}
          className="download-text"
        >
          download CV{" "}
          <span className="icon">
            <BsFillCloudDownloadFill />
          </span>
        </motion.a>
        <motion.a
          className="checked"
          variants={checked}
          transition={{ duration: 1.4 }}
        >
          <AiOutlineCheck />
        </motion.a>
      </motion.button>
    </div>
  );
}
