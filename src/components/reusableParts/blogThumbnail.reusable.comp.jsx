import styled from "styled-components";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Thumbnail from "../../assets/thumbnail.png";

const TypeText = styled(Typography)`
  font-family: Noto Sans HK;
  font-weight: 500;
  font-size: 11px;
  color: #21b8f9;
`;
const Headline = styled(TypeText)`
  font-size: 15px;
  line-height: 20px;
  color: #103b66;
`;
const Estimatedtime = styled(TypeText)`
  font-size: 15px;
  color: #103b66;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  text-decoration: underline;
`;

function BlogThumbnail({ type, headLine, estimatedTime }) {
  return (
    <Grid container xs={6} sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <Grid item>
        <img src={Thumbnail} alt="" width="100" height="100" />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
        <TypeText>{type}</TypeText>
        <Headline>{headLine}</Headline>
        <Estimatedtime>Estimated reading: {estimatedTime} min</Estimatedtime>
      </Grid>
    </Grid>
  );
}

export default BlogThumbnail;
