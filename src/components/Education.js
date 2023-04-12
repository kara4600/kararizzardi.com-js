import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <div>
      <Slide in direction="right" timeout={1500}>
        <Grid container direction={'column'} marginY={'30px'}>
          <Typography variant="h5" fontWeight={'600'}>
            Education {<SchoolIcon />}
          </Typography>
          <Typography
            variant="body1"
            fontSize={'14pt'}
            fontWeight={'550'}
            color={'#91ACCF'}
          >
            University of California, Berkeley
          </Typography>
          <Box sx={{ width: '100%', maxWidth: 400, bgcolor: '#464655' }}>
            <Box sx={{ mt: 2, mb: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h6">
                    Relevant Coursework
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="#B7B6C1" variant="body2">
                - Discrete Mathematics and Probability Theory
              </Typography>
              <Typography color="#B7B6C1" variant="body2">
                - The Structure and Interpretation of Computer Programs
              </Typography>
              <Typography gutterBottom color="#B7B6C1" variant="body2">
                - Designing Information Devices and Systems
              </Typography>
            </Box>

            <Divider variant="middle" color="#FFF" />

            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h6">
                    Activities & Societies
                  </Typography>
                  <Typography gutterBottom color="#B7B6C1" variant="body2">
                    - Girls Who Code
                  </Typography>
                  <Typography gutterBottom color="#B7B6C1" variant="body2">
                    - Association of Women in EE & CS
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Slide>
    </div>
  );
};

export default Education;
