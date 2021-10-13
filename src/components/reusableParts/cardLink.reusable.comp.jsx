import styled from "styled-components";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ArrowForwardIconStyled = styled(ArrowForwardIcon)`
  margin-left: 35px;
  vertical-align: text-top;
`;

const Link = styled(Typography)`
  font-family: Source Sans Pro;
  font-size: 18px;
`;
const CardLink = ({ link, color }) => {
  return (
    <>
      {color ? (
        <Link
          sx={{ textDecoration: "underline", display: "flex", flexGrow: "1", justifyContent: "space-between", ml: 1.1, color: `${color}`, pb: 1 }}
        >
          <a href="https://vetrinalive.com/">
            {link}
            <ArrowForwardIconStyled />
          </a>
        </Link>
      ) : (
        <Link sx={{ textDecoration: "underline", display: "flex", flexGrow: "1", justifyContent: "space-between", ml: 1.1, color: "#21b8f9", pb: 1 }}>
          <a href="https://vetrinalive.com/">
            {link}
            <ArrowForwardIconStyled />
          </a>
        </Link>
      )}
    </>
  );
};

export default CardLink;
