import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { AppBar, Toolbar, Box } from "@mui/material";
import { BackButton } from "./MenuButton";
import ToggleButton from "./theme-toggler";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = (props) => {
  const { page } = props;
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  // const theme = useTheme();
  const [openNav, setOpenNav] = useState(false);
  //side nav drawer open
  const [open, setOpen] = useState(false);
  //hamburger menu animation
  const { path, toggle, setToggle } = props;
  return (
    <Box sx={{ flexGrow: 1, bgcolor: `background.transparent` }}>
      {/* <DrawerComp
        toggle={toggle}
        path={path}
        openNav={openNav}
        setOpenNav={setOpenNav}
        setOpen={setOpen}
      /> */}
      <AppBar
        sx={{
          padding: "0.25rem 0 0.25rem 0",
          backdropFilter: `blur(10px)`,
        }}
        color="transparent"
        elevation={color ? 4 : 0}
        // position={page ? "relative" : "fixed"}
      >
        <Toolbar>
          {/* <MenuButton setOpenNav={setOpenNav} open={open} setOpen={setOpen} /> */}
          <IconButton
            href="https://github.com/Peach97"
            target="_blank"
            disableRipple
            size="xs"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/cameron-petrie-4b00aa148"
            target="_blank"
            disableRipple
            size="xs"
          >
            <LinkedInIcon />
          </IconButton>
          {page ? <BackButton /> : null}

          {/* <Typography
            pl="1rem"
            color="text.primary"
            fontWeight={100}
            fontSize={14}
          >
            Cameron Petrie
          </Typography>
          <Typography
            pl="1rem"
            color="text.primary"
            fontWeight={200}
            fontSize={16}
          >
            PORTFOLIO
          </Typography> */}
          {/* {!toggle ? <LogoButtonBlack /> : <LogoButtonWhite />} */}
          <ToggleButton toggle={toggle} setToggle={setToggle} />
          {/* <LogoButton /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
