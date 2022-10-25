import React, { useEffect, useContext } from "react";
import styles from "../../styles/Works.module.css";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import TechStack from "../../components/works/tech-stack";
import LiveLink from "../../components/works/live-link";
import { TakeoverModel } from "../../components/Three/Scene";
import TakeoverToggler from "../../components/works/takeover-theme";
import WorkContext from "../../components/context";

function Works({ toggle, setPage }) {
  const takeoverStack = [
    { pic: "html", title: "HTML" },
    { pic: "css-3", title: "CSS" },
    { pic: "js", title: "JavaScript" },
    { pic: "atom", title: "React" },
    { pic: "express", title: "ExpressJS" },
    { pic: "mongodb", title: "MongoDB" },
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
            <TakeoverModel />
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
            skills={takeoverStack}
            description="Takeover Blogs provides listeners of the Takeover Podcast Network
              an intuitive interface for finding and editing bogging content. Bloggers will be given
              their own unique identification and password that allows them to authenticate. 
              After authentication, bloggers can add, edit, or delete posts
              or their attributes including title, photos, descriptions, and assignment to their specific channel. 
              
              Previously, content providers from TPN posted on various platforms
              including: Facebook, Youtube, Twitter, Instagram, Spotify, and an
              entire list of streaming providers. Now, upon completion of a
              quick and painless authentication process, creators can post and
              update their content all in one place. Blog posts are filtered for the user by their upload date and channel.

              <br /><br />Inspiration for this application came from some of my favorite
              podcasts’ web applications including: Radiolab, Last Podcast on
              the Left, and the Andrew Huberman Lab. Future improvements include comment sections and more in depth search 
              and sorting capabilities. Be sure to check the <a href="https://github.com/Peach97/TakeoverPods/blob/main/README.md" target="_blank">ReadMe</a> on Github for more details on the
              technical implementation. Experience Takeover Blogs for yourself by visiting the Live Link."
            toggle={toggle}
          />
          <LiveLink
            github="https://github.com/Peach97/TakeoverPods"
            link="https://takeoverpods.netlify.app/trending"
          />
        </Box>
      </TakeoverToggler>
    </>
  );
}
export default Works;
