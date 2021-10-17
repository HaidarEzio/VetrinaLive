import styled from "styled-components";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MasonryItem from "@mui/lab/MasonryItem";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardHeader from "../reusableParts/cardHeader.reusable.comp";
import CardLink from "../reusableParts/cardLink.reusable.comp";
import { CardStyled } from "../masonry.comp";

function SupportCard() {
  return (
    <MasonryItem columnSpan={1}>
      <CardStyled sx={{ minWidth: 275, minHeight: 220, backgroundColor: "#ffffff" }}>
        <CardHeader text="Customer Support" icon="headphones" color="#103b66" />
        <CardContent>
          <Typography sx={{ fontFamily: "Noto Sans HK", fontSize: 17, color: "#103b66" }}>Simone is here to help you.</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" sx={{ ml: 0.8, mb: 1.1, backgroundColor: "#21B8F9", color: "white" }}>
            Contact Us
          </Button>
        </CardActions>
      </CardStyled>
    </MasonryItem>
  );
}

export default SupportCard;
