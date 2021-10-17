import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MasonryItem from "@mui/lab/MasonryItem";
import CardHeader from "../reusableParts/cardHeader.reusable.comp";
import CardLink from "../reusableParts/cardLink.reusable.comp";
import { CardStyled } from "../masonry.comp";

function VisitorCard() {
  return (
    <MasonryItem columnSpan={1}>
      <CardStyled sx={{ width: 275, minHeight: 220 }}>
        <CardHeader text="Visitors" icon="eye" menu />
        <CardContent
          sx={{
            fontFamily: "Noto Sans HK",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 42,
            color: "#103b66",
          }}
        >
          1824
        </CardContent>
        <CardActions>
          <CardLink link="Do you want more visits? Contact us!" />
        </CardActions>
      </CardStyled>
    </MasonryItem>
  );
}

export default VisitorCard;
