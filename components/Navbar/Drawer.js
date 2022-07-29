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
import ButtonGroup from "./ButtonGroup";
import MinimizedDrawer from "./MinimizedDrawer";

export const links = ["Home", "Works", "About", "Contact"];
//navbar links

function DrawerComp() {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log(matches);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {matches ? (
        <>
          <IconButton
            disableRipple
            className={styles.hamburger}
            onClick={() => {
              setOpenDrawer(!openDrawer);
            }}
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
          <MinimizedDrawer
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            setIsOpen={setIsOpen}
          />
        </>
      ) : (
        // <MinimizedDrawer isOpen={isOpen} setIsOpen={setIsOpen}/>

        <Drawer
          className={styles.drawer}
          sx={{
            "& .MuiDrawer-paper": {
              bgcolor: "background.paper",
              alignItems: "center",
              width: "10rem",
              borderLeft: "1px solid #ffffff33",
              backdropFilter: "blur(5px)",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <Toolbar className={styles.toolbar}>
            <List className={styles.list}>
              <ListItem className={styles.imageContainer}>
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
        </Drawer>
      )}
    </div>
  );
}

export default DrawerComp;
