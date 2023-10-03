//Temporary, change code below later

//importing react library for react components
import React from 'react';

//importing MUI library for user interface components
import { Container, Typography, Button } from '@mui/material';
import { Article } from '@mui/icons-material';

function Home(){
    return (
        //container to hold information (will need to play with/change later), button as test implementation for MUI library
        <Container maxWidth="md">

          <Typography variant="h2" align="center" gutterBottom>
            Home
          </Typography>

          <Typography variant="body1" align="center" paragraph>
            Under Construction!
            <br />
            Future Plans: 
            <br />
            Container Block to separate sections
            <br />
            Logo - Images
            <br />
            Get Started Button
            <br />
            Links to other parts of site
          </Typography>

          <Button
            variant="contained"
            color="primary"
            startIcon={<Article />}
            href="https://discord.com/developers/docs/reference"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Discord API Documentation
          </Button>

        </Container>
      );
    }

export default Home;