import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import styles from "../../styles/Card.module.css";
import { Box } from "@mui/system";

export const skills = [
  "ReactJS",
  "JavaScript",
  "CSS",
  "HTML",
  "MaterialUI",
  "ExpressJS",
  "MongoDB",
  "Node JS",
  "Bootstrap",
  "ThreeJS",
  "jQuery",
  "Python",
  "Debugging",
];
export const tools = [
  "Github",
  "Figma",
  "Adobe Creative Cloud",
  "Adobe Photoshop",
  "Jira/Confluence",
  "GSAP",
  "GIMP",
  "Framer/Motion",
  "Blender",
  "Various Deployment Pipelines",
  "APIs",
];

function Skills() {
  return (
    <>
      <Box className="skills-container">
        <Typography
          variant="h5"
          component="div"
          sx={{
            margin: "0 0 1rem 0",
            justifyContent: "center",
          }}
          fontWeight={800}
        >
          <Typography
            fontWeight={800}
            variant="h3"
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Technologies & Frameworks
          </Typography>

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
                fontWeight={800}
                color="text.primary"
              >
                {skill}
              </Typography>
            </motion.div>
          ))}
        </Typography>
        <Typography
          fontWeight={800}
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          Database & Analytics
        </Typography>
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
              fontWeight={800}
              gutterBottom
              color="text.primary"
              variant="h5"
            >
              {tool}
            </Typography>
          </motion.div>
        ))}
      </Box>
    </>
  );
}

export default Skills;
