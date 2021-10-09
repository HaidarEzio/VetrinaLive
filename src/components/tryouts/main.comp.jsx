import * as React from "react";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Badge } from "@mui/material";

import SideItems from "./sideItems.comp";
import MenuMui from "./menu.comp";
import Navbar from "./navbar.comp";
import MasonryGrid from "./masonry.comp";
import { ReactComponent as Logo } from "../assets/logo.svg";

const drawerWidth = 255;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: 58,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
//*------------------------- Custom Styles --------------------------------
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

const LogoStyled = styled(Logo)`
  margin-right: 95px;
`;

export default function Main() {
  const theme = useTheme();
  var [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar open={open} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <LogoStyled />
          <IconButton color="secondary" onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <SideItems />
        <MenuMui />
      </Drawer>
      <MasonryGrid />
    </Box>
  );
}
