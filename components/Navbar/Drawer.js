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
  Link,
  Typography,
} from "@mui/material";
import styles from "../../styles/Navbar.module.css";
import logo from "../../public/images/logo.png";
import { Twirl as Hamburger } from "hamburger-react";
import { theme } from "../../pages/_app";
import ButtonGroup from "./ButtonGroup";
import MinimizedDrawer from "./MinimizedDrawer";
import { useRouter } from "next/router";
import { withRouter } from "next/router";
import NextLink from "next/link";
import StyledLink from "../StyledComponents/Link.js";
// utilizing nextjs router

export const links = [
  { title: "Home", path: "/" },
  { title: "Works", path: "/works" },
  { title: "About" },
  { title: "Contact" },
];
//navbar links

function DrawerComp({ path }) {
  const router = useRouter();
  //lazy loader useState
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log(matches);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
                  <ListItemButton
                    disableRipple
                    sx={{
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent",
                      },
                    }}
                    disableTouchRipple
                    LinkComponent={NextLink}
                    path={path}
                    href={link.path}
                    // router.push(`link.route`, undefined, { shallow: true })
                    className={styles.btn}
                  >
                    <Typography className={styles.text}>
                      {link.title}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}
              <ButtonGroup />
            </List>
            <Divider />
          </Toolbar>
        </Drawer>
      )}
    </>
  );
}

export default DrawerComp;
