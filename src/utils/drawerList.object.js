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

export const upperList = [
  { type: "item", icon: <Home />, text: "Dashboard" },
  {
    type: "collapse",
    icon: <ShoppingCart />,
    text: "Catalogue",
    innerList: ["MirrorMaker", "JawBreaker", "HeatSeeker", "GasLighter", "MoonRaker"],
  },
  {
    type: "badge",
    icon: <ListIcon />,
    text: "Orders",
  },
  {
    type: "item",
    icon: <User />,
    text: "Customers",
  },
  {
    type: "collapse",
    icon: <Target />,
    text: "Marketing",
    innerList: [
      "Discount codes",
      "Exit intent",
      "Checkout Features",
      "Post-purchase conversion",
      "Cart abandonment",
      "Timer checkout",
      "Sell on Social",
      "Special Offer",
      "Seasonal Offer",
    ],
  },
  { type: "item", icon: <Truck />, text: "Delivery options" },
  { type: "item", icon: <DollarSign />, text: "Payment Options" },
  { type: "item", icon: <Brush />, text: "Store Design" },
  { type: "item", icon: <CreditCard />, text: "Subscriptons" },
  {
    type: "item",
    icon: <CogPlanet />,
    text: "Integrations",
  },
  { type: "item", icon: <Settings />, text: "Settings" },
  { type: "item", icon: <LogOut />, text: "Log out" },
];

export const bottomList = [
  { type: "item", icon: <HelpCircle />, text: "Customer Support" },
  { type: "item", icon: <Share />, text: "Share your shop" },
  { type: "item", icon: <Eye />, text: "View your shop" },
];
