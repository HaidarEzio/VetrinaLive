import styled from "styled-components";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Thumbnail from "../../assets/thumbnail.png";

const AuthorText = styled(Typography)`
  font-family: Noto Sans HK;
  font-weight: 500;
  font-size: 11px;
  color: #21b8f9;
`;
const Headline = styled(AuthorText)`
  font-size: 15px;
  line-height: 20px;
  color: #103b66;
`;
const Estimatedtime = styled(AuthorText)`
  font-size: 15px;
  color: #103b66;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  text-decoration: underline;
`;

function BlogThumbnail({ post: { author, urlToImage, title } }) {
  return (
    <Grid container xs={6} sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <Grid item>
        <img src={urlToImage ? urlToImage : Thumbnail} alt="" width="100" height="105" />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
        <AuthorText>{author}</AuthorText>
        <Headline>{title}</Headline>
        <Estimatedtime>Estimated reading: 4 min</Estimatedtime>
      </Grid>
    </Grid>
  );
}

export default BlogThumbnail;
