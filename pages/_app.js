import "../styles/globals.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Router from "next/router";
import { useState, useEffect } from "react";
import LoaderConfig from "../components/Loader/loader-config";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar/Navbar";
import { Box } from "@mui/system";

export const theme = createTheme({
  palette: {
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
//media queries for h1/h3
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      setTimeout(() => {
        setLoading(false);
      }, 4000);
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
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    </>
  );
}

export default MyApp;
