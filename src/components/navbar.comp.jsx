import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge } from "@mui/material";

import styled from "styled-components";
//? Styling
const MainText = styled(Typography)`
  flex-grow: 1;
  font-family: "Noto Sans HK";
  font-size: 17px;
  font-style: normal;
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

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense" sx={{ height: 60 }}>
          <MainText variant="h6" color="secondary">
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
    </Box>
  );
}
