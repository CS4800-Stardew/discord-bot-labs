import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardComponent from "./CardComponent";

function Gallery() {
  const cardsData = [
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

  return (
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
          {cardsData.map((card, index) => (
            <CardComponent
              key={index}
              image={card.image}
              description={card.description}
              to={card.to}
            />
          ))}
        </Carousel>
        <div className="spacer"></div>
      </div>
    </div>
  );
}

export default Gallery;
