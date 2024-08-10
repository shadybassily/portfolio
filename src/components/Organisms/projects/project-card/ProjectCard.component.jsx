import React from "react";
import "./project-card.styles.css";
import { Stack, Typography } from "@mui/material";

export default function ProjectCard(props) {
  const { name, visitUrl, projectPhoto } = props.project;

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Stack
      onClick={() => {
        handleClick(visitUrl);
      }}
      sx={{
        backgroundImage: `url(${projectPhoto})`,
        backgroundSize: "40% 50%;",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: { xs: "100px", md: "200px" },
        width: { xs: "35%", sm: "30%", lg: "15%", xl: "18%" },
        cursor: "pointer",
        boxShadow: "",
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        p: 2,
        alignItems: "center",
        justifyContent: "end",
      }}
    >
      {/* <Typography sx={{ display: { xs: "none", md: "block" } }}>{name}</Typography> */}
    </Stack>
  );
}
