import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { ReactComponent as ExternalLink } from "../assets/ExternalLink.svg";
import { DrawerHeader } from "./main.comp";

const MasonryStyled = styled(Masonry)`
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

const LinkText = styled(HeroText)`
  font-family: Noto Sans HK;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
`;
const ExternalLinkStyled = styled(ExternalLink)`
  vertical-align: text-top;
  margin: 0 10px;
`;

const MasonryGrid = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <DrawerHeader />
      <GridStyled>
        <WelcomeBGStyled />
        <GridMasonryStyled>
          <Grid sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
            <HeroText>Welcome Mario !</HeroText>
            <LinkText sx={{ textDecoration: "underline" }}>
              app.vetrinalive.it/fenoh-store
              <ExternalLinkStyled />
            </LinkText>
          </Grid>
          <MasonryStyled columns={3} spacing={1}>
            <MasonryItem>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>Visitors and </CardContent>
                <CardActions>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, incidunt cupiditate eius, laudantium necessitatibus provident
                  quidem quis, maiores nemo ut ipsum architecto tempore. Adipisci dolorem rem perspiciatis officiis. Nam, blanditiis.
                </CardActions>
              </Card>
            </MasonryItem>
          </MasonryStyled>
        </GridMasonryStyled>
      </GridStyled>
    </Box>
  );
};

export default MasonryGrid;
