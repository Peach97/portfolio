import React from "react";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import DrawerComp from "./Drawer";

const links = ["Home", "Works", "About", "Contact"];

function Navbar() {
  return <DrawerComp />;
}

export default Navbar;
