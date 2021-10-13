import styled from "styled-components";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MasonryItem from "@mui/lab/MasonryItem";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardHeader from "../reusableParts/cardHeader.reusable.comp";
import CardLink from "../reusableParts/cardLink.reusable.comp";
import { CardStyled } from "../masonry.comp";

const Colored = styled.span`
  color: #00c48c;
`;
const Bolded = styled.span`
  font-weight: 600;
`;

function TrustpilotCard() {
  return (
    <MasonryItem>
      <CardStyled sx={{ minWidth: 275, minHeight: 220, backgroundColor: "#000032" }}>
        <CardHeader text="TrustPilot" icon="star" color="#ffffff" />

        <CardContent>
          <Typography sx={{ fontFamily: "Noto Sans HK", fontSize: 17, color: "#ffffff" }}>
            Show us your love by leaving a <Colored> positive </Colored>review on trust pilot and receive the extension of{" "}
            <Bolded>50 additional products</Bolded>
          </Typography>
        </CardContent>
        <CardActions>
          <CardLink link="Write a review on Trustpilot" color="#00C48c" />
        </CardActions>
      </CardStyled>
    </MasonryItem>
  );
}

export default TrustpilotCard;
