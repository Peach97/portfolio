import {
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  Collapse,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Utilities } from "./card-items";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { horizontalBounce } from "../Transitions/transitions";
import Link from "next/link";

export const Text = styled(Typography)`
  text-decoration: none;
`;

const ArrowDiv = () => {
  return (
    <>
      <Text className={styles.btnText}>See More</Text>
      <motion.div transition={horizontalBounce} animate={{ x: ["5%", "-5%"] }}>
        <ExitToAppIcon sx={{ margin: "0 0 0 0.5rem", display: "flex" }} />
      </motion.div>
    </>
  );
};

const WorksSummary = (props) => {
  const [expanded, setExpanded] = useState(null);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item md={12} sm={12} xs={12} flexDirection="column">
          <Paper className={styles.paper}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                padding: "0 0 2.5rem 0",
                flexDirection: "row",
                alignItems: "end",
              }}
            >
              <div style={{ flexDirection: "column", display: "flex" }}>
                <Text variant="h5" fontWeight={800}>
                  {props.app}
                </Text>
                <Text
                  variant="subtitle"
                  className={styles.subtitle}
                  fontWeight={800}
                >
                  {props.subtitle}
                </Text>
              </div>

              <Button
                component="a"
                LinkComponent={Link}
                href={`/works/${props.to}`}
                sx={{ borderRadius: "8px" }}
                className={styles.btn}
              >
                <ArrowDiv />
              </Button>
              <Box color="text.primary"></Box>
            </Box>
            <Text color="text.primary" variant="body1">
              {props.description}
            </Text>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Text paragraph>{props.description2}</Text>
            </Collapse>
            <IconButton
              disableFocusRipple
              disableRipple
              sx={{ margin: "auto 0 0 auto" }}
              expand={expanded}
              onClick={handleExpandClick}
              aria-label="show more"
            >
              {expanded ? (
                <>
                  <Typography>Less</Typography> <ExpandLessIcon />
                </>
              ) : (
                <>
                  <Typography>More</Typography> <ExpandMoreIcon />
                </>
              )}
            </IconButton>
            <Utilities
              first={props.first}
              second={props.second}
              third={props.third}
              fourth={props.fourth}
            />
          </Paper>
          <Box
            sx={{ width: "100%", display: "flex", margin: "2.5rem 0 0 auto" }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
};
export default WorksSummary;
