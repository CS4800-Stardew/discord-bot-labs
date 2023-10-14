//notes: i'd like to add more visuals on our home page once we have a working bot builder service
//see how when u scroll down on the home page, its a breakdown of how the service works
//think of any other main functionality elements, but nothing really to think about with what we have pre-existing (this can be an easy add once we know what elements we want to show off in the home page)
//do i split these components up into different jsx files for use throughout the entire website? or are they ok existing here

//sample websites to look at: botdisco; botghost

//make more informative (ex. what is a discord bot? or some sort of FAQ on the home page with informative text), remember audience

import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

import { Container, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Box from '@mui/system/Box'; 
import { Article } from '@mui/icons-material';

function Title({ text }) {
  return <h2>{text}</h2>;
}


//top component which holds the header, title, and get started button in one colored box
//check style sheet conversion - when i try to put the elements into the style sheet and call the class name the box doesnt apply
function GroupedTitleAndButton({ header, title, subtitle, buttonLabel, buttonTo }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  background: '#7289DA', padding: '40px' }}>
      <h1 style={{ marginBottom: '10px' }}>{header}</h1>
      <h2 style={{ marginBottom: '40px' }}>{title}</h2>
      <h3 style={{ marginBottom: '20px' }}>{subtitle}</h3>
      <ButtonComponent label={buttonLabel} to={buttonTo} />
    </div>
  );
}

//button component using react-router-dom and mui/icons-material
//note: incorporate different icon designs for buttons maybe? 
function ButtonComponent({ label, to }) {
  //the page will automatically scroll to top and it shows that to the user (instead of when the button is clicked and the page is navigated, it stays in the same position as it was from the previous page)
  //maybe find a way to just jump to the top of the page without the scroll effect? 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <Link 
      to={to} 
      style={{ textDecoration: 'none' }}>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={scrollToTop}
        startIcon={<Article />}>
        {label}
      </Button>
    </Link>
  );
}

//card component using mui/material
function CardComponent({ image, description, to }) {
  return (
    <div style={{ marginBottom: '75px' }}>
      <img src={image} alt="Card Image" style={{ width: '100%', maxWidth: '300px' }} />
      <p style={{ marginTop: '20px' }}>{description}</p>
      <ButtonComponent label="Click Here" to={to} />
    </div>
  );
}

//gallery component using 3rd party react-responsive-carousel (for mui card integration)
//look into how to use relative links for downloaded images instead of grabbing web image urls? 
function Gallery() {
  const carouselHeight = '400px';
  const cardsData = [
    {
      image: 'https://www.pluggedin.com/wp-content/uploads/2023/04/Untitled-design-1024x1024.png',
      description: "Discord Developer Platform Documentation",
      to: 'https://discord.com/developers/docs/intro',
    },
    {
      image: 'https://blog.top.gg/content/images/2021/12/1.png',
      description: "Explore Discord Bots with top.gg",
      to: 'https://top.gg/',
    },
    {
      image: 'https://styles.redditmedia.com/t5_388p4/styles/communityIcon_1xjv62tivxy61.png?width=256&s=761dfb604ad32ac722f86777120d1efe32cbfeee',
      description: "Discord Subreddit",
      to: 'https://reddit.com/r/discordapp/',
    },
    {
      image: 'https://pbs.twimg.com/media/D6hPTEiWAAI9uoz.png',
      description: "Discord Blog",
      to: 'https://discord.com/blog',
    },
  ];

  return (
    <div style={{ height: carouselHeight }}>
      <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={4000}>
        {cardsData.map((card, index) => (
          <CardComponent
            key={index}
            image={card.image}
            description={card.description}
            to={card.to}
          />
        ))}
      </Carousel>
      <div style={{ marginBottom: '1000px' }}></div> {/* creates space between button and marker */}
    </div>
  );
}

//card array to display 3 cards at the bottom of the page (commented out image links)
function CardArray() {
  //holds card data
  const cards = [
    {
      title: 'Get Started for Free',
      description: [
        'Without an Account, you can do the following:',
        'Create a Discord Bot.',
        'Instantly Deploy in Your Server.',
      ],
      //imageUrl: '',
      link: '/bot-builder',
    },
    // Delete this card if we don't have time to create a community page, or replace with an "about" section
    {
      title: 'Community',
      description: ['Under Construction'],
      //imageUrl: '',
      //link: '',
    },
    {
      title: 'Register for an Account',
      description: [
        'With an Account, you can do the following:',
        'Create a Discord Bot.',
        'Instantly Deploy in Your Server.',
        'Quickly Save/Edit Your Bots.',
        'View Them in our Custom Dashboard.',
      ],
      //imageUrl: '',
      link: '/register',
    },
  ];

  //displays card data
  //look into how to make buttons at uniform height? 
  return (
    <div style={{ backgroundColor: '#FFEFD5', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            className = "card-container"
          >
            <h3 className="card-title">{card.title}</h3>
            {card.description.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                {itemIndex === 0 ? (
                <p className="card-description" >{item}</p>
                ) : (
                  <li  className="card-description" >{item}</li>
                )}
              </React.Fragment>
            ))}
            <ButtonComponent label="Learn More" to={card.link} />
          </div>
        ))}
      </div>
    </div>
  );
}

//home function to return all the components and page layout
//basically: 3 main sections with functionality (check top comment, think if there can be informative sections added)
function Home() {
  return (
      <Container maxWidth="md">

        <Box my={4} textAlign="center">
          <GroupedTitleAndButton
            header="Discord Bot Labs"
            title="Your Instant 'Build-A-Bot' Creator Service"
            subtitle="No Coding Experience Necessary!"
            buttonLabel="Get Started"
            buttonTo="/bot-builder"
          />
        </Box>

        <Box my={4} textAlign="center" mt={10}>
          <Title text="Resources for Discord Bot Building" />
          <Gallery />
        </Box>

        <Box my={4} textAlign="center" mt={10}> {/* add margin-top (mt) for space */}
          <Title text="Learn More About Our Service" />
          <CardArray />
        </Box>

      </Container>
  );
}

export default Home;
