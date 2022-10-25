import React, { useEffect, useContext } from "react";
import styles from "../../styles/Works.module.css";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import TechStack from "../../components/works/tech-stack";
import LiveLink from "../../components/works/live-link";
import { PodcastModel } from "../../components/Three/Scene";
import TakeoverToggler from "../../components/works/takeover-theme";
import WorkContext from "../../components/context";

function Works({ toggle, setPage }) {
  const podStack = [
    { pic: "html", title: "HTML" },
    { pic: "css-3", title: "CSS" },
    { pic: "js", title: "JavaScript" },
    { pic: "atom", title: "React" },
    { pic: "firebase", title: "Firebase" },
    { pic: "mui", title: "MaterialUI" },
    { pic: "nodejs", title: "NodeJS" },
    { pic: "spotify (2)", title: "Spotify API" },
  ];
  const context = useContext(WorkContext);
  useEffect(() => {
    setPage(true);
    context.setValue("takeover");
  }, [setPage, context]);

  return (
    <>
      <TakeoverToggler toggle={toggle}>
        <Box
          className={styles.container}
          sx={{
            bgcolor: "background.default",
          }}
        >
          <Box color="text.primary" className={styles.imageContainer}>
            <PodcastModel />
            <div className={styles.textBox}>
              <Typography className={styles.text}>TakeoverPods</Typography>
            </div>
            <Typography className={styles.subtitle}>
              Sports Podcasting Blogging Application created with MERN stack and
              Spotify API.
            </Typography>
          </Box>
          <Divider sx={{ margin: "2.5rem" }} />
          <TechStack
            skills={podStack}
            description="Takeover Pods provides listeners of the Takeover Podcast Network
              an intuitive interface for finding and experiencing audio content. This
              was a unique challenge as not only does the network provide
              podcast episodes weekly from a variety of content providers, but
              also features a comprehensive blog related to the same topics. Integration with 
              Spotify allows users to listen directly on the site after completing a user credential flow. Be sure
              to check the ReadMe on Github for implementation details.
              In order to display the podcast content, two different credential flows were implemented. The first is client credential flow
              which allows the application access to public playlists from Spotify (allows for recent episodes to appear on landing page).
              The second is the user authentication flow which gives further functionality, including: the in app media player, queuing episodes, adding 
              Takeover content to a user's personal playlist, and accessing a user's current playback state.

              Inspiration for this application came from some of my favorite
              podcasts’ web applications including: Radiolab, Last Podcast on
              the Left, and the Andrew Huberman Lab. Experience Takeover Pods
              for yourself by visiting the Live Link."
            toggle={toggle}
          />
          <LiveLink
            github="https://github.com/Peach97/TakeoverPods"
            link="https://takeoverpods.netlify.app/"
          />
        </Box>
      </TakeoverToggler>
    </>
  );
}
export default Works;
