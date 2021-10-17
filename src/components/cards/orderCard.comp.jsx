import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MasonryItem from "@mui/lab/MasonryItem";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardHeader from "../reusableParts/cardHeader.reusable.comp";
import CardLink from "../reusableParts/cardLink.reusable.comp";
import { CardStyled } from "../masonry.comp";

function OrderCard() {
  return (
    <MasonryItem columnSpan={1}>
      <CardStyled sx={{ width: 275 }}>
        <CardHeader text="Orders" icon="list" menu />
        <CardContent>
          <Grid sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography sx={{ color: "#6C7c8c" }}>Orders received:</Typography>
            <Typography sx={{ fontFamily: "Noto Sans HK", fontStyle: "normal", fontWeight: 500, fontSize: 17, color: "#103b66" }}>156</Typography>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography sx={{ color: "#6C7c8c" }}>Earnings:</Typography>
            <Typography sx={{ fontFamily: "Noto Sans HK", fontStyle: "normal", fontWeight: 500, fontSize: 17, color: "#103b66" }}>
              € 1893,24
            </Typography>
          </Grid>
        </CardContent>
        <CardActions>
          <CardLink link="10 free tips to increase your sales" />
        </CardActions>
      </CardStyled>
    </MasonryItem>
  );
}

export default OrderCard;
