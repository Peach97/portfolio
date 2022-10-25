import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { amber } from "@mui/material/colors";

export const SlickDark = (mode) => ({
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
        default: "#040404",
        paper: "#3798a6",
        contrast: "#41b7c8",
        transparent: "#0a192980",
        text: "#16385c",
      },
      typography: {
        fontFamily: `Montserrat, sans-serif`,
      },
    }),
  },
});

export const SlickLight = (mode) => ({
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
        default: "#E0ECF8",
        paper: "#3798a6",
        contrast: "#41b7c8",
        transparent: "#c4e1ff80",
        text: "#d6e8fa",
      },
      typography: {
        fontFamily: `Montserrat, sans-serif`,
      },
    }),
  },
});

export default function SlickToggler({ children, toggle }) {
  const slickTheme = createTheme(
    toggle ? SlickDark("dark") : SlickLight("light")
  );

  return <ThemeProvider theme={slickTheme}>{children}</ThemeProvider>;
}
