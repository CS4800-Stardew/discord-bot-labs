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
import { Carousel } from "react-responsive-carousel";
import { PlayArrowSharp, Article, QuizSharp } from "@mui/icons-material";
import ButtonComponent from "./components/common/buttonComponent.js";
import "./home.css";

function Home() {
  const galleryData = [
    {
      image:
        "https://www.pluggedin.com/wp-content/uploads/2023/04/Untitled-design-1024x1024.png",
      description: "Discord Developer Platform Documentation",
      to: "https://discord.com/developers/docs/intro",
    },
    {
      image: "https://blog.top.gg/content/images/2021/12/1.png",
      description: "Explore Discord Bots with top.gg",
      to: "https://top.gg/",
    },
    {
      image:
        "https://styles.redditmedia.com/t5_388p4/styles/communityIcon_1xjv62tivxy61.png?width=256&s=761dfb604ad32ac722f86777120d1efe32cbfeee",
      description: "Discord Subreddit",
      to: "https://reddit.com/r/discordapp/",
    },
    {
      image: "https://pbs.twimg.com/media/D6hPTEiWAAI9uoz.png",
      description: "Discord Blog",
      to: "https://discord.com/blog",
    },
  ];

  const cards = [
    {
      title: "Get Started for Free",
      description: [
        "Without an Account, you can do the following:",
        "Create a Discord Bot.",
        "Instantly Deploy in Your Server.",
      ],
      //imageUrl: '',
      link: "/bot-builder",
    },
    // Delete this card if we don't have time to create a community page, or replace with an "about" section
    {
      title: "Community",
      description: ["Under Construction"],
      //imageUrl: '',
      //link: '',
    },
    {
      title: "Register for an Account",
      description: [
        "With an Account, you can do the following:",
        "Create a Discord Bot.",
        "Instantly Deploy in Your Server.",
        "Quickly Save/Edit Your Bots.",
        "View Them in our Custom Dashboard.",
      ],
      //imageUrl: '',
      link: "/register",
    },
  ];

  return (
    <React.Fragment>
      <Container className="home-container">
        <Box className="hero-cta-container">
          <div className="grouped-container">
            <div>
              <h1 className="header-text">Discord Bot Labs</h1>
              <h2 className="title-text">
                Your Instant 'Build-a-Bot' Creator Service
              </h2>
              <img
                src={"https://discord.bots.gg/img/logo_transparent.png"}
                alt="Image"
                className="logo-image"
              />
              <h3 className="subtitle-text">No Coding Experience Necessary!</h3>
              <ButtonComponent
                label={"Get Started"}
                to={"/bot-builder"}
                icon={<PlayArrowSharp />}
              />
            </div>
          </div>
        </Box>

        <Box className="resources-container">
          <div className="gallery-container">
            <div className="carousel-container">
              <h2 className="carousel-header">
                Resources for Discord Bot Development
              </h2>
              <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={4000}
              >
                {galleryData.map((card, index) => (
                  <div className="card-container" key={index}>
                    <img
                      src={card.image}
                      alt="Card Image"
                      className="card-image"
                    />
                    <p className="card-description">{card.description}</p>
                    <ButtonComponent
                      label="Click Here"
                      to={card.to}
                      icon={<Article />}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </Box>

        <Box className="about-service-container">
          {" "}
          {/* add margin-top (mt) for space */}
          <div className="card-array-container">
            <h2 className="header-text">Learn More About Our Service</h2>
            <div className="cards-container">
              {cards.map((card, index) => (
                <div key={index} className="card-container">
                  <h3 className="card-title">{card.title}</h3>
                  {card.description.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      {itemIndex === 0 ? (
                        <p className="card-description">{item}</p>
                      ) : (
                        <li className="card-description">{item}</li>
                      )}
                    </React.Fragment>
                  ))}
                  <ButtonComponent
                    label="Learn More"
                    to={card.link}
                    icon={<QuizSharp />}
                  />
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Home;
