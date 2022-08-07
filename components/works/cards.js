import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  IconButton,
  Collapse,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import example from "../../public/images/example.png";
import more from "../../public/images/more-information.png";
import Image from "next/image";
import styles from "../../styles/Card.module.css";

function WorksCards() {
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className={styles.container}>
        <Box className={styles.wrapper}>
          <Card className={styles.card}>
            <Image
              className={styles.image}
              height={300}
              width={500}
              src={example}
              alt="/"
            />
            <div className={styles.description}>
              <CardActions
                sx={{ paddingLeft: "25%" }}
                component="div"
                disableSpacing
              >
                <IconButton className={styles.more}>
                  More Info{" "}
                  <Image
                    style={{ marginLeft: "auto" }}
                    height={24}
                    width={24}
                    src={more}
                    alt="/"
                  />
                </IconButton>
                <Typography color="#fff" sx={{ marginLeft: "auto" }}>
                  Takeover Pods
                </Typography>
              </CardActions>

              <CardContent
                component="div"
                sx={{
                  bgcolor: "#121212",
                  borderRadius: "8px",
                }}
              >
                <Typography fontSize={14} variant="body1" color="#fff">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
                <CardActions component="div" disableSpacing>
                  <IconButton
                    sx={{ marginLeft: "auto", color: "#fff" }}
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-label="show more"
                  >
                    <UnfoldMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Typography color="#fff" paragraph>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </Collapse>
              </CardContent>
            </div>
          </Card>
        </Box>
      </div>
    </>
  );
}

export default WorksCards;
