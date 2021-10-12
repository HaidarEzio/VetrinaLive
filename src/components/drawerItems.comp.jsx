import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { Badge, Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as CogPlanet } from "../assets/Cog_Planet.svg";
import { ReactComponent as CreditCard } from "../assets/CreditCard.svg";
import { ReactComponent as DollarSign } from "../assets/DollarSign.svg";
import { ReactComponent as Eye } from "../assets/eye.svg";
import { ReactComponent as HelpCircle } from "../assets/HelpCircle.svg";
import { ReactComponent as ListIcon } from "../assets/listIcon.svg";
import { ReactComponent as LogOut } from "../assets/LogOut.svg";
import { ReactComponent as NewApp } from "../assets/NewApp.svg";
import { ReactComponent as Settings } from "../assets/settings.svg";
import { ReactComponent as ShoppingCart } from "../assets/ShoppingCart.svg";
import { ReactComponent as Share } from "../assets/share.svg";
import { ReactComponent as Target } from "../assets/target.svg";
import { ReactComponent as Truck } from "../assets/truck.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Brush } from "../assets/Brush.svg";
import { Divider } from "@mui/material";

const ListItemStyled = styled(ListItem)`
  border-radius: 4px;
  padding: 2px 0px 2px 19px;
  margin: 1.5px 0;
`;
const ListItemSelectedStyled = styled(ListItemStyled)`
  background-color: #f7f7f7;
`;

const ListItemTextStyled = styled(ListItemText)`
  font-family: "Noto Sans HK";
  font-size: 14px;
  font-weight: 400;
  color: #103b66;
  margin-left: -20px;
`;

const ListItemTextSelectedStyled = styled(ListItemTextStyled)`
  color: #21b8f9;
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

const BadgeStyled = styled(Badge)`
  .MuiBadge-badge {
    background-color: #00c48c;
    color: white;
    border-radius: 10px;
  }
`;
const GridStyled = styled(Grid)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 20px;
`;

const AccordionDetailsStyled = styled(AccordionDetails)`
  padding: 0;
`;
const DrawerItems = () => {
  return (
    <List>
      <ListItemSelectedStyled button selected>
        <Background />
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemTextSelectedStyled primary="Dashboard" />
      </ListItemSelectedStyled>

      <ListItemStyled button>
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>

        <ListItemTextSelectedStyled primary="Catalogue" />
      </ListItemStyled>

      <ListItemStyled button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <GridStyled>
          <ListItemTextStyled primary="Orders" />
          <BadgeStyled badgeContent={14}></BadgeStyled>
        </GridStyled>
      </ListItemStyled>

      <ListItemStyled button>
        <ListItemIcon>
          <User />
        </ListItemIcon>
        <ListItemTextStyled primary="Customers" />
      </ListItemStyled>
      <ListItemStyled button>
        <ListItemIcon>
          <Target />
        </ListItemIcon>
        <GridStyled>
          <ListItemTextStyled primary="Marketing" />
          <KeyboardArrowDownIcon sx={{ mr: -1.5 }} />
        </GridStyled>
      </ListItemStyled>
      <ListItemStyled button>
        <ListItemIcon>
          <Truck />
        </ListItemIcon>
        <ListItemTextStyled primary="Delivery Options" />
      </ListItemStyled>
      <ListItemStyled button>
        <ListItemIcon>
          <DollarSign />
        </ListItemIcon>
        <ListItemTextStyled primary="Payment Options" />
      </ListItemStyled>
      <ListItemStyled button>
        <ListItemIcon>
          <Brush />
        </ListItemIcon>
        <ListItemTextStyled primary="Store Design" />
      </ListItemStyled>
      <ListItemStyled button>
        <ListItemIcon>
          <CreditCard />
        </ListItemIcon>
        <ListItemTextStyled primary="Subscription" />
      </ListItemStyled>
      <ListItemStyled button>
        <ListItemIcon>
          <CogPlanet />
        </ListItemIcon>
        <ListItemTextStyled primary="Integrations" />
      </ListItemStyled>
      <ListItemStyled button>
        <ListItemIcon>
          <NewApp />
        </ListItemIcon>
        <ListItemTextStyled primary="Extensions" />
      </ListItemStyled>
      <ListItemStyled button>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemTextStyled primary="Settings" />
      </ListItemStyled>
      <ListItemStyled button>
        <ListItemIcon>
          <LogOut />
        </ListItemIcon>
        <ListItemTextStyled primary="Log Out" />
      </ListItemStyled>

      <Divider sx={{ my: 2.5 }} />

      <ListItemStyled button>
        <ListItemIcon>
          <HelpCircle />
        </ListItemIcon>
        <ListItemTextStyled primary="Customer Support" />
      </ListItemStyled>
      <ListItemStyled button>
        <ListItemIcon>
          <Share />
        </ListItemIcon>
        <ListItemTextStyled primary="Share Your Shop" />
      </ListItemStyled>
      <ListItemStyled button>
        <ListItemIcon>
          <Eye />
        </ListItemIcon>
        <ListItemTextStyled primary="View Your Shop" />
      </ListItemStyled>
    </List>
  );
};

export default DrawerItems;
