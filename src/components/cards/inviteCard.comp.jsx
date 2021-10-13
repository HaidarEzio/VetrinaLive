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

function TrustpilotCard() {
  return (
    <MasonryItem>
      <CardStyled sx={{ minWidth: 275, minHeight: 220, backgroundColor: "#ffffff" }}>
        <CardHeader text="Invite a Friend" icon="users" color="#103b66" />
        <CardContent>
          <Typography sx={{ fontFamily: "Noto Sans HK", fontSize: 17, color: "#103b66" }}>
            <Colored> Receive 50 products </Colored>by inviting a friend who subscribes to a plan. Your friend will receive a 30% discount coupon
            valid for any plan.
          </Typography>
        </CardContent>
        <CardActions>
          <CardLink link="Start inviting friends!" />
        </CardActions>
      </CardStyled>
    </MasonryItem>
  );
}

export default TrustpilotCard;
