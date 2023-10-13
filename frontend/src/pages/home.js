//notes: i'd like to add more visuals on our home page once we have a working bot builder service
//see how when u scroll down on the home page, its a breakdown of how the service works
//think of any other main functionality elements, but nothing really to think about with what we have pre-existing (this can be an easy add once we know what elements we want to show off in the home page)
//do i split these components up into different jsx files for use throughout the entire website? or are they ok existing here

//sample websites to look at: botdisco; botghost

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

import { Container, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Box from '@mui/system/Box'; 
import { Article } from '@mui/icons-material';


//header component (not sure if this is really needed, maybe reformat so that it can be a prettier component)
function Header() {
  return (
    <Typography variant="h1" align="center" gutterBottom>
      Home
    </Typography>
  );
}

//title component
function Title({ text }) {
  return (
    <Typography 
      variant="h3" 
      align="center" 
      gutterBottom>
      {text}
    </Typography>
  );
}

//scrolling gallery component using react-responsive-carousel
function Gallery() {
  return (
    <Carousel 
      showArrows={true} 
      showThumbs={false} 
      showStatus={false} 
      infiniteLoop={true} 
      autoPlay={true} i
      nterval={3000}>
      <div>
        <CardComponent
          image="https://example.com/image1.jpg"
          description="an external page maybe? something like 'what are discord bots?'"
          link="https://example.com/link1"
        />
      </div>
      <div>
        <CardComponent
          image="https://example.com/image2.jpg"
          description="an about page? information about our group/product?"
          link="https://example.com/link2"
        />
      </div>
      <div>
        <CardComponent
          image="https://example.com/image3.jpg"
          description="link to registration page? save your bots? hide it here"
          link="https://example.com/link3"
        />
      </div>
      <div>
        <CardComponent
          image="https://example.com/image4.jpg"
          description="additional card component space as needed"
          link="https://example.com/link4"
        />
      </div>
    </Carousel>
  );
}


//button component using react-router-dom and mui/icons-material
//note: incorporate different icon designs for buttons maybe? 
function ButtonComponent({ label, to }) {
  return (
    <Link 
      to={to} 
      style={{ textDecoration: 'none' }}>
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<Article />}>
        {label}
      </Button>
    </Link>
  );
}

//card component using mui/material
function CardComponent({ image, description, to }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Card Image"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <CardContent>
        <Typography 
          variant="body2" 
          color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link 
          to={to} style={{ textDecoration: 'none' }}>
          <ButtonComponent label="Learn More" />
        </Link>
      </CardActions>
    </Card>
  );
}

//home function to return all the components and page layout
function Home() {
  return (
    <Container maxWidth="md">
      <Header />
      <Box 
        my={4} textAlign="center">
        <Title 
          text="Build Your Discord Bot" />
        <Grid 
          container spacing={4} justifyContent="center">
          <Grid item>
            <ButtonComponent 
              label="Start Now" to="/bot-builder" />
          </Grid>
        </Grid>
      </Box>
      <Box 
        my={4} textAlign="center">
        <Title 
          text="Resources" />
        <Gallery /> 
      </Box>
    </Container>
  );
}

export default Home;
