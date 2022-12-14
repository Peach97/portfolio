import React, { useRef, useState } from "react";
import { TextField, Box, Button, Grid } from "@mui/material";
import emailjs from "@emailjs/browser";
import AlertDialog from "./confirmation";

const Form = () => {
  const [open, setOpen] = useState(false);
  //state for submission notification
  const form = useRef();
  //referencing form current values
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("👋 Thanks for visiting" );
        },
        (error) => {
          console.log(error.text);
        }
      );
    setOpen(true);
    e.target.reset();
  };
  //email form submission handler
  return (
    <Box sx={{ width: "100%%", height: "fit-content", display: "flex" }}>
      <form ref={form} style={{ zIndex: "5" }} onSubmit={sendEmail}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="row"
          display="flex"
          spacing={1}
        >
          <Grid item md={6} sm={6} xs={6}>
            <TextField
              variant="filled"
              required
              fullWidth
              id="name-input"
              name="name"
              label="Name"
              type="text"
            />
          </Grid>
          <Grid item md={6} sm={6} xs={6}>
            <TextField
              variant="filled"
              required
              fullWidth
              id="email-input"
              name="email"
              label="Email"
              type="email"
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              variant="filled"
              fullWidth
              id="subject-input"
              name="subject"
              label="Subject"
              type="text"
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              variant="filled"
              multiline
              rows={5}
              required
              fullWidth
              id="message-input"
              name="message"
              label="Message"
              type="text"
            />
          </Grid>
        </Grid>
        <Button
          sx={{
            margin: "1rem 0 0 auto",
            padding: "0.5rem 3rem 0.5rem 3rem",
            fontSize: "1rem",
            border: "1px solid",
          }}
          type="submit"
          size="large"
        >
          Send Message
        </Button>
      </form>
      <AlertDialog setOpen={setOpen} open={open} />
    </Box>
  );
};

export default Form;
