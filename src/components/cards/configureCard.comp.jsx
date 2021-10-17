import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MasonryItem from "@mui/lab/MasonryItem";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardHeader from "../reusableParts/cardHeader.reusable.comp";
import CardLink from "../reusableParts/cardLink.reusable.comp";
import { CardStyled } from "../masonry.comp";

const randomnumber = () => Math.floor(Math.random() * (100 - 0)) + 0;

function ConfigureCard() {
  return (
    <MasonryItem columnSpan={1}>
      <CardStyled sx={{ minWidth: 275, minHeight: 220 }}>
        <CardHeader text="Configure your Shop" icon="wrench" />
        <CardContent>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "#FFA26B",
            }}
          >
            <Typography sx={{ fontFamily: "Source Sans Pro", fontWeight: 600, fontSize: 34 }}>{randomnumber()}%</Typography>
            <Typography sx={{ fontFamily: "Noto Sans HK", fontWeight: "500", fontSize: "15px", lineHeight: "20px", mt: -1 }}>Completed</Typography>
          </Grid>
        </CardContent>
        <CardContent>
          <Typography sx={{ fontFamily: "Noto Sans HK", fontSize: 17, color: "#103b66" }}>
            {" "}
            Complete all the steps to have a complete shop to best present to your customers.
          </Typography>
        </CardContent>
        <CardActions>
          <CardLink link="Complete the Setup !" />
        </CardActions>
      </CardStyled>
    </MasonryItem>
  );
}

export default ConfigureCard;
