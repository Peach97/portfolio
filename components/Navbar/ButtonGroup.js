import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
import github from "../../public/images/github-before.png";
import linkedin from "../../public/images/linkedin-before.png";
import email from "../../public/images/email-before.png";
import styles from "../../styles/Navbar.module.css";

const ButtonGroup = () => {
  return (
    <Box>
      <IconButton className={styles.iconBtn}>
        <Image src={github} alt="/" />
      </IconButton>
      <IconButton className={styles.iconBtn}>
        <Image src={linkedin} alt="/" />
      </IconButton>
      <IconButton className={styles.iconBtn}>
        <Image src={email} alt="/" />
      </IconButton>
    </Box>
  );
};

export default ButtonGroup;
