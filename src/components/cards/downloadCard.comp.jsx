import CardContent from "@mui/material/CardContent";
import MasonryItem from "@mui/lab/MasonryItem";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardLink from "../reusableParts/cardLink.reusable.comp";
import { CardStyled } from "../masonry.comp";
import Device from "../../assets/Device.png";
import Apple from "../../assets/apple.png";
import Google from "../../assets/google.png";
function DownloadCard() {
  return (
    <MasonryItem>
      <CardStyled sx={{ minWidth: 275, backgroundColor: "#F3A35C" }}>
        <CardContent>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: 1,
            }}
          >
            <Typography sx={{ py: 2.4, pr: 5, fontFamily: "Noto Sans HK", fontWeight: 500, fontSize: 22, color: "white" }}>
              Sell your products on your exclusive APP published on the stores
              <CardLink link="Show More" color="#ffffff" />
            </Typography>
            <img src={Device} width="105" height="226" alt="hmm" />
          </Grid>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <img src={Apple} alt="hmm" />
          <img src={Google} alt="hmm" />
        </CardContent>
      </CardStyled>
    </MasonryItem>
  );
}

export default DownloadCard;
