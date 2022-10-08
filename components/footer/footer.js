import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { LogoButtonBlack, LogoButtonWhite } from "../Navbar/MenuButton";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { LightButtonGroup, DarkButtonGroup } from "../Navbar/ButtonGroup";
import styles from "../../styles/Home.module.css";

const links = [
  { title: "Home", route: "/" },
  { title: "Work", route: "/" },
  { title: "About", route: "/" },
  { title: "Contact", route: "/" },
];

const Footer = ({ toggle, page }) => {
  return (
    <Box
      sx={{
        display: page ? "none" : "flex",
        alignItems: "center",
        flexDirection: "column",
        bgcolor: "background.contrast",
        color: "background.default",
        height: "fit-content",
        padding: "1rem",
        width: "100%",
        zIndex: 4,
      }}
    >
      <Box
        component="div"
        sx={{ display: "flex", height: "5rem", marginBottom: "2.5rem" }}
      >
        {toggle ? (
          <LogoButtonBlack height={35} width={35} />
        ) : (
          <LogoButtonWhite height={35} width={35} />
        )}
      </Box>
      <Box
        component="div"
        sx={{
          height: "7.5rem",
          width: "90%",
          bgcolor: "inherit",
          display: "flex",
          justifyContent: "center",
          borderTop: "0.5px solid",
          borderBottom: "0.5px solid",
          alignItems: "center",
        }}
      >
        {links.map((link) => (
          <Link href={link.route} key={link.id}>
            <a
              className={styles.links}
              style={{
                textTransform: "uppercase",
              }}
            >
              {link.title}
            </a>
          </Link>
        ))}
      </Box>
      <div
        style={{
          padding: "2.5rem 0",
          display: "inline-block",
          width: "100%",
          justifyContent: "center",
          height: "10rem",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{ alignItems: "center", width: "100%" }}
          display="flex"
          justifyContent="center"
        >
          <Grid
            className={styles.startFooter}
            item
            md={3}
            sm={12}
            xs={12}
            sx={{ display: "flex" }}
          >
            <Typography fontSize="12px">
              Copyright © 2022 Cameron Petrie All Rights Reserved.
            </Typography>
          </Grid>
          <Grid
            item
            alignItems="center"
            md={5}
            sm={12}
            sx={{ justifyContent: "center", display: "flex" }}
          >
            {!toggle ? <LightButtonGroup /> : <DarkButtonGroup />}
          </Grid>
          <Grid
            className={styles.endFooter}
            item
            md={3}
            sm={12}
            xs={12}
            sx={{ display: "flex" }}
          >
            <Typography>Zina</Typography>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
export default Footer;
