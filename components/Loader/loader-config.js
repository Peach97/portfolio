import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { Loader } from "./loading";
import { Typography } from "@mui/material";
import AnimatedTitle from "./name";

export default function LoaderConfig() {
  return (
    <>
      <div className="preloader">
        <Box className="loader">
          <Loader />
          <AnimatedTitle />
          {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1.5 }}
            >
             
              <Typography
                fontWeight={800}
                variant="h4"
                color="inherit"
                component="div"
              >
                Cameron Petrie
              </Typography>
            </motion.div>; */}
          {/* <div className="bouncer">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> */}
        </Box>
      </div>
    </>
  );
}
