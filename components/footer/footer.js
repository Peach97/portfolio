import React from "react";
import { Box, Typography } from "@mui/material";
import { LogoButtonBlack, LogoButtonWhite } from "../Navbar/MenuButton";
import Grid from "@mui/material/Grid";
import { LightButtonGroup, DarkButtonGroup } from "../Navbar/ButtonGroup";
import styles from "../../styles/Home.module.css";
import { Link } from "@mui/material";

function scrollTo(route) {
  document.querySelector(`${route}`).scrollIntoView({
    behavior: "smooth",
  });
}

const links = [
  { title: "Home", route: ".hero-main" },
  { title: "Work", route: ".works-location" },
  { title: "About", route: ".about-location" },
  { title: "Contact", route: ".contact-location" },
];

const Footer = ({ toggle, page }) => {
  return (
    <Box
      sx={{
        display: page ? "none" : "flex",
        alignItems: "center",
        flexDirection: "column",
        bgcolor: "background.default",
        color: "background.contrast",
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
        {!toggle ? (
          <LogoButtonWhite height={35} width={35} />
        ) : (
          <LogoButtonBlack height={35} width={35} />
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
          <Link
            className={styles.links}
            onClick={() => scrollTo(link.route)}
            key={link}
          >
            {link.title}
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
              Code & Modeling by Cameron Petrie 2022
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
            <Typography>All Rights Reserved</Typography>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
export default Footer;
