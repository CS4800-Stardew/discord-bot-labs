//notes: i'd like to add more visuals on our home page once we have a working bot builder service
//see how when u scroll down on the home page, its a breakdown of how the service works
//think of any other main functionality elements, but nothing really to think about with what we have pre-existing (this can be an easy add once we know what elements we want to show off in the home page)
//do i split these components up into different jsx files for use throughout the entire website? or are they ok existing here

//sample websites to look at: botdisco; botghost

//make more informative (ex. what is a discord bot? or some sort of FAQ on the home page with informative text), remember audience

//look into issues with relative links

import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Container } from "@mui/material";
import Box from "@mui/system/Box";
import { PlayArrowSharp } from "@mui/icons-material";

import GroupedTitleAndButton from "./components/GroupedTitleAndButton";
import Gallery from "./components/Gallery";
import CardArray from "./components/CardArray";

function Home() {
  return (
    <React.Fragment>
      <Container className="home-container">
        <Box className="hero-cta-container">
          <GroupedTitleAndButton
            header="Discord Bot Labs"
            title="Your Instant 'Build-a-Bot' Creator Service"
            subtitle="No Coding Experience Necessary!"
            buttonLabel="Get Started"
            buttonTo="/bot-builder"
            logo="https://discord.bots.gg/img/logo_transparent.png"
            buttonIcon={<PlayArrowSharp />}
          />
        </Box>

        <Box className="resources-container">
          <Gallery />
        </Box>

        <Box className="about-service-container">
          {" "}
          {/* add margin-top (mt) for space */}
          <CardArray />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Home;
