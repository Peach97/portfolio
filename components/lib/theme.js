import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { amber } from "@mui/material/colors";

const customDark = (mode) => ({
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
        default: "#031048",
        paper: "#031048",
        contrast: "#E7DECC",
        transparent: "#0310487a",
        text: "#16385c",
      },
      typography: {
        fontFamily: `Montserrat, sans-serif`,
      },
    }),
  },
});

const customLight = (mode) => ({
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
        default: "#E7DECC",
        default2: "#d0c8b8",
        default3: "#b9b2a3",
        default4: "#a29b8f",
        paper: "#E7DECC",
        contrast: "#031048",
        transparent: "#e7decc82",
        text: "#d6e8fa",
      },
      typography: {
        fontFamily: `Montserrat, sans-serif`,
      },
    }),
  },
});

export default function Toggler({ children, toggle }) {
  const theme = createTheme(
    !toggle ? customDark("dark") : customLight("light")
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
