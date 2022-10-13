// import React, { useContext, useState } from "react";
// import Drawer from "@mui/material/Drawer";
// import {
//   Divider,
//   List,
//   ListItem,
//   ListItemButton,
//   Toolbar,
//   useMediaQuery,
//   Typography,
// } from "@mui/material";
// import styles from "../../styles/Navbar.module.css";
// import { LightButtonGroup, DarkButtonGroup } from "./ButtonGroup";
// import { useRouter } from "next/router";
// import NextLink from "next/link";
// import { CloseButton } from "./MenuButton";
// import { useTheme } from "@emotion/react";
// import WorkContext from "../context";

// export const links = [
//   { title: "Home", path: "/" },
//   { title: "Works", path: "/works" },
//   { title: "About" },
//   { title: "Contact" },
// ];
// //navbar links

// function DrawerComp({ path, setOpen, setOpenNav, openNav, toggle }) {
//   const theme = useTheme();
//   //lazy loader useState
//   const matches = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(matches);
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <Drawer
//         className={styles.drawer}
//         sx={
//           matches
//             ? {
//                 "& .MuiDrawer-paper": {
//                   alignItems: "center",
//                   width: "50vw",
//                   borderLeft: "0.002rem solid ",
//                 },
//               }
//             : {
//                 "& .MuiDrawer-paper": {
//                   alignItems: "center",
//                   width: "20vw",
//                   borderLeft: "0.002rem solid ",
//                 },
//               }
//         }
//         anchor="left"
//         transitionDuration={1000}
//         open={openNav}
//         onClose={() => {
//           setOpenNav(!openNav);
//           setOpen(false);
//         }}
//       >
//         <CloseButton
//           openNav={openNav}
//           setOpenNav={setOpenNav}
//           setOpen={setOpen}
//         />
//         <Toolbar className={styles.toolbar}>
//           <List className={styles.list}>
//             {links.map((link, index) => (
//               <ListItem key={index} disablePadding>
//                 <ListItemButton
//                   color="divider"
//                   disableRipple
//                   sx={{
//                     borderBottom: "0.002rem solid",

//                     "&.MuiButtonBase-root:hover": {},
//                   }}
//                   disableTouchRipple
//                   LinkComponent={NextLink}
//                   path={path}
//                   href={link.path}
//                   // router.push(`link.route`, undefined, { shallow: true })
//                   className={styles.btn}
//                 >
//                   <Typography
//                     fontSize={18}
//                     fontWeight={400}
//                     className={styles.text}
//                   >
//                     {link.title}
//                   </Typography>
//                 </ListItemButton>
//               </ListItem>
//             ))}
//             {toggle ? <LightButtonGroup /> : <DarkButtonGroup />}
//           </List>
//         </Toolbar>
//       </Drawer>
//     </>
//   );
// }

// export default DrawerComp;
