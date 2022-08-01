import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import styles from "../../styles/Loader.module.css";
import { Loader } from "./loading";
import { Typography } from "@mui/material";
import LinearWithValueLabel from "./progress";

export default function LoaderConfig(props) {
  const isLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setAnimation(false), 600);
  };
  return (
    <Box className={styles.box}>
      <Loader />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <Typography variant="h5" component="div">
          Cameron Petrie
        </Typography>
      </motion.div>
      <LinearWithValueLabel />
    </Box>
  );
}
