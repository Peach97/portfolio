import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Typography, Paper, Divider } from "@mui/material";
import styles from "../../styles/Card.module.css";
import { Box } from "@mui/system";
import { EventEmitter } from "./events";
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
function Skills({ toggle }) {
  return (
    <>
      <Box className="skills-container">
        <Typography
          variant="h5"
          component="div"
          sx={{ margin: "0 0 1rem 0" }}
          fontWeight={800}
        >
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
                bgcolor={toggle ? "background.default" : "background.text"}
                gutterBottom
                variant="h5"
                color="text.primary"
              >
                {skill}
              </Typography>
            </motion.div>
          ))}
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
              bgcolor={toggle ? "background.default" : "background.text"}
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
