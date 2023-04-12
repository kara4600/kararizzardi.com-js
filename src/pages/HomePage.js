import React from 'react';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Education from '../components/Education';
import Experience from '../components/Experience';

const HomePage = () => {
  return (
    <div>
      <Grid
        container
        direction={'column'}
        width={'70%'}
        marginX={'auto'}
        mt={'1%'}
      >
        <Header />
        <Fade in timeout={2000}>
          <Grid
            item
            justifyContent={'center'}
            marginX={'auto'}
            marginY={'100px'}
            width={'50%'}
          >
            <Typography fontWeight={'600'} variant="h4">
              Hello, I'm Kara Rizzardi. I'm an electrical engineering & computer
              science major at UC Berkeley.
            </Typography>
          </Grid>
        </Fade>
        <Education />
        <Experience />
        <Contact />
      </Grid>
      <Footer />
    </div>
  );
};

export default HomePage;
