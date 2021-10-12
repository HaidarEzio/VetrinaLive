import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { Badge, Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Divider } from "@mui/material";
import { DrawerItem, DrawerAccordion } from "./reusableParts/drawerItem.reusable.comp";
import { upperList, bottomList } from "../utils/drawerList.object";

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

const DrawerItems = () => {
  return (
    <List>
      {upperList.map(({ type, icon, text, innerList }, index) => (
        <>
          {type === "item" && <DrawerItem key={index} icon={icon} text={text} />}
          {type === "badge" && <DrawerItem key={index} icon={icon} text={text} badge={14} />}
          {type === "collapse" && <DrawerAccordion key={index} icon={icon} text={text} innerList={innerList} />}
        </>
      ))}

      <Divider sx={{ my: 2.5 }} />

      {bottomList.map(({ icon, text }, index) => (
        <>
          <DrawerItem key={index} icon={icon} text={text} />
        </>
      ))}
    </List>
  );
};

export default DrawerItems;
