import "../styles/globals.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

export const theme = createTheme({});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
