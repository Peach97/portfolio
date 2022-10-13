import React, { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Experience from "../components/Experience/Experience";
import ScrollButton from "../components/StyledComponents/ScrollButton";
import { bounceTransition } from "../components/Transitions/transitions";
import { motion } from "framer-motion";
import AboutCard from "../components/about/about";
import Skills from "../components/about/skills";
import WorksCard from "../components/works/cards";
import ContactCard from "../components/contact/card";
import Footer from "../components/footer/footer";

export default function HeroSection({ toggle, path }) {
  useEffect(() => {
    const experience = new Experience(
      document.querySelector(".experience-canvas")
    );
  });

  return (
    <>
      <Box
        className="hero"
        component="section"
        sx={{ bgcolor: "background.default" }}
      >
        <motion.div
          transition={bounceTransition}
          animate={{ y: ["5%", "-5%"] }}
          className="scroll-btn-left"
        >
          <ScrollButton />
        </motion.div>
        <motion.div
          transition={bounceTransition}
          animate={{ y: ["5%", "-5%"] }}
          className="scroll-btn-right"
        >
          <ScrollButton />
        </motion.div>
        <div className="hero-wrapper">
          <div className="experience">
            <canvas className="experience-canvas"></canvas>
          </div>

          <Box className="hero-main" color="text.primary">
            <Typography
              className="hero-main-description"
              textTransform="none"
              fontWeight={800}
            >
              Hello,
            </Typography>
            <Typography
              textTransform="none"
              className="hero-main-subtitle"
              fontWeight={800}
            >
              I&apos;m Cameron.
            </Typography>
            <Typography
              textTransform="none"
              className="hero-main-title"
              fontWeight={400}
            >
              I do full stack development, design, and a bit of 3D modeling.
            </Typography>
          </Box>
        </div>
      </Box>
      <Box
        sx={{ bgcolor: "background.default" }}
        component="div"
        className="first-move section-margin-edit"
      ></Box>
      <Box
        sx={{
          bgcolor: "background.default",
          display: "flex",
          alignItems: "end",
        }}
        component="div"
        id="second-move"
        className="second-move section-margin"
      >
        <AboutCard toggle={toggle} />
        <Skills toggle={toggle} />
      </Box>
      <Box
        id="third-move"
        className="third-move section-margin"
        component="div"
        sx={{
          bgcolor: "background.default",
          paddingTop: "auto",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "end",
        }}
      >
        <WorksCard path={path} toggle={toggle} />
      </Box>
      <Box
        className="fourth-move section-margin"
        component="div"
        sx={{
          bgcolor: "transparent",
          display: "flex",
          paddingTop: "auto",
          justifyContent: "flex-end",
        }}
      >
        <ContactCard />
      </Box>
      <Box
        sx={{ alignItems: "end", display: "flex" }}
        className="fifth-move section-margin"
      ></Box>
    </>
  );
}
