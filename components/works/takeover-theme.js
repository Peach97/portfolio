import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { amber } from "@mui/material/colors";

export const TakeoverDark = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === "dark" && {
        main: "#bbdefb",
        secondary: {
          main: "#f50057",
        },
        divider: "#607d8b",
        text: {
          primary: "#eceff1",
          secondary: "#babdbe",
          hint: "#eceff1",
        },
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: "#121212",
        paper: "#272727",
        contrast: "#de243a",
        transparent: "#0a192980",
        text: "#16385c",
      },
      typography: {
        fontFamily: `Montserrat, sans-serif`,
      },
    }),
  },
});

export const TakeoverLight = (mode) => ({
  palette: {
    mode,
    type: "light",
    primary: {
      ...amber,
      ...(mode === "light" && {
        main: "#2A4860",
        dark: "#65829D",
        contrastText: "#0B2E45",

        secondary: {
          main: "#009EFF",
        },
        text: {
          primary: "#0B2E45",
          secondary: "#39566F",
          hint: "#eceff1",
        },
        divider: "#65829D",
        typography: {
          primary: "#0B2E45",
          secondary: "#39566F",
        },
      }),
    },
    ...(mode === "light" && {
      background: {
        default: "#ffffff",
        paper: "#e6dfe0",
        contrast: "#e52f44",
        transparent: "#c4e1ff80",
        text: "#d6e8fa",
      },
      typography: {
        fontFamily: `Montserrat, sans-serif`,
      },
    }),
  },
});

export default function TakeoverToggler({ children, toggle }) {
  const takeoverTheme = createTheme(
    toggle ? TakeoverDark("dark") : TakeoverLight("light")
  );

  return <ThemeProvider theme={takeoverTheme}>{children}</ThemeProvider>;
}
