import React from "react";
import { Paper, Box, Typography, Divider } from "@mui/material";
import styles from "../../styles/Card.module.css";
import Form from "./form";

const ContactCard = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "auto",
          marginLeft: "auto",
          bottom: "10rem",
          width: "35vw",
        }}
        className={styles.contactContainer}
      >
        <Paper
          className={styles.contactPaper}
          sx={{
            color: "text.primary",
            bgcolor: "background.default",
            height: "fit-content",
          }}
          elevation={4}
        >
          <Typography variant="subtitle" className={styles.aboutText}>
            I&apos;m currently interested in new opportunities and my inbox is
            open. Freelance inquiries are welcomed as well. Reach out now and
            I&apos;ll get back to you as quickly as possible!
          </Typography>
          <Divider sx={{ marginBottom: "2.5rem", borderBottomWidth: "2px" }} />
          <Form />
        </Paper>
      </Box>
    </>
  );
};
export default ContactCard;
