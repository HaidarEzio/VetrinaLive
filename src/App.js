import * as React from "react";
import "./global.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Main from "./components/main.comp";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#103B66",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
