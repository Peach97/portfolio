import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <AnimatePresence>
      <motion.div
        transition={{ x: { duration: 0.5 } }}
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -500, opacity: 0 }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}
