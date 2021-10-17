import { Grid, Typography } from "@mui/material";
import Carousel from "../../assets/carousel.jpg";
import styled from "styled-components";

const Title = styled(Typography)`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 20px;
`;

export default function CarouselItem({ image, title }) {
  return (
    <Grid sx={{ p: 0.8 }}>
      <img src={Carousel} alt="" />
      <Title>{title}</Title>
    </Grid>
  );
}
