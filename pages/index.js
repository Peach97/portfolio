import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import down from "../public/images/down-arrow.png";
import { motion } from "framer-motion";
import {
  bounceTransition,
  arrowStyle,
} from "../components/Transitions/transitions";
import Particles from "../components/ParticlesBackground";
export default function Home() {
  return (
    <>
      <Box className={styles.container}>
        <Particles id={styles.tsparticles} />
        <Box className={styles.background} />
        <Box className={styles.header}>
          <Typography
            color="white"
            variant="h3"
            component="h3"
            fontWeight={100}
          >
            Hi,
          </Typography>
          <Typography variant="h3" component="h3">
            I'm <b style={{ color: "#7A33ED" }}>Cameron Petrie</b>.
          </Typography>
          <Typography
            color="white"
            variant="h1"
            fontWeight={800}
            component="h1"
          >
            Web Developer
          </Typography>
        </Box>
        <Navbar />
        <IconButton className={styles.down}>
          <motion.div
            transition={bounceTransition}
            animate={{ y: ["50%", "-50%"] }}
          >
            <Image src={down} alt="/" />
          </motion.div>
        </IconButton>
      </Box>
    </>
  );
}
