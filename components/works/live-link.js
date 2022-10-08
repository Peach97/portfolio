import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "../../styles/Works.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const LiveLink = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringSource, setIsHoveringSource] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleMouseEnterSource = () => {
    setIsHoveringSource(true);
  };
  const handleMouseLeaveSource = () => {
    setIsHoveringSource(false);
  };
  return (
    <Box className={styles.bottomNav}>
      <Box
        className={styles.sourceCodeBtn}
        component={Button}
        sx={{
          bgcolor: "background.contrast",
          color: "background.default",
        }}
        onMouseEnter={handleMouseEnterSource}
        onMouseLeave={handleMouseLeaveSource}
        href={props.github}
        target="_blank"
      >
        <GitHubIcon fontSize="medium" sx={{ marginRight: "0.5rem" }} />

        <Typography>Source Code</Typography>
      </Box>
      <Box
        component={Button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {}}
        bgcolor={isHovering ? "background.default" : "background.contrast"}
        color={isHovering ? "background.contrast" : "background.default"}
        className={styles.linkContainer}
        href={props.link}
        target="_blank"
      >
        <Typography className={styles.linkText}>{props.link}</Typography>
      </Box>
    </Box>
  );
};
export default LiveLink;
