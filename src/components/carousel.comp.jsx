import { Grid } from "@mui/material";
import { carouselItems } from "../utils/carouselItems.object";
import CarouselItem from "./reusableParts/carouselItem.comp";

export default function Carousel() {
  return carouselItems.map((item, index) => <CarouselItem item image={item.image} title={item.title} key={index} />);
}
