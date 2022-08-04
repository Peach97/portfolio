import "../styles/globals.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import LoaderConfig from "../components/Loader/loader-config";
import Layout from "../components/layout/layout";
import { AnimatePresence, motion } from "framer-motion";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}
export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#00000035",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});
//Montserrat Font Family global

theme.typography.h3 = {
  fontSize: "3rem",
  "@media (max-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
};
theme.typography.h1 = {
  fontSize: "6rem",
  "@media (max-width:600px)": {
    fontSize: "5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "5rem",
  },
};
const containerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: "0",
    transition: { duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
//media queries for h1/h3
function MyApp({ Component, pageProps, router }) {
  const [showPage, setShowPage] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      setTimeout(() => {
        setShowPage(true);
        setLoading(false);
      }, 3000);
    // setLoading(false) &&
    // url === router.asPath && setTimeout(() => setLoading(false), 5000);
    router.events.on("routeChangeStart", handleStart());
    router.events.on("routeChangeComplete", handleComplete());
    router.events.on("routeChangeError", handleComplete());
    return () => {
      router.events.off("routeChangeStart", handleStart());
      router.events.off("routeChangeComplete", handleComplete());
      router.events.off("routeChangeError", handleComplete());
    };
  }, []);
  //runs whenever a router event occurs

  return (
    <>
      {loading && <LoaderConfig />}
      <>
        <ThemeProvider theme={theme}>
          <Layout router={router}>
            <AnimatePresence>
              {showPage && (
                <motion.div
                  variants={containerVariants}
                  transition={{ x: { duration: 1 } }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Component {...pageProps} key={router.route} />
                </motion.div>
              )}
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </>
    </>
  );
}

export default MyApp;
