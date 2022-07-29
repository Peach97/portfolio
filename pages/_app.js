import "../styles/globals.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

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
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
