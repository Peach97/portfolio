import React from "react";
import {
  Drawer,
  Typography,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "../../styles/Drawer.module.css";
import { links } from "./Drawer";
import ButtonGroup from "./ButtonGroup";
import Image from "next/image";
import logo from "../../public/images/logo.png";

function MinimizedDrawer({ openDrawer, setOpenDrawer, setIsOpen }) {
  return (
    <>
      <Drawer
        className={styles.drawer}
        anchor="bottom"
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(!openDrawer);
          setIsOpen(false);
        }}
      >
        <Box
          className={styles.bottomDrawerContainer}
          sx={{
            bgcolor: "background.paper",
            color: "#fff",
          }}
          role="presentation"
          onClick={() => {
            setOpenDrawer(!openDrawer);
            setIsOpen(false);
          }}
          onKeyDown={() => {
            setOpenDrawer(!openDrawer);
            setIsOpen(false);
          }}
        >
          <Toolbar>
            <List className={styles.list}>
              <ListItem className={styles.image}>
                <Image src={logo} alt="/" />
              </ListItem>
              <Divider />
              {links.map((link, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton className={styles.btn}>
                    <ListItemText className={styles.text} primary={link} />
                  </ListItemButton>
                </ListItem>
              ))}
              <ButtonGroup />
            </List>
            <Divider />
          </Toolbar>
        </Box>
      </Drawer>
    </>
  );
}

export default MinimizedDrawer;
