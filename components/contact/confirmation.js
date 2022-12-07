import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function AlertDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Thank you for your message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            I have received your message and will respond as soon as I am
            available.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
