import styled from "styled-components";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const ListItemButtonStyled = styled(ListItemButton)`
  border-radius: 4px;
  padding: 2px 0px 2px 19px;
  margin: 1.5px 0;
`;
export const ListItemButtonSelectedStyled = styled(ListItemButtonStyled)`
  background-color: #f7f7f7;
`;

export const ListItemTextStyled = styled(ListItemText)`
  font-family: "Noto Sans HK";
  font-size: 14px;
  font-weight: 400;
  color: #103b66;
  margin-left: -20px;
`;

export const ListItemTextSelectedStyled = styled(ListItemTextStyled)`
  color: #21b8f9;
`;

function DrawerItem({ icon, text }) {
  return (
    <ListItemButton>
      <ListItemIcon>{icon}</ListItemIcon>

      <ListItemTextStyled primary={text} />
    </ListItemButton>
  );
}

export default DrawerItem;
