import styled from "styled-components";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import Masonry from "@mui/lab/Masonry";

import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

import { DrawerHeader } from "./drawer.comp";
import LinkText from "./reusableParts/linkText.reusable.comp";
import VisitorCard from "./cards/visitorsCard.comp";
import OrderCard from "./cards/orderCard.comp";
import ConfigureCard from "./cards/configureCard.comp";
import DownloadCard from "./cards/downloadCard.comp";
import MarketplaceCard from "./cards/marketplaceCard.comp";
import TrustpilotCard from "./cards/trustpilotCard.comp";
import LastestNewsCard from "./cards/latestNewsCard.comp";
import InviteCard from "./cards/inviteCard.comp";
import SupportCard from "./cards/supportCard.comp";
import MasonryItem from "@mui/lab/MasonryItem";
import { useState, useEffect } from "react";
import { getNewsPosts } from "../utils/getNewsPosts.func";

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
`;
const HeroText = styled(Typography)`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 39px;
  color: white;
`;

export const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);
`;

const MasonryGrid = () => {
  const [newsPosts, setNewsPosts] = useState(null);

  useEffect(() => {
    getNewsPosts(setNewsPosts);
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <DrawerHeader />
      <GridStyled>
        <WelcomeBGStyled />
        <GridMasonryStyled>
          <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 5 }}>
            <HeroText>Welcome Mario !</HeroText>
            <LinkText color="#ffffff" linkText="app.vetrinalive.it/fenoh-store" link="https://vetrinalive.com/" />
          </Grid>

          <MasonryStyled columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 1, sm: 2, md: 3 }}>
            <VisitorCard />
            <OrderCard />
            <ConfigureCard />
            <MarketplaceCard />

            <DownloadCard />

            <TrustpilotCard />
            <InviteCard />

            {newsPosts && <LastestNewsCard newsPosts={newsPosts} columnSpan={2} />}

            <SupportCard />
          </MasonryStyled>
        </GridMasonryStyled>
      </GridStyled>
    </Box>
  );
};

export default MasonryGrid;
