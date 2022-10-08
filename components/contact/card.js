import React, { useState, useRef } from "react";
import { Paper, Box, Typography, Divider } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/Card.module.css";
import { LogoButtonWhite, LogoButtonBlack } from "../Navbar/MenuButton";
import Image from "next/image";
import Form from "./form";

const ContactCard = ({ toggle }) => {
  // const [open, setOpen] = useState(null);
  // const scrollRef = useRef(null);

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
            bgcolor: "background.transparent",
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
      {/* </motion.div>
      </div> */}
    </>
  );
};
export default ContactCard;
