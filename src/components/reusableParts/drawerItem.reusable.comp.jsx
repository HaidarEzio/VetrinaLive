import styled from "styled-components";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse, Badge, Grid } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState, Fragment } from "react";

const BadgeStyled = styled(Badge)`
  .MuiBadge-badge {
    background-color: #00c48c;
    color: white;
    border-radius: 13px;

    padding: 13px 6px;
  }
`;
export const ListItemButtonStyled = styled(ListItemButton)`
  background-color: ${(props) => (props.select ? "#f7f7f7" : "inherit")};
  border-radius: 4px;
  padding: 2px 10px 2px 19px;
  margin: 1.5px 0;
`;

export const ListItemTextStyled = styled(ListItemText)`
  font-family: "Noto Sans HK";
  font-size: 14px;
  font-weight: 400;
  color: #103b66;
  margin-left: -20px;
  //*! color: ${({ select }) => (select ? "#21b8f9" : "inherit")}; */
`;
const GridStyled = styled(Grid)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 12px;
`;
const Accordion = styled(Fragment)`
  &&.ListIcon {
    min-width: 35px;
    color: #c95555;
  }
`;

export function DrawerItem({ icon, text, badge }) {
  return (
    <>
      {badge ? (
        <ListItemButtonStyled>
          <ListItemIcon>{icon}</ListItemIcon>
          <GridStyled>
            <ListItemTextStyled primary={text} />
            <BadgeStyled badgeContent={badge}></BadgeStyled>
          </GridStyled>
        </ListItemButtonStyled>
      ) : (
        <ListItemButtonStyled>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemTextStyled primary={text} />
        </ListItemButtonStyled>
      )}
    </>
  );
}

export function DrawerAccordion({ icon, text, innerList }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Accordion>
      <ListItemButtonStyled sx={{ p: 0 }} onClick={handleClick}>
        <ListItemIcon className="ListIcon">{icon}</ListItemIcon>
        <ListItemTextStyled primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonStyled>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{ backgroundColor: "#E9F8FE" }} component="section" disablePadding>
          {innerList.map((item) => (
            <ListItemButton sx={{ py: 0.3, pl: 9.5 }}>
              <ListItemTextStyled primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Accordion>
  );
}
