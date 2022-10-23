import { createTheme, Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { SlickDark, SlickLight } from "./slick-theme";
import { TakeoverDark, TakeoverLight } from "./takeover-theme";
import WorkContext from "../context";
import { useContext } from "react";

export default function Toggler({ children, toggle }) {
  const context = useContext(WorkContext);

  const takeoverTheme = createTheme(
    toggle ? TakeoverDark("dark") : TakeoverLight("light")
  );

  const slickTheme = createTheme(
    toggle ? SlickDark("dark") : SlickLight("light")
  );

  return (
    <ThemeProvider
      theme={context.session === "slick" ? slickTheme : takeoverTheme}
    >
      {children}
    </ThemeProvider>
  );
}
