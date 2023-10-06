//Temporary, change code below later

import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Article } from '@mui/icons-material';

// Header component
function Header() {
  return (
    <Typography variant="h2" align="center" gutterBottom>
      Home
    </Typography>
  );
}

// Main content component
function MainContent() {
  return (
    <Typography variant="body1" align="center" paragraph>
      Under Construction!
    </Typography>
  );
}

// Button component
function CustomButton({ label, href }) {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<Article />}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Button>
  );
}

function Home() {
  return (
    <Container maxWidth="md">
      <Header />
      <MainContent />
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <CustomButton
            label="Start with Account"
            href=""
          />
        </Grid>
        <Grid item>
          <CustomButton
            label="Start without Account"
            href=""
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
