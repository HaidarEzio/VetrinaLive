import * as React from "react";
import { Header } from "./components/header.comp";
import NavBar from "./components/navbar.comp";
import SidePanel from "./components/sidePanel.comp";
import "./global.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <SidePanel />
      </ThemeProvider>
    </>
  );
}
