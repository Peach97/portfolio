import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
import githubW from "../../public/images/github-before.png";
import linkedinW from "../../public/images/linkedin-before.png";
import emailW from "../../public/images/email-before.png";
import githubB from "../../public/images/github (4).png";
import linkedinB from "../../public/images/linkedin (4).png";
import emailB from "../../public/images/email (2).png";
import styles from "../../styles/Navbar.module.css";

export const LightButtonGroup = () => {
  return (
    <Box>
      <IconButton
        className={styles.iconBtn}
        href="https://github.com/Peach97"
        target="_blank"
        disableRipple
      >
        <Image src={githubW} alt="/" />
      </IconButton>
      <IconButton
        className={styles.iconBtn}
        href="https://www.linkedin.com/in/cameron-petrie-4b00aa148"
        target="_blank"
        disableRipple
      >
        <Image src={linkedinW} alt="/" />
      </IconButton>
      <IconButton className={styles.iconBtn}>
        <Image src={emailW} alt="/" />
      </IconButton>
    </Box>
  );
};

export const DarkButtonGroup = () => {
  return (
    <Box>
      <IconButton
        className={styles.iconBtn}
        href="https://github.com/Peach97"
        target="_blank"
      >
        <Image src={githubB} alt="/" />
      </IconButton>
      <IconButton
        className={styles.iconBtn}
        href="https://www.linkedin.com/in/cameron-petrie-4b00aa148"
        target="_blank"
      >
        <Image src={linkedinB} alt="/" />
      </IconButton>
      <IconButton className={styles.iconBtn}>
        <Image src={emailB} alt="/" />
      </IconButton>
    </Box>
  );
};
