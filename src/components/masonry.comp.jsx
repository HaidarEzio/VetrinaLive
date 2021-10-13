import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

import { ReactComponent as Eye } from "../assets/eye.svg";
import { DrawerHeader } from "./drawer.comp";
import LinkText from "./reusableParts/linkText.reusable.comp";

const MasonryStyled = styled(Masonry)`
  height: 100%;
  padding: 0 30px;
  align-items: flex-start;
`;
const WelcomeBGStyled = styled.div`
  position: absolute;
  height: 250px;
  top: 0px;
  left: 0px;
  right: 0px;
  background: linear-gradient(rgb(33, 184, 249) 0%, rgb(205, 255, 255) 132.05%);
`;
const GridStyled = styled(Grid)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
  background-color: rgb(248, 249, 251);
  padding: 24px;
`;

const GridMasonryStyled = styled(Grid)`
  position: relative;
  padding-top: 40px;
  padding-bottom: 48px;
  max-width: 100%;
`;
const HeroText = styled(Typography)`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 39px;
  color: white;
`;

const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  border-radius: 10px;
`;
const CardTitle = styled(Typography)`
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #103b66;
`;

const MasonryGrid = () => {
  return (
    <Box component="app" sx={{ flexGrow: 1 }}>
      <DrawerHeader />
      <GridStyled>
        <WelcomeBGStyled />
        <GridMasonryStyled>
          <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 5 }}>
            <HeroText>Welcome Mario !</HeroText>
            <LinkText link="app.vetrinalive.it/fenoh-store" />
          </Grid>
          <MasonryStyled columns={3} spacing={3}>
            <MasonryItem>
              <CardStyled sx={{ minWidth: 275 }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexGrow: "1" }}>
                  <Grid sx={{ display: "flex", alignItems: "center" }}>
                    <Eye />
                    <CardTitle sx={{ ml: 1 }}>Visitors</CardTitle>
                  </Grid>
                </CardContent>
                <CardContent
                  sx={{
                    fontFamily: "Noto Sans HK",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: 42,
                    color: "#103b66",
                  }}
                >
                  1824
                </CardContent>
                <CardActions>Do you want more visits? Contact us!</CardActions>
              </CardStyled>
            </MasonryItem>
            <MasonryItem>
              <CardStyled sx={{ minWidth: 275 }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexGrow: "1" }}>
                  <Grid sx={{ display: "flex", alignItems: "center" }}>
                    <Eye />
                    <CardTitle sx={{ ml: 1 }}>Visitors</CardTitle>
                  </Grid>
                </CardContent>
                <CardContent
                  sx={{
                    fontFamily: "Noto Sans HK",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: 42,
                    color: "#103b66",
                  }}
                >
                  1824
                </CardContent>
                <CardActions>Do you want more visits? Contact us!</CardActions>
              </CardStyled>
            </MasonryItem>
            <MasonryItem>
              <CardStyled sx={{ minWidth: 275 }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexGrow: "1" }}>
                  <Grid sx={{ display: "flex", alignItems: "center" }}>
                    <Eye />
                    <CardTitle sx={{ ml: 1 }}>Visitors</CardTitle>
                  </Grid>
                </CardContent>
                <CardContent
                  sx={{
                    fontFamily: "Noto Sans HK",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: 42,
                    color: "#103b66",
                  }}
                >
                  1824
                </CardContent>
                <CardActions>Do you want more visits? Contact us!</CardActions>
              </CardStyled>
            </MasonryItem>
            <MasonryItem>
              <CardStyled sx={{ minWidth: 275 }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexGrow: "1" }}>
                  <Grid sx={{ display: "flex", alignItems: "center" }}>
                    <Eye />
                    <CardTitle sx={{ ml: 1 }}>Visitors</CardTitle>
                  </Grid>
                </CardContent>
                <CardContent
                  sx={{
                    fontFamily: "Noto Sans HK",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: 42,
                    color: "#103b66",
                  }}
                >
                  1824
                </CardContent>
                <CardActions>Do you want more visits? Contact us!</CardActions>
              </CardStyled>
            </MasonryItem>
          </MasonryStyled>
        </GridMasonryStyled>
      </GridStyled>
    </Box>
  );
};

export default MasonryGrid;
