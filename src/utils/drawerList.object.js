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
  { type: "item", icon: <Home />, text: "Dashboard", link: "/" },
  {
    type: "accordion",
    icon: <ShoppingCart />,
    text: "Catalogue",
    link: "/catalogue",
    innerList: ["MirrorMaker", "JawBreaker", "HeatSeeker", "GasLighter", "MoonRaker"],
  },
  {
    type: "badge",
    icon: <ListIcon />,
    text: "Orders",
    link: "/orders",
  },
  {
    type: "item",
    icon: <User />,
    text: "Customers",
    link: "/customers",
  },
  {
    type: "accordion",
    icon: <Target />,
    text: "Marketing",
    link: "/marketing",
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
  { type: "item", icon: <Truck />, text: "Delivery options", link: "/delivery-options" },
  { type: "item", icon: <DollarSign />, text: "Payment Options", link: "/payment-options" },
  { type: "item", icon: <Brush />, text: "Store Design", link: "/store-design" },
  { type: "item", icon: <CreditCard />, text: "Subscriptions", link: "/subscriptions" },
  {
    type: "item",
    icon: <CogPlanet />,
    text: "Integrations",
    link: "/integrations",
  },
  {
    type: "item",
    icon: <NewApp />,
    text: "Extensions",
    link: "/extensions",
  },
  { type: "item", icon: <Settings />, text: "Settings", link: "/settings" },
  { type: "item", icon: <LogOut />, text: "Log out", link: "/log-out" },
];

export const bottomList = [
  { type: "item", icon: <HelpCircle />, text: "Customer Support", link: "/customer-support" },
  { type: "item", icon: <Share />, text: "Share your shop", link: "/share-your-shop" },
  { type: "item", icon: <Eye />, text: "View your shop", link: "/view-your-shop" },
];
