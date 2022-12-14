import React from "react";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/system";
import styles from "../../styles/Home.module.css";
import { motion, useScroll } from "framer-motion";


const Main = ({ children, toggle, setToggle, page, router }) => {
  const { scrollYProgress } = useScroll();
  return (
    <Box>
      <Head>
        <title>Cameron Petrie - Portfolio</title>
      </Head>
      <Navbar
        page={page}
        toggle={toggle}
        setToggle={setToggle}
        path={router.asPath}
      />
      <Box bgcolor="text.primary">
        <motion.div
          className={page ? styles.page : styles.progress}
          style={{ scaleX: scrollYProgress, background: "inherit" }}
        />
      </Box>
      <Box toggle={toggle} router={router} className={styles.container}>
        {children}
      </Box>
    </Box>
  );
};
export default Main;
