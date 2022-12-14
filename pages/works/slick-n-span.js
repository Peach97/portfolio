import React, { useContext, useEffect } from "react";
import styles from "../../styles/Works.module.css";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import TechStack from "../../components/works/tech-stack";
import LiveLink from "../../components/works/live-link";
import { SlickModel } from "../../components/Three/Scene";
import SlickToggler from "../../components/works/slick-theme";
import WorkContext from "../../components/context";

function Works({ toggle, setPage }) {
  const slickStack = [
    { pic: "html", title: "HTML" },
    { pic: "css-3", title: "CSS" },
    { pic: "js", title: "JavaScript" },
    { pic: "atom", title: "React" },
    { pic: "nodejs", title: "NodeJS" },
    { pic: "photoshop", title: "Photoshop" },
    { pic: "bootstrap", title: "Bootstrap" },
    { pic: "adobe", title: "Adobe Cloud" },
  ];
  const context = useContext(WorkContext);
  useEffect(() => {
    setPage(true);
    context.setValue("slick");
  }, [setPage, context]);

  return (
    <>
      <SlickToggler toggle={toggle}>
        <Box
          className={styles.container}
          sx={{
            bgcolor: "background.default",
          }}
        >
          <Box color="text.primary" className={styles.imageContainer}>
            <SlickModel />
            <div className={styles.textBox}>
              <Typography className={styles.text}>SlickNSpan</Typography>
            </div>
            <Typography className={styles.subtitle}>
              Premium Detailing Service Application created using React,
              Bootstrap, and Adobe Creative Cloud.
            </Typography>
          </Box>
          <Divider sx={{ margin: "2.5rem" }} />
          <TechStack
            skills={slickStack}
            description="The SlickN'Span official website was created with one though in mind: convenience. The goal was to give potential clients a clean and accessible interface that would allow for a quick and easy service selection and scheduling process. This project relied on intensive use of Bootstrap and React functional components, as well as a happy helping of Photoshop. As SlickN'Span Detailing provides a mobile service, I placed particular emphasis on the design of the mobile interface. I decided to utilize EmailJS for form submission as it allowed for the detailing crew to receive detailed inquiries while on the go."
            toggle={toggle}
          />
          <LiveLink
            github="https://github.com/Peach97/SlickNSpanWebsite"
            link="https://slicknspan.netlify.app/"
          />
        </Box>
      </SlickToggler>
    </>
  );
}
export default Works;
