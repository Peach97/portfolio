import {
  Card,
  Box,
  Typography,
  Grid,
  getSkeletonUtilityClass,
} from "@mui/material";
import Image from "next/image";
import styles from "../../styles/Works.module.css";
import WorkContext from "../../components/context";
import { useContext, useEffect, useState } from "react";

const TechStack = (props) => {
  const context = useContext(WorkContext);
  const { description, skills } = props;

  const Stack = (props) => {
    const { skills } = props;
    return (
      <>
        {skills.map((item, index) => (
          <Grid key={index} item md={2.5} sm={6} xs={12}>
            <Card
              className={styles.techStackCard}
              sx={{
                display: "flex",
                width: "100%",
                height: "fit-content",
                alignItems: "center",
              }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.techStackImage}
                  height={25}
                  width={25}
                  layout="intrinsic"
                  src={require("../../public/images/" + item.pic + ".png")}
                  alt="/"
                />
                <Typography className={styles.techStackText}>
                  {item.title}
                </Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </>
    );
  };
  //dynamic tech stack React Component
  return (
    <>
      <Box
        color="text.primary"
        sx={{ bgcolor: "background.default" }}
        className={styles.stackContainer}
      >
        <Grid container spacing={1} className={styles.techStackGrid}>
          <Grid item md={10} sm={12} xs={12}>
            <Typography className={styles.section}>Project Overview</Typography>
            <Typography className={styles.description}>
              {description}
            </Typography>
          </Grid>
          <Grid item md={10} sm={12} xs={12}>
            <Typography className={styles.section}>Tools Used</Typography>
          </Grid>
          <Stack skills={skills} />
        </Grid>
      </Box>
    </>
  );
};
export default TechStack;
