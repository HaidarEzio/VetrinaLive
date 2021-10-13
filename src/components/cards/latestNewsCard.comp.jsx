import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MasonryItem from "@mui/lab/MasonryItem";
import { Grid } from "@mui/material";
import { CardStyled } from "../masonry.comp";
import CardHeader from "../reusableParts/cardHeader.reusable.comp";
import LinkText from "../reusableParts/linkText.reusable.comp";
import BlogThumbnail from "../reusableParts/blogThumbnail.reusable.comp";

function LatestNewsCard() {
  return (
    <MasonryItem columnSpan={2}>
      <CardStyled sx={{ minWidth: 275, minHeight: 220 }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardHeader text="Latest News" icon="file" />
          <LinkText link="https://vetrinalive.com/blog/" linkText="Visit Our Blog" color="#21b8f9" />
        </Grid>
        <CardContent>
          <Grid container xs={12}>
            <BlogThumbnail type="Ecommerce" headLine="How to earn money online: 7 ideas for you" estimatedTime="4" />
            <BlogThumbnail type="Ecommerce" headLine="How to earn money online: 7 ideas for you" estimatedTime="4" />
            <BlogThumbnail type="Ecommerce" headLine="How to earn money online: 7 ideas for you" estimatedTime="4" />
            <BlogThumbnail type="Ecommerce" headLine="How to earn money online: 7 ideas for you" estimatedTime="4" />
            <BlogThumbnail type="Ecommerce" headLine="How to earn money online: 7 ideas for you" estimatedTime="4" />
          </Grid>
        </CardContent>
      </CardStyled>
    </MasonryItem>
  );
}

export default LatestNewsCard;
