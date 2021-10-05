import * as React from "react";
import { alpha } from "@mui/material/styles";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const MenuMuiStyled = styled.div`
  flex-grow: 1;
  margin: 20px 0px 50px 30px;
  padding-right: 25px;
`;
const LabelStyled = styled(Typography)`
  color: #546679;
  font-family: "Noto Sans HK";
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

const ButtonStyled = styled(Button)`
  border: 1px solid rgba(10, 37, 64, 0.24);
  border-radius: 5px;
  padding: 15px 20px;
  .MuiButton-endIcon {
    padding-left: 30px;
  }
`;

const StyledMenuStyled = styled(StyledMenu)`
  margin-left: -12px;
  .MuiMenu-list {
    border: 1px solid rgba(10, 37, 64, 0.24);
    border-radius: 5px;
  }
`;

export default function MenuMui() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuMuiStyled>
      <LabelStyled>Select your Shop</LabelStyled>
      <ButtonStyled
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Fenoh Store
      </ButtonStyled>
      <StyledMenuStyled
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          MirrorMaker
        </MenuItem>
      </StyledMenuStyled>
    </MenuMuiStyled>
  );
}
