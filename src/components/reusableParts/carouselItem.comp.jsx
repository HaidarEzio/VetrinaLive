import { Grid, Link, Typography } from "@mui/material";

export default function CarouselItem({ img, desc, id }) {
  return (
    <Grid>
      <img src={img} alt={desc} height={150} width={150} layout="fixed" />
      <a href={link}>
        <Typography>{desc}</Typography>
      </a>
    </Grid>
  );
}
