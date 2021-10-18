import { ReactComponent as Eye } from "../assets/eye.svg";
import { ReactComponent as ListIcon } from "../assets/listIcon.svg";
import { ReactComponent as Wrench } from "../assets/wrench.svg";
import { ReactComponent as NewApp } from "../assets/NewApp.svg";
import { ReactComponent as Star } from "../assets/star.svg";
import { ReactComponent as File } from "../assets/file.svg";
import { ReactComponent as Users } from "../assets/users.svg";
import { ReactComponent as Headphones } from "../assets/headphones.svg";

export const cardIcons = [
  {
    text: "Visitors",
    iconName: "eye",
    icon: <Eye key="1" />,
  },
  {
    text: "Orders",
    iconName: "list",
    icon: <ListIcon key="1" />,
  },
  {
    text: "Configure your Shop",
    iconName: "wrench",
    icon: <Wrench key="2" />,
  },
  {
    text: "Extensions Marketplace",
    iconName: "extensions",
    icon: <NewApp key="3" />,
  },
  {
    text: "Trust Pilot",
    iconName: "star",
    icon: <Star key="4" />,
  },
  {
    text: "Latest News",
    iconName: "file",
    icon: <File key="5" />,
  },
  {
    text: "Invite a Friend",
    iconName: "users",
    icon: <Users key="6" />,
  },
  {
    text: "Customer Support",
    iconName: "headphones",
    icon: <Headphones key="7" />,
  },
];
