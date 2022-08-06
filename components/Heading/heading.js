import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { Box } from "@mui/system";
function Heading() {
  return (
    <Box className={styles.header}>
      <Typography color="white" variant="h2" component="div" fontWeight={100}>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          H
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          i
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          ,
        </motion.div>
      </Typography>
      <div>
        <Typography variant="h2" component="div">
          <motion.div
            whileHover={{ scale: 1.5, color: "#FFA500" }}
            className={styles.letter}
          >
            I
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5, color: "#FFA500" }}
            className={styles.letter}
          >
            &apos;
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5, color: "#FFA500" }}
            className={styles.letter}
          >
            m
          </motion.div>
          <div className={styles.space}></div>

          <b>
            <motion.div
              whileHover={{ scale: 1.5, color: "#FFA500" }}
              className={styles.letter}
            >
              C
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, color: "#FFA500" }}
              className={styles.letter}
            >
              a
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, color: "#FFA500" }}
              className={styles.letter}
            >
              m
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, color: "#FFA500" }}
              className={styles.letter}
            >
              e
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, color: "#FFA500" }}
              className={styles.letter}
            >
              r
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, color: "#FFA500" }}
              className={styles.letter}
            >
              o
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, color: "#FFA500" }}
              className={styles.letter}
            >
              n
            </motion.div>
          </b>
          <motion.div
            whileHover={{ scale: 1.5, color: "#FFA500" }}
            className={styles.letter}
          >
            .
          </motion.div>
        </Typography>
      </div>

      <Typography color="white" variant="h2" fontWeight={800} component="div">
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          W
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          e
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          b
        </motion.div>
        <div className={styles.space}></div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          D
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          e
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          v
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          e
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          l
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          o
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          p
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          e
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, color: "#FFA500" }}
          className={styles.letter}
        >
          r
        </motion.div>
      </Typography>
    </Box>
  );
}

export default Heading;
