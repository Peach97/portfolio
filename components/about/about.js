import React, { useState, useRef } from "react";
import { Paper, Box, Typography, Divider } from "@mui/material";
import styles from "../../styles/Card.module.css";
import { LogoButtonWhite, LogoButtonBlack } from "../Navbar/MenuButton";

const AboutCard = ({ toggle }) => {
  // const [open, setOpen] = useState(null);
  // const scrollRef = useRef(null);

  return (
    <>
      <Box className={styles.aboutContainer}>
        <Paper
          className={styles.aboutPaper}
          sx={{ color: "text.primary", bgcolor: "background.transparent" }}
          elevation={4}
        >
          {/* <Typography
            className={styles.aboutHeading}
            fontWeight={800}
            variant="h4"
            gutterBottom
          >
            Click the toolbox to check out my skills!
          </Typography> */}
          {/* <Divider sx={{ marginBottom: "2.5rem", borderBottomWidth: "2px" }} /> */}
          <Typography variant="subtitle" className={styles.aboutText}>
            I’m a web developer that designs, builds, and deploys standout web
            applications. My passion for learning, coupled with numerous
            freelance projects, has given me practical experience with many
            powerful web tools.
            <br />
            <br />
            {/* I believe that with the right vision and resources, the creation
            possibilities on the web are endless. Engaging user interfaces,
            powerful digital experiences, and overall scalable products are what
            I strive to provide.
            <br />
            <br />
            That being said I also believe in letting my work speak for itself -
            check out my recent projects below. */}
          </Typography>
          <div
            style={{
              position: "relative",
              display: "flex",
              width: "100%",
              height: "25rem",
              justifyContent: "center",
            }}
          >
            {!toggle ? (
              <LogoButtonBlack height={75} width={75} />
            ) : (
              <LogoButtonWhite height={75} width={75} />
            )}
          </div>
        </Paper>
      </Box>
    </>
  );
};
export default AboutCard;
