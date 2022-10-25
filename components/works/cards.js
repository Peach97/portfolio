import React, { useRef } from "react";
import { Paper, Box, Typography, Divider } from "@mui/material";
import styles from "../../styles/Card.module.css";
import WorksSummary from "./card-summary";

const WorksCard = ({ toggle, path }) => {
  return (
    <>
      <Box className={styles.worksContainer}>
        <Paper
          className={styles.worksPaper}
          sx={{
            color: "text.primary",
            bgcolor: "background.transparent",
            padding: "1rem 1rem 20rem 1rem",
            marginBottom: "5rem",
          }}
          elevation={4}
        >
          <Typography
            className={styles.aboutHeading}
            gutterBottom
            fontWeight={800}
            variant="h3"
          >
            Recent Works
          </Typography>
          <Divider sx={{ borderBottomWidth: "2px" }} />
          <WorksSummary
            path={path}
            work="Blog"
            to="takeover-pods"
            app="Takeover Blog"
            subtitle="CRUD Application"
            toggle={toggle}
            description="Sports blogging application with full MERN stack capabilities. Offers authentication using Firebase as well as auto-updating content from Spotify API with client credentials flow authentication."
            description2="Clean interface allowing users to quickly find any corresponding blog articles with date and channel filters. The ultimate sports information experience all in one place."
            first="MongoDB"
            second="ExpressJS"
            third="Firebase Auth"
            fourth="NodeJS"
          />
          <Divider sx={{ borderBottomWidth: "2px" }} />
          <WorksSummary
            path={path}
            work="Podcasting"
            to="podcast"
            app="Takeover Podcasting"
            subtitle="Listen to Episodes using Spotify API"
            toggle={toggle}
            description="Sports podcasting application with full MERN stack capabilities. Offers authentication using Spotify as well as auto-updating content from Spotify API with client credentials flow authentication."
            description2="Clean interface allowing users to quickly find podcast episodes. The ultimate sports information experience all in one place."
            first="SpotifyAPI"
            second="MaterialUI"
            third="React"
            fourth="NodeJS"
          />
          <Divider sx={{ borderBottomWidth: "2px" }} />
          <WorksSummary
            path={path}
            work="Slick"
            to="slick-n-span"
            app="SlickNSpan"
            subtitle="Mobile Detailing Service Page"
            toggle={toggle}
            description="Premium detailing service web application utilizing photoshop and adobe express for awesome visuals and a unique user experience."
            description2="EmailJS allows for service requests to go directly to service providers email upon submission of the form. The aim was to create the fastest possible user route from the landing page to the shop."
            first="React"
            second="EmailJS"
            third="Bootstrap"
            fourth="AdobeExpress"
          />
        </Paper>
      </Box>
    </>
  );
};
export default WorksCard;
