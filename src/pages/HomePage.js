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
      <Header />
      <Grid
        container
        direction={'column'}
        width={'70%'}
        marginX={'auto'}
        mt={'1%'}
      >
        <Fade in timeout={2000}>
          <Grid
            container
            item
            justifyContent={'center'}
            marginX={'auto'}
            marginY={{ xs: '50px', sm: '100px' }}
            width={{ xs: '100%', sm: '60%' }}
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
