import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MasonryItem from "@mui/lab/MasonryItem";
import { carouselItems } from "../../utils/carouselItems.object";
import CarouselItem from "./../reusableParts/carouselItem.comp";
import Typography from "@mui/material/Typography";
import CardHeader from "../reusableParts/cardHeader.reusable.comp";
import CardLink from "../reusableParts/cardLink.reusable.comp";
import { CardStyled } from "../masonry.comp";
import { Grid } from "@mui/material";

function MarketplaceCard() {
  return (
    <MasonryItem columnSpan={1}>
      <CardStyled sx={{ maxWidth: 380, minHeight: 350 }}>
        <CardHeader text="Extensions Marketplace" icon="extensions" />

        <Grid sx={{ display: "flex", overflowX: "scroll", p: 0 }}>
          {carouselItems.map((item, index) => (
            <CarouselItem image={item.image} title={item.title} key={index} />
          ))}
        </Grid>

        <CardActions sx={{}}>
          <CardLink link="Discover all extensions" />
        </CardActions>
      </CardStyled>
    </MasonryItem>
  );
}

export default MarketplaceCard;
