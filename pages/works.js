import { Container } from "@mui/system";
import React from "react";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/system";

function Works() {
  return (
    <div>
      <Box id="works-container" className={styles.works}>
        <Box className={styles.worksBox}>This is the works page</Box>
      </Box>
    </div>
  );
}

export default Works;
