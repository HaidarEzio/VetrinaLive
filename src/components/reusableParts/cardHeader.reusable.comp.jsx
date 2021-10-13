import styled from "styled-components";
import CardContent from "@mui/material/CardContent";
import { cardIcons } from "../../utils/cardIcons.object";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CardMenu from "./cardMenu.reusable.comp";

const CardTitle = styled(Typography)`
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #103b66;
`;
const CardMenuText = styled(Typography)`
  color: #103b66;
`;
function CardHeader(props) {
  return (
    <CardContent>
      <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
          {cardIcons.map(({ iconName, icon }) => props.icon === iconName && icon)}
          <CardTitle sx={{ ml: 1.8 }} style={{ color: props.color ? props.color : "#103b66" }}>
            {props.text}
          </CardTitle>
        </Grid>

        {props.menu ? (
          <Grid sx={{ display: "flex", alignItems: "center" }}>
            <CardMenuText>This month</CardMenuText>
            <CardMenu />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </CardContent>
  );
}

export default CardHeader;
