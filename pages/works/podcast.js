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
              an intuitive interface for finding and experiencing content. This
              was a unique challenge as not only does the network provide
              podcast episodes weekly from a variety of content providers, but
              also features a comprehensive blog related to the same topics.
              
              Previously, content providers from TPN posted on various platforms
              including: Facebook, Youtube, Twitter, Instagram, Spotify, and an
              entire list of streaming providers. Now, upon completion of a
              quick and painless authentication process, creators can post and
              update their content all in one place.

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
