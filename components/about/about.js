import React, { useState, useRef } from "react";
import { Paper, Box, Typography, Divider, useMediaQuery } from "@mui/material";
import styles from "../../styles/Card.module.css";
import { LogoButtonWhite, LogoButtonBlack } from "../Navbar/MenuButton";

import { motion } from "framer-motion";

// const style = {
//   '@media (max-width: 968px)': {
//     bgcolor: "background.transparent"
//   },
// };

const skills = [
  "React",
  "JavaScript",
  "CSS",
  "HTML",
  "MaterialUI",
  "ExpressJS",
  "MongoDB",
  "NodeJS",
  "Bootstrap",
  "ThreeJS",
  "JQuery",
  "Debugging",
  "Python",
];

const tools = [
  "Github",
  "Figma",
  "Adobe Express",
  "Adobe Photoshop",
  "GIMP",
  "Blender",
  "APIs",
];

const AboutCard = ({ toggle }) => {
  const matches = useMediaQuery(`max-width: 968px`);
  return (
    <>
      <Box className={styles.aboutContainer}>
        <Paper
          className={styles.aboutPaper}
          sx={
            !matches
              ? { color: "text.primary", bgcolor: "background.transparent" }
              : { color: "text.primary", bgcolor: "background.default" }
          }
          elevation={4}
        >
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
          <br />
          <br />
          <Box className={styles.skillsBox}>
            <Divider sx={{ width: "100%", marginTop: "2.5rem" }} />
            <Typography
              gutterBottom
              variant="h4"
              className={styles.skillsHeading}
            >
              Skills Include:
            </Typography>
            <Divider sx={{ width: "100%", marginBottom: "2.5rem" }} />
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.25, color: "#FFA500" }}
                className={styles.skills}
              >
                <Typography
                  sx={{
                    width: "fit-content",
                    padding: "0.25rem 1rem 0.25rem 1rem",
                    borderRadius: "64px",
                  }}
                  gutterBottom
                  variant="h5"
                  color="text.primary"
                >
                  {skill}
                </Typography>
              </motion.div>
            ))}
            <Divider sx={{ width: "100%", marginTop: "2.5rem" }} />
            <Typography gutterBottom variant="h4" className={styles.skills}>
              Tools:
            </Typography>
            <Divider sx={{ width: "100%", marginBottom: "2.5rem" }} />
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.25 }}
                className={styles.skills}
              >
                <Typography
                  sx={{
                    width: "fit-content",
                    padding: "0.25rem 1rem 0.25rem 1rem",
                    borderRadius: "32px",
                  }}
                  gutterBottom
                  color="text.primary"
                  variant="h5"
                >
                  {tool}
                </Typography>
              </motion.div>
            ))}
          </Box>
          {matches ? (
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
          ) : null}
        </Paper>
      </Box>
    </>
  );
};
export default AboutCard;
