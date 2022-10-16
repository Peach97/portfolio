import React from "react";
import { TextField, Box, Button, Grid } from "@mui/material";

const Form = () => {
  return (
    <Box sx={{ width: "100%%", height: "fit-content", display: "flex" }}>
      <form style={{ zIndex: "5" }}>
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
    </Box>
  );
};

export default Form;
