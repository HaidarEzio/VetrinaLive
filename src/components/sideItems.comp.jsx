import { SidePanelList } from "../assets/sidePanelList";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactComponent as Home } from "../assets/home.svg";

const ListItemStyled = styled(ListItem)`
  background-color: #f7f7f7;
  border-radius: 4px;
  padding: 2px 0px 2px 19px;
  margin: 5px;
`;
const ListItemTextSelectedStyled = styled(ListItemText)`
  color: #21b8f9;
  font-family: "Noto Sans HK";
  font-size: 17px;
  font-style: normal;
`;

const Background = styled.div`
  & {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: 8px;
    margin-right: 3px;
    z-index: -1;
    border-radius: 4px;
    background-color: #f7f7f7;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -8px;
    background-color: #21b8f9;
    height: 100%;
    width: 3px;
    border-radius: 5px;
  }
`;
const SideItems = () => {
  return (
    <List>
      <ListItemStyled button selected>
        <Background />
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemTextSelectedStyled primary="Dashboard" />
      </ListItemStyled>
    </List>
  );
};

export default SideItems;
