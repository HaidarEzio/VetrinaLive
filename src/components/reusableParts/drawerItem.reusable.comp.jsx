import styled from "styled-components";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse, Badge, Grid } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState, Fragment } from "react";
import { Link } from "react-router-dom";

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
  &:hover {
    color: #21b8f9;
  }
  //*! color: ${({ select }) => (select ? "#21b8f9" : "inherit")}; */
`;

const ListItemIconStyled = styled(ListItemIcon)`
  &:hover {
    fill: #21b8f9;
  }
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
    color: #000000;
  }
`;

export function DrawerItem({ icon, text, badge, link }) {
  return (
    <Link to={link}>
      <ListItemButtonStyled>
        <ListItemIconStyled>{icon}</ListItemIconStyled>
        <GridStyled>
          <ListItemTextStyled primary={text} />
          {badge ? <BadgeStyled badgeContent={badge}></BadgeStyled> : ""}
        </GridStyled>
      </ListItemButtonStyled>
    </Link>
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
          {innerList.map((item, index) => (
            <ListItemButton key={index} sx={{ py: 0.3, pl: 9.5 }}>
              <ListItemTextStyled primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Accordion>
  );
}
