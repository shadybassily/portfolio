import React, { useEffect, useState } from "react";
import cv from "../../assets/cv/Shady_Bassily_cv_front_end.pdf";
import { BsFillCloudDownloadFill } from "react-icons/bs"; //download
import { AiOutlineCheck } from "react-icons/ai"; //checked
import { motion } from "framer-motion";

export default function DownloadCV() {
  const [isDownload, setIsDownload] = useState(false);
  const toggleDownload = () => {
    setIsDownload(true);
  };

  useEffect(() => {
    if (isDownload) {
      setTimeout(() => {
        setIsDownload(false);
      }, 1000);
    }
  }, [isDownload]);

  const downloadText = {
    clicked: { y: [0, -40, -40, 0] },
  };

  return (
    <div className="download-btn-container">
      <a className="download-btn" onClick={toggleDownload} href={cv} download>
        <motion.div
          variants={downloadText}
          className="dowload-text-container"
          animate={isDownload ? "clicked" : "notClicked"}
        >
          <p className="download-text">
            download CV{" "}
            <span className="download-icon">
              <BsFillCloudDownloadFill />
            </span>
          </p>
          <p className="download-complete">
            <AiOutlineCheck />
          </p>
        </motion.div>
      </a>
    </div>
  );
}
