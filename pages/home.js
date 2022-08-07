import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import { Box, IconButton } from "@mui/material";
import down from "../public/images/down-arrow.png";
import { motion } from "framer-motion";
import { bounceTransition } from "../components/Transitions/transitions";
import Particles from "../components/ParticlesBackground";
import Heading from "../components/Heading/heading";
import { Container } from "@mui/system";
import Works from "../pages/works";
import PeachLoader from "../components/Three/peach-loader";

export default function HeroSection() {
  function scrollTo() {
    document.querySelector("#works-container").scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Box className={styles.header}>
        <Heading />
        {/* <IconButton onClick={scrollTo} className={styles.down}>
        <motion.div
        transition={bounceTransition}
        animate={{ y: ["50%", "-50%"] }}
        >
        <Image src={down} alt="/" />
        </motion.div>
      </IconButton> */}
      </Box>
      <PeachLoader />
      <Box>
        <Works />
      </Box>
    </Box>
  );
}
