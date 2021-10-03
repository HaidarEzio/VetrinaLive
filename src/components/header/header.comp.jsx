import styled from "styled-components";
import { Typography } from "@mui/material";
//? Styling
export const HeaderStyled = styled(Typography)`
  color: red;
  padding: 8px;
  background-color: purple;
  border-radius: 4px;
`;

//! Component
export const Header = () => {
  return <HeaderStyled variant="h1">I am Free</HeaderStyled>;
};

//* same way of doing it, but this is without intellesense
// import { styled } from "@mui/system";
// //? Styling
// export const HeaderStyled = styled(Typography)({
//   color: "red",
//   padding: 8,
//   backgroundColor: "black",
//   borderRadius: 4,
// });
