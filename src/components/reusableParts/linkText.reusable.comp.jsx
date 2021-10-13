import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { ReactComponent as ExternalLink } from "../../assets/ExternalLink.svg";

const ExternalLinkStyled = styled(ExternalLink)`
  vertical-align: text-top;
  margin: 0 10px;
`;

const Link = styled(Typography)`
  font-family: Noto Sans HK;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px; ;
`;

function LinkText({ linkText, color, link }) {
  return (
    <>
      {color ? (
        <Link sx={{ textDecoration: "underline", color: `${color}` }}>
          <a href={link}>
            {linkText}
            <ExternalLinkStyled stroke={color} />
          </a>
        </Link>
      ) : (
        <Link sx={{ textDecoration: "underline", color: "#ffffff" }}>
          <a href={link}>
            {linkText}
            <ExternalLinkStyled />
          </a>
        </Link>
      )}
    </>
  );
}

export default LinkText;
