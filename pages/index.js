import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import { Box, IconButton, Typography } from "@mui/material";
import down from "../public/images/down-arrow.png";

export default function Home() {
  return (
    <Box className={styles.container}>
      <Box className={styles.background}>
        <Box className={styles.header}>
          <Typography
            className={styles.header}
            color="white"
            variant="h3"
            component="div"
            fontWeight={100}
          >
            Good Morning,{" "}
            <span>
              I'm <b style={{ color: "#7A33ED" }}>Cameron Petrie</b>.
            </span>
          </Typography>
          <Typography
            color="white"
            variant="h2"
            fontWeight={800}
            component="div"
          >
            Web Developer
          </Typography>
        </Box>
      </Box>
      <Navbar />
      <IconButton className={styles.down}>
        <Image height={32} width={32} src={down} alt="/" />
      </IconButton>
    </Box>
  );
}
