import { styled } from "@mui/system";
import { Typography } from "@mui/material";
//? Styling
export const HeaderStyled = styled(Typography)({
  color: "red",
  padding: 8,
  backgroundColor: "black",
  borderRadius: 4,
});
//! Component
export const Header = () => {
  return <HeaderStyled variant="h6">I am Free</HeaderStyled>;
};
