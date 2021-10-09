import * as React from "react";
import "./global.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { useState } from "react";
import Navbar from "./components/navbar.comp";
import DrawerContainer from "./components/drawer.comp";
import MasonryGrid from "./components/masonry.comp";

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
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
        <DrawerContainer open={open} handleDrawerClose={handleDrawerClose} />
        <MasonryGrid />
      </Box>
    </ThemeProvider>
  );
}
