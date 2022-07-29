import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import styles from "../../styles/Navbar.module.css";
import logo from "../../public/images/logo.png";
import { Twirl as Hamburger } from "hamburger-react";
import { theme } from "../../pages/_app";

const links = ["Home", "Works", "About", "Contact"];

function DrawerComp() {
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  console.log(matches);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {matches ? (
        <IconButton
          disableRipple
          className={styles.hamburger}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <Hamburger
            direction="left"
            toggled={isOpen}
            toggle={setIsOpen}
            size={40}
            duration={0.6}
            rounded
          />
        </IconButton>
      ) : (
        <Drawer
          open={openDrawer}
          onClose={() => {
            setOpenDrawer(false);
            setIsOpen(false);
          }}
          className={styles.drawer}
          sx={{
            "& .MuiDrawer-paper": {
              bgcolor: "#53535350",
              alignItems: "center",
              width: "10rem",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <Toolbar className={styles.toolbar}>
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
            </List>
            <Divider />
          </Toolbar>
        </Drawer>
      )}
    </div>
  );
}

export default DrawerComp;
