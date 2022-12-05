import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { BackButton } from "./MenuButton";
import ToggleButton from "./theme-toggler";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import FileSaver from "file-saver";
import { Tooltip } from "@mui/material";

const Navbar = (props) => {
  const { page, toggle, setToggle } = props;
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const saveFile = () => {
    FileSaver.saveAs("/resources/Cameron Petrie Resume.png", "Cameron Petrie Resume.png");
  }
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });
  return (
    <Box sx={{ flexGrow: 1, bgcolor: `background.transparent` }}>
      <AppBar
        sx={{
          padding: "0.25rem 0 0.25rem 0",
          backdropFilter: `blur(10px)`,
        }}
        color="transparent"
        elevation={color ? 4 : 0}
      >
        <Toolbar>
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
          <Tooltip title="Download Resume">
            <IconButton onClick={saveFile}>
              <SimCardDownloadIcon disableRipple />
            </IconButton>
          </Tooltip>
          {page ? <BackButton /> : null}
          <ToggleButton toggle={toggle} setToggle={setToggle} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
