// import React, { useContext, useEffect, useState } from "react";
// import styles from "../styles/Works.module.css";
// import { Box } from "@mui/system";
// import { Divider, Typography } from "@mui/material";
// import TechStack from "../components/works/tech-stack";
// import LiveLink from "../components/works/live-link";
// import Toggler from "../components/works/takeover-theme";

// function Works({ toggle, setPage }) {
//   //works theme toggler React Component

//   useEffect(() => {
//     setPage(true);
//   }, [setPage]);

//   return (
//     <>
//       <Toggler toggle={toggle}>
//         <Box
//           className={styles.container}
//           sx={{
//             bgcolor: "background.default",
//           }}
//         >
//           <Box color="text.primary" className={styles.imageContainer}>
//             <div className={styles.textBox}>
//               <Typography className={styles.text}>TakeoverPods</Typography>
//             </div>
//             <Typography className={styles.subtitle}>
//               Sports Podcasting Blogging Application created with MERN stack and
//               Spotify API.
//             </Typography>
//           </Box>
//           <Divider sx={{ margin: "2.5rem" }} />
//           <TechStack works={works} toggle={toggle} />
//           <LiveLink works={works} />
//         </Box>
//       </Toggler>
//     </>
//   );
// }
// export default Works;
