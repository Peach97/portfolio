import React from "react";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import DrawerComp from "./Drawer";

const Navbar = (props) => {
  const { path } = props;
  return <DrawerComp path={path} />;
};

export default Navbar;
