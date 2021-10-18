import * as React from "react";
import "./global.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { useState } from "react";
import Header from "./components/header.comp";
import DrawerContainer from "./components/drawer.comp";
import MasonryGrid from "./components/masonry.comp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

const DivStyled = styled.div`
  margin-top: 200px;
  margin-left: 200px;
  font-size: 35px;
`;

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
      <Router>
        <Box sx={{ display: "flex" }}>
          <DrawerContainer open={open} handleDrawerClose={handleDrawerClose} />
          <Header open={open} handleDrawerOpen={handleDrawerOpen} />
          <Switch>
            <Route exact path="/" component={() => <MasonryGrid />} />
            <Route exact path="/catalogue" component={() => <DivStyled>Catalogue</DivStyled>} />
            <Route exact path="/orders" component={() => <DivStyled>Orders</DivStyled>} />
            <Route exact path="/customers" component={() => <DivStyled>Customers</DivStyled>} />
            <Route exact path="/marketing" component={() => <DivStyled>Marketing</DivStyled>} />
            <Route exact path="/delivery-options" component={() => <DivStyled>Delivery options</DivStyled>} />
            <Route exact path="/payment-options" component={() => <DivStyled>Payment Options</DivStyled>} />
            <Route exact path="/store-design" component={() => <DivStyled>Store Design</DivStyled>} />
            <Route exact path="/subscriptions" component={() => <DivStyled>Subscriptions</DivStyled>} />
            <Route exact path="/integrations" component={() => <DivStyled>Integrations</DivStyled>} />
            <Route exact path="/extensions" component={() => <DivStyled>Extensions</DivStyled>} />
            <Route exact path="/settings" component={() => <DivStyled>Settings</DivStyled>} />
            <Route exact path="/log-out" component={() => <DivStyled>Log out</DivStyled>} />
            <Route exact path="/customer-support" component={() => <DivStyled>Customer Support</DivStyled>} />
            <Route exact path="/share-your-shop" component={() => <DivStyled>Share your shop</DivStyled>} />
            <Route exact path="/view-your-shop" component={() => <DivStyled>View your shop</DivStyled>} />
          </Switch>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
