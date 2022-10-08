import { createTheme, Box } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@mui/system";
import { PaletteMode } from "@mui/material";
import { amber, blue, blueGrey, grey, indigo } from "@mui/material/colors";

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
        default: "#121212", // "#001224",
        paper: "#272727",
        contrast: "#de243a",
        transparent: "#0a192980",
        text: "#16385c",
        //"#6280a5", // "#002447",
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
        default: "#ffffff", //"#dafdff", //good"#c3e2e9", //"#ffeeff", //d0a2bd //"#e0f7fa", //"#ffccbc", //"#ff7961", //"#d1c4e9",
        paper: "#e6dfe0",
        contrast: "#e52f44",
        transparent: "#c4e1ff80",
        text: "#d6e8fa", //"#92b0b7", //good"#97cce9", //"#bbdefb", //"#efdcd5", // "#d1c4e9", //"#e3f2fd", // "#fff7ff",
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
