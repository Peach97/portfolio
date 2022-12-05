import React from "react";
import { Paper, Box, Typography, Divider, useMediaQuery } from "@mui/material";
import styles from "../../styles/Card.module.css";
import { motion } from "framer-motion";
import { skills, tools } from "./skills";

const AboutCard = () => {
  const matches = useMediaQuery(`max-width: 968px`);
  return (
    <>
      <Box className={styles.aboutContainer}>
        <Paper
          className={styles.aboutPaper}
          sx={
            !matches
              ? { color: "text.primary", bgcolor: "background.default" }
              : { color: "text.primary", bgcolor: "background.default" }
          }
          elevation={4}
        >
          <Typography variant="body1" className={styles.aboutText}>
<<<<<<< HEAD
            Hi 👋 I&apos;m Cameron! I am currently looking for beginner
            full-stack developer positions. While I specialize in front-end
            development in React, my freelance work has given me experience with
            many powerful libraries, concepts, and tools. From wireframes to
            CI/CD, I relish the opportunity to bring digital product ideas to
            life. Eternally curious, I am quick to learn and apply any modern
            technologies that will improve a user’s experience on the web.
            Offline, I spend my time lifting weights, reading, or creating 3D
            Blender models - like the ones in this application!
=======
            Hi 👋 I&apos;m Cameron! I am currently looking for beginner full-stack developer positions. While I specialize in front-end development in React, my freelance work has given me experience with many powerful libraries, concepts, and tools. From wireframes to CI/CD, I relish the opportunity to bring digital product ideas to life. Eternally curious, I am quick to learn and apply any modern technologies that will improve a user’s experience on the web.
            Offline, I spend my time lifting weights, reading, or creating 3D Blender models - like the ones in this application!
>>>>>>> fcfd7f4554c252c5ba86c20a40b340ed1e31c74b
          </Typography>
          <Box className={styles.skillsBox}>
            <Divider sx={{ width: "100%", marginTop: "2.5rem" }} />
            <Typography
              gutterBottom
              variant="h4"
              className={styles.skillsHeading}
            >
              Skills:
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
        </Paper>
      </Box>
    </>
  );
};
export default AboutCard;
