import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MasonryItem from "@mui/lab/MasonryItem";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardHeader from "../reusableParts/cardHeader.reusable.comp";
import CardLink from "../reusableParts/cardLink.reusable.comp";
import { CardStyled } from "../masonry.comp";

function MarketplaceCard() {
  return (
    <MasonryItem>
      <CardStyled sx={{ minWidth: 275, minHeight: 355 }}>
        <CardHeader text="Extensions Marketplace" icon="extensions" />
        <CardContent>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          ></Grid>
        </CardContent>

        <CardActions sx={{}}>
          <CardLink link="Discover all extensions" />
        </CardActions>
      </CardStyled>
    </MasonryItem>
  );
}

export default MarketplaceCard;
