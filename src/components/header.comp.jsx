import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";

import styled from "styled-components";

const drawerWidth = 255;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MainText = styled(Typography)`
  flex-grow: 1;
  font-family: "Noto Sans HK";
  font-size: 17px;
  font-weight: 500;
`;

const WhatsNewText = styled(MainText)`
  flex-grow: 0;
  font-family: "Source Sans Pro";
  margin-right: 10px;
`;

const BadgeStyled = styled(Badge)`
  .MuiBadge-badge {
    background-color: #f33451;
    margin: 3px 10px 0px 0px;
  }
`;

export default function Header({ open, handleDrawerOpen }) {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          color="secondary"
          onClick={handleDrawerOpen}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <MainText variant="h6" noWrap component="div" color="secondary">
          Dashboard
        </MainText>
        <BadgeStyled badgeContent={2} color="secondary" sx={{ display: "flex" }}>
          <svg
            stroke="#103b66"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            size="24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          <WhatsNewText variant="h6" color="secondary">
            What’s new
          </WhatsNewText>
        </BadgeStyled>
      </Toolbar>
    </AppBar>
  );
}
