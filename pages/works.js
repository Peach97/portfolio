import { Container, height } from "@mui/system";
import React from "react";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/system";
import Layout from "../components/layout/works";
import { Grid, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import WorksCards from "../components/works/cards";
function Works() {
  return (
    <Box
      sx={{
        bgcolor: "#1212124f",
        backdropFilter: `blur(5px)`,
        borderRadius: "8px",
        height: "fit-content",
        width: "90vw",
        margin: "0 10rem 0 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Divider
        sx={{ width: "50%", margin: "5rem 0 5rem 2.5rem" }}
        textAlign="left"
        role="presentation"
      >
        <Typography variant="h5">Featured Works</Typography>
      </Divider>
      <WorksCards />
    </Box>
  );
}
export default Works;
